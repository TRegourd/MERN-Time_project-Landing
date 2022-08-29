import React from "react";
import { Trans, useTranslation } from "react-i18next";

function IndexContact({
  title,
  subtitle,
  email,
  phone,
}: {
  title: string;
  subtitle: string;
  email: string;
  phone: string;
}) {
  const { t } = useTranslation();

  return (
    <section
      className="relative bg-zinc-50 py-16 dark:bg-gray-800 md:py-24"
      id="contact"
    >
      <div className="container">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h6 className="mb-2 text-base font-medium uppercase text-primary-600">
            <Trans>CONTACT.section</Trans>
          </h6>
          <h3 className="mb-4 text-xl font-medium dark:text-white md:text-2xl">
            {title}
          </h3>

          <p className="mx-auto max-w-xl text-slate-400 dark:text-slate-300">
            {subtitle}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="rounded-md bg-white p-6 shadow dark:bg-black">
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                id="form"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="e27785ca-c999-463b-9fd9-bf2740975c1b"
                />
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                />

                <input
                  type="hidden"
                  name="subject"
                  value="New Submission from Web3Forms"
                />
                <input
                  type="hidden"
                  name="redirect"
                  value="https://web3forms.com/success"
                />
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm text-gray-600 dark:text-gray-400"
                  >
                    <Trans>CONTACT.name</Trans>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-900"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm text-gray-600 dark:text-gray-400"
                  >
                    <Trans>CONTACT.email</Trans>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="john.doe@gmail.com"
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-900"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    <Trans>CONTACT.phone</Trans>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="+33 601020304"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-900"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm text-gray-600 dark:text-gray-400"
                  >
                    <Trans>CONTACT.message</Trans>
                  </label>

                  <textarea
                    rows={5}
                    name="message"
                    id="message"
                    placeholder={t("CONTACT.message")}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-900"
                    required
                  ></textarea>
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="btn btn-primary flex h-11 items-center justify-center rounded-md"
                  >
                    <Trans>BUTTON.send_message</Trans>
                  </button>
                </div>
                <p
                  className="text-center text-base text-gray-400"
                  id="result"
                ></p>
              </form>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="lg:ml-8">
              <div className="flex">
                <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-primary-600/5 align-middle text-3xl text-primary-600 shadow-sm">
                  <i className="mdi mdi-phone"></i>
                </div>

                <div className="ml-6 flex-1">
                  <h5 className="mb-2 text-lg font-medium dark:text-white">
                    <Trans>CONTACT.phone</Trans>
                  </h5>
                  <a href={`tel:${phone}`} className="text-slate-400">
                    {phone}
                  </a>
                </div>
              </div>

              <div className="mt-4 flex">
                <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-primary-600/5 align-middle text-3xl text-primary-600 shadow-sm">
                  <i className="mdi mdi-email"></i>
                </div>

                <div className="ml-6 flex-1">
                  <h5 className="mb-2 text-lg font-medium dark:text-white">
                    <Trans>CONTACT.email</Trans>
                  </h5>
                  <a href={`mailto:${email}`} className="text-slate-400">
                    {email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndexContact;
