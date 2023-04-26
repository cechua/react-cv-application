import React from "react";
import { BsGithub } from "react-icons/bs";
const Footer = () => {
  const redirecToGitHub = () => {
    alert("redirecttemp");
  };
  return (
    <div className="footer">
      <span>
        Copyright © 2023 cechua{" "}
        <BsGithub className="git-icon" onClick={redirecToGitHub} />{" "}
      </span>
    </div>
  );
};

export default Footer;
