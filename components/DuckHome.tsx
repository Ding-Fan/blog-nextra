import { Button } from "nextra/components";
import React from "react";

type Props = {};

const DuckHome = (props: Props) => {
  const newDuck = () => {
    const duckArea = document.querySelector(".duck-area");
    const index = duckArea.children.length + 1;
    const duck = document.createElement("div");
    duck.innerText = `myDuck${index} 🦆`;
    duckArea.appendChild(duck);
  };

  return (
    <div className="">
      <Button onClick={newDuck}>new Duck();</Button>
      <div className="duck-area"></div>
    </div>
  );
};

export default DuckHome;
