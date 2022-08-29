import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import { Trans, useTranslation } from "react-i18next";

function IndexHero({
  title,
  subtitle,
  img,
}: {
  title: string;
  subtitle: string;
  img: IGatsbyImageData;
}) {
  const { t } = useTranslation();

  const image = getImage(img);
  return (
    <section
      className="relative flex items-center bg-primary-50 py-36 dark:bg-primary-600/10 md:h-auto md:py-0"
      id="home"
    >
      <div className="container relative">
        <div className="mt-0 grid grid-cols-1 pb-5 pt-0 text-center md:mt-12 md:pt-12">
          <div className="mt-28">
            <div>
              <h4 className="position-relative mb-7 text-4xl font-medium leading-normal dark:text-white lg:text-5xl lg:leading-normal">
                <img src="/assets/logos/ridge-text.png" className="w-full" />
              </h4>

              <p className="mx-auto mb-0 max-w-2xl text-lg text-slate-600 opacity-50 dark:text-white/70">
                {subtitle}
              </p>

              <div className="relative mt-10">
                <a href="#contact" className="btn btn-primary rounded-md">
                  <Trans>BUTTON.contact</Trans>
                </a>
              </div>
            </div>

            {image && (
              <GatsbyImage
                className="relative mt-16"
                image={image}
                alt="ridgecoding-header"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndexHero;
