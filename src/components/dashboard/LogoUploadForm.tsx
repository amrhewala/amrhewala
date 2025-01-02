import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const LogoUploadForm = () => {
  const { toast } = useToast();
  const [newLogo, setNewLogo] = useState({ name: "", type: "education" });
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      toast({
        title: "Error",
        description: "Please select a file to upload",
        variant: "destructive",
      });
      return;
    }

    try {
      setUploading(true);
      const fileExt = file.name.split('.').pop();
      const fileName = `${crypto.randomUUID()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('uploads')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('uploads')
        .getPublicUrl(filePath);

      toast({
        title: "Success",
        description: "Logo has been uploaded successfully.",
      });

      // Reset form
      setNewLogo({ name: "", type: "education" });
      setFile(null);
      
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload logo",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Logo</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="Institution Name"
          value={newLogo.name}
          onChange={(e) => setNewLogo({ ...newLogo, name: e.target.value })}
        />
        <Input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="cursor-pointer"
        />
        <Select
          value={newLogo.type}
          onValueChange={(value) => setNewLogo({ ...newLogo, type: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="education">Education</SelectItem>
            <SelectItem value="workplace">Workplace</SelectItem>
          </SelectContent>
        </Select>
        <Button 
          onClick={handleSubmit} 
          disabled={uploading}
          className="w-full"
        >
          {uploading ? "Uploading..." : "Add Logo"}
        </Button>
      </CardContent>
    </Card>
  );
};