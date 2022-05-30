import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { colorPalette } from "./colors-styling";

const Button = ({ bgColor, color, icon, children }) => {
  

  const styles = {
    width: "120px",
    height: "46px",
    cursor: "pointer",
    fontSize: "20px",
    margin: "4px",
    backgroundColor: `${colorPalette[bgColor]}`,
    color: `${colorPalette[color]}`,
  };

  return (
    <button style={styles}>
      <FontAwesomeIcon icon={icon === "user" ? faUser : ""} />
      {children}
    </button>
  );
};

Button.defaultProps = {
  bgColor: "belize",
  color: "clouds",
};

export default Button;
