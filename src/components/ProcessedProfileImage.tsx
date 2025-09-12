import { useState, useEffect } from 'react';
import { processProfileImage } from '@/utils/imageUtils';
import profilePhotoOriginal from "@/assets/profile-photo-new.png";
import ImageEditor from "./ImageEditor";
import { Button } from "@/components/ui/button";
import { Edit3 } from "lucide-react";

interface ProcessedProfileImageProps {
  alt: string;
  className?: string;
}

const ProcessedProfileImage = ({ alt, className }: ProcessedProfileImageProps) => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string>(profilePhotoOriginal);
  const [isProcessing, setIsProcessing] = useState(true);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const processImage = async () => {
      try {
        setIsProcessing(true);
        const processedUrl = await processProfileImage(profilePhotoOriginal);
        setProcessedImageUrl(processedUrl);
      } catch (error) {
        console.error('Failed to process image:', error);
        // Keep original image on error
        setProcessedImageUrl(profilePhotoOriginal);
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();
  }, []);

  return (
    <>
      <div 
        className="relative cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={processedImageUrl}
          alt={alt}
          className={className}
        />
        
        {/* Processing Overlay */}
        {isProcessing && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted/80 rounded-full">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        )}
        
        {/* Edit Overlay */}
        {isHovered && !isProcessing && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full transition-opacity">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setIsEditorOpen(true)}
              className="bg-white/90 text-black hover:bg-white"
            >
              <Edit3 className="h-4 w-4 mr-2" />
              Edit Photo
            </Button>
          </div>
        )}
      </div>

      <ImageEditor
        currentImageUrl={processedImageUrl}
        onImageUpdated={setProcessedImageUrl}
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
      />
    </>
  );
};

export default ProcessedProfileImage;
