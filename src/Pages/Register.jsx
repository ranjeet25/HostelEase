import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    firstname: " ",
    lastname: " ",
    role: " ",
    email: " ",
    hostelId: " ",
    username: " ",
    pass: " ",
    address: " ",
  });

  const [error, setError] = useState({});

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

  var count = 0;

  const validation = (values) => {
    var error = {};

    // console.log(values.hostelId.length);
    if (values.hostelId.length != 12) {
      error.hostelId = "Enter valid Adhaar number";
      count += 1;
    }
    if (values.pass.length != 8) {
      error.pass = "Enter 8 digit password";
      count += 1;
    }
    return error;
  };

  const sendData = (e) => {
    e.preventDefault();

    setError(validation(formData));

    console.log(count);

    if (count == 0) {
      fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((res) => {
        if (res.status == 200) {
          alert("data added sucessfully");
        } else {
          alert("There is error");
        }
      });
    }
  };

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
            href="/login"
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
        <form onSubmit={sendData} className="grid grid-cols-6 gap-4">
          <div className="col-span-3">
            <label
              htmlFor="FirstName"
              className="block text-xs font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              onChange={changeEventHandler}
              name="firstname"
              required
            />
            <p className="text-sm text-red-500 ">{error.firstname}</p>
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
              onChange={changeEventHandler}
              name="lastname"
              required
            />
            {error.lastname && (
              <p className="text-sm text-red-500 ">{error.lastname}</p>
            )}
          </div>
          {/* Gender */}
          <div className="col-span-6">
            <label
              htmlFor="Email"
              className="block text-xs font-medium text-gray-700"
            >
              Select Gender
            </label>
            <select
              id="Country"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              placeholder="Select Role"
              onChange={changeEventHandler}
              name="role"
              required
            >
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Others</option>
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
              onChange={changeEventHandler}
              name="email"
              required
            />
          </div>
          {/* UNIQUE ID */}
          <div className="col-span-6">
            <label className="block text-xs font-medium text-gray-700">
              Aadhar Card number{" "}
              <span className="text-red-500">12 digit only*</span>
            </label>
            <input
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              onChange={changeEventHandler}
              type="text"
              name="hostelId"
            />
            {error.hostelId && (
              <p className="text-sm text-red-500 ">{error.hostelId}</p>
            )}
          </div>
          <div className="col-span-6">
            <label className="block text-xs font-medium text-gray-700">
              Address
            </label>
            <input
              className=" h-14 mt-1 w-full  px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              onChange={changeEventHandler}
              name="address"
              required
            />
          </div>

          {/* {USERNAME} */}
          <div className="col-span-6">
            <label
              htmlFor="username"
              className="block text-xs font-medium text-gray-700"
            >
              Set Username
            </label>
            <input
              type="text"
              id="Phone"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              onChange={changeEventHandler}
              name="username"
              required
            />
          </div>

          <div className="col-span-6">
            <label
              htmlFor="password"
              className="block text-xs font-medium text-gray-700"
            >
              Set Password
            </label>
            <input
              type="password"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              onChange={changeEventHandler}
              name="pass"
              required
            />
            {error.pass && (
              <p className="text-sm text-red-500 ">{error.pass}</p>
            )}
          </div>

          <div className="col-span-6">
            <button
              type="submit"
              // onClick={sendData}
              className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
            >
              Register
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Register;
