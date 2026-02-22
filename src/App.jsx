import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router";

import { Header } from "./portfolio/components/Header";
import { ProfileHeader } from "./portfolio/components/ProfileHeader";
import { SocialMedia } from "./portfolio/components/SocialMedia";

import { AboutPage } from "./portfolio/pages/AboutPage";
import { SkillsPage } from "./portfolio/pages/SkillsPage";
import { LabsPage } from "./portfolio/pages/LabsPage";

import { Navbar } from "./portfolio/components/Navbar";
import { LanguageContext } from "./portfolio/context/LanguageContext";
import { LanguageButton } from "./portfolio/components/LanguageButton";
import { BackgroundGalaxy } from "./portfolio/components/background/BackgroundGalaxy";

function App() {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguage = () => {
    language === "en" ? setLanguage("es") : setLanguage("en");
  };

  return (
    <BackgroundGalaxy>
      <div className="flex h-full min-h-screen flex-col p-4 md:flex-row md:gap-20 md:p-9 md:py-12 lg:gap-20">
        <aside className="flex shrink-0 flex-col gap-6 md:flex md:h-full md:flex-col md:justify-between">
          <div className="">
            <Header />
            <ProfileHeader />
          </div>
          <SocialMedia />
          <Navbar />
        </aside>

        <LanguageButton handleClick={handleLanguage} language={language} />

        <section className="relative min-h-0 flex-1 overflow-y-auto scroll-smooth md:pl-4">
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="skills" element={<SkillsPage />} />
            <Route path="labs" element={<LabsPage />} />

            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </section>
      </div>
    </BackgroundGalaxy>
  );
}

export default App;
