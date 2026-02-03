
import React from "react";

function Greetings({ lang, children }) {
  let greeting;

  switch (lang) {
    case "de":
      greeting = "Hallo";
      break;
    case "fr":
      greeting = "Bonjour";
      break;
    case "es":
      greeting = "Hola";
      break;
    default:
      greeting = "Hello";
  }

  return (
    <p>
      {greeting} {children}
    </p>
  );
}
export default Greetings;
