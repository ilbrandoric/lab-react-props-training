
// Components renders UI

// Import package name "React" from node_modules
// this is pointing to import React from "./node_modules/react/index.js";
// React is imported from node_modules/react, resolved by the bundler, not by a file path you write


import React from "react";

function IdCard({ firstName, lastName, gender, height, birth, picture }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <img src={picture} alt="profile" />
      <p><strong>First name:</strong> {firstName}</p>
      <p><strong>Last name:</strong> {lastName}</p>
      <p><strong>Gender:</strong> {gender}</p>
      <p><strong>Height:</strong> {height} cm</p>
      <p><strong>Birth:</strong> {birth.toDateString()}</p>
    </div>
  );
}

export default IdCard;
