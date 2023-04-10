import React from "react";

function ViewPayments() {
  return (
    <div className="m-6 bg-gray-200 w-3/4 h-[80vh]">
      {" "}
      <section className="flex flex-col justify-around  items-center w-[100%] h-full">
        <div className="flex   w-3/4 justify-around  rounded-md">
          <div className="col-span-6 mr-6 bg-white p-8 ">
            <h2 className="my-3  text-lg w-64 font-bold">Hostel Costs</h2>
            <p className="text-sm mb-4  py-1 px-4 rounded-full bg-red-100 text-red-500">
              Month: April 2023
            </p>

            <h4 className="text-black font-bold">Payment Breakdown</h4>

            <p>Room maintance: 20k</p>
            <p>Food cost: 80k</p>
            <p>Electricity bill: 60k</p>
            <p>Water bill: 10k</p>
            <p>Worker salary: 80k</p>
            <p>others charge: 20k</p>

            <button className="mt-6 block w-full rounded-md bg-green-500 hover:bg-green-600 p-2.5 text-sm text-white transition hover:shadow-lg">
              <p className=" font-bold">Total : 270k INR</p>
            </button>
          </div>
          <div className="col-span-6 6 bg-white p-8">
            <h2 className="my-3 text-lg w-64 font-bold">Per Student cost</h2>
            <p className="text-sm mb-4  py-1 px-4 rounded-full bg-red-100 text-red-500">
              Month: April 2023
            </p>

            <h4 className="text-black font-bold">Payment Breakdown</h4>

            <p>Room maintance: 1000</p>
            <p>Food cost: 3000</p>
            <p>Electricity bill: 400</p>
            <p>Water bill: 100</p>
            <p>Worker salary: 1000</p>
            <p>others charge: 500</p>
            <hr></hr>

            <button className="mt-6 block w-full rounded-md bg-green-500 hover:bg-green-600 p-2.5 text-sm text-white transition hover:shadow-lg">
              <p className=" font-bold">Total : 6000 INR</p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ViewPayments;
