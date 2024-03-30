import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar className="avatar" source="./seaside2.jpg" alt="avatar-temelli" />
      <Data className="data" />
    </div>
  );
}

function Avatar({ className, source, alt }) {
  return <img className={className} src={source} alt={alt} />;
}

function Data({ className }) {
  return (
    <div className={className}>
      <Name textContent="Volkan Temelli" />
      <PersonalInfo
        textContent="Front-end web developer. MA Media Culture. Outside of coding, catch me
        zooming down bike paths, wandering off, or getting lost in the rabbit
        hole of Wikipedia's wonders."
      />
      <SkillList className="skill-list" />
    </div>
  );
}

function Name({ textContent }) {
  return <h1>{textContent}</h1>;
}

function PersonalInfo({ textContent }) {
  return <p>{textContent}</p>;
}

function SkillList({ className }) {
  return (
    <ul className={className}>
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </ul>
  );
}

function Skill({ skill, level, color }) {
  return (
    <li className="skill" key={skill} style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "advanced" && "💪"}
        {level === "intermediate" && "👍"}
        {level === "beginner" && "👶"}
      </span>
    </li>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
