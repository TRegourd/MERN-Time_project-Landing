import React from "react";
import { Trans } from "react-i18next";

function IndexPortfolio() {
  return (
    <section
      className="relative bg-zinc-50 py-16 dark:bg-gray-800 md:py-24"
      id="portfolio"
    >
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h6 className="mb-2 text-base font-medium uppercase text-primary-600">
            <Trans>PORTFOLIO.section</Trans>
          </h6>
          <h3 className="mb-4 text-xl font-medium dark:text-white md:text-2xl">
            <Trans>PORTFOLIO.title</Trans>
          </h3>

          <p className="mx-auto max-w-xl text-slate-400 dark:text-slate-300">
            <Trans>PORTFOLIO.subtitle</Trans>
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="group relative overflow-hidden rounded-md shadow-sm">
            <img
              src="/assets/logos/ridge-full-light.png"
              className="transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
              alt=""
            />
            <div className="absolute inset-0 z-0 opacity-50 transition duration-500 group-hover:bg-black"></div>

            <div className="content">
              <div className="icon absolute top-4 right-4 z-10 hidden group-hover:block">
                <a
                  href="assets/images/portfolio/1.jpg"
                  className="btn btn-primary btn-icon lightbox rounded-full"
                >
                  <i className="mdi mdi-camera"></i>
                </a>
              </div>

              <div className="absolute bottom-4 left-4 z-10 hidden group-hover:block">
                <a
                  href=""
                  className="h6 text-md font-medium text-white transition duration-500 hover:text-primary-600"
                >
                  Mockup Collection
                </a>
                <p className="tag mb-0 text-slate-100">Abstract</p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-md shadow-sm">
            <img
              src="/assets/logos/ridge-full-light.png"
              className="transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
              alt=""
            />
            <div className="absolute inset-0 z-0 opacity-50 transition duration-500 group-hover:bg-black"></div>

            <div className="content">
              <div className="icon absolute top-4 right-4 z-10 hidden group-hover:block">
                <a
                  href="assets/images/portfolio/2.jpg"
                  className="btn btn-primary btn-icon lightbox rounded-full"
                >
                  <i className="mdi mdi-camera"></i>
                </a>
              </div>

              <div className="absolute bottom-4 left-4 z-10 hidden group-hover:block">
                <a
                  href=""
                  className="h6 text-md font-medium text-white transition duration-500 hover:text-primary-600"
                >
                  Mockup Collection
                </a>
                <p className="tag mb-0 text-slate-100">Abstract</p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-md shadow-sm">
            <img
              src="/assets/logos/ridge-full-light.png"
              className="transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
              alt=""
            />
            <div className="absolute inset-0 z-0 opacity-50 transition duration-500 group-hover:bg-black"></div>

            <div className="content">
              <div className="icon absolute top-4 right-4 z-10 hidden group-hover:block">
                <a
                  href="/assets/images/portfolio/3.jpg"
                  className="btn btn-primary btn-icon lightbox rounded-full"
                >
                  <i className="mdi mdi-camera"></i>
                </a>
              </div>

              <div className="absolute bottom-4 left-4 z-10 hidden group-hover:block">
                <a
                  href=""
                  className="h6 text-md font-medium text-white transition duration-500 hover:text-primary-600"
                >
                  Mockup Collection
                </a>
                <p className="tag mb-0 text-slate-100">Abstract</p>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-md shadow-sm">
            <img
              src="/assets/logos/ridge-full-light.png"
              className="transition duration-500 group-hover:origin-center group-hover:rotate-3 group-hover:scale-110"
              alt=""
            />
            <div className="absolute inset-0 z-0 opacity-50 transition duration-500 group-hover:bg-black"></div>

            <div className="content">
              <div className="icon absolute top-4 right-4 z-10 hidden group-hover:block">
                <a
                  href="assets/images/portfolio/4.jpg"
                  className="btn btn-primary btn-icon lightbox rounded-full"
                >
                  <i className="mdi mdi-camera"></i>
                </a>
              </div>

              <div className="absolute bottom-4 left-4 z-10 hidden group-hover:block">
                <a
                  href=""
                  className="h6 text-md font-medium text-white transition duration-500 hover:text-primary-600"
                >
                  Mockup Collection
                </a>
                <p className="tag mb-0 text-slate-100">Abstract</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndexPortfolio;
