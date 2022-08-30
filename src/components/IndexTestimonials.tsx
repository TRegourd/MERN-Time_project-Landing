import React from "react";
import { Trans } from "react-i18next";
import Slider from "react-slick";
import { ITestimonial } from "../libs/interfaces";
import IndexTestimonialCard from "./IndexTestimonialCard";

function IndexTestimonials({
  list,
  title,
  subtitle,
}: {
  list: ITestimonial[];
  title: string;
  subtitle: string;
}) {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className="relative  bg-zinc-50 py-16 dark:bg-gray-800 md:py-24"
      id="testi"
    >
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h6 className="mb-2 text-base font-medium uppercase text-primary-600">
            <Trans>SECTION.testimonials</Trans>
          </h6>
          <h3 className="mb-4 text-xl font-medium dark:text-white md:text-2xl">
            {title}
          </h3>

          <p className="mx-auto max-w-xl text-slate-400 dark:text-slate-300">
            {subtitle}
          </p>
        </div>

        <div className="relative mt-8 grid grid-cols-1">
          <Slider {...settings}>
            {list.map((testimonial: ITestimonial) => {
              return (
                <IndexTestimonialCard
                  testimonial={testimonial}
                  key={testimonial.name}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default IndexTestimonials;
