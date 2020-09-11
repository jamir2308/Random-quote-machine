import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export const Footer = () => {
  return (
    <div id="footer">
      <div>
        <a
          href="https://www.linkedin.com/in/jamir-patiño-carrascal-"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/jamir2308"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </a>
      </div>
      <div>
        <p>Creado por: Jamir</p>
      </div>
    </div>
  );
};
