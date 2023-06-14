import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../utils/appwrite";
import sendEmail from "../utils/sendmail";
import Login from "./Login";
import { Link } from "react-router-dom";
import { data } from "../utils/data";

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

  const handleSendEmail = () => {
    account
      .get()
      .then((response) => {
        const receiverEmail = response.email;

        sendEmail(receiverEmail);
        console.log("User email:", receiverEmail);
      })
      .catch((error) => {
        console.error("Error retrieving user data:", error);
      });
  };

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
              <Link to={`/event/${item.id}`}>
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
                    <button
                      className="bg-[#576CBC] rounded-lg btn mt-2 text-white"
                      onClick={handleSendEmail}
                    >
                      Join Now
                    </button>
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
