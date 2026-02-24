import { Navigate, Route, Routes } from "react-router";
import { AboutPage } from "../pages/AboutPage";
import { SkillsPage } from "../pages/SkillsPage";
import { LabsPage } from "../pages/LabsPage";

export const PortfolioRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="skills" element={<SkillsPage />} />
      <Route path="labs" element={<LabsPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
