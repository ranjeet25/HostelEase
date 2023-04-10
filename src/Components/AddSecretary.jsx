import React, { useState } from "react";

function AddSecretary() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const sendData = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/test/#", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, email: email }),
    }).then((res) => {});
    alert("Secretary Added");
  };
  return (
    <div className=" w-3/4 h-[90vh] bg-gray-200 ml-12 rounded-md shadow-md">
      <div class="  flex justify-center items-center w-full h-full">
        <div class="   px-4 md:px-8  ">
          <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
            Add secretary
          </h2>
          <form onSubmit={sendData}>
            <div class=" bg-white max-w-lg border rounded-lg mx-auto">
              <div class="flex flex-col gap-4 p-4 md:p-8">
                <div>
                  <label
                    for="text"
                    class="inline-block text-gray-800 text-sm sm:text-base mb-2"
                  >
                    Email of Secretary
                  </label>
                  <input
                    name="hostel_id"
                    type="email"
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
                    Set Password of secretary
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />{" "}
                  <p class="text-red-500 text-xs italic">Required*</p>
                </div>

                <button
                  class="block bg-yellow-500 hover:bg-yellow-600 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                  type="submit"
                >
                  Add secreatiry
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddSecretary;
