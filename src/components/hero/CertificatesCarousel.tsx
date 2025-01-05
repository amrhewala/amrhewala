import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { certificates } from "@/data/certificates";

export const CertificatesCarousel = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center">Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((certificate) => (
          <Dialog key={certificate.name}>
            <DialogTrigger asChild>
              <div className="group relative aspect-video bg-white rounded-lg shadow-sm hover:shadow-md transition-all cursor-zoom-in overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Click to zoom</span>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <img
                src={certificate.image}
                alt={certificate.name}
                className="w-full h-full object-contain"
              />
              <div className="p-4 space-y-2">
                <h3 className="font-semibold">{certificate.name}</h3>
                <p className="text-sm text-muted-foreground">
                  Issued by {certificate.institution}
                </p>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};