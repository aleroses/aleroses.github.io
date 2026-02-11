import graduationPhoto from "../assets/photos/profile.png";

export const ProfilePicture = () => {
  return (
    <section className="relative flex items-center justify-center">
      <div className="avatar-wrapper group relative flex h-22 w-22 items-center justify-center sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-36 lg:w-36">
        <div className="avatar-ring"></div>
        <img
          src={graduationPhoto}
          alt="Profile picture"
          className="relative z-10 h-[90%] w-[90%] rounded-full object-contain transition-transform duration-300 ease-out group-hover:scale-110"
        />
      </div>
    </section>
  );
};
