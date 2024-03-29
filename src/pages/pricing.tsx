import { CheckCircleIcon } from "@heroicons/react/solid";

const includedFeatures = [
  "Weekly sessions",
  "Member resources",
  "Live workshops",
  "A hug from our CEO",
];

export default function Pricing() {
  return (
    <div className="">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-indigo-600 sm:text-4xl lg:text-5xl">
              Simple no-tricks pricing
            </h2>
            <p className="mt-4 text-xl text-indigo-500">
              If you&apos;re not satisfied, contact us within the first 14 days
              and we&apos;ll send you a full refund.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-extrabold text-indigo-500 sm:text-3xl">
                  Monthly Membership
                </h3>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                      What&apos;s included
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul
                    role="list"
                    className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5"
                  >
                    {includedFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start lg:col-span-1"
                      >
                        <div className="flex-shrink-0">
                          <CheckCircleIcon
                            className="h-5 w-5 text-green-400"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-indigo-600">
                  <span>$150</span>
                  <span className="ml-3 text-xl font-medium text-indigo-500">
                    USD
                  </span>
                </div>
                <p className="mt-4 text-sm">
                  <a href="#" className="font-medium text-gray-500 underline">
                    Learn about our membership policy
                  </a>
                </p>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdyW6gUiCQmJB7PMr_ey-Qt5I8ZDo7tTW81Abs1b7iUXBRMaA/viewform?usp=sf_link"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-900"
                    >
                      Get Access
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
