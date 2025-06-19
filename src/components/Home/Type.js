import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front-End Developer",
          "Mobile Programming",
          "Database & System Administrator",
          "UI/UX Design",
          "Freelancer",
          "Web Design",
          "Digital Ads"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
