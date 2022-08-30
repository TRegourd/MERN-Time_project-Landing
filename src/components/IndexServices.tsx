import React from "react";
import IndexFeatureCard from "./IndexFeatureCard";

function IndexServices() {
  return (
    <div className="lg container mx-auto">
      <div className="grid grid-cols-1 items-center pb-8 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <h6 className="mb-2 text-base font-medium uppercase text-primary-600">
            What We Do ?
          </h6>
          <h3 className="mb-4 text-xl font-semibold dark:text-white md:mb-0 md:text-2xl">
            Perfect Solution For Your <br /> Business
          </h3>
        </div>

        <div>
          <p className="max-w-xl text-slate-400 dark:text-slate-300">
            Launch your campaign and benefit from our expertise on designing and
            managing conversion centered Tailwind CSS html page.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <IndexFeatureCard />
        <IndexFeatureCard />
        <IndexFeatureCard />
      </div>
    </div>
  );
}

export default IndexServices;
