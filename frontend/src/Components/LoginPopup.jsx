import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const LoginPopup = ({ setShowPopup }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [login, setlogin] = useState(true);
  const url = "http://localhost:3000";
  // toggle login state
  const handleLogin = () => {
    setlogin(!login);
  };
  // onchange fields
  const onChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData((data) => ({ ...data, [name]: value }));
  };
  //onsubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (login === true) {
      newUrl += "/user/login";
    } else {
      newUrl += "/user/signup";
    }
    console.log(userData);
    try {
      const res = await axios.post(newUrl, userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log(res.data);
      if (res.status === 200) {
        // setToken(res.data.token);
        // localStorage.setItem("token", res.data.token);
        setShowPopup(false); // popup will close when success
        toast.success(
          login ? "Login Successful!" : "Registration Successfully!"
        );
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      toast.error(`${errorMessage}`);
    }
  };
  return (
    <div className="absolute z-1  w-full h-full grid">
      <div className="place-self-center border-1 border-black rounded-2xl w-96 flex flex-col gap-6 p-6 bg-white text-black dark:text-white dark:bg-slate-700">
        <form onSubmit={handleSubmit}>
          <div>
            <a
              onClick={() => setShowPopup(false)}
              className="flex items-end justify-end cursor-pointer"
            >
              ✕
            </a>
            <h3 className="font-bold text-3xl text-center">
              {login ? "Login" : "Register"}
            </h3>
          </div>
          <div>
            {login ? null : (
              <div>
                <p className="py-4">Name</p>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={onChangeHandler}
                  placeholder="Enter name"
                  className="w-full border rounded-sm py-1.5 px-2"
                />
              </div>
            )}
            <p className="py-4">Email</p>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={onChangeHandler}
              placeholder="mail@gmail.com"
              className="w-full border rounded-sm py-1.5 px-2"
            />
          </div>
          <div>
            <p className="py-4">Password</p>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={onChangeHandler}
              placeholder="Enter password"
              className="w-full border rounded-sm py-1.5 px-2"
            />
          </div>
          <button className="border-none rounded-sm py-2 px-6 mt-6 mb-4 bg-blue-600 text-white">
            {login ? "Login" : "Register"}
          </button>
          <div>
            <p>
              {login ? "Not registered ? " : "Already have an account . "}
              <a
                onClick={handleLogin}
                className="text-blue-600 cursor-pointer hover:text-blue-400"
              >
                {login ? "signUp" : "login here"}
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginPopup;
