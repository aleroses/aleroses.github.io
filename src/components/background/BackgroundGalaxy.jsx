export const BackgroundGalaxy = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050810]">
      <div className="stars stars-small"></div>
      <div className="stars stars-medium"></div>
      <div className="stars stars-big"></div>
      <div className="nebula"></div>

      {/* Contenido */}
      <main className="relative z-10 grid min-h-screen place-content-center p-4 text-center text-gray-50">
        {children}
      </main>
    </div>
  );
};
