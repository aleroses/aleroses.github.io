export const BackgroundGalaxy = ({ children }) => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#050810]">
      <div className="stars stars-small"></div>
      <div className="stars stars-medium"></div>
      <div className="stars stars-big"></div>
      <div className="nebula"></div>

      {/* Contenido */}
      <main className="relative h-full text-center text-gray-50 lg:px-20">
        {children}
      </main>
    </div>
  );
};

// relative flex h-full w-full max-w-sm flex-col
