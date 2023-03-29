import React, { useState } from "react";

function AddRoom() {
  const [roomNum, setRoomNum] = useState();
  const [roomStatus, setRoomStatus] = useState();

  const sendData = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/roomData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ roomNum: roomNum, roomStatus: roomStatus }),
    }).then((res) => {
      alert(" Room Added");
    });
    alert(" Room Added");
  };

  return (
    <div>
      <div class="  flex justify-center items-center w-full h-full">
        <div class="   px-4 md:px-8  ">
          <h2 class="text-gray-600 text-md lg:text-xl font-bold text-center mb-4 md:mb-8 bg-gray-300 py-2 rounded-full">
            Add Room
          </h2>

          <div class=" bg-white max-w-lg border rounded-lg mx-auto">
            <div class="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label
                  for="text"
                  class="inline-block text-gray-800 text-sm sm:text-base mb-2"
                >
                  Room number
                </label>
                <input
                  name="hostel_id"
                  class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  onChange={(e) => {
                    setRoomNum(e.target.value);
                  }}
                  required
                />
              </div>

              <div>
                <label
                  for="text"
                  class="inline-block text-gray-800 text-sm sm:text-base mb-2"
                >
                  Status of Room
                </label>
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  onChange={(e) => {
                    setRoomStatus(e.target.value);
                  }}
                  required
                >
                  <option>Select</option>
                  <option>Empty</option>
                  <option>Occupied</option>
                </select>
              </div>

              <button
                class="block bg-green-500 hover:bg-green-600 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                type="submit"
                onClick={sendData}
              >
                Add Room
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRoom;
