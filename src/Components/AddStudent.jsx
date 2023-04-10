import React from "react";
import { useState } from "react";

function AddStudent() {
  const [formData, setFormData] = useState({
    firstname: " ",
    lastname: " ",
    room_type: " ",
    email: " ",
    hostelId: " ",
    collegeId: " ",
    year_of_study: " ",
    room_number: " ",
  });

  const changeEventHandler = (event) => {
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
    }));
    // console.log(formData);
  };

  const sendData = (e) => {
    e.preventDefault();

    console.log(formData);

    fetch("http://localhost:5000/addStudent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      console.log(res);
    });

    alert("data submited");
    // navigate("/login");
  };

  return (
    <div className=" w-3/4 h-[95vh] bg-gray-100 ml-12 rounded-md shadow-md">
      <section className="flex flex-col justify-around  items-center w-[100%] h-[95vh]">
        <form className="grid grid-cols-6 gap-4 bg-slate-50 p-8 rounded-md">
          <div className="col-span-3">
            <label className="block text-xs font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              onChange={changeEventHandler}
              name="firstname"
              required
            />
          </div>
          <div className="col-span-3">
            <label className="block text-xs font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              onChange={changeEventHandler}
              name="lastname"
              required
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
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              onChange={changeEventHandler}
              name="room_type"
              required
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
              type="text"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              onChange={changeEventHandler}
              name="email"
              required
            />
          </div>
          <div className="col-span-6">
            <label className="block text-xs font-medium text-gray-700">
              Hostel ID
            </label>
            <input
              type="text"
              id="hostelID"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              onChange={changeEventHandler}
              name="hostelId"
              required
            />
          </div>
          {/* clg id */}
          <div className="col-span-6">
            <label className="block text-xs font-medium text-gray-700">
              Select Room seater
            </label>
            <select
              id="year"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              placeholder="Select Room Seater"
              onChange={changeEventHandler}
              name="collegeId"
              required
            >
              <option>One seater</option>
              <option>Two seater</option>
              <option>Four seater</option>
            </select>
          </div>

          <div className="col-span-6">
            <label className="block text-xs font-medium text-gray-700">
              Year of Study
            </label>
            <select
              id="year"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              placeholder="Select Role"
              onChange={changeEventHandler}
              name="year_of_study"
              required
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
              onChange={changeEventHandler}
              name="room_number"
              required
            />
          </div>

          <div className="col-span-6">
            <button
              className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
              type="submit"
              onClick={sendData}
            >
              Add Student
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default AddStudent;
