import React, { useState } from "react";

function RemoveStudent() {
  const [name, setName] = useState();
  const [hostelID, setHostelID] = useState();

  const sendData = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/studentData", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, hostelID: hostelID }),
    }).then((res) => {
      alert("Student Deleted");
    });
  };
  return (
    <div className=" w-3/4 h-[90vh] bg-gray-200 ml-12 rounded-md shadow-md">
      <div class="  flex justify-center items-center w-full h-full">
        <div class="   px-4 md:px-8  ">
          <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
            Remove Student
          </h2>

          <div class=" bg-white max-w-lg border rounded-lg mx-auto">
            <div class="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label
                  for="text"
                  class="inline-block text-gray-800 text-sm sm:text-base mb-2"
                >
                  Name of Student
                </label>
                <input
                  name="hostel_id"
                  required
                  class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              <div>
                <label
                  for="text"
                  class="inline-block text-gray-800 text-sm sm:text-base mb-2"
                >
                  Hostel ID
                </label>
                <input
                  name="room_number"
                  required
                  class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  onChange={(e) => {
                    setHostelID(e.target.value);
                  }}
                />{" "}
                <p class="text-red-500 text-xs italic">Required*</p>
              </div>

              <button
                class="block bg-red-500 hover:bg-red-600 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                type="submit"
                onClick={sendData}
              >
                Remove Student
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RemoveStudent;
