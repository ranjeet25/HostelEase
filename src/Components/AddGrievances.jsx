import { React, useState } from "react";
function AddGrievances() {
  const [email, setEmail] = useState();
  const [oldPass, setOldPass] = useState();
  const [newPass, setNewPass] = useState();

  const sendData = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/addGrievance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        oldPass: oldPass,
        newPass: newPass,
      }),
    }).then((res) => {});

    alert("Grievance Added");
  };
  return (
    <div className="m-6 bg-gray-300 w-3/4">
      {" "}
      <div class="  flex justify-center items-center w-full h-full">
        <div class="   px-4 md:px-8  ">
          <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
            Add Grievances
          </h2>
          <form onSubmit={sendData}>
            <div class=" bg-white max-w-lg border rounded-lg mx-auto">
              <div class="flex flex-col gap-4 p-4 md:p-8">
                <div>
                  <label
                    for="text"
                    class="inline-block text-gray-800 text-sm sm:text-base mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    name="email"
                    required
                    class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                <div>
                  <label
                    for="text"
                    class="inline-block text-gray-800 text-sm sm:text-base mb-2"
                  >
                    Complaint department
                  </label>
                  <input
                    required
                    placeholder="example: Mess, room, garden, etc"
                    type="text"
                    name="oldpaas"
                    class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                    onChange={(e) => {
                      setOldPass(e.target.value);
                    }}
                  />{" "}
                </div>

                <div>
                  <label
                    for="text"
                    class="inline-block text-gray-800 text-sm sm:text-base mb-2"
                  >
                    Your Complaint
                  </label>
                  <textarea
                    name="newpass"
                    type="textarea"
                    required
                    class=" w-full h-24 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                    onChange={(e) => {
                      setNewPass(e.target.value);
                    }}
                  />{" "}
                </div>

                <button
                  class="block bg-violet-500 hover:bg-violet-600 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                  type="submit"
                >
                  submit to admin
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddGrievances;
