import React from "react";
import { colorPalette } from "./colors-styling";

const Input = ({ bgColor, color, borderSize, borderRadius, borderColor }) => {
  const styles = {
    fontSize: 22,
    margin: 5,
    backgroundColor: colorPalette[bgColor],
    color: colorPalette[color],
    border: `${borderSize} solid ${borderColor}`,
    borderRadius: borderRadius,
  };

  return <input style={styles} type="text" />;
};

export default Input;
