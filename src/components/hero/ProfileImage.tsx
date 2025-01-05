interface ProfileImageProps {
  src: string;
  alt: string;
}

export const ProfileImage = ({ src, alt }: ProfileImageProps) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
      <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full shadow-2xl">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-all duration-500 filter hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};