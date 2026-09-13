import React from 'react';

const Banner = () => {
    return (
        // <div className="min-h-[100vh] bg-base-200 my-6 flex-col justify-center items-center gap-4">
        //     <h2 className='font-bold text-4xl'>Build Your Ideal <br></br>
        //         Development Stack </h2>

        // </div>
         <section className="bg-gray-50 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 lg:flex-row lg:px-8">

        {/* Left Content */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl font-bold leading-tight text-gray-900">
            Build Your Ideal Development Stack
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Explore frontend, backend, database, and tooling options to
            create a custom technology stack.
          </p>

          <div className="mt-6 flex justify-center gap-4 lg:justify-start">
            <button className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
              Explore Technologies
            </button>

            <button className="rounded-lg bg-gray-200 px-6 py-3 text-gray-800 transition hover:bg-gray-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="mt-10 lg:ml-12 lg:mt-0">
          <img
            src="/illustration.png"
            alt="Stack Illustration"
            className="h-auto w-96"
          />
        </div>

      </div>
    </section>
    );
};

export default Banner;