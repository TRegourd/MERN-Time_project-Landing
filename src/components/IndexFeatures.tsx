import React from "react";
import { Trans } from "react-i18next";
import { IFeature } from "../libs/interfaces";
import IndexFeatureCard from "./IndexFeatureCard";

function IndexFeatures({
  title,
  subtitle,
  features,
}: {
  title: string;
  subtitle: string;
  features: IFeature[];
}) {
  return (
    <div className="lg container mx-auto">
      <div className="grid grid-cols-1 items-center pb-8 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <h6 className="mb-2 text-base font-medium uppercase text-primary-600">
            <Trans>SECTION.features</Trans>
          </h6>
          <h3 className="mb-4 text-xl font-semibold dark:text-white md:mb-0 md:text-2xl">
            {title}
          </h3>
        </div>

        <div>
          <p className="max-w-xl text-slate-400 dark:text-slate-300">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features &&
          features.map((feature: IFeature) => {
            return (
              <IndexFeatureCard
                name={feature.name}
                description={feature.description}
                image={feature.image}
                key={feature.name}
              />
            );
          })}
      </div>
    </div>
  );
}

export default IndexFeatures;
