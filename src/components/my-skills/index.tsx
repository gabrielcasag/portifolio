import { InfiniteScroll } from "../infinite-scroll";

import "./styles.css";

const skillsArray = [
  {
    label: "JavaScript",
    icon: "",
    color: "#998809",
  },
  {
    label: "HTML",
    icon: "",
    color: "#E34F26",
  },
  {
    label: "CSS",
    icon: "",
    color: "#1572B6",
  },
  {
    label: "Front-end",
    icon: "",
    color: "#3D03A7",
  },
  {
    label: "Full stack",
    icon: "",
    color: "#DB0A40",
  },
  {
    label: "ReactJS",
    icon: "",
    color: "#36a8c7",
  },
  {
    label: "WebDev",
    icon: "",
    color: "#059377",
  },
  {
    label: "UX/UI",
    icon: "",
    color: "#003366",
  },
  {
    label: "Animations",
    icon: "",
    color: "#478509",
  },
];

export function MySkills() {
  return (
    <section>
      <h3>Skills</h3>

      <InfiniteScroll data={skillsArray} />
    </section>
  );
}
