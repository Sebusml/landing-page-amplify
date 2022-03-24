import { Transition } from "@headlessui/react";
import { CheckCircleIcon, MailIcon, XIcon } from "@heroicons/react/solid";
import { Fragment, ReactElement, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
  sendContactMessage: Function;
}
interface ContactMessageInputForm {
  email: string;
  nameFull: string;
  message: string;
}
export default function ContactUs({ sendContactMessage }: Props): ReactElement {
  const [showContacMessageSuccessOverlay, setShowContacMessageSuccessOverlay] =
    useState(false);
  const { register, reset, handleSubmit } = useForm<ContactMessageInputForm>();

  const onSendContactMessage: SubmitHandler<ContactMessageInputForm> = async (
    data
  ) => {
    await sendContactMessage(data);
    reset();
    setShowContacMessageSuccessOverlay(true);
  };

  return (
    <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-blue-50" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-blue-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-700 sm:text-3xl">
              Let us talk!
            </h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Write us a message about the topics that you would like to
              discuss.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <MailIcon
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">contact@opeers.com</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form
              id="contactMessageForm"
              method="POST"
              onSubmit={handleSubmit(onSendContactMessage)}
              className="grid grid-cols-1 gap-y-6"
            >
              <div>
                <label htmlFor="nameFull" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  id="nameFull"
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="Full name"
                  {...register("nameFull", {
                    required: {
                      value: true,
                      message: "Please enter a valid name.",
                    },
                  })}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  placeholder="Email address"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Please enter a valid email.",
                    },
                  })}
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                  placeholder="Message"
                  defaultValue={""}
                  {...register("message", {
                    required: {
                      value: true,
                      message: "Please enter a message.",
                    },
                  })}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="w-full flex flex-col items-center space-y-4 sm:items-end pt-2">
              {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
              <Transition
                show={showContacMessageSuccessOverlay}
                as={Fragment}
                enter="transform ease-out duration-300 transition"
                enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                enterTo="translate-y-0 opacity-100 sm:translate-x-0"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="p-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <CheckCircleIcon
                          className="h-6 w-6 text-green-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="ml-3 w-0 flex-1 pt-0.5">
                        <p className="text-sm font-medium text-gray-900">
                          Successfully submited!
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Thank you for your message. We will get back to you
                          shortly.
                        </p>
                      </div>
                      <div className="ml-4 flex-shrink-0 flex">
                        <button
                          className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={() => {
                            setShowContacMessageSuccessOverlay(false);
                          }}
                        >
                          <span className="sr-only">Close</span>
                          <XIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
