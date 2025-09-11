import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Download, Upload } from "lucide-react";
import { toast } from "sonner";
import { RunwareService } from "@/utils/runwareService";

interface ImageEditorProps {
  originalImageSrc: string;
  onImageUpdated: (newImageSrc: string) => void;
}

const ImageEditor = ({ originalImageSrc, onImageUpdated }: ImageEditorProps) => {
  const [apiKey, setApiKey] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [editedImageUrl, setEditedImageUrl] = useState<string | null>(null);

  const handleImageEdit = async () => {
    if (!apiKey.trim()) {
      toast.error('Please enter your Runware API key');
      return;
    }

    setIsProcessing(true);
    try {
      const runware = new RunwareService(apiKey);
      
      // Convert image to base64 for the API
      const response = await fetch(originalImageSrc);
      const blob = await response.blob();
      const base64 = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(blob);
      });

      // Use image-to-image editing to change dress to suit
      const result = await runware.generateImage({
        positivePrompt: "professional business suit, formal attire, corporate style, high quality, detailed",
        model: "runware:100@1",
        numberResults: 1,
        outputFormat: "WEBP",
        CFGScale: 7,
        strength: 0.6, // Lower strength to preserve features better
        // Add the original image as base
        inputImage: base64,
      });

      if (result.imageURL) {
        setEditedImageUrl(result.imageURL);
        onImageUpdated(result.imageURL);
        toast.success('Image edited successfully!');
      }
    } catch (error) {
      console.error('Error editing image:', error);
      toast.error('Failed to edit image. Please check your API key and try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadImage = async () => {
    if (!editedImageUrl) return;
    
    try {
      const response = await fetch(editedImageUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = 'edited-profile-photo.webp';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      toast.success('Image downloaded successfully!');
    } catch (error) {
      toast.error('Failed to download image');
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="h-5 w-5" />
          Edit Profile Photo - Change to Suit
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">
              Runware API Key
            </label>
            <Input
              type="password"
              placeholder="Enter your Runware API key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Get your API key from{' '}
              <a 
                href="https://runware.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                runware.ai
              </a>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Original Photo</h3>
              <div className="aspect-square rounded-lg overflow-hidden border">
                <img 
                  src={originalImageSrc} 
                  alt="Original"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {editedImageUrl && (
              <div>
                <h3 className="text-sm font-medium mb-2">Edited Photo</h3>
                <div className="aspect-square rounded-lg overflow-hidden border">
                  <img 
                    src={editedImageUrl} 
                    alt="Edited"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <Button 
              onClick={handleImageEdit}
              disabled={isProcessing || !apiKey.trim()}
              className="flex-1"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Editing Image...
                </>
              ) : (
                'Change Dress to Suit'
              )}
            </Button>
            
            {editedImageUrl && (
              <Button 
                variant="outline" 
                onClick={downloadImage}
                className="px-4"
              >
                <Download className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageEditor;