import React from "react";
import "./Workspace.css";
import ProfilePage from "../pages/profile/Studentprofile";

interface WorkspaceProps {
  selectedPage: string;
}

const Workspace: React.FC<WorkspaceProps> = ({ selectedPage }) => {
  let content;

  switch (selectedPage) {
    case "profile":
      content = <ProfilePage />;
      break;
    case "assignment":
      content = <h1>Assignments Page</h1>;
      break;
    case "results":
      content = <h1>Results Page</h1>;
      break;
    case "fees":
      content = <h1>Fees Page</h1>;
      break;
    default:
      content = <h1>Welcome to the Workspace</h1>;
  }

  return <main className="workspace">{content}</main>;
};

export default Workspace;
