import {
  NewspaperIcon,
  PhoneIcon,
  HeartHandshake,
} from "lucide-react";

const supportLinks = [
    {
      name: "Sales",
      href: "#",
      description:
        "Need help choosing the best dog or cat food for your furry friend? Our sales team is ready to assist you with recommendations tailored to your pet's needs.",
      icon: PhoneIcon,
    },
    {
      name: "Technical Support",
      href: "#",
      description:
        "Experiencing issues with your pet products or need assistance? Our technical support team is here to help you troubleshoot and ensure your satisfaction.",
      icon: HeartHandshake,
    },
    {
      name: "Media Inquiries",
      href: "#",
      description:
        "For press releases, partnerships, or media-related questions about our pet shop, please reach out to our media relations team for more information.",
      icon: NewspaperIcon,
    },
  ];
  

const faqs = [
    {
      id: 1,
      question: "What types of dog and cat food do you offer?",
      answer:
        "We provide a wide range of premium dog and cat food options, including dry kibble, wet food, and specialty diets tailored to meet your pet's nutritional needs.",
    },
    {
      id: 2,
      question: "Do you have toys suitable for both dogs and cats?",
      answer:
        "Absolutely! We carry a variety of toys designed for both dogs and cats, ensuring hours of fun and engagement for your furry friends.",
    },
    {
      id: 3,
      question: "Are your pet foods made with natural ingredients?",
      answer:
        "Yes, we prioritize high-quality, natural ingredients in our pet food selections to promote health and well-being for your pets.",
    },
    {
      id: 4,
      question: "Can you recommend toys for my puppy?",
      answer:
        "For puppies, we suggest soft, durable toys that are gentle on their teeth and encourage safe play. Our team can help you choose the best options!",
    },
    {
      id: 5,
      question: "What should I consider when choosing food for my cat?",
      answer:
        "When selecting cat food, consider your cat's age, dietary preferences, and any specific health concerns. Our staff can guide you in making the right choice.",
    },
    {
      id: 6,
      question: "Do you offer any special promotions on pet food and toys?",
      answer:
        "Yes, we frequently run promotions and discounts on our pet food and toys. Be sure to check our website or visit us in-store for the latest deals!",
    },
  ];
  
export default function Contact() {
  return (
    <div>
      <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="py-24 sm:py-32">
          <div className="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-4xl leading-10 font-extrabold tracking-tight text-gray-900 text-center sm:text-5xl sm:leading-none lg:text-6xl">
              Get in touch
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl leading-normal text-gray-500 text-center">
            Have questions about our selection of dog and cat food or toys? We are here to help! Reach out to us for personalized recommendations and support tailored to your pet needs.
            </p>
          </div>
        </div>

        {/* Cards */}
        <section
          className="max-w-md mx-auto relative z-10 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
          aria-labelledby="contact-heading"
        >
          <h2 className="sr-only" id="contact-heading">
            Contact us
          </h2>
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
            {supportLinks.map((link) => (
              <div
                key={link.name}
                className="flex flex-col bg-white rounded-2xl shadow-xl"
              >
                <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                  <div className="absolute top-0 p-5 inline-block bg-orange-600 rounded-xl shadow-lg transform -translate-y-1/2">
                    <link.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-blue-gray-900">
                    {link.name}
                  </h3>
                  <p className="mt-4 text-base text-blue-gray-500">
                    {link.description}
                  </p>
                </div>
                <div className="p-6 bg-blue-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                  <a
                    href={link.href}
                    className="text-base font-medium text-orange-700 hover:text-orange-600"
                  >
                    Contact us<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section
          className="max-w-md mx-auto py-24 px-4 divide-y-2 divide-blue-gray-200 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8"
          aria-labelledby="faq-heading"
        >
          <h2
            className="text-3xl font-extrabold text-blue-gray-900"
            id="faq-heading"
          >
            Frequently asked questions
          </h2>
          <div className="mt-6 pt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="text-lg font-medium text-blue-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-blue-gray-500">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="relative bg-white" aria-labelledby="join-heading">
        <div
          className="hidden absolute inset-x-0 h-1/2 bg-blue-gray-50 lg:block"
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto bg-orange-600 lg:bg-transparent lg:px-8">
          <div className="lg:grid lg:grid-cols-12">
            <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
              <div
                className="absolute inset-x-0 h-1/2 bg-blue-gray-50 lg:hidden"
                aria-hidden="true"
              />
              <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                  <img
                    className="object-cover object-center rounded-3xl shadow-2xl"
                    src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="relative bg-orange-600 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
              <div
                className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-orange-500"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
                <svg
                  className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-orange-500"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
              </div>
              <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                <h2
                  className="text-3xl font-extrabold text-white"
                  id="join-heading"
                >
                  Join our team
                </h2>
                <p className="text-lg text-white">
                  Join our team to experience a supportive environment that
                  fosters growth and creativity. We prioritize collaboration and
                  innovation, ensuring everyone can thrive and contribute to our
                  shared success.
                </p>
                <a
                  className="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-orange-700 hover:bg-orange-600 sm:inline-block sm:w-auto"
                  href="#"
                >
                  Explore open positions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        className="max-w-md mx-auto py-24 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8 lg:flex lg:items-center"
        aria-labelledby="newsletter-heading"
      >
        <div className="lg:w-0 lg:flex-1">
          <h2
            className="text-3xl font-extrabold text-blue-gray-900 sm:text-4xl"
            id="newsletter-heading"
          >
            Sign up for our newsletter
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-blue-gray-500">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form className="sm:flex">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email-address"
              type="email"
              autoComplete="email"
              required
              className="w-full px-5 py-3 border border-orange-300 shadow-sm placeholder-blue-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs rounded-md"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-label="Notify me for updates"
              >
                Notify me
              </button>
            </div>
          </form>
          <p className="mt-3 text-sm text-blue-gray-500">
            We care about the protection of your data. Read our <span aria-hidden="true"> &rarr;</span>
            <a href="#" className="font-medium underline" aria-label="View our Privacy Policy">
              Privacy Policy.
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
