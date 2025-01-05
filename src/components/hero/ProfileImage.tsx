interface ProfileImageProps {
  src: string;
  alt: string;
}

export const ProfileImage = ({ src, alt }: ProfileImageProps) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
      <div className="relative w-48 h-48 overflow-hidden rounded-full">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-center hover:scale-105 transition-all duration-500 filter hover:brightness-110 animate-fade-in z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};