import app from "../styles/App.module.css";
import graduationPhoto from "../assets/photos/graduation-degree.png";

export const ProfilePicture = () => {
  return (
    <section className={app.profileContainer}>
      <img
        className={app.profileImage}
        src={graduationPhoto}
        alt="Profile picture"
      />
    </section>
  );
};
