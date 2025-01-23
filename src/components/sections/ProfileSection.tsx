import { ProfileImage } from "../hero/ProfileImage";

export const ProfileSection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-1">
      <ProfileImage 
        src="/lovable-uploads/126b5734-9f0a-4a0b-9a9f-6a9b3dedd1ca.png"
        alt="Amr Hewala"
      />
      <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
        Amr Hewala
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-4 animate-fade-in delay-100">
        Senior Data Analysis
      </p>
      <p className="text-xl md:text-1xl font-bold mt-4 mb-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
        Bridging Data and Business to Drive Economic Success
      </p>
    </section>
  );
};
