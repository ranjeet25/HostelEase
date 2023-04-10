import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddStudentInfo from "../Components/AddStudentInfo";
import ChangePassword from "../Components/ChangePassword";
import UserInfo from "../Components/UserInfo";
import AddGrievances from "../Components/AddGrievances";

function Student() {
  const [info, setInfo] = useState(true);
  const [addInfo, setAddInfo] = useState(false);
  const [myDetails, setMyDetails] = useState(false);
  const [changePass, setChangePass] = useState(false);
  const [addGrievance, setaddGrievance] = useState(false);
  const [data, getData] = useState([]);
  const [usrdata, setUsrData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/studentDataByEmail")
      .then((res) => res.json())
      .then((data) => {
        getData(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/usrData")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);

        setUsrData(data[0]);
        console.log(data[0]);
      });
  }, []);

  return (
    <div className="flex">
      <div className="sidebar justify-self-start  px-4 w-[300px] h-screen overflow-y-auto text-center bg-gray-800">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600" />
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">
              Student Panel
            </h1>
          </div>
          <div className="my-2 bg-gray-400 h-[1px]" />
          <div className=" grid grid-cols-2 gap-1 p-4 w-full h-26 bg-gray-100 rounded-md ">
            <span className="text-[15px] ml-4 text-gray-700 font-bold">
              Name
            </span>
            <span className=" font-bold ml-1 text-[12px] bg-blue-500 px-4 py-1 rounded-full text-slate-100">
              {usrdata.Firstname}
            </span>
            <span className="text-[15px] ml-4 text-gray-700 font-bold">
              Gender
            </span>
            <span className="  ml-1 text-[12px] bg-blue-200 px-4 py-1 rounded-full font-bold text-blue-700">
              {usrdata.role}
            </span>
          </div>
        </div>

        <button
          className=" w-full p-2.5 mt-8 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-blue-600 text-black"
          onClick={() => {
            setMyDetails(false);
            setAddInfo(false);
            setChangePass(false);
            setInfo(true);
            setaddGrievance(false);
          }}
        >
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            My details
          </span>
        </button>
        <button
          className=" w-full p-2.5 mt-8 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-blue-600 text-black"
          onClick={() => {
            setMyDetails(true);
            setAddInfo(false);
            setChangePass(false);
            setInfo(false);
            setaddGrievance(false);
          }}
        >
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Room details
          </span>
        </button>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-red-400 text-black"
          onClick={() => {
            setChangePass(true);
            setMyDetails(false);
            setAddInfo(false);
            setInfo(false);
            setaddGrievance(false);
          }}
        >
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Change Password
          </span>
        </div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-green-500 text-black"
          onClick={() => {
            setAddInfo(true);
            setMyDetails(false);
            setChangePass(false);
            setInfo(false);
            setaddGrievance(false);
          }}
        >
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Add Payment
          </span>
        </div>

        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-green-500 text-black"
          onClick={() => {
            setAddInfo(false);
            setMyDetails(false);
            setChangePass(false);
            setInfo(false);
            setaddGrievance(true);
          }}
        >
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Add Grievances
          </span>
        </div>
        <Link to="/">
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-500 hover:bg-red-400 text-black">
            <i className="bi bi-box-arrow-in-right" />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Logout
            </span>
          </div>
        </Link>
        <Link to="/">
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-500 hover:bg-red-400 text-black">
            <i className="bi bi-box-arrow-in-right" />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Home
            </span>
          </div>
        </Link>
      </div>

      {info && <UserInfo usrdata={usrdata}></UserInfo>}

      {myDetails && (
        <div className="flex mt-8 ml-24 justify-center w-3/4 h-auto flex-wrap ">
          {/* BOX 01 */}
          <div className="w-80 h-2/4 mx-2 bg-gray-100 rounded-xl border-2  border-gray-200 flex flex-col ">
            <div className="bg-gray-100 h-1/4 flex justify-center items-center">
              <p className="text-xl font-bold text-gray-800">Room Number</p>
            </div>
            <div className="bg-blue-200 h-3/4 flex justify-center items-center">
              {Object.keys(data).length > 0 ? (
                <p className=" font-bold text-3xl text-blue-600">
                  {data.room_number}
                </p>
              ) : (
                "Room Not Alloted"
              )}
            </div>
          </div>
          {/* BOX 02 */}
          <div className="w-80 h-2/4 mx-2 bg-gray-100 rounded-xl border-2  border-gray-200 flex flex-col ">
            <div className="bg-gray-100 h-1/4 flex justify-center items-center">
              <p className="text-xl font-bold text-gray-800">Room Type</p>
            </div>
            <div className="bg-yellow-200 h-3/4 flex justify-center items-center">
              {Object.keys(data).length > 0 ? (
                <p className=" font-bold text-3xl text-yellow-800">
                  {data?.room_type}
                </p>
              ) : (
                "Room Not Alloted"
              )}
            </div>
          </div>
          {/* BOX 03 */}
          <div className="w-80 h-2/4 mx-2 bg-gray-100 rounded-xl border-2  border-gray-200 flex flex-col ">
            <div className="bg-gray-100 h-1/4 flex justify-center items-center">
              <p className="text-xl font-bold text-gray-800">Room Seater</p>
            </div>
            <div className="bg-green-200  h-3/4 flex justify-center items-center">
              {Object.keys(data).length > 0 ? (
                <p className=" font-bold text-3xl text-green-700">
                  {data?.collegeId}
                </p>
              ) : (
                "Room Not Alloted"
              )}
            </div>
          </div>
        </div>
      )}

      {addInfo && <AddStudentInfo></AddStudentInfo>}
      {changePass && <ChangePassword></ChangePassword>}
      {addGrievance && <AddGrievances></AddGrievances>}
    </div>
  );
}

export default Student;
