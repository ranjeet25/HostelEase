import React from "react";

function Register() {
  return (
    <div>
      <div className="px-12 shadow-md">
        <header className="flex justify-between items-center py-4 md:py-4 mb-4">
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
          <a
            href="#"
            className="hidden lg:inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-yellow-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
          >
            Login
          </a>
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
      <section className="flex flex-col justify-around  items-center w-[100%] h-[90vh] ">
        <form className="grid grid-cols-6 gap-4">
          <div className="col-span-3">
            <label
              htmlFor="FirstName"
              className="block text-xs font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="FirstName"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
            />
          </div>
          <div className="col-span-3">
            <label
              htmlFor="LastName"
              className="block text-xs font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="LastName"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
            />
          </div>
          {/* ROLE */}
          <div className="col-span-6">
            <label
              htmlFor="Email"
              className="block text-xs font-medium text-gray-700"
            >
              Select Role
            </label>
            <select
              id="Country"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              placeholder="Select Role"
            >
              <option>Student</option>
              <option>Admin</option>
              <option>Visitor</option>
            </select>
          </div>
          {/* EMAIL */}
          <div className="col-span-6">
            <label
              htmlFor="Email"
              className="block text-xs font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="Email"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
            />
          </div>
          {/* UNIQUE ID */}
          <div className="col-span-6">
            <label
              htmlFor="Email"
              className="block text-xs font-medium text-gray-700"
            >
              Hostel ID
            </label>
            <input
              type="email"
              id="Email"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
            />
          </div>

          {/* {USERNAME} */}
          <div className="col-span-6">
            <label
              htmlFor="Phone"
              className="block text-xs font-medium text-gray-700"
            >
              Set Username
            </label>
            <input
              type="tel"
              id="Phone"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
            />
          </div>

          <div className="col-span-6">
            <label
              htmlFor="Phone"
              className="block text-xs font-medium text-gray-700"
            >
              Set Password
            </label>
            <input
              type="tel"
              id="Phone"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
            />
          </div>

          <div className="col-span-6">
            <button className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg">
              Register
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Register;
