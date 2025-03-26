import app from "../styles/App.module.css";
import "../styles/reactIcons.css";

export const LabLink = ({ to, name, icon: Icon }) => {
  return (
    <a
      className={name ? app.link : ""}
      href={to}
      alt={name ? name : `Social network icon`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name ? (
        name
      ) : (
        <Icon
          className="socialMediaIcons"
          // size={24}
          // color="blue"
        />
      )}
    </a>
  );
};
