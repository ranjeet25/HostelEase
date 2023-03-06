import React, { useState, useEffect } from "react";
import AddRoom from "./AddRoom";

function RoomDetails() {
  const [data, getData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/roomData")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        getData(data);
      });
  }, []);
  return (
    <div className=" w-3/4 h-[95vh] bg-gray-200 ml-12 rounded-md shadow-md flex justify-center">
      <section className="container mx-auto p-6 font-mono w-2/4  ">
        <div className="w-full mb-8  h-full  rounded-lg shadow-lg overflow-y-scroll bg-white ">
          <div className="w-full overflow-y-auto ">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">SR.No</th>
                  <th className="px-4 py-3">Room Nos</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">More Details</th>

                  {/* <th className="px-4 py-3">Due Date</th> */}
                </tr>
              </thead>
              <tbody className="bg-white">
                {data.map((itr, index) => {
                  return (
                    <tr className="text-gray-700">
                      <td className="px-4 py-3 border">
                        <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                          <p className="font-semibold text-pink-600">
                            {index + 1}
                          </p>
                          <div
                            className="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          />
                        </div>
                      </td>
                      <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                          <div> {itr.room_number}</div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-ms font-semibold border">
                        <span className="px-2 py-1 font-normal text-sm  leading-tight text-gray-700 bg-gray-100 rounded-sm">
                          {itr.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-ms font-semibold border">
                        <div className="w-full flex justify-center">
                          <button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-8 h-8 p-1 rounded-full bg-green-50 text-green-500 "
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <AddRoom></AddRoom>
    </div>
  );
}

export default RoomDetails;
