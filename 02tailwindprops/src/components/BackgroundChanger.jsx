import React, { useState } from "react";

const BackgroundChanger = () => {
  const [color, setColor] = useState("red");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default BackgroundChanger;
