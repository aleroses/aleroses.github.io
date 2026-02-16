// import app from "../styles/App.module.css";
// import "../styles/reactIcons.css";
import { socialLinks } from "../data/socialLinks";
import { LabLink } from "./LabLink";

export const SocialMedia = () => {
  return (
    <article className="order-2 mt-4 flex justify-center gap-8 text-[#00ffd5] md:order-3">
      {socialLinks.map((item) => (
        <LabLink key={item.id} {...item} />
      ))}
    </article>
  );
};

// {...item}
