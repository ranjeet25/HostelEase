import React from "react";

function ImgCards() {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12">
            Hostel Images
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {/* product - start */}
            <div>
              <a
                href="#"
                className="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
              >
                <img
                  src="https://pix10.agoda.net/hotelImages/5041809/-1/0edb5844ce9fc4f7c5b2bde0e0d526e0.jpg?ca=8&ce=1&s=1024x768"
                  loading="lazy"
                  alt="HostelEase reception"
                  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                />
                <div className="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
                  <span className="text-gray-500">01</span>
                  <span className="text-gray-800 text-lg lg:text-xl font-bold">
                    Reception
                  </span>
                </div>
              </a>
            </div>
            {/* product - end */}
            {/* product - start */}
            <div>
              <a
                href="#"
                className="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
              >
                <img
                  src="https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/202205/iim_v-x800.jpg?wVdCvLsG4Sl1oJvrcCRUjmFAa.1PBh9Z"
                  loading="lazy"
                  alt="HostelEase rooms"
                  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                />
                <div className="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
                  <span className="text-gray-500">02</span>
                  <span className="text-gray-800 text-lg lg:text-xl font-bold">
                    Hostel Rooms
                  </span>
                </div>
              </a>
            </div>
            {/* product - end */}
            {/* product - start */}
            <div>
              <a
                href="#"
                className="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
              >
                <img
                  src="https://live.staticflickr.com/7283/8738124549_3dc6effc7f_b.jpg"
                  loading="lazy"
                  alt="Ground"
                  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                />
                <div className="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
                  <span className="text-gray-500">03</span>
                  <span className="text-gray-800 text-lg lg:text-xl font-bold">
                    PlayGround
                  </span>
                </div>
              </a>
            </div>
            {/* product - end */}
            {/* product - start */}
            <div>
              <a
                href="#"
                className="group h-96 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
              >
                <img
                  src="http://www.thapar.edu/images/hostel/hostelA2.jpg"
                  loading="lazy"
                  alt="Mess IMG"
                  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                />
                <div className="w-full flex flex-col bg-white text-center rounded-lg relative p-4">
                  <span className="text-gray-500">04</span>
                  <span className="text-gray-800 text-lg lg:text-xl font-bold">
                    Mess
                  </span>
                </div>
              </a>
            </div>
            {/* product - end */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImgCards;
