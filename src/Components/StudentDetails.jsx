import React, { useState, useEffect } from "react";

function StudentDetails() {
  const [data, getData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/studentData")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        getData(data);
      });
  }, []);

  console.log(data);

  return (
    <div className=" w-3/4 h-[95vh] bg-gray-300 ml-12 rounded-md shadow-md">
      <section className="container mx-auto p-6 font-mono  ">
        <div className="w-full mb-8  h-[90vh]  rounded-lg shadow-lg overflow-y-scroll">
          <div className="w-full overflow-y-auto ">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Hostel ID</th>
                  <th className="px-4 py-3">Room No</th>
                  <th className="px-4 py-3">College ID</th>
                  {/* <th className="px-4 py-3">Due Date</th> */}
                </tr>
              </thead>
              <tbody className="bg-white">
                {data.map((itr, index) => {
                  return (
                    <tr className="text-gray-700">
                      <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                          <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                            <p className="font-semibold text-pink-600">
                              {index + 1}
                            </p>
                            <div
                              className="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            />
                          </div>
                          <div>
                            <p className="font-semibold text-black">
                              {itr.firstname}
                            </p>
                            <p className="text-xs text-gray-600">
                              {itr.lastname}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-ms font-semibold border">
                        <span className="px-2 py-1 font-normal text-sm  leading-tight text-yellow-700 bg-yellow-100 rounded-sm">
                          {itr.collegeId}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-ms font-semibold border">
                        {itr.room_number}
                      </td>
                      <td className="px-4 py-3 text-xs border">
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                          {itr.collegeId}
                        </span>
                      </td>
                      {/* <td className="px-4 py-3 text-sm border">6/4/2000</td> */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StudentDetails;
