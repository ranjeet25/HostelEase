import { React, useState } from "react";

function ChangePassword() {
  const [email, setEmail] = useState();
  const [oldPass, setOldPass] = useState();
  const [newPass, setNewPass] = useState();

  const sendData = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/login", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        oldPass: oldPass,
        newPass: newPass,
      }),
    }).then((res) => {});

    alert("Password Changed");
  };
  return (
    <div className="m-6 bg-gray-300 w-3/4">
      {" "}
      <div class="  flex justify-center items-center w-full h-full">
        <div class="   px-4 md:px-8  ">
          <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
            Change Password
          </h2>

          <div class=" bg-white max-w-lg border rounded-lg mx-auto">
            <div class="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label
                  for="text"
                  class="inline-block text-gray-800 text-sm sm:text-base mb-2"
                >
                  Email
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
                  Old Password
                </label>
                <input
                  name="oldpaas"
                  class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  onChange={(e) => {
                    setOldPass(e.target.value);
                  }}
                />{" "}
                <p class="text-red-500 text-xs italic">Required*</p>
              </div>

              <div>
                <label
                  for="text"
                  class="inline-block text-gray-800 text-sm sm:text-base mb-2"
                >
                  New Password
                </label>
                <input
                  name="newpass"
                  class="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  onChange={(e) => {
                    setNewPass(e.target.value);
                  }}
                />{" "}
                <p class="text-red-500 text-xs italic">Required*</p>
              </div>

              <button
                class="block bg-red-500 hover:bg-red-600 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                type="submit"
                onClick={sendData}
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
