import React from "react";
import { IProcessStep } from "../libs/interfaces";

function IndexProcessCardRight({ step }: { step: IProcessStep }) {
  return (
    <div className="timeline-item mt-5 pt-4">
      <div className="grid sm:grid-cols-2">
        <div className="order-2 md:order-1">
          <div className="event event-description-left float-right text-right md:mr-7">
            <h5 className="mb-1 text-lg font-medium dark:text-white">
              {step.name}
            </h5>
            <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
              {step.description}
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="duration duration-right relative md:ml-7">
            <img src={`${step.image}`} className="h-64 w-64" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexProcessCardRight;
