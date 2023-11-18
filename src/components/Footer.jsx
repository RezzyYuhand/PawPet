import React from "react";
import {
  instagramImage,
  facebookImage,
  twitterImage,
  linkedInImage,
} from "../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col h-[12.1875rem] w-min-screen bg-[#D0E4FF] pt-7 items-center">
      <div className="flex flex-row justify-center items-center gap-11">
        <Link
          to="#"
          className="flex w-[3.4rem] h-[3.4rem] rounded-[100%] bg-[#001D34] items-center justify-center"
        >
          <img src={instagramImage} alt="" className="w-[2.5rem] h-[2.5rem]" />
        </Link>
        <Link
          to="#"
          className="flex w-[3.4rem] h-[3.4rem] rounded-[100%] bg-[#001D34] items-center justify-center"
        >
          <img src={facebookImage} alt="" className="w-[2.5rem] h-[2.5rem]" />
        </Link>
        <Link
          to="#"
          className="flex w-[3.4rem] h-[3.4rem] rounded-[100%] bg-[#001D34] items-center justify-center"
        >
          <img src={twitterImage} alt="" className="w-[2.5rem] h-[2.5rem]" />
        </Link>
        <Link
          to="#"
          className="flex w-[3.4rem] h-[3.4rem] rounded-[100%] bg-[#001D34] items-center justify-center"
        >
          <img src={linkedInImage} alt="" className="w-[2.5rem] h-[2.5rem]" />
        </Link>
      </div>

      <div className="flex flex-row justify-center items-center gap-5 font-semibold mt-4 text-[1.5rem] text-[#001D34]">
        <Link to="#" className="">
          Home
        </Link>
        <p>|</p>
        <Link to="#" className="">
          About
        </Link>
        <p>|</p>
        <Link to="#" className="">
          Contact
        </Link>
        <p>|</p>
        <Link to="#" className="">
          Pet
        </Link>
        <p>|</p>
        <Link to="#" className="">
          Adoption
        </Link>
      </div>

      <div className="mt-2 text-[1.375rem]">© 2023 PawPet | All Rights Reserved</div>
    </div>
  );
};

export default Footer;
