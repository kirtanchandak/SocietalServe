import React from "react";

function Meetup() {
  return (
    <div>
      <div className="text-center py-4 sm:py-8">
        <h1 className="text-3xl font-[700]">How SocietalServe Works?</h1>
        <p class="text-center w-full sm:w-1/3 lg:w-1/2 mb-10 mx-auto">
          Meet new people who share your interests through online and in-person
          events. It’s free to create an account.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div class="flex flex-col items-center space-y-2 px-6">
            <div class="mt-3 md:mt-0 i9prqz1">
              <img
                src="https://secure.meetupstatic.com/next/images/shared/handsUp.svg?w=384"
                alt="img"
                width="160"
                height="151"
                loading="lazy"
              />
            </div>
            <div class="text-center">
              <a href="/">
                <h3 class="font-semibold text-xl mb-3">Join a group</h3>
              </a>
              <p class="text-sm text-center font-normal text-gray7">
                Do what you love, meet others who love it, find your community.
                The rest is history!
              </p>
            </div>
          </div>
          <div class="flex flex-col items-center space-y-2 px-6">
            <div class="mt-3 md:mt-0 i9prqz1">
              <img
                src="https://secure.meetupstatic.com/next/images/shared/handsUp.svg?w=384"
                alt="img"
                width="160"
                height="151"
                loading="lazy"
              />
            </div>
            <div class="text-center">
              <a href="/">
                <h3 class="font-semibold text-xl mb-3">Join a group</h3>
              </a>
              <p class="text-sm text-center font-normal text-gray7">
                Do what you love, meet others who love it, find your community.
                The rest is history!
              </p>
            </div>
          </div>
          <div class="flex flex-col items-center space-y-2 px-6">
            <div class="mt-3 md:mt-0 i9prqz1">
              <img
                src="https://secure.meetupstatic.com/next/images/shared/handsUp.svg?w=384"
                alt="img"
                width="160"
                height="151"
                loading="lazy"
              />
            </div>
            <div class="text-center">
              <a href="/">
                <h3 class="font-semibold text-xl mb-3">Join a group</h3>
              </a>
              <p class="text-sm text-center font-normal text-gray7">
                Do what you love, meet others who love it, find your community.
                The rest is history!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meetup;
