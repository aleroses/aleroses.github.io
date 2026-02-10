import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router";

import { Header } from "./components/Header";
import { ProfileHeader } from "./components/ProfileHeader";
import { SocialMedia } from "./components/SocialMedia";

import { AboutPage } from "./pages/AboutPage";
import { SkillsPage } from "./pages/SkillsPage";
import { LabsPage } from "./pages/LabsPage";

import { Navbar } from "./components/Navbar";
import { LanguageContext } from "./context/LanguageContext";
import { LanguageButton } from "./components/LanguageButton";
import { BackgroundGalaxy } from "./components/background/BackgroundGalaxy";

function App() {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguage = () => {
    language === "en" ? setLanguage("es") : setLanguage("en");
  };

  return (
    <BackgroundGalaxy>
      <div className="flex min-h-screen flex-col md:flex-row md:gap-8 lg:gap-36">
        <aside className="shrink-0 md:flex md:w-1/2 md:flex-col md:justify-center md:gap-14 lg:w-1/3">
          <div className="">
            <Header />
            <ProfileHeader />
          </div>
          <SocialMedia />
          <Navbar />
        </aside>

        <LanguageButton handleClick={handleLanguage} language={language} />

        <section className="relative overflow-hidden">
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
