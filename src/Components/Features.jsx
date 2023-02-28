import React from "react";

function Features() {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12 h-full">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto flex flex-col justify-evenly items-center">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Our competitive Features
            </h2>
            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              Features of a college hostel can vary depending on the institution
              and location, but here are our competitive Features:
            </p>
          </div>
          {/* text - end */}
          <div className="grid w-3/4  sm:grid-cols-2 xl:grid-cols-2 gap-8 md:gap-12 xl:gap-16">
            {/* feature - start */}
            <div className="flex gap-4 md:gap-6 ">
              <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-yellow-500 text-white rounded-lg md:rounded-xl shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Dining facilities
                </h3>
                <p className="text-gray-500 mb-2">
                  Our hostels offer dining facilities such as a cafeteria or
                  canteen where students can have their meals.
                </p>
                <a
                  href="#"
                  className="text-yellow-500 hover:text-yellow-600 active:text-yellow-700 font-bold transition duration-100"
                >
                  More
                </a>
              </div>
            </div>
            {/* feature - end */}
            {/* feature - start */}
            <div className="flex gap-4 md:gap-6">
              <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-yellow-500 text-white rounded-lg md:rounded-xl shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Security
                </h3>
                <p className="text-gray-500 mb-2">
                  Hostels are equipped with security features such as CCTV
                  cameras, security guards, and key card access to ensure the
                  safety of students.
                </p>
                <a
                  href="#"
                  className="text-yellow-500 hover:text-yellow-600 active:text-yellow-700 font-bold transition duration-100"
                >
                  More
                </a>
              </div>
            </div>
            {/* feature - end */}
            {/* feature - start */}
            <div className="flex gap-4 md:gap-6">
              <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-yellow-500 text-white rounded-lg md:rounded-xl shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Medical facilities
                </h3>
                <p className="text-gray-500 mb-2">
                  Our hostels have medical facilities such as a clinic or an
                  infirmary, where students can receive basic medical attention.
                </p>
                <a
                  href="#"
                  className="text-yellow-500 hover:text-yellow-600 active:text-yellow-700 font-bold transition duration-100"
                >
                  More
                </a>
              </div>
            </div>
            {/* feature - end */}
            {/* feature - start */}
            <div className="flex gap-4 md:gap-6">
              <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center shrink-0 bg-yellow-500 text-white rounded-lg md:rounded-xl shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Internet connectivity
                </h3>
                <p className="text-gray-500 mb-2">
                  Our hostels offer free Wi-Fi to their residents, enabling
                  students to access online resources and stay connected with
                  their families and friends.
                </p>
                <a
                  href="#"
                  className="text-yellow-500 hover:text-yellow-600 active:text-yellow-700 font-bold transition duration-100"
                >
                  More
                </a>
              </div>
            </div>
            {/* feature - end */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
