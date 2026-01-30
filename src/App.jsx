import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router";

import { Header } from "./components/Header";
import { ProfileHeader } from "./components/ProfileHeader";
import { SocialMedia } from "./components/SocialMedia";

import { AboutPage } from "./pages/AboutPage";
import { SkillsPage } from "./pages/SkillsPage";
import { LabsPage } from "./pages/LabsPage";

import { Navbar } from "./components/Navbar";
import { DesignCredit } from "./components/DesignCredit";
import { LanguageContext } from "./context/LanguageContext";
import { LanguageButton } from "./components/LanguageButton";
import { DarkMode } from "./components/DarkMode";
import { BackgroundGalaxy } from "./components/background/BackgroundGalaxy";

function App() {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguage = () => {
    language === "en" ? setLanguage("es") : setLanguage("en");
  };

  return (
    <BackgroundGalaxy>
      <Header />
      <ProfileHeader />
      <SocialMedia />

      <Navbar />

      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="labs" element={<LabsPage />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <LanguageButton handleClick={handleLanguage} language={language} />
      <DarkMode />
    </BackgroundGalaxy>
  );
}

export default App;
