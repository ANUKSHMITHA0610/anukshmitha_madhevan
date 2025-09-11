import { useState, useEffect } from 'react';
import { processProfileImage } from '@/utils/imageUtils';
import profilePhotoOriginal from "@/assets/profile-photo-new.png";

interface ProcessedProfileImageProps {
  alt: string;
  className?: string;
}

const ProcessedProfileImage = ({ alt, className }: ProcessedProfileImageProps) => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string>(profilePhotoOriginal);
  const [isProcessing, setIsProcessing] = useState(true);

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
    <div className="relative">
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
    </div>
  );
};

export default ProcessedProfileImage;
