import React from "react";
import { data } from "../../utils/data";
import { Link } from "react-router-dom";
import search from "../../assets/search.png";
import signup from "../../assets/signup.png";
import attend from "../../assets/attend.png";
import heroImg from "../../assets/World Humanitarian Day-pana.png";

function Hero() {
  return (
    <div className="mx-auto px-4 sm:px-20 mt-8">
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <div className="flex flex-col lg:w-1/2">
          <h1 className="text-3xl sm:text-5xl font-bold">
            Unite for a Better World: Connecting Communities, Transforming
            Society
          </h1>
          <p className="pt-5 text-md">
            Whatever your interest, from hiking and reading to networking and
            skill sharing, there are thousands of people who share it on Meetup.
            Events are happening every day—sign up to join the fun.
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
          <img src={heroImg} alt="" srcset="" className="w-full mt-10" />
        </div>
      </div>
      <div className="py-10">
        <div className="text-center py-4 sm:py-8">
          <h1 className="text-3xl font-[700]">How SocietalServe Works?</h1>
          <p class="text-center w-full sm:w-1/3 lg:w-1/2 mb-10 mx-auto">
            Meet new people who share your interests and contribute to the
            society by participating in drives. events. It’s free to create an
            account.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div class="flex flex-col items-center space-y-2 px-6">
              <div class="mt-3 md:mt-0 i9prqz1">
                <img
                  src={search}
                  alt="img"
                  width="160"
                  height="151"
                  loading="lazy"
                />
              </div>
              <div class="text-center">
                <a href="/">
                  <h3 class="font-semibold text-xl mb-3">
                    Search for an Event
                  </h3>
                </a>
                <p class="text-sm text-center font-normal text-gray7">
                  Search for an event in your area. For eg. garbage collection
                  drives, blood donation camps, etc. You can find almost
                  anything
                </p>
              </div>
            </div>
            <div class="flex flex-col items-center space-y-2 px-6">
              <div class="mt-3 md:mt-0">
                <img
                  src={signup}
                  alt="img"
                  width="160"
                  height="151"
                  loading="lazy"
                />
              </div>
              <div class="text-center">
                <a href="/">
                  <h3 class="font-semibold text-xl mb-3">
                    Register for the event
                  </h3>
                </a>
                <p class="text-sm text-center font-normal text-gray7">
                  Find an imapcful event to contribute and enjoy a day of
                  hands-on conservation. Help make a difference and create a
                  positive impact on our planet!
                </p>
              </div>
            </div>
            <div class="flex flex-col items-center space-y-2 px-6">
              <div class="mt-3 md:mt-0 i9prqz1">
                <img
                  src={attend}
                  alt="img"
                  width="160"
                  height="151"
                  loading="lazy"
                />
              </div>
              <div class="text-center">
                <a href="/">
                  <h3 class="font-semibold text-xl mb-3">Attend the Event</h3>
                </a>
                <p class="text-sm text-center font-normal text-gray7">
                  Once, registered the NGO will check the fullfillments and
                  confirm your registration and enjoy the event! Congrats now
                  you can attend!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 px-6">
        <div className=" flex justify-between items-center py-10">
          <h2 className="font-semibold md:font-bold md:text-3xl text-xl">
            Upcoming Events
          </h2>
          <p className="block">Explore more events</p>
        </div>
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {data.map((item) => (
              <Link to="/login">
                <div class="flex flex-col items-center space-y-2 px-6 shadow-md">
                  <div class="mt-3 md:mt-0">
                    <img
                      className="rounded-lg"
                      src={item.img}
                      alt="img"
                      width="300px"
                    />
                  </div>
                  <div className="flex flex-col justify-between w-full h-full p-3">
                    <div className="text-xl font-[700]">{item.title}</div>
                    <div className="flex justify-between md:items-center flex-col-reverse md:flex-row">
                      <div className="flex flex-col uppercase text-sm leading-5 tracking-tight text-darkGold font-medium pb-1 pt-1 line-clamp-1 lg:line-clamp-2">
                        FriDay 9th June 2023 2:15
                      </div>
                    </div>
                    <p className="text-gray7 font-medium text-base pt-0 pb-1 line-clamp-3 xs:h-auto">
                      {item.des}
                    </p>
                    <button className="bg-[#576CBC] rounded-lg btn mt-2 text-white">
                      Join Now
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
