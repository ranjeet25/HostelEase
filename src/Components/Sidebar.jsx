import React from "react";

function Sidebar() {
  return (
    <div>
      <div className="sidebar justify-self-start  px-4 w-[300px] h-screen overflow-y-auto text-center bg-gray-900">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-yellow-600" />
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">
              Admin Panel
            </h1>
          </div>
          <div className="my-2 bg-gray-400 h-[1px]" />
          <div className=" grid grid-cols-2 gap-1 p-4 w-full h-26 bg-gray-100 rounded-md ">
            <span className="text-[15px] ml-4 text-gray-700 font-bold">
              Admin Name
            </span>
            <span className=" font-normal ml-1 text-[12px] bg-yellow-500 px-4 py-1 rounded-full text-slate-100">
              Ranjeet Saw
            </span>
            <span className="text-[15px] ml-4 text-gray-700 font-bold">
              Admin ID
            </span>
            <span className=" font-normal ml-1 text-[12px] bg-yellow-500 px-4 py-1 rounded-full text-slate-100">
              123456789
            </span>
          </div>
        </div>

        <button className=" w-full p-2.5 mt-8 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-blue-600 text-black">
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Add Student
          </span>
        </button>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-red-400 text-black">
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Remove Student
          </span>
        </div>

        <div className=" px-4 py-3 mt-12 font-bold flex items-center rounded-md  duration-300 cursor-pointer bg-gray-200 hover:bg-yellow-600 text-gray-600 hover:text-gray-100 ">
          Student Details
        </div>

        <div className=" px-4 py-3 mt-3 font-bold flex items-center rounded-md  duration-300 cursor-pointer bg-gray-200 hover:bg-yellow-600 text-gray-600 hover:text-gray-100 ">
          Room Details
        </div>

        <div className=" px-4 py-3 mt-3 font-bold flex items-center rounded-md  duration-300 cursor-pointer bg-gray-200 hover:bg-yellow-600 text-gray-600 hover:text-gray-100 ">
          Grievances
        </div>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-500 hover:bg-red-400 text-black">
          <i className="bi bi-box-arrow-in-right" />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Logout
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
