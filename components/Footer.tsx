"use client";
import React, { useState } from "react";

type Props = {};

// nextra footer
// https://github.com/shuding/nextra/blob/main/packages/nextra-theme-docs/src/components/footer.tsx

const Footer = (props: Props) => {
  const [fired, setFired] = useState(false);
  return (
    <div className="flex flex-col md:flex-row justify-center w-full">
      <div className="text-gray-400 p-6">
        {fired ? (
          <div className="">
            Ouch! You{" "}
            <a href="https://www.dictionary.com/e/slang/lil/" target="_blank">
              lil
            </a>{" "}
            pumpkin.
          </div>
        ) : (
          <div className="">
            Do not{" "}
            <span
              className="text-red-300 cursor-crosshair"
              onClick={() => setFired(true)}
            >
              shoot
            </span>{" "}
            this.
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
