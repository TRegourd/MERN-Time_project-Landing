import React from "react";
import { IProcessStep } from "../libs/interfaces";

function IndexProcessCardLeft({ step }: { step: IProcessStep }) {
  return (
    <div className="timeline-item">
      <div className="grid sm:grid-cols-2">
        <div className="">
          <div
            className={`duration date-label-left relative float-right md:mr-7`}
          >
            <img src={`${step.image}`} className="h-64 w-64" alt="" />
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <div
            className={`event event-description-right float-left text-left md:ml-7`}
          >
            <h5 className="mb-1 text-lg font-medium dark:text-white">
              {step.name}
            </h5>
            <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexProcessCardLeft;
