import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Trans } from "react-i18next";
import { IQuestion } from "../libs/interfaces";
import IndexFAQAccordionItem from "./IndexFAQAccordionItem";

function IndexFAQ({
  title,
  subtitle,
  questions,
}: {
  title: string;
  subtitle: string;
  questions: IQuestion[];
}) {
  function uniqueQuestionsCategory(array: IQuestion[]) {
    var out = [];
    for (var i = 0, len = array.length; i < len; i++)
      if (out.indexOf(array[i].category) === -1) out.push(array[i].category);
    return out;
  }

  const questionsCategory = uniqueQuestionsCategory(questions);

  return (
    <section className="relative py-16 md:py-24" id="faq">
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h6 className="mb-2 text-base font-medium uppercase text-primary-600">
            <Trans>SECTION.FAQ</Trans>
          </h6>
          <h3 className="mb-4 text-xl font-medium dark:text-white md:text-2xl">
            {title}
          </h3>

          <p className="mx-auto max-w-xl text-slate-400 dark:text-slate-300">
            {subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-[30px] dark:text-white md:grid-cols-12">
          <div className="md:col-span-5 lg:col-span-4">
            <div className="sticky top-32 rounded-md p-6 shadow dark:shadow-gray-700">
              <ul
                className="list-unstyled sidebar-nav mb-0 py-0"
                id="navmenu-nav"
              >
                {questionsCategory &&
                  questionsCategory.map((category: string) => {
                    return (
                      <li key={category} className="navbar-item mt-3 p-0">
                        <a
                          href={`#${category}`}
                          className="navbar-link text-base font-medium"
                        >
                          {category} Questions
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className="md:col-span-7 lg:col-span-8">
            {questionsCategory &&
              questionsCategory.map((category: string) => {
                const sortedQuestions = questions.filter(
                  (question: IQuestion) => {
                    return question.category === category;
                  }
                );

                return (
                  <Accordion allowZeroExpanded key={category}>
                    <div id={`${category}`}>
                      <h5 className="my-2 text-2xl font-semibold">
                        {category} Questions
                      </h5>
                      {sortedQuestions &&
                        sortedQuestions.map((question: IQuestion) => {
                          return (
                            <IndexFAQAccordionItem
                              question={question}
                              key={question.name}
                            />
                          );
                        })}
                    </div>
                  </Accordion>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndexFAQ;
