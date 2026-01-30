export const BackgroundGalaxy = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-[#050810] overflow-hidden">
      <div className="stars stars-small"></div>
      <div className="stars stars-medium"></div>
      <div className="stars stars-big"></div>
      <div className="nebula"></div>

      {/* Contenido */}
      <main className="relative z-10 min-h-screen grid place-content-center text-center text-white">
        {children}
      </main>
    </div>
  );
};
