import React from "react";
import { Trans } from "react-i18next";
import { IProcessStep } from "../libs/interfaces";
import IndexProcessCardLeft from "./IndexProcessCardLeft";
import IndexProcessCardRight from "./IndexProcessCardRight";

function IndexProcess({
  steps,
  title,
  subtitle,
}: {
  steps: IProcessStep[];
  title: string;
  subtitle: string;
}) {
  return (
    <div className="container mt-16 md:mt-24">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h6 className="mb-2 text-base font-medium uppercase text-primary-600">
          <Trans>SECTION.process</Trans>
        </h6>
        <h3 className="mb-4 text-xl font-medium dark:text-white md:text-2xl">
          {title}
        </h3>

        <p className="mx-auto max-w-xl text-slate-400 dark:text-slate-300">
          {subtitle}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1">
        <div className="timeline relative">
          {steps &&
            steps.map((step: IProcessStep) => {
              if (step.position === "left") {
                return <IndexProcessCardLeft step={step} key={step.name} />;
              } else
                return <IndexProcessCardRight step={step} key={step.name} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default IndexProcess;
