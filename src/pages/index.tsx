import ContactUs from "../components/ContactUs";
import pushNewContactMessage from "./api/contact/pushNewContactMessage";

// TODO: Find a way of using these values to avoid duplicated code.
const faqs = [
  {
    question: "Online approach to mental health does not sounds serious",
    answer:
      "Facilitators are professional mental health specialists. Sessions are designed using scientific and proven methods.",
  },
  {
    question: "Not sure if group approach is for me",
    answer: "Groups are small and prescreened",
  },
  { question: "No time for physical visits", answer: "Everything is online" },
  {
    question: "Therapy sessions are expensive",
    answer: "Affordable than traditional therapy",
  },
];
const features = [
  {
    name: "We bring together 8-10 people",
    description:
      "Based on shared professional interest: women in tech, founders, creators",
    icon: "female-entrepreneurs-business-courses.svg",
  },
  {
    name: "Each group is led by a professional facilitator",
    description: "We provide safe and caring environment",
    icon: "Girl-Using-Laptop-Flat-Illustration-Graphics.svg",
  },
  {
    name: "60-90 min weekly online sessions",
    description: "More affordable than any therapy and works better than 1:1",
    icon: "girl_using_laptop_side_angle.svg",
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden bg-no-repeat bg-[url('~/public/polygon_pink.svg')]">
        <main>
          <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-24">
                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold sm:mt-5 sm:text-6xl lg:mt-6 xl:text-5xl">
                      <span className="block text-indigo-500">
                        Burnout and stress prevention programs
                      </span>
                      <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-200 sm:pb-5">
                        for remote teams
                      </span>
                    </h1>
                    <p className="text-base text-gray-500 sm:text-xl lg:text-lg xl:text-xl">
                      Join our therapist-directed virtual support groups in
                      which employees discuss their mental health and
                      professional growth
                    </p>
                    <div className="mt-10 sm:mt-12">
                      <div className="sm:flex">
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdyW6gUiCQmJB7PMr_ey-Qt5I8ZDo7tTW81Abs1b7iUXBRMaA/viewform?usp=sf_link"
                            className="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-pink-300 to-purple-500 text-white font-medium hover:from-pink-600 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                          >
                            Connect now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 lg:m-0 lg:relative">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    <img
                      className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="hero_girls.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Traction stats */}
          <div className="pt-10 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <dl className="text-center lg:mx-auto lg:grid lg:grid-cols-3 lg:gap-8">
                <div className="flex flex-row place-content-center items-center">
                  <dt className="order-2 mt-2 text-4xl leading-6 font-medium text-purple-200">
                    Members
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-purple-500">
                    500+
                  </dd>
                </div>
                <div className="flex flex-row place-content-center items-center mt-10 sm:mt-0">
                  <dt className="order-2 mt-2 text-4xl leading-6 font-medium text-pink-200">
                    Support hours
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-pink-500">
                    1K+
                  </dd>
                </div>
                <div className="flex flex-row place-content-center items-center mt-10 sm:mt-0">
                  <dt className="order-2 mt-2 text-4xl leading-6 font-medium text-green-200">
                    Facilitators
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-green-500">
                    30+
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          {/* Generic Three Step */}
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 pb-14">
            <h2 className="sr-only">A better way to send money.</h2>
            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
              {features.map((feature) => (
                <div key={feature.name}>
                  <div className="flex items-center justify-center">
                    <img className="" src={feature.icon} alt="" />
                  </div>
                  <dt>
                    <p className="mt-5 text-lg leading-6 font-medium text-gray-700">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          {/* Hashtags section section */}
          <div className="pb-16 bg-gradient-to-r from-purple-400 to-pink-300 lg:pb-0 lg:z-10 lg:relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="relative lg:-my-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
                />
                <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                  <div className="aspect-w-10 aspect-h-6 overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                    <img
                      className="object-cover lg:h-full lg:w-full"
                      src="sofa_girl.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                  <p className="mt-6 text-2xl font-medium text-white">
                    Why wait to connect with your favourite People?
                  </p>
                  <p className="text-base font-medium text-white mt-6">
                    Now it is easy to join your friends and community with
                    O&apos;Peers. <br></br>Connect with the ones who truly
                    understands and support you.
                  </p>
                  <p className="mt-6 text-2xl font-medium text-white">
                    <span className="text-blue-500">#womenintech </span>
                    <span className="text-pink-200">#founders </span>
                    <span className="text-green-300">#creators</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kind of FAQ section */}
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-700">
                  What holds you back?
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Can’t find the answer you’re looking for? Reach out to our{" "}
                  <a
                    href="#"
                    className="font-medium text-indigo-500 hover:text-indigo-500"
                  >
                    customer support
                  </a>{" "}
                  team.
                </p>
              </div>
              <div className="lg:mt-0 lg:col-span-2">
                <dl className="space-y-12">
                  {faqs.map((faq) => (
                    <div key={faq.question}>
                      <dt className="text-lg leading-6 font-medium text-gray-700 line-through">
                        {faq.question}
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        {faq.answer}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          <ContactUs sendContactMessage={pushNewContactMessage}></ContactUs>
        </main>
      </div>
    </div>
  );
}
