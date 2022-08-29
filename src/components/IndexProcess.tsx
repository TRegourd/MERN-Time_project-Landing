import React from "react";

function IndexProcess() {
  return (
    <div className="container mt-16 md:mt-24">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h6 className="mb-2 text-base font-medium uppercase text-primary-600">
          Work Process
        </h6>
        <h3 className="mb-4 text-xl font-medium dark:text-white md:text-2xl">
          Digital System For Our Business
        </h3>

        <p className="mx-auto max-w-xl text-slate-400 dark:text-slate-300">
          Launch your campaign and benefit from our expertise on designing and
          managing conversion centered Tailwind CSS html page.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1">
        <div className="timeline relative">
          <div className="timeline-item">
            <div className="grid sm:grid-cols-2">
              <div className="">
                <div className="duration date-label-left relative float-right md:mr-7">
                  <img
                    src="/assets/index/process/design-thinking.svg"
                    className="h-64 w-64"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="event event-description-right float-left text-left md:ml-7">
                  <h5 className="mb-1 text-lg font-medium dark:text-white">
                    Strategy
                  </h5>
                  <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                    The generated injected humour, or non-characteristic words
                    etc. Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Donec quam felis,
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item mt-5 pt-4">
            <div className="grid sm:grid-cols-2">
              <div className="order-2 md:order-1">
                <div className="event event-description-left float-left text-right md:mr-7">
                  <h5 className="mb-1 text-lg font-medium dark:text-white">
                    Development
                  </h5>
                  <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                    The generated injected humour, or non-characteristic words
                    etc. Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Donec quam felis,
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="duration duration-right relative md:ml-7">
                  <img
                    src="/assets/index/process/coding.svg"
                    className="h-64 w-64"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item mt-5 pt-4">
            <div className="grid sm:grid-cols-2">
              <div className="mt-sm-0 mt-4">
                <div className="duration date-label-left relative float-right md:mr-7">
                  <img
                    src="/assets/index/process/office-desk.svg"
                    className="h-64 w-64"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-sm-0 mt-4">
                <div className="event event-description-right float-left text-left md:ml-7">
                  <h5 className="mb-1 text-lg font-medium dark:text-white">
                    Launch
                  </h5>
                  <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                    The generated injected humour, or non-characteristic words
                    etc. Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Donec quam felis,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexProcess;
