"use client";

import React from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface Props extends React.HTMLAttributes<HTMLDivElement> { }

// todo:
// use recipe
// "loading-sm"

const Loading = ({ className }: Props) => {
  return (
    <div className={"h-full w-full flex items-center justify-center animate-spin"}>
      <FontAwesomeIcon className={className} icon={faSpinner} />
    </div>
  );
};

export default Loading;
