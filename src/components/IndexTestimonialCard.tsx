import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { ITestimonial } from "../libs/interfaces";

function IndexTestimonialCard({ testimonial }: { testimonial: ITestimonial }) {
  const image = getImage(testimonial.avatar);

  return (
    <div key={testimonial.name} className="">
      <div className="relative m-2 overflow-hidden rounded-md p-6 shadow shadow-slate-200 dark:shadow-slate-700 lg:flex lg:p-0">
        {image && (
          <GatsbyImage
            className="mx-auto h-24 w-24 rounded-full lg:mx-0 lg:h-auto lg:w-48 lg:rounded-none"
            image={image}
            alt={testimonial.name}
          />
        )}
        <div className="space-y-4 pt-6 text-center lg:p-6 lg:text-left">
          <p className="text-base text-slate-500 dark:text-slate-200">
            {testimonial.text}
          </p>

          <div>
            <span className="mb-1 block text-primary-600">
              {testimonial.name}
            </span>
            <span className="block text-sm text-slate-400 dark:text-white/60">
              {testimonial.position}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexTestimonialCard;
