import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center gap-10 px-5 py-16 sm:px-6 lg:flex-row lg:justify-between lg:gap-12 lg:px-8 lg:py-20">

        {/* Left Content */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Build Your Ideal Development Stack
          </h1>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Explore frontend, backend, database, and tooling options to
            create a custom technology stack.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#technologies"
              className="rounded-lg bg-blue-600 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Explore Technologies
            </a>

            <button className="rounded-lg bg-gray-200 px-6 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md">
          <img
            src={BannerImage}
            alt="Stack Illustration"
            className="h-auto w-full object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;