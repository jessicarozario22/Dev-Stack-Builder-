import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section>
      <div className="mx-auto flex min-h-[70vh] max-w-[1550px] flex-col items-center justify-center gap-10 px-5 py-16 sm:px-6 lg:flex-row lg:justify-between lg:gap-12 lg:px-8 lg:py-20">

        {/* Left Content */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-5xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
            Build Your Ideal 
            <span className="text-6xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent"> Development Stack</span>
          </h1>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Explore frontend, backend, database, and tooling options to
            create a custom technology stack.
          </p>

          {/* Buttons */}  
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start ">
           
            <button><a
              href="#technologies"
              className="h-10 rounded-full bg-linear-60 from-orange-500 to-pink-500 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-pink-700 to bg-orange-700"
            >
              Explore Technologies
              </a>
            </button>

            <button className="h-10 justify-center rounded-full bg-gray-200 px-6 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-300">
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