import React from "react";

function IndexAbout() {
  return (
    <section
      className="relative bg-zinc-50 py-16 dark:bg-gray-800 md:py-24"
      id="about"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative">
              <img
                src="assets/images/about.jpg"
                className="relative rounded-lg shadow-lg"
                alt=""
              />
              <div className="absolute bottom-2/4 right-0 left-0 translate-y-2/4 text-center">
                <a
                  href="#!"
                  data-type="youtube"
                  data-id="yba7hPeTSjk"
                  className="lightbox inline-flex h-20 w-20 items-center justify-center rounded-full bg-white text-primary-600 shadow-lg shadow-slate-100 dark:bg-black dark:shadow-slate-800"
                >
                  <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="lg:ml-7">
              <h6 className="mb-2 text-base font-medium uppercase text-primary-600">
                Who We Are ?
              </h6>
              <h3 className="mb-4 text-xl font-medium dark:text-white md:text-2xl">
                Our Company Story
              </h3>

              <p className="mx-auto max-w-2xl text-slate-400 dark:text-slate-300">
                Start working with Upwind that can provide everything you need
                to generate awareness, drive traffic, connect. Dummy text is
                text that is used in the publishing industry or by web designers
                to occupy the space which will later be filled with 'real'
                content. This is required when, for example, the final text is
                not yet available. Dummy texts have been in use by typesetters
                since the 16th century.
              </p>

              <div className="relative mt-10">
                <a href="#portfolio" className="btn btn-primary rounded-md">
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndexAbout;
