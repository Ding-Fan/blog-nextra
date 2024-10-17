import React from "react";
import StepCard, { IStep } from "./StepCard";

type Props = {
  steps: IStep[];
  cardStyle?: string;
  titleStyle?: string;
};

const StepCards = ({ steps, cardStyle, titleStyle }: Props) => {
  return (
    <>
      {steps.map((step, index) => (
        <StepCard
          titleStyle={titleStyle}
          cardStyle={cardStyle}
          key={index}
          step={step}
        />
      ))}
    </>
  );
};

export default StepCards;
