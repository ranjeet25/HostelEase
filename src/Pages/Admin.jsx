import React, { useState } from "react";
import { Link } from "react-router-dom";
import RemoveStudent from "../assets/RemoveStudent";
import AddStudent from "../Components/AddStudent";
import RoomDetails from "../Components/RoomDetails";
import Sidebar from "../Components/Sidebar";
import StudentDetails from "../Components/StudentDetails";

function Admin() {
  const [addStudent, openAddStudent] = useState(true);
  const [removeStudent, openRemoveStudent] = useState(false);
  const [studentDetails, openStudentDetails] = useState(false);
  const [roomDetails, openRoomDetails] = useState(false);

  return (
    <div className="flex  items-center">
      {/* SIDEBAR */}
      <div className="sidebar justify-self-start  px-4 w-[300px] h-screen overflow-y-auto text-center bg-gray-900">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex flex-col items-center">
            <Link to="/">
              <a
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
            </Link>

            <h1 className="font-bold text-gray-200 text-[15px] ml-3">
              Admin Panel
            </h1>
          </div>
          <div className="my-2 bg-gray-400 h-[1px] mb-4" />
          <div className=" grid grid-cols-2 gap-1 p-4 w-full h-26 bg-gray-100 rounded-md ">
            <span className="text-[15px] ml-4 text-gray-700 font-bold">
              Admin Name
            </span>
            <span className=" font-normal ml-1 text-[12px] bg-yellow-500 px-4 py-1 rounded-md text-slate-100">
              Ranjeet Saw
            </span>
            <span className="text-[15px] ml-4 text-gray-700 font-bold">
              Admin ID
            </span>
            <span className=" font-normal ml-1 text-[12px] bg-yellow-500 px-4 py-1 rounded-md text-slate-100">
              123456789
            </span>
          </div>
        </div>

        <button
          onClick={() => {
            openAddStudent(true);
            openRemoveStudent(false);
            openStudentDetails(false);
            openRoomDetails(false);
          }}
          className=" w-full p-2.5 mt-8 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-blue-600 text-black"
        >
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Add Student
          </span>
        </button>
        <div
          onClick={() => {
            openRemoveStudent(true);
            openAddStudent(false);
            openStudentDetails(false);
            openRoomDetails(false);
          }}
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-red-400 text-black"
        >
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Remove Student
          </span>
        </div>

        <div
          onClick={() => {
            openRemoveStudent(false);
            openAddStudent(false);
            openStudentDetails(true);
            openRoomDetails(false);
          }}
          className=" px-4 py-3 mt-12 font-bold flex items-center rounded-md  duration-300 cursor-pointer bg-gray-200 hover:bg-yellow-600 text-gray-600 hover:text-gray-100 "
        >
          Student Details
        </div>

        <div
          onClick={() => {
            openRemoveStudent(false);
            openAddStudent(false);
            openStudentDetails(false);
            openRoomDetails(true);
          }}
          className=" px-4 py-3 mt-3 font-bold flex items-center rounded-md  duration-300 cursor-pointer bg-gray-200 hover:bg-yellow-600 text-gray-600 hover:text-gray-100 "
        >
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

      {addStudent && <AddStudent></AddStudent>}
      {removeStudent && <RemoveStudent></RemoveStudent>}
      {studentDetails && <StudentDetails></StudentDetails>}
      {roomDetails && <RoomDetails></RoomDetails>}
    </div>
  );
}

export default Admin;
