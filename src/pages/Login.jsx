import React, { useEffect, useState } from "react";
import { animal, eyeImage } from "../assets";
import { Footer } from "../components";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function loginValidation() {}

  function handleLogin(e) {
    e.preventDefault();

    navigate("/");
  }

  return (
    <div>
      <div className="flex flex-row min-h-screen pl-4 pr-24 items-center justify-center gap-16 bg-[#FFF8F5]">
        {/* ilustrasi */}
        <img src={animal} alt="ilustration" className="w-[50%]" />

        {/* login */}
        <div className="flex flex-col justify-center bg-white rounded-lg">
          <form
            onSubmit={handleLogin}
            className="flex flex-col w-[30.875rem] h-[35.5rem] py-12 px-[4.5rem] justify-center items-center gap-8"
          >
            <div className="text-center font-semibold text-[1.75rem]">
              PawPet
            </div>
            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-3">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  value={username}
                  id="username"
                  onChange={(e) => SetUsername(e.target.value)}
                  placeholder="Enter your username"
                  className="border border-[#BEBEBF] rounded-md h-12 px-4 hover:border-[#E0EFFE] focus:border-[#E0EFFE] focus:border-[3px] focus:outline-none"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="Password">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    id="password"
                    onChange={(e) => SetPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="border border-[#BEBEBF] rounded-md h-12 px-4 hover:border-[#E0EFFE] focus:border-[#E0EFFE] focus:border-[3px] focus:outline-none w-full"
                  />
                  <button
                    onClick={togglePasswordVisibility}
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    <img
                      src={eyeImage}
                      alt=""
                      className="focus:outline-none w-6 h-6"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 w-full items-center">
              <button
                type="submit"
                className="h-[3.25rem] w-full bg-[#598AC1] text-center text-white rounded-lg"
              >
                Login
              </button>


              <div className="font-normal text-[1rem] text-[#BEBEBF]">
                Don't Have An Account?{" "}
                <NavLink to="/register" className="text-[#598AC1]">
                  Sign Up
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Login;
