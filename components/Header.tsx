"use client";
import React, { useState } from "react";
import { images } from "../constants/index";
import Image from "next/image";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 ">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only text">Your Company</span>
            <Image src={images.Logo} width={100} height={100} alt="logo" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setOpenMenu(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            About Us
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Projects
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Services
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Contacts Us
          </a>
        </div>
      </nav>

      {openMenu && (
        <div className="" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image src={images.Logo} width={100} height={100} alt="logo" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setOpenMenu(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="flex flex-col space-y-2 py-6">
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    About Us
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Contacts Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
