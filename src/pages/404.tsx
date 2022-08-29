import { graphql } from "gatsby";
import React from "react";

export default function NotFound() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="relative bg-primary-600/5">
      <div className="container-fluid relative">
        <div className="grid grid-cols-1">
          <div className="flex min-h-screen flex-col justify-center py-10 px-4 md:px-10">
            <div className="title-heading my-auto text-center">
              <a
                href="/"
                className="text-[22px] focus:outline-none"
                aria-label="ridgecoding-Logo"
              >
                <img
                  src="/assets/logos/ridgecoding-black.svg"
                  className="inline-block w-28"
                  alt=""
                />
              </a>
              <h1 className="mb-6 mt-3 text-3xl font-bold md:text-5xl">
                Page Not Found
              </h1>
              <p className="text-slate-400">
                Whoops, this is embarassing. <br /> Looks like the page you were
                looking for wasn't found.
              </p>

              <div className="mt-4">
                <a href="/" className="btn btn-primary rounded-md">
                  Back to Home
                </a>
              </div>
            </div>
            <div className="text-center">
              <p className="mb-0 text-slate-400">
                © {currentYear} Ridge Coding. Design with{" "}
                <i className="mdi mdi-heart text-primary-600"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
