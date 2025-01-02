import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const CertificateUploadForm = () => {
  const { toast } = useToast();
  const [newCertificate, setNewCertificate] = useState({ name: "", institution: "" });
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
        description: "Certificate has been uploaded successfully.",
      });

      // Reset form
      setNewCertificate({ name: "", institution: "" });
      setFile(null);
      
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to upload certificate",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Certificate</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="Certificate Name"
          value={newCertificate.name}
          onChange={(e) => setNewCertificate({ ...newCertificate, name: e.target.value })}
        />
        <Input
          placeholder="Institution"
          value={newCertificate.institution}
          onChange={(e) => setNewCertificate({ ...newCertificate, institution: e.target.value })}
        />
        <Input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="cursor-pointer"
        />
        <Button 
          onClick={handleSubmit} 
          disabled={uploading}
          className="w-full"
        >
          {uploading ? "Uploading..." : "Add Certificate"}
        </Button>
      </CardContent>
    </Card>
  );
};