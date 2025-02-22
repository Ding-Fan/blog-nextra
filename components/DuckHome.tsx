import React from "react";
import DuckIcon from "./DuckIcon";
import Button from "./Button";

type Props = {};

const DuckHome = (props: Props) => {
  const [blackDuckCount, setBlackDuckCount] = React.useState(0);
  const [redDuckCount, setRedDuckCount] = React.useState(0);
  const [blueDuckCount, setBlueDuckCount] = React.useState(0);

  const newBlackDuck = () => {
    setBlackDuckCount(blackDuckCount + 1);
  };

  const newRedDuck = () => {
    setRedDuckCount(redDuckCount + 1);
  };

  const newBlueDuck = () => {
    setBlueDuckCount(blueDuckCount + 1);
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="">
        <Button onClick={newBlackDuck}>new Duck("black");</Button>
        <div className="duck-area">
          {[...Array(blackDuckCount)].map((_, i) => (
            <div className="flex items-center">
              <div className="mr-2 text-gray-400">myBlackDuck{i}</div>
              <DuckIcon key={i} className="w-8 " />
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <Button onClick={newRedDuck}>new Duck("red");</Button>
        <div className="duck-area">
          {[...Array(redDuckCount)].map((_, i) => (
            <div className="flex items-center">
              <div className="mr-2 text-gray-400">myRedDuck{i}</div>
              <DuckIcon key={i} className="w-8 text-red-600" />
            </div>
          ))}
        </div>
      </div>
      <div className="">
        {/* blue duck */}
        <Button onClick={newBlueDuck}>new Duck("blue");</Button>
        <div className="duck-area">
          {[...Array(blueDuckCount)].map((_, i) => (
            <div className="flex items-center">
              <div className="mr-2 text-gray-400">myBlueDuck{i}</div>
              <DuckIcon key={i} className="w-8 text-blue-600" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DuckHome;
