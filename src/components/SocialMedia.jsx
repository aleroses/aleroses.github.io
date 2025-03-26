import {
  TbBrandX,
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandYoutube,
  TbBrandInstagram,
  TbLink,
} from "react-icons/tb";

import app from "../styles/App.module.css";
import "../styles/reactIcons.css";
import { LabLink } from "./LabLink";

export const SocialMedia = () => {
  return (
    <article className={app.socialMediaContainer}>
      <div className="socialMediaDiv">
        <LabLink
          to="https://github.com/aleroses"
          icon={TbBrandGithub}
        />
      </div>
      <div className="socialMediaDiv">
        <LabLink
          to="https://www.linkedin.com/in/ale-roses/"
          icon={TbBrandLinkedin}
        />
      </div>
      <div className="socialMediaDiv">
        <LabLink
          to="https://x.com/alerxses"
          icon={TbBrandX}
        />
      </div>
      <div className="socialMediaDiv">
        <LabLink
          to="https://www.youtube.com/@alerxses"
          icon={TbBrandYoutube}
        />
      </div>
      <div className="socialMediaDiv">
        <LabLink
          to="https://www.instagram.com/alerxses"
          icon={TbBrandInstagram}
        />
      </div>
      <div className="socialMediaDiv">
        <LabLink
          to="mailto:ale.vrs@outlook.com?subject=Contact%20from%20portfolio&body=Hello,%20I%20would%20like%20to%20contact%20you."
          icon={TbLink}
        />
      </div>
    </article>
  );
};
