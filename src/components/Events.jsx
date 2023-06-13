import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../utils/appwrite";
import Login from "./Login";
import { Link } from "react-router-dom";

function Events() {
  const navigate = useNavigate();
  const [user, setuser] = useState();

  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
        console.log(response);
        setuser(response);
      },
      function (err) {
        console.log(err);
      }
    );
  }, []);

  const logoutUser = async () => {
    try {
      await account.deleteSession("current");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const data = [
    {
      img: "https://secure.meetupstatic.com/photos/event/4/f/1/6/event_513560246.jpeg",
      date: "FriDay 9th June 2023 2:15",
      des: "Come Join us for the most beaautiful organisational comittie event :)",
    },
    {
      img: "https://secure.meetupstatic.com/photos/event/4/f/1/6/event_513560246.jpeg",
      date: "FriDay 9th June 2023 2:15",
      des: "Come Join us for the most beaautiful organisational comittie event :)",
    },
    {
      img: "https://secure.meetupstatic.com/photos/event/4/f/1/6/event_513560246.jpeg",
      date: "FriDay 9th June 2023 2:15",
      des: "Come Join us for the most beaautiful organisational comittie event :)",
    },
    {
      img: "https://secure.meetupstatic.com/photos/event/4/f/1/6/event_513560246.jpeg",
      date: "FriDay 9th June 2023 2:15",
      des: "Come Join us for the most beaautiful organisational comittie event :)",
    },
  ];

  return (
    <>
      {user ? (
        <>
          <div className="flex justify-end pt-4 pr-4">
            <button
              className="bg-[#576CBC] btn rounded-xl text-white"
              onClick={logoutUser}
            >
              Logout
            </button>
          </div>
          <div className="text-center p-2 pb-14">
            <h1 className="text-5xl font-[700]">Events</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {data.map((item) => (
              <a href={`/event/${item.date}`}>
                <div class="flex flex-col items-center space-y-2 px-6 shadow-md">
                  <div class="mt-3 md:mt-0 i9prqz1">
                    <img
                      className="rounded-t-lg"
                      src={item.img}
                      alt="img"
                      max-width="100%"
                      height="auto"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-between w-full h-full p-3">
                    <div className="flex justify-between md:items-center flex-col-reverse md:flex-row">
                      <div className="flex flex-col uppercase text-sm leading-5 tracking-tight text-darkGold font-medium pb-1 pt-1 line-clamp-1 lg:line-clamp-2">
                        FriDay 9th June 2023 2:15
                      </div>
                    </div>
                    <p className="text-gray7 font-medium text-base pt-0 pb-1 line-clamp-3 xs:h-auto">
                      {item.des}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default Events;
