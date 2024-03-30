import React, { HTMLAttributes, ReactNode, useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import "./Paragraph.module.css";
import { ct } from "../scripts/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  aied: ReactNode;
  raw: ReactNode;
}

const Paragraph = ({ aied, raw, className }: Props) => {
  const triggerStyle =
    "data-[state=active]:text-zinc-400 dark:data-[state=active]:text-zinc-600 hover:text-zinc-500";

  const [isListVisible, setIsListVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsListVisible(true);
  };

  const handleMouseLeave = () => {
    setIsListVisible(false);
  };

  const handleTouchStart = () => {
    setIsListVisible(true);
  };

  return (
    <Tabs.Root
      className="hover:shadow-zinc-200 dark:hover:shadow-zinc-800 hover:shadow-border px-4 py-1 transition-all rounded-md ease-in-out"
      defaultValue="aied"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
    >
      <Tabs.List
        className={ct(
          "text-sm text-zinc-200 dark:text-zinc-800",
          isListVisible ? "" : "invisible"
        )}
        aria-label="Manage your account"
      >
        <Tabs.Trigger className={ct(triggerStyle, "mr-1")} value="aied">
          AIed
        </Tabs.Trigger>
        <Tabs.Trigger className={triggerStyle} value="raw">
          Raw
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content className="TabsContent" value="aied">
        {aied}
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="raw">
        {raw}
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default Paragraph;
