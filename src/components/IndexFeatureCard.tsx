import React from "react";

function IndexFeatureCard() {
  return (
    <div className="features mt-8 rounded-3xl p-6 transition duration-500 hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-slate-800">
      <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-primary-600/5 align-middle text-3xl text-primary-600 shadow-sm">
        <i className="mdi mdi-react"></i>
      </div>

      <div className="content mt-7">
        <a
          href=""
          className="text-lg font-medium transition-all duration-500 ease-in-out hover:text-primary-600 dark:text-white dark:hover:text-primary-600"
        >
          Grow Your Business
        </a>
        <p className="mt-3 text-slate-400">
          The phrasal sequence of the is now so that many campaign and benefit
        </p>
      </div>
    </div>
  );
}

export default IndexFeatureCard;
