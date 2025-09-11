import { useState, useEffect } from 'react';
import { processProfileImage } from '@/utils/imageUtils';
import profilePhotoOriginal from "@/assets/profile-photo-new.png";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import ImageEditor from "./ImageEditor";

interface ProcessedProfileImageProps {
  alt: string;
  className?: string;
}

const ProcessedProfileImage = ({ alt, className }: ProcessedProfileImageProps) => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string>(profilePhotoOriginal);
  const [isProcessing, setIsProcessing] = useState(true);
  const [showEditor, setShowEditor] = useState(false);

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

  const handleImageUpdate = (newImageSrc: string) => {
    setProcessedImageUrl(newImageSrc);
    setShowEditor(false);
  };

  if (showEditor) {
    return (
      <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="relative w-full max-w-4xl">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowEditor(false)}
            className="absolute top-4 right-4 z-10"
          >
            Close
          </Button>
          <ImageEditor
            originalImageSrc={processedImageUrl}
            onImageUpdated={handleImageUpdate}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <img 
        src={processedImageUrl}
        alt={alt}
        className={className}
      />
      {isProcessing && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/80 rounded-full">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      )}
      
      {/* Edit button - appears on hover */}
      <div className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity rounded-full">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setShowEditor(true)}
          className="shadow-lg"
        >
          <Edit className="h-4 w-4 mr-2" />
          Edit Photo
        </Button>
      </div>
    </div>
  );
};

export default ProcessedProfileImage;
