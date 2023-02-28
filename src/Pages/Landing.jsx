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
          <Navbar></Navbar>
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
      <Features></Features>
      <ImgCards></ImgCards>
      <Footer></Footer>
    </div>
  );
}

export default Landing;
