interface HeaderProps {
  name: string;
  title: string;
}

export const Header = ({ name, title }: HeaderProps) => {
  return (
    <>
      <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
        {name}
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in delay-100">{title}</p>
    </>
  );
};