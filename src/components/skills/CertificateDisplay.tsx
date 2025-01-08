import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface Certificate {
  name: string;
  institution: string;
  date: string;
  image: string;
}

interface CertificateDisplayProps {
  certificate: Certificate;
}

export const CertificateDisplay = ({ certificate }: CertificateDisplayProps) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-start space-x-3 hover:bg-accent/5 p-2 rounded-lg transition-colors cursor-zoom-in">
          <img 
            src={certificate.image} 
            alt={certificate.name}
            className="w-12 h-12 object-contain"
          />
          <div>
            <h4 className="text-sm font-medium">{certificate.name}</h4>
            <p className="text-xs text-gray-500">{certificate.institution}</p>
            <p className="text-xs text-gray-400">{certificate.date}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <div className="p-4">
          <img
            src={certificate.image}
            alt={certificate.name}
            className="w-full h-auto object-contain"
          />
          <h3 className="text-lg font-semibold mt-4">{certificate.name}</h3>
          <p className="text-sm text-gray-500">{certificate.institution}</p>
          <p className="text-sm text-gray-400">{certificate.date}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};