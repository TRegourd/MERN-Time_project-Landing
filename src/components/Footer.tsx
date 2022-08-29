import { Link, useI18next } from "gatsby-plugin-react-i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { contactDetails } from "../libs/contactDetails";

function Footer() {
  const currentYear = new Date().getFullYear();
  const { languages, originalPath } = useI18next();
  const { t } = useTranslation();

  const lng = languages.find((language) => {
    return language !== t("NAV.lang").toLowerCase();
  });

  return (
    <footer className="bg-slate-800  dark:bg-gray-900">
      <div className="container">
        <div className=" grid items-center py-2 md:grid-cols-12">
          <div className="md:col-span-3">
            <a href="#" className="logo-footer ">
              <img
                src="/assets/logos/time-machine.png"
                className="mx-auto w-10 md:ml-0"
                alt=""
              />
            </a>
          </div>

          <div className="mt-8 md:col-span-6 md:mt-0">
            <div className="text-center">
              <p className="text-gray-400">
                © {currentYear} Ridge Coding. Design with{" "}
                <i className="mdi mdi-heart text-primary-600"></i>
              </p>
            </div>
          </div>

          <div className="mt-8 md:col-span-3 md:mt-0">
            <ul className="foot-icon list-none text-center md:text-right">
              <li className="inline">
                <a
                  href={contactDetails.linkedin}
                  className="btn btn-icon btn-sm rounded-md border border-slate-700 bg-slate-800 text-gray-400 hover:border-primary-600 hover:bg-primary-600 hover:text-white dark:border-slate-800 dark:bg-gray-900 dark:hover:bg-primary-600"
                >
                  <i className="mdi mdi-linkedin"></i>
                </a>
              </li>
              <li className="inline">
                <a
                  href={contactDetails.gitHub}
                  className="btn btn-icon btn-sm rounded-md border border-slate-700 bg-slate-800 text-gray-400 hover:border-primary-600 hover:bg-primary-600 hover:text-white dark:border-slate-800 dark:bg-gray-900 dark:hover:bg-primary-600"
                >
                  <i className="mdi mdi-github"></i>
                </a>
              </li>
              <li className="inline">
                <Link
                  to={originalPath}
                  language={lng}
                  className="btn btn-icon btn-sm rounded-md border border-slate-700 bg-slate-800 text-gray-400  hover:border-primary-600 hover:bg-primary-600 hover:text-white dark:border-slate-800 dark:bg-gray-900 dark:hover:bg-primary-600"
                >
                  <img
                    src={`/assets/logos/${lng}.svg`}
                    height="20"
                    width="20"
                    alt=""
                  ></img>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
