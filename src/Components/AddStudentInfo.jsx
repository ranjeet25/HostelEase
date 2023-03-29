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
        <div className="grid grid-cols-6 gap-4 bg-slate-50 p-8 rounded-md">
          <div className="col-span-6">
            <h2 className="my-6 text-lg w-64 font-bold">Payment Details</h2>

            <h4 className="text-black font-bold">Fee Breakdown</h4>
            <p>Room charge: 20000</p>
            <p>Food charge: 25000</p>
            <p>maintaince charge: 2000</p>
            <p className="mb-6">others charge: 3000</p>
            <button
              className="block w-full rounded-md bg-green-500 hover:bg-green-600 p-2.5 text-sm text-white transition hover:shadow-lg"
              type="submit"
            >
              <a href="https://rzp.io/l/daME6s5iqW"> Proceed to payment</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddStudentInfo;
