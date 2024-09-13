import Image from "next/image";

const service = () => {
  return (
    <div className="w-full px-8 py-8 lg:py-14">
      <div className="container mx-auto flex flex-col gap-14">
        <div className="flex flex-col items-center">
          <Image
            src="/service-image.png"
            width={100}
            height={100}
            alt="service icon"
          />
          <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            <span className="text-orange-500">What your pet needs,</span> when
            they need it.
          </h2>
        </div>
      </div>
      <div className="mt-8 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
        <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div className="relative space-y-8 py-12 p-8">
            <Image
              src="/service-icon-1.png"
              className="w-12"
              width="512"
              height="512"
              alt="burger illustration"
            />

            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                Free Same-Day Delivery
              </h5>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Order by 2pm local time to get free delivery on orders $35+
                today.
              </p>
            </div>
          </div>
        </div>
        <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div className="relative space-y-8 py-12 p-8">
            <Image
              src="/service-icon-2.png"
              className="w-12"
              width="512"
              height="512"
              alt="burger illustration"
            />

            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                30 Day Return
              </h5>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                35% off your first order plus 5% off all future orders.
              </p>
            </div>
          </div>
        </div>
        <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div className="relative space-y-8 py-12 p-8">
            <Image
              src="/service-icon-3.png"
              className="w-12"
              width="512"
              height="512"
              alt="burger illustration"
            />

            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                Security payment
              </h5>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                25% off your online order of $50+. Available at most locations.
              </p>
            </div>
          </div>
        </div>
        <div className="group relative bg-white dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div className="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
            <Image
              src="/service-icon-4.png"
              className="w-12"
              width="512"
              height="512"
              alt="burger illustration"
            />

            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                24/7 Support
              </h5>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Shop online to get orders over $35 shipped fast and free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default service;
