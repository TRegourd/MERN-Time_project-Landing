import React, { useEffect } from "react";
import { Trans } from "react-i18next";
import { contactDetails } from "../libs/contactDetails";

function Navbar() {
  function toggleMenu() {
    document.getElementById("isToggle")?.classList.toggle("open");
    var isOpen = document.getElementById("navigation");

    if (isOpen?.style.display === "block") {
      isOpen.style.display = "none";
    } else if (isOpen && isOpen?.style.display !== "block") {
      isOpen.style.display = "block";
    }
  }

  function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (navbar != null) {
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        navbar.classList.add("is-sticky");
      } else {
        navbar.classList.remove("is-sticky");
      }
    }
  }

  function getDefaultTheme() {
    const userTheme = localStorage.getItem("ridgecodingUserTheme");
    const htmlTag = document.getElementsByTagName("html")[0];

    if (userTheme && htmlTag) {
      htmlTag.className = userTheme;
    } else {
      if (
        htmlTag &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        htmlTag.className = "dark";
      }
    }
  }

  function changeTheme(e: any) {
    e.preventDefault();
    const htmlTag = document.getElementsByTagName("html")[0];

    if (htmlTag.className.includes("dark")) {
      htmlTag.className = "light";
      localStorage.setItem("ridgecodingUserTheme", "light");
    } else {
      htmlTag.className = "dark";
      localStorage.setItem("ridgecodingUserTheme", "dark");
    }
  }

  useEffect(() => {
    const chk = document.getElementById("chk");
    chk?.addEventListener("click", changeTheme);
    getDefaultTheme();
    window.addEventListener("scroll", (ev) => {
      ev.preventDefault();
      windowScroll();
    });
  }, []);
  return (
    <nav className="navbar" id="navbar">
      <div className="container flex flex-wrap items-center justify-end">
        <a className="navbar-brand" href="/">
          <img
            src="/assets/logos/time-machine.png"
            className="logo-light-mode w-20"
            alt=""
          />
          <img
            src="/assets/logos/time-machine.png"
            className="logo-dark-mode w-20"
            alt=""
          />
        </a>

        <div className="nav-icons ml-auto flex items-center lg_992:order-2">
          <ul className="menu-social ps-lg-4 ms-2 mb-0 list-none">
            <li className="mr-2 inline">
              <a
                href="http://localhost:3000/"
                className="btn btn-primary rounded-md"
              >
                <Trans>BUTTON.launch</Trans>
              </a>
            </li>
            <li className="inline">
              <a
                href={contactDetails.linkedin}
                className="btn btn-sm btn-icon btn-primary rounded-full"
              >
                <i className="mdi mdi-linkedin"></i>
              </a>
            </li>
            <li className="inline">
              <a
                href={contactDetails.gitHub}
                className="btn btn-sm btn-icon btn-primary rounded-full"
              >
                <i className="mdi mdi-github"></i>
              </a>
            </li>
            <li className="inline" id="chk">
              <button id="theme-mode">
                <span className="btn btn-sm btn-icon btn-slate inline-flex rounded-full dark:hidden">
                  <i className="mdi mdi-weather-sunny"></i>
                </span>
                <span className="btn btn-sm btn-icon btn-slate hidden rounded-full dark:inline-flex">
                  <i className="mdi mdi-moon-waning-crescent"></i>
                </span>
              </button>
            </li>
          </ul>

          <button
            data-collapse="menu-collapse"
            type="button"
            className="collapse-btn ml-3 inline-flex items-center text-dark dark:text-white lg_992:hidden"
            aria-controls="menu-collapse"
            aria-expanded="false"
          >
            <span className="sr-only">Navigation Menu</span>
            <i className="mdi mdi-menu mdi-24px"></i>
          </button>
        </div>

        <div
          className="navigation hidden lg_992:order-1 lg_992:flex"
          id="menu-collapse"
        >
          <ul className="navbar-nav" id="navbar-navlist">
            <li className="nav-item">
              <a className="nav-link" href="#features">
                <Trans>NAV.about</Trans>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#faq">
                <Trans>NAV.FAQ</Trans>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                <Trans>NAV.contact</Trans>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
