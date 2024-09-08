import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="relative w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-7 2xl:px-16">
        <Link
          href="/"
          className="flex flex-row justify-around hover:text-indigo-900 transition-all"
        >
          <img
            src="https://res.cloudinary.com/atharva7/image/upload/v1671376589/samples/iste_logo_thwbwl.jpg"
            alt="ISTE_Logo"
            className="w-16 h-16 object-cover rounded-full cursor-pointer"
          />
          <h1 className="text-3xl cursor-pointer flex items-center ml-4">
            ISTE-VESIT
          </h1>
        </Link>

        <div>
          <ul className="hidden md:flex ">
            {/* <Link href='/' className='invisible ml-10 text-md font-bold uppercase'>
                        Home
                    </Link> */}
            <Link href="/">
              <li className="font-bold ml-10 text-md uppercase hover:text-indigo-900 transition-all">
                Home
              </li>
            </Link>
            <Link href="/events">
              <li className="font-bold ml-10 text-md uppercase hover:text-indigo-900 transition-all">
                Events
              </li>
            </Link>
            <Link href="/council">
              <li className="font-bold ml-10 text-md uppercase hover:text-indigo-900 transition-all">
                Council
              </li>
            </Link>
            <Link href="/timeline">
              <li className="font-bold ml-10 text-md uppercase hover:text-indigo-900 transition-all">
                Timeline
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] py-10 px-6 ease-in duration-500"
              : "hidden"
          }
        >
          <div>
            <div className="flex w-full items-center h-20 justify-between">
              <Link href="/" className="flex flex-row">
                <img
                  src="https://res.cloudinary.com/atharva7/image/upload/v1671376589/samples/iste_logo_thwbwl.jpg"
                  alt="ISTE_Logo"
                  className="w-24 h-24 object-cover rounded-full pt-1 cursor-pointer"
                />
                {/* <h1 className="text-4xl">Portfolio</h1> */}
              </Link>

              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose size={15} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              {/* <p className="w-[100%] md:w-[90%] py-2">
                Let's build something legendary
              </p> */}
            </div>
          </div>
          <div>
            <ul className="uppercase font-bold">
              <Link href="/">
                <li className="py-4 text-md">Home</li>
              </Link>
              <Link href="/events">
                <li className="py-4 text-md">Events</li>
              </Link>
              <Link href="/council">
                <li className="py-4 text-md">Council</li>
              </Link>
              <Link href="/timeline">
                <li className="py-4 text-md">Timeline</li>
              </Link>
            </ul>
            <div className="pt-[40%]">
              <p className="uppercase tracking widest text-[#5651e5]">
                Let&apos;s connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link
                  href="https://github.com/ISTE-VESIT-ORG"
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  target="_blank"
                >
                  <FaGithub size={18} />
                </Link>
                <Link
                  href="https://www.instagram.com/iste_vesit/"
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  target="_blank"
                >
                  <FaInstagram size={18} />
                </Link>
                <Link
                  href="https://twitter.com/iste_vesit"
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  target="_blank"
                >
                  <FaTwitter size={18} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/iste-vesit/mycompany/"
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  target="_blank"
                >
                  <FaLinkedin size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
