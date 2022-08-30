import React from "react";
import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Markdown from "markdown-to-jsx";
import { IQuestion } from "../libs/interfaces";

function IndexFAQAccordionItem({ question }: { question: IQuestion }) {
  return (
    <AccordionItem className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700">
      <AccordionItemHeading>
        <AccordionItemButton>
          <h2
            className="text-base font-semibold"
            id="accordion-collapse-heading-1"
          >
            <button
              className="flex w-full items-center justify-between p-5 text-left font-medium"
              data-accordion-target="#accordion-collapse-body-1"
              aria-label="expand Accordion Button"
            >
              <span>{question.name}</span>
              <svg
                data-accordion-icon
                className="h-4 w-4 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
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
            {/* TODO : Fix lists display  */}
            <Markdown>{question.text}</Markdown>
          </div>
        </div>
      </AccordionItemPanel>
    </AccordionItem>
  );
}

export default IndexFAQAccordionItem;
