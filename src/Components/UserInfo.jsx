import React from "react";

function UserInfo(props) {
  //   console.log(props.usrdata);

  const obj = new Object(props.usrdata);

  return (
    <div className="m-6 bg-gray-200 w-3/4">
      {" "}
      <section className="flex flex-col ml-8 justify-around   w-[500px] h-full">
        <div className="grid grid-cols-6 gap-4 bg-slate-50 p-8 rounded-md">
          <div className="col-span-6">
            <h2 className="my-6 text-lg w-64 font-bold">My Details</h2>
            <p className="font-bold mt-2 bg-blue-100 py-2 px-4 ">
              ID
              <span className=" font-normal px-3 py-1 ml-8 rounded-full  text-blue-700">
                {obj._id}
              </span>
            </p>
            <p className="font-bold mt-2 bg-blue-100 py-2 px-4 ">
              username{" "}
              <span className=" font-normal px-3 py-1 ml-8 rounded-full  text-blue-700">
                {obj.username}
              </span>
            </p>

            <p className="font-bold mt-2 bg-blue-100 py-2 px-4 ">
              First Name{" "}
              <span className=" font-normal px-3 py-1 ml-8 rounded-full  text-blue-700">
                {obj.Firstname}
              </span>
            </p>
            <p className="font-bold mt-2 bg-blue-100 py-2 px-4 ">
              Last Name{" "}
              <span className=" font-normal px-3 py-1 ml-8 rounded-full  text-blue-700">
                {obj.Lastname}
              </span>
            </p>
            <p className="font-bold mt-2 bg-blue-100 py-2 px-4 ">
              Adhaar{" "}
              <span className=" font-normal px-3 py-1 ml-8 rounded-full  text-blue-700">
                {obj.adhaar}
              </span>
            </p>
            <p className="font-bold mt-2 bg-blue-100 py-2 px-4 ">
              Email{" "}
              <span className=" font-normal px-3 py-1 ml-8 rounded-full  text-blue-700">
                {obj.email}
              </span>
            </p>
            <p className="font-bold mt-2 bg-blue-100 py-2 px-4 ">
              Gender{" "}
              <span className=" font-normal px-3 py-1 ml-8 rounded-full  text-blue-700">
                {obj.role}
              </span>
            </p>

            <p className="font-bold mt-2 bg-blue-100 py-2 px-4 ">
              Adress{" "}
              <span className=" font-normal px-3 py-1 ml-8 rounded-full  text-blue-700">
                {obj.address}
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserInfo;
