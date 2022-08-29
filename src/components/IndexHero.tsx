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
    <>
      <section className="relative table w-full py-36 lg:py-64" id="home">
        {image && (
          <GatsbyImage
            className="absolute top-0 h-full w-full"
            image={image}
            alt="ridgecoding-header"
          />
        )}
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container relative">
          <div className="mt-12 grid grid-cols-1 text-center">
            <h4 className="position-relative mb-7 text-4xl font-medium leading-normal text-white lg:text-5xl lg:leading-normal">
              {title}
            </h4>

            <p className="mb-0  text-lg text-white opacity-50">{subtitle}</p>

            <div className="relative mt-10">
              <a
                href="http://localhost:3000/"
                className="btn btn-primary rounded-md"
              >
                <Trans>BUTTON.launch</Trans>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IndexHero;
