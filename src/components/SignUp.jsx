import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ID } from "appwrite";
import { account } from "../utils/appwrite";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const signUpUser = async (e) => {
    e.preventDefault();
    const promise = account.create(ID.unique(), user.email, user.password);
    promise.then(
      function (response) {
        console.log(response);
        navigate("/events"); //Success
      },
      function (error) {
        console.log(error); //Failure
      }
    );
  };
  return (
    <div className="text-center p-20">
      <h1 className="text-3xl font-[700]">SignUp</h1>
      <div>
        <h1>Email:</h1>
        <input
          type="email"
          className="solid border"
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        />
        <h1>Password:</h1>
        <input
          type="password"
          className="solid border"
          onChange={(e) =>
            setUser({
              ...user,
              password: e.target.value,
            })
          }
        />
      </div>
      <button className="mt-4 bg-red-300" onClick={signUpUser}>
        Create Account
      </button>
    </div>
  );
}

export default Login;
