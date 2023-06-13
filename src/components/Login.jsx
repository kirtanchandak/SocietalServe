import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../utils/appwrite";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await account.createEmailSession(user.email, user.password);
      navigate("/events"); //Success
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="text-center p-20">
      <h1 className="text-3xl font-[700]">Login</h1>
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
      <button className="mt-4 bg-red-300" onClick={loginUser}>
        Login
      </button>
    </div>
  );
}

export default Login;
