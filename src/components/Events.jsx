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
      img: "https://earth5r.org/wp-content/uploads/2020/07/Clean-Up-Drive-Gandhinagar-Mumbai-India-Environmental-NGO-Earth5R.jpg",
      title: "Garbage collection Drive",
      date: "FriDay 9th June 2023 2:15",
      des: "Come Join us for the most beaautiful organisational comittie event :)",
    },
    {
      img: "https://www.bookeventz.com/blog/wp-content/uploads/2021/02/FI-1.jpg",
      date: "FriDay 9th June 2023 2:15",
      title: "Food Distribution Drive",
      des: "Come Join us for the most beaautiful organisational comittie event :)",
    },
    {
      img: "https://s3.amazonaws.com/RIProjects/PRDImages/6c832125-74dd-402c-a085-6468b71537f9-2bc186dc-dd1c-429d-8b92-978a2bdc9e7d-21a97658-f16b-487b-bb54-fea7f9713e8c-65129314-0-MainPhoto",
      date: "FriDay 9th June 2023 2:15",
      title: "Blood Donation Camp",
      des: "Come Join us for the most beaautiful organisational comittie event :)",
    },
    {
      img: "https://ratnanidhi.org/userfile/image/Webp%20images/001F.webp",
      date: "FriDay 9th June 2023 2:15",
      title: "Clothes Distribution Drive",
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
              <Link to={`/event/${item.title}`}>
                <div class="flex flex-col items-center space-y-2 px-6 shadow-md">
                  <div class="mt-3 md:mt-0 i9prqz1">
                    <img
                      className="rounded-t-lg"
                      src={item.img}
                      alt="img"
                      max-width="100%"
                      height="100%"
                      loading="lazy"
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
                  </div>
                </div>
              </Link>
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
