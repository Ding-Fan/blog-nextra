import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const Caption = ({ className = "", children }: Props) => {
  return (
    <div className={"mt-2 text-xs text-gray-400 text-center" + className}>
      {children}
    </div>
  );
};

export default Caption;
