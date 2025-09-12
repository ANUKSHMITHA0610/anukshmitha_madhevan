import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Loader2, Edit3, Wand2 } from "lucide-react";
import { RunwareService } from "@/utils/runwareService";
import { toast } from "sonner";

interface ImageEditorProps {
  currentImageUrl: string;
  onImageUpdated: (newImageUrl: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const ImageEditor = ({ currentImageUrl, onImageUpdated, isOpen, onClose }: ImageEditorProps) => {
  const [apiKey, setApiKey] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleEditImage = async () => {
    if (!apiKey.trim()) {
      toast.error('Please enter your Runware API key');
      return;
    }

    setIsProcessing(true);
    try {
      const runwareService = new RunwareService(apiKey);
      
      const result = await runwareService.editImage({
        imageURL: currentImageUrl,
        positivePrompt: "professional headshot photo of a person wearing a formal business suit, crisp white dress shirt, elegant tie, professional corporate attire, high quality portrait photography, studio lighting, formal business appearance",
        strength: 0.75,
        CFGScale: 8,
      });

      setPreviewUrl(result.imageURL);
      toast.success('Image edited successfully!');
    } catch (error) {
      console.error('Failed to edit image:', error);
      toast.error('Failed to edit image. Please check your API key and try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleApplyChanges = () => {
    if (previewUrl) {
      onImageUpdated(previewUrl);
      toast.success('Profile photo updated!');
      onClose();
    }
  };

  const handleClose = () => {
    setPreviewUrl(null);
    setApiKey('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Edit3 className="h-5 w-5" />
            Edit Profile Photo
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* API Key Input */}
          <div className="space-y-2">
            <Label htmlFor="apiKey">Runware API Key</Label>
            <Input
              id="apiKey"
              type="password"
              placeholder="Enter your Runware API key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <p className="text-sm text-muted-foreground">
              Get your API key from{' '}
              <a href="https://runware.ai/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                runware.ai
              </a>
            </p>
          </div>

          {/* Current and Preview Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Current Photo</Label>
              <div className="aspect-square rounded-lg overflow-hidden border">
                <img 
                  src={currentImageUrl} 
                  alt="Current profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Edited Preview</Label>
              <div className="aspect-square rounded-lg overflow-hidden border bg-muted flex items-center justify-center">
                {previewUrl ? (
                  <img 
                    src={previewUrl} 
                    alt="Edited preview" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center text-muted-foreground">
                    <Wand2 className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">Preview will appear here</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 justify-end">
            <Button variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            
            {!previewUrl ? (
              <Button onClick={handleEditImage} disabled={isProcessing || !apiKey.trim()}>
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Editing...
                  </>
                ) : (
                  <>
                    <Edit3 className="mr-2 h-4 w-4" />
                    Edit to Formal Suit
                  </>
                )}
              </Button>
            ) : (
              <Button onClick={handleApplyChanges}>
                Apply Changes
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageEditor;