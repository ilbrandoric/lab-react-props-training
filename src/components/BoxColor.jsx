import React from "react";

function BoxColor({ r, g, b }) {
  const color = `rgb(${r}, ${g}, ${b})`;

  // Hex conversion function from: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

  function componentToHex(value) {
    const hex = value.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  const hexColor = `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;

  return (
    <div
      style={{
        backgroundColor: color,
        border: "5px solid black",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <p>{`rgb(${r}, ${g}, ${b})`}</p>
      <p>{hexColor}</p>
    </div>
  );
}

export default BoxColor;
