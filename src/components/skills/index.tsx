import React, { ReactNode } from "react";
import "./index.css";


export interface SkillProps {
  title: string;
  icon: ReactNode;
  color: string;
  percentage: string;
}

const Skill = ({ title, icon, color, percentage,  }: SkillProps) => {
  return (
    <div id="skill">
      <p>{title}</p>
      {icon}
      <div id="skillBar">
        <div style={{ background: color, width: percentage, height: "100%", borderRadius: "1rem" }}></div>
      </div>
    </div>
  );
};

export default Skill;
