import React from "react";

function AddStudent() {
  return (
    <div className=" w-3/4 h-[90vh] bg-gray-100 ml-12 rounded-md shadow-md">
      <section className="flex flex-col justify-around  items-center w-[100%] h-[90vh]">
        <form className="grid grid-cols-6 gap-4 bg-slate-50 p-8 rounded-md">
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
          {/* Room type */}
          <div className="col-span-6">
            <label
              htmlFor="Email"
              className="block text-xs font-medium text-gray-700"
            >
              Select Room
            </label>
            <select
              id="Country"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              placeholder="Select Role"
            >
              <option>Normal</option>
              <option>Delux</option>
              <option>Premium</option>
            </select>
          </div>
          {/* Email */}
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
          {/* clg id */}
          <div className="col-span-6">
            <label className="block text-xs font-medium text-gray-700">
              College ID
            </label>
            <input
              type="email"
              id="Email"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
            />
          </div>
          <div className="col-span-6">
            <label
              htmlFor="Email"
              className="block text-xs font-medium text-gray-700"
            >
              Year of Study
            </label>
            <select
              id="year"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              placeholder="Select Role"
            >
              <option>First Year</option>
              <option>Second</option>
              <option>Third</option>
              <option>Four</option>
            </select>
          </div>

          {/* Room ID */}
          <div className="col-span-6">
            <label
              htmlFor="Email"
              className="block text-xs font-medium text-gray-700"
            >
              Allot Room Number
            </label>
            <input
              type="email"
              id="Email"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
            />
          </div>

          <div className="col-span-6">
            <button className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg">
              Add Student
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default AddStudent;
