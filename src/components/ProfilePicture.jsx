import app from "../styles/App.module.css";

export const ProfilePicture = () => {
  return (
    <section className={app.profileContainer}>
      <img
        className={app.profileImage}
        src="/src/assets/photos/graduation-degree.jpg"
        alt="Profile picture"
      />
    </section>
  );
};
