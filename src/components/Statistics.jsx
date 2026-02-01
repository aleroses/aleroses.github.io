import { VscMortarBoard, VscRocket } from "react-icons/vsc";

import app from "../styles/App.module.css";
import "../styles/reactIcons.css";

export const Statistics = ({ completed, category }) => {
  const icon = {
    courses: <VscMortarBoard className="statisticsIconsCourses" />,
    projects: <VscRocket className="statisticsIconsProjects" />,
  };

  const icons = ["Courses", "Cursos"].includes(category)
    ? icon.courses
    : icon.projects;

  return (
    <section className="rounded-[.875rem] border border-white/20 bg-[#0a0f1a99] px-3 py-2 backdrop-blur-md">
      <div className="mb-0.5 flex items-end gap-2">
        <span className="text-[#00ffd5]">{icons}</span>
        <span className={app.statisticsCompleted}>{completed}</span>
      </div>
      <p className={app.statisticsCategory}>{category}</p>
    </section>
  );
};

// Courses / Projects
// al pasar el cursos mostrar en decimales
