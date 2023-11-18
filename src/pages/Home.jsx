import React, { useState } from "react";
import { arrow, cat1, cat2, dog1, homeImage1, pawpetLogo } from "../assets";
import { NavLink } from "react-router-dom";
import { Footer } from "../components";

const Home = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="flex flex-col justify-center">
      {/* navbar */}
      {/* <Navbar/> */}

      {/* Find your own pet */}
      <div className="flex flex-row pl-28 w-full gap-20 justify-between">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-[#7FA0C5] text-[3.5rem] pt-[14.5rem]">
            Find your Own Pet
          </h1>
          <p className="text-[#5A422D] text-[1.125rem]">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices.
          </p>
          <NavLink
            to="/"
            className="flex flex-row justify-center w-56 bg-[#2B7BBD] p-6 gap-2 text-white text-[1.375rem] rounded-[2.5rem]"
          >
            Get started <img src={arrow} alt="" />
          </NavLink>
        </div>
        <img
          src={homeImage1}
          alt=""
          className="w-[42rem] h-[40rem] pt-11 font-semibold text-[1.375rem]"
        />
      </div>

      {/* Welcome */}
      <div className="flex flex-col justify-center items-center gap-12 pt-40 pl-60 pr-48 pb-44">
        <div className="flex flex-col gap-9">
          <h1 className="font-bold text-[#7FA0C5] text-[3.5rem] text-center">
            Welcome
          </h1>
          <p className="text-[#5A422D] text-[1.125rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum sint occaecat
            cupidatat non proiden.
          </p>
        </div>

        <div className="flex flex-row">
          <div className="flex flex-col gap-9 w-1/2">
            <h1 className="font-bold text-[#7FA0C5] text-[3.5rem] text-center">
              About
            </h1>
            <p className="text-[#5A422D] text-[1.125rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.
            </p>
          </div>
          <img src={pawpetLogo} alt="" className="w-[30rem]" />
        </div>
      </div>

      {/* Explore the lovely pet */}
      <div className="flex flex-col bg-[#FFF8F5] py-20 px-28 items-center gap-12 ">
        <h1 className="font-bold text-[#7FA0C5] text-[3.5rem] text-center">
          Explore The Lovely Pet
        </h1>
        <div className="flex flex-row justify-between gap-9">
          <img src={cat1} alt="" className="w-[23.5rem] rounded-[1.5rem]" />
          <img src={dog1} alt="" className="w-[23.5rem] rounded-[1.5rem]" />
          <img src={cat2} alt="" className="w-[23.5rem] rounded-[1.5rem]" />
        </div>
        <NavLink
          to="/"
          className="w-auto bg-[#2B7BBD] px-14 py-6 gap-2 text-white text-[1.375rem] rounded-[2.5rem] shadow-xl"
        >
          Explore More
        </NavLink>
      </div>

      {/* Contact */}
      <div className="flex flex-col pt-12 pl-32 pr-9 pb-9 gap-[4.75rem] items-center">
        <h1 className="font-bold text-[#7FA0C5] text-[3.5rem] text-center">
          Contact
        </h1>
        <div className="flex flex-row">
          <div className="w-1/2 pt-[5.75rem]">
            <img src={pawpetLogo} alt="" className="w-[30rem]" />
          </div>
          <div className="flex flex-col w-1/2">
            <h2 className="font-bold text-[#00629F] text-[2.25rem]">
              Send us message through this form, for any information
            </h2>
            <form className="flex flex-col w-[38rem] items-end">
              <div className="flex flex-col gap-4 pt-6 pb-9">
                <label
                  htmlFor="email"
                  className="text-[1.75rem] font-semibold text-[#735943]"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  value={email}
                  id="username"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-[38rem] border border-[#BEBEBF] rounded-md h-12 px-4 hover:border-[#E0EFFE] focus:border-[#E0EFFE] focus:border-[3px] focus:outline-none"
                />

                <label
                  htmlFor="message"
                  className="text-[1.75rem] font-semibold text-[#735943]"
                >
                  Message
                </label>
                <textarea
                  value={message}
                  id="message"
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-[38rem] h-[12.5rem] py-2 border border-[#BEBEBF] rounded-md h-12 px-4 hover:border-[#E0EFFE] focus:border-[#E0EFFE] focus:border-[3px] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                className="max-w-fit bg-[#2B7BBD] px-8 py-3 gap-2 text-white text-[1.375rem] rounded-[2.5rem] shadow-xl"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer/>

    </div>
  );
};

export default Home;
