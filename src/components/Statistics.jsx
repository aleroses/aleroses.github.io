import { VscMortarBoard, VscRocket } from "react-icons/vsc";

import app from "../styles/App.module.css";
import "../styles/reactIcons.css";

export const Statistics = ({ completed, category }) => {
  const icon = {
    courses: (
      <VscMortarBoard className="statisticsIconsCourses" />
    ),
    projects: (
      <VscRocket className="statisticsIconsProjects" />
    ),
  };

  const icons = ["Courses", "Cursos"].includes(category)
    ? icon.courses
    : icon.projects;

  return (
    <section className={app.statistics}>
      <div className={app.statisticsDiv}>
        <span>{icons}</span>
        <span className={app.statisticsCompleted}>
          {completed}
        </span>
      </div>
      <p className={app.statisticsCategory}>{category}</p>
    </section>
  );
};

// Courses / Projects
// al pasar el cursos mostrar en decimales
