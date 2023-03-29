import React from "react";

function ViewPayments() {
  return (
    <div className="m-6 bg-gray-200 w-3/4 h-[80vh]">
      {" "}
      <section className="flex flex-col justify-around  items-center w-[100%] h-full">
        <div className="grid grid-cols-6 gap-4 bg-slate-50 p-8 rounded-md">
          <div className="col-span-6">
            <h2 className="my-3 text-lg w-64 font-bold">Payment Details</h2>
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
            <hr></hr>
            <p className="my-4 font-bold">Total : 270k INR</p>
            <button className="block w-full rounded-md bg-green-500 hover:bg-green-600 p-2.5 text-sm text-white transition hover:shadow-lg">
              OK
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ViewPayments;
