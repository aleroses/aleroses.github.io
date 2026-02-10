import { TbExternalLink } from "react-icons/tb";

export const LabLink = ({
  url,
  name,
  icon: Icon,
  baseColor,
  hoverColor,
  shadowColor,
  className = "",
}) => {
  return (
    <a
      href={url}
      aria-label={name ?? "Social network link"}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        "--icon-base": baseColor,
        "--icon-hover": hoverColor,
        "--icon-shadow": shadowColor,
      }}
      className={`group inline-flex items-center gap-1 transition-all duration-300 ${className}`}
    >
      {name ? (
        <span className="flex items-center gap-1 font-medium">
          {name}
          <TbExternalLink
            className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:text-[#00ffd5]"
            size={14}
          />
        </span>
      ) : (
        <Icon
          className="text-(--icon-base) transition-all duration-300 group-hover:scale-110 group-hover:text-(--icon-hover) group-hover:drop-shadow-[0_0_12px_var(--icon-shadow)] md:h-6.5 md:w-6.5"
          size={22}
        />
      )}
    </a>
  );
};

// 📌 alt no es válido en <a> → se usa aria-label
