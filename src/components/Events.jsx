import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../utils/appwrite";
import Login from "./Login";

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
  return (
    <>
      {user ? (
        <div className="text-center p-6">
          <button className="bg-red-200" onClick={logoutUser}>
            Logout
          </button>
          <h1 className="text-3xl font-[700]">Events</h1>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default Events;
