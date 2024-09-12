import React from "react";
import "./Sidebar.css";

interface SidebarProps {
  setSelectedPage: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setSelectedPage }) => {
  return (
    <nav className="sidebar">
      <ul>
        <li onClick={() => setSelectedPage("profile")}>Profile Details</li>
        <li onClick={() => setSelectedPage("interview")}>Interview Details</li>
        <li onClick={() => setSelectedPage("results")}>Mentoring</li>
        <li onClick={() => setSelectedPage("fees")}>Attendence</li>
        <li onClick={() => setSelectedPage("assignment")}>Exam</li>
        <li onClick={() => setSelectedPage("profile")}>Result Analysis</li>
        <li onClick={() => setSelectedPage("results")}>Assignment</li>
        <li onClick={() => setSelectedPage("fees")}>Library</li>
        <li onClick={() => setSelectedPage("assignment")}>Learning</li>
        <li onClick={() => setSelectedPage("profile")}>Institute event</li>
        <li onClick={() => setSelectedPage("results")}>Feedback</li>
        <li onClick={() => setSelectedPage("fees")}>Fees</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
