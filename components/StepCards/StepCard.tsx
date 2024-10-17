import { ct } from '@org/shared-utils';
import React, { ReactNode } from 'react';
// import { ct } from "../../../utils/utils";

export interface IStep {
  id?: string | number;
  title: ReactNode;
  content: ReactNode;
}

type Props = {
  step: IStep;
  titleStyle?: string;
  cardStyle?: string;
};

const StepCard = ({ step, cardStyle, titleStyle }: Props) => {
  return (
    <div key={step.id}>
      <div className={ct('text-2xl py-6', titleStyle)}>{step.title}</div>
      <div className={ct('p-2 rounded-md', cardStyle)}>
        <div
          // className={css({
          //   color: "black",
          //   fontWeight: "thin",
          //   letterSpacing: "widest",
          // })}
          className=""
        >
          {step.content}
        </div>
      </div>
    </div>
  );
};

export default StepCard;
