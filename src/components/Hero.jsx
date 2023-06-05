import React from "react";

function Hero() {
  return (
    <div className="mx-auto px-4 sm:px-20">
      <div className="flex items-center justify-center mt-4">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <div className="flex flex-col lg:w-1/2">
            <h1 className="text-3xl sm:text-5xl font-bold">
              The people platform—Where interests become friendships
            </h1>
            <p className="pt-5 text-md">
              Whatever your interest, from hiking and reading to networking and
              skill sharing, there are thousands of people who share it on
              Meetup. Events are happening every day—sign up to join the fun.
            </p>
            <div>
              <a
                className="bg-[#576CBC]  inline-block  hover:no-underline btn rounded-md mt-4 text-white font-medium"
                href="/"
              >
                Join Meetup
              </a>
            </div>
          </div>
          <div className="flex lg:w-1/2 w-5/6">
            <img
              src="https://secure.meetupstatic.com/next/images/shared/online_events.svg?w=1080"
              alt=""
              srcset=""
              className="w-full py-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
