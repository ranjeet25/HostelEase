import { React, useState } from "react";

function AddStudentInfo() {
  const [formData, setFormData] = useState({
    firstname: " ",
    lastname: " ",
    year_ofStudy: " ",
    branch: " ",
    year_ofJoining: " ",
    collegeId: " ",
    payment_status: " ",
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

    // console.log(formData);

    // fetch("http://localhost:5000/addStudentInfo", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // }).then((res) => {
    //   console.log(res);
    // });

    alert("data submited");
    // navigate("/login");
  };

  return (
    <div className="m-6 bg-gray-200 w-3/4">
      {" "}
      <section className="flex flex-col justify-around  items-center w-[100%] h-full">
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
            />
          </div>
          {/* Room type */}
          <div className="col-span-6">
            <label
              htmlFor="Email"
              className="block text-xs font-medium text-gray-700"
            >
              year Of Study
            </label>
            <select
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              onChange={changeEventHandler}
              name="year_ofStudy"
            >
              <option>Select</option>
              <option>First</option>
              <option>second</option>
              <option>Third</option>
              <option>Fourth</option>
            </select>
          </div>
          {/* Email */}
          <div className="col-span-6">
            <label
              htmlFor="branch"
              className="block text-xs font-medium text-gray-700"
            >
              Branch
            </label>
            <select
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              onChange={changeEventHandler}
              name="branch"
            >
              <option>Select</option>
              <option>Computer Science</option>
              <option>Information Technology</option>
              <option>Mechanical</option>
              <option>civil</option>
              <option>others</option>
            </select>
          </div>
          <div className="col-span-6">
            <label className="block text-xs font-medium text-gray-700">
              year of joining
            </label>
            <input
              type="text"
              id="hostelID"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              onChange={changeEventHandler}
              name="year_ofJoining"
            />
          </div>
          {/* clg id */}
          <div className="col-span-6">
            <label className="block text-xs font-medium text-gray-700">
              College ID
            </label>
            <input
              type="text"
              id="clgID"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              onChange={changeEventHandler}
              name="collegeId"
            />
          </div>
          <div className="col-span-6">
            <label className="block text-xs font-medium text-gray-700">
              payment Status
            </label>
            <select
              id="year"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              placeholder="Select Role"
              onChange={changeEventHandler}
              name="payment_status"
            >
              <option>select</option>
              <option>Paid</option>
              <option>Pending</option>
            </select>
          </div>

          <div className="col-span-6">
            <button
              className="block w-full rounded-md bg-green-500 hover:bg-green-600 p-2.5 text-sm text-white transition hover:shadow-lg"
              type="submit"
              onClick={sendData}
            >
              Add details
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default AddStudentInfo;
