import React from "react";
import { Link } from "react-router-dom";
import Features from "../Components/Features";
import Footer from "../Components/Footer";
import ImgCards from "../Components/ImgCards";
import Navbar from "../Components/Navbar";

function Landing() {
  return (
    <div>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          {/* Navbar */}
          <div>
            <header className="flex justify-between items-center py-4 md:py-8 mb-4">
              {/* logo - start */}
              <a
                href="/"
                className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"
                aria-label="logo"
              >
                <svg
                  width={95}
                  height={94}
                  viewBox="0 0 95 94"
                  className="w-6 h-auto text-yellow-500"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                </svg>
                HostelEase
              </a>
              {/* logo - end */}
              {/* nav - start */}
              <nav className="hidden lg:flex gap-12">
                <a href="#" className="text-yellow-500 text-lg font-semibold">
                  Home
                </a>
                <a
                  href="#feature"
                  className="text-gray-600 hover:text-yellow-500 active:text-yellow-700 text-lg font-semibold transition duration-100"
                >
                  Features
                </a>
                <a
                  href="#photos"
                  className="text-gray-600 hover:text-yellow-500 active:text-yellow-700 text-lg font-semibold transition duration-100"
                >
                  Photos
                </a>
                <a
                  href="#photos"
                  className="text-gray-600 hover:text-yellow-500 active:text-yellow-700 text-lg font-semibold transition duration-100"
                >
                  Location
                </a>
              </nav>
              {/* nav - end */}
              {/* buttons - start */}
              <Link to="/login">
                <a className="hidden lg:inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-yellow-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                  Book Hostel
                </a>
              </Link>

              <button
                type="button"
                className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-yellow-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Menu
              </button>
              {/* buttons - end */}
            </header>
          </div>
          {/* Navbar Ends */}

          <section className="min-h-96 flex justify-center items-center flex-1 shrink-0 bg-gray-100 overflow-hidden shadow-lg rounded-lg relative py-16 md:py-20 xl:py-48">
            <img
              src="https://mbcet.ac.in/wp-content/uploads/2019/05/BROCHURE-HOSTEL-0011-1024x624.jpg"
              loading="lazy"
              className="w-full h-full object-cover object-center absolute inset-0"
            />

            <div className="bg-gray-500 mix-blend-multiply absolute inset-0" />

            <div className="sm:max-w-xl flex flex-col items-center relative p-4">
              <p className="text-yellow-200 text-lg sm:text-xl text-center mb-4 md:mb-8">
                Very proud to introduce
              </p>
              <h1 className="text-white text-4xl sm:text-5xl md:text-5xl font-bold text-center mb-8 md:mb-12">
                Revolutionary way to Manage Hostel Life
              </h1>
              <div className="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
                <Link to="/login">
                  <a className="inline-block bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 focus-visible:ring ring-yellow-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                    Login
                  </a>
                </Link>

                <Link to="/register">
                  <a className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-yellow-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                    Register
                  </a>
                </Link>
              </div>
            </div>
            {/* text end */}
          </section>
        </div>
      </div>

      {/* Feature */}
      <div>
        <div className="bg-white py-6 sm:py-8 lg:py-12 h-full" id="feature">
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto flex flex-col justify-evenly items-center">
            {/* text - start */}
            <div className="mb-10 md:mb-16">
              <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                Our competitive Features
              </h2>
              <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
                Features of a college hostel can vary depending on the
                institution and location, but here are our competitive Features:
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
                    infirmary, where students can receive basic medical
                    attention.
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
      {/* Feature */}
      {/* Photos */}
      <div>
        <div className="bg-white py-6 sm:py-8 lg:py-12" id="photos">
          <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12">
              Hostel Images
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {/* product - start */}
              <div>
                <a
                  href="#"
                  className="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
                >
                  <img
                    src="https://pix10.agoda.net/hotelImages/5041809/-1/0edb5844ce9fc4f7c5b2bde0e0d526e0.jpg?ca=8&ce=1&s=1024x768"
                    loading="lazy"
                    alt="HostelEase reception"
                    className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                  />
                  <div className="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
                    <span className="text-gray-500">01</span>
                    <span className="text-gray-800 text-lg lg:text-xl font-bold">
                      Reception
                    </span>
                  </div>
                </a>
              </div>
              {/* product - end */}
              {/* product - start */}
              <div>
                <a
                  href="#"
                  className="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
                >
                  <img
                    src="https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202205/iim_v-x800.jpg?wVdCvLsG4Sl1oJvrcCRUjmFAa.1PBh9Z"
                    loading="lazy"
                    alt="HostelEase rooms"
                    className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                  />
                  <div className="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
                    <span className="text-gray-500">02</span>
                    <span className="text-gray-800 text-lg lg:text-xl font-bold">
                      Hostel Rooms
                    </span>
                  </div>
                </a>
              </div>
              {/* product - end */}
              {/* product - start */}
              <div>
                <a
                  href="#"
                  className="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
                >
                  <img
                    src="https://live.staticflickr.com/7283/8738124549_3dc6effc7f_b.jpg"
                    loading="lazy"
                    alt="Ground"
                    className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                  />
                  <div className="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
                    <span className="text-gray-500">03</span>
                    <span className="text-gray-800 text-lg lg:text-xl font-bold">
                      PlayGround
                    </span>
                  </div>
                </a>
              </div>
              {/* product - end */}
              {/* product - start */}
              <div>
                <a
                  href="#"
                  className="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
                >
                  <img
                    src="http://www.thapar.edu/images/hostel/hostelA2.jpg"
                    loading="lazy"
                    alt="Mess IMG"
                    className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                  />
                  <div className="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
                    <span className="text-gray-500">04</span>
                    <span className="text-gray-800 text-lg lg:text-xl font-bold">
                      Mess
                    </span>
                  </div>
                </a>
              </div>
              {/* product - end */}
            </div>
          </div>
        </div>
      </div>
      {/* Photos */}

      <Footer></Footer>
    </div>
  );
}

export default Landing;
