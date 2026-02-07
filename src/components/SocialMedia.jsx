// import app from "../styles/App.module.css";
import "../styles/reactIcons.css";
import { socialLinks } from "../data/socialLinks";
import { LabLink } from "./LabLink";

export const SocialMedia = () => {
  return (
    <article className="mt-4 flex justify-around text-[#00ffd5]">
      {socialLinks.map((item) => (
        <LabLink key={item.id} {...item} />
      ))}
    </article>
  );
};

// {...item}
