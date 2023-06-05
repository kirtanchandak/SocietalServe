import React from "react";

function Hero() {
  return (
    <div className="flex items-center justify-center px-5 mt-4">
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <div className="flex flex-col lg:w-1/2">
          <h1 className="font-[800] text-3xl">
            The people platform—Where interests become friendships
          </h1>
          <p className="pt-5">
            Whatever your interest, from hiking and reading to networking and
            skill sharing, there are thousands of people who share it on Meetup.
            Events are happening every day—sign up to join the fun.
          </p>
        </div>
        <div className="flex lg:w-1/2 w-5/6">
          <img
            src="https://secure.meetupstatic.com/next/images/shared/online_events.svg?w=1080"
            alt=""
            srcset=""
            className="w-[300px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
