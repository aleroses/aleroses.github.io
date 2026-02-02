export const BackgroundGalaxy = ({ children }) => {
  return (
    <div className="relative flex h-dvh w-full overflow-hidden bg-[#050810]">
      <div className="stars stars-small"></div>
      <div className="stars stars-medium"></div>
      <div className="stars stars-big"></div>
      <div className="nebula"></div>

      {/* Contenido */}
      <main className="relative grid min-h-screen place-content-start p-4 text-center text-gray-50">
        {children}
      </main>
    </div>
  );
};

// relative flex h-full w-full max-w-sm flex-col
