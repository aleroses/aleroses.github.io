import app from "../styles/App.module.css";
// import "../styles/reactIcons.css";

export const LabLink = ({
  url,
  name,
  icon: Icon,
  baseColor,
  hoverColor,
  shadowColor,
}) => {
  return (
    <a
      href={url}
      aria-label={name ?? "Social network link"}
      target="_blank"
      rel="noopener noreferrer"
      // className={`${name ? app.link : ""}`}
      style={{
        "--icon-base": baseColor,
        "--icon-hover": hoverColor,
        "--icon-shadow": shadowColor,
      }}
      className="group transition-all duration-300"
    >
      {name ? (
        name
      ) : (
        <Icon
          className="text-(--icon-base) transition-all duration-300 group-hover:scale-110 group-hover:text-(--icon-hover) group-hover:drop-shadow-[0_0_12px_var(--icon-shadow)]"
          size={22}
        />
      )}
    </a>
  );
};

// 📌 alt no es válido en <a> → se usa aria-label
