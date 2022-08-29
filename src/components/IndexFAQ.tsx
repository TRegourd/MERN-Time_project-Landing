import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Trans } from "react-i18next";

function IndexFAQ() {
  return (
    <section className="relative py-16 md:py-24" id="faq">
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h6 className="mb-2 text-base font-medium uppercase text-primary-600">
            <Trans>FAQ.section</Trans>
          </h6>
          <h3 className="mb-4 text-xl font-medium dark:text-white md:text-2xl">
            <Trans>FAQ.title</Trans>
          </h3>

          <p className="mx-auto max-w-xl text-slate-400 dark:text-slate-300">
            <Trans>FAQ.subtitle</Trans>
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[30px] dark:text-white md:grid-cols-12">
          <div className="md:col-span-5 lg:col-span-4">
            <div className="sticky top-20 rounded-md p-6 shadow dark:shadow-gray-700">
              <ul
                className="list-unstyled sidebar-nav mb-0 py-0"
                id="navmenu-nav"
              >
                <li className="navbar-item p-0">
                  <a href="#tech" className="navbar-link text-base font-medium">
                    Buying Questions
                  </a>
                </li>
                <li className="navbar-item mt-3 p-0">
                  <a
                    href="#general"
                    className="navbar-link text-base font-medium"
                  >
                    General Questions
                  </a>
                </li>
                <li className="navbar-item mt-3 p-0">
                  <a
                    href="#payment"
                    className="navbar-link text-base font-medium"
                  >
                    Payments Questions
                  </a>
                </li>
                <li className="navbar-item mt-3 p-0">
                  <a
                    href="#support"
                    className="navbar-link text-base font-medium"
                  >
                    Support Questions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-7 lg:col-span-8">
            <Accordion allowZeroExpanded>
              <div id="tech">
                <h5 className="my-2 text-2xl font-semibold">Buying Product</h5>
                <AccordionItem className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <h2
                        className="text-base font-semibold"
                        id="accordion-collapse-heading-1"
                      >
                        <button
                          type="button"
                          className="flex w-full items-center justify-between p-5 text-left font-medium"
                          data-accordion-target="#accordion-collapse-body-1"
                          aria-expanded="true"
                          aria-controls="accordion-collapse-body-1"
                        >
                          <span>How does it work ?</span>
                          <svg
                            data-accordion-icon
                            className="h-4 w-4 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div
                      id="accordion-collapse-body-2"
                      aria-labelledby="accordion-collapse-heading-2"
                    >
                      <div className="p-5">
                        <p className="text-slate-400 dark:text-gray-400">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </p>
                      </div>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <h2
                        className="text-base font-semibold"
                        id="accordion-collapse-heading-1"
                      >
                        <button
                          type="button"
                          className="flex w-full items-center justify-between p-5 text-left font-medium"
                          data-accordion-target="#accordion-collapse-body-1"
                          aria-expanded="true"
                          aria-controls="accordion-collapse-body-1"
                        >
                          <span>How does it work ?</span>
                          <svg
                            data-accordion-icon
                            className="h-4 w-4 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div
                      id="accordion-collapse-body-2"
                      aria-labelledby="accordion-collapse-heading-2"
                    >
                      <div className="p-5">
                        <p className="text-slate-400 dark:text-gray-400">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </p>
                      </div>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <h2
                        className="text-base font-semibold"
                        id="accordion-collapse-heading-1"
                      >
                        <button
                          type="button"
                          className="flex w-full items-center justify-between p-5 text-left font-medium"
                          data-accordion-target="#accordion-collapse-body-1"
                          aria-expanded="true"
                          aria-controls="accordion-collapse-body-1"
                        >
                          <span>How does it work ?</span>
                          <svg
                            data-accordion-icon
                            className="h-4 w-4 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div
                      id="accordion-collapse-body-2"
                      aria-labelledby="accordion-collapse-heading-2"
                    >
                      <div className="p-5">
                        <p className="text-slate-400 dark:text-gray-400">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </p>
                      </div>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <h2
                        className="text-base font-semibold"
                        id="accordion-collapse-heading-1"
                      >
                        <button
                          type="button"
                          className="flex w-full items-center justify-between p-5 text-left font-medium"
                          data-accordion-target="#accordion-collapse-body-1"
                          aria-expanded="true"
                          aria-controls="accordion-collapse-body-1"
                        >
                          <span>How does it work ?</span>
                          <svg
                            data-accordion-icon
                            className="h-4 w-4 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div
                      id="accordion-collapse-body-2"
                      aria-labelledby="accordion-collapse-heading-2"
                    >
                      <div className="p-5">
                        <p className="text-slate-400 dark:text-gray-400">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </p>
                      </div>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </div>
            </Accordion>
            <Accordion allowZeroExpanded>
              <div id="general">
                <h5 className="my-2 text-2xl font-semibold">
                  General Questions
                </h5>
                <AccordionItem className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <h2
                        className="text-base font-semibold"
                        id="accordion-collapse-heading-1"
                      >
                        <button
                          type="button"
                          className="flex w-full items-center justify-between p-5 text-left font-medium"
                          data-accordion-target="#accordion-collapse-body-1"
                          aria-expanded="true"
                          aria-controls="accordion-collapse-body-1"
                        >
                          <span>How does it work ?</span>
                          <svg
                            data-accordion-icon
                            className="h-4 w-4 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div
                      id="accordion-collapse-body-2"
                      aria-labelledby="accordion-collapse-heading-2"
                    >
                      <div className="p-5">
                        <p className="text-slate-400 dark:text-gray-400">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </p>
                      </div>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <h2
                        className="text-base font-semibold"
                        id="accordion-collapse-heading-1"
                      >
                        <button
                          type="button"
                          className="flex w-full items-center justify-between p-5 text-left font-medium"
                          data-accordion-target="#accordion-collapse-body-1"
                          aria-expanded="true"
                          aria-controls="accordion-collapse-body-1"
                        >
                          <span>How does it work ?</span>
                          <svg
                            data-accordion-icon
                            className="h-4 w-4 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div
                      id="accordion-collapse-body-2"
                      aria-labelledby="accordion-collapse-heading-2"
                    >
                      <div className="p-5">
                        <p className="text-slate-400 dark:text-gray-400">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </p>
                      </div>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <h2
                        className="text-base font-semibold"
                        id="accordion-collapse-heading-1"
                      >
                        <button
                          type="button"
                          className="flex w-full items-center justify-between p-5 text-left font-medium"
                          data-accordion-target="#accordion-collapse-body-1"
                          aria-expanded="true"
                          aria-controls="accordion-collapse-body-1"
                        >
                          <span>How does it work ?</span>
                          <svg
                            data-accordion-icon
                            className="h-4 w-4 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div
                      id="accordion-collapse-body-2"
                      aria-labelledby="accordion-collapse-heading-2"
                    >
                      <div className="p-5">
                        <p className="text-slate-400 dark:text-gray-400">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </p>
                      </div>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <h2
                        className="text-base font-semibold"
                        id="accordion-collapse-heading-1"
                      >
                        <button
                          type="button"
                          className="flex w-full items-center justify-between p-5 text-left font-medium"
                          data-accordion-target="#accordion-collapse-body-1"
                          aria-expanded="true"
                          aria-controls="accordion-collapse-body-1"
                        >
                          <span>How does it work ?</span>
                          <svg
                            data-accordion-icon
                            className="h-4 w-4 shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div
                      id="accordion-collapse-body-2"
                      aria-labelledby="accordion-collapse-heading-2"
                    >
                      <div className="p-5">
                        <p className="text-slate-400 dark:text-gray-400">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form.
                        </p>
                      </div>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndexFAQ;
