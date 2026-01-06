import React from "react";
import locationIcon from "../assets/locationIcon.png";
import contactIcon from "../assets/contactIcon.png";

const Contacts = () => {
  return (
    <div className="min-h-full flex flex-col lg:flex-row justify-center items-center lg:space-x-10 space-y-10 py-10 px-5 bg-[#f5e8d9]">
      {/* Left Side - Contact Form */}
      <div className="bg-gray-100 p-10 lg:w-1/2 shadow-md">
        <h2 className="text-3xl font-bold mb-6">Leave your message</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your full name"
            className="w-full p-4 rounded-l-[30px] bg-white shadow-sm border border-gray-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-r-[30px] bg-white shadow-sm border border-gray-300"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-4 rounded-l-[30px] bg-white shadow-sm border border-gray-300"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 rounded-r-[30px] bg-white shadow-sm border border-gray-300"
            rows="4"
          />
          <button 
          className="px-8 bg-green-500 text-white font-bold py-3 rounded-[30px] shadow-lg hover:bg-green-600 transition-all">
            Send Message
          </button>
        </form>
      </div>

      {/* Right Side - Contact Information */}
      <div className="lg:w-1/3 w-full space-y-10">
        {/* Country/City/Street Info */}
        <div className="bg-gray-100 p-6 shadow-md h-[260px]">
          <h2 className="text-2xl font-bold mb-6">Address Information</h2>
          <div className="flex mb-4 flex flex-col w-full items-center justify-between">
            <div className="w-10 border border-green-900 h-10 bg-yellow-500 rounded-full text-center mb-4 font-bold flex items-center justify-center">
              <img src={locationIcon} alt="" />
            </div>
            <div className="flex lg:justify-between justify-center w-full gap-24 lg:gap-0">
              <div className="items-start">
                <p className="font-bold">Country</p>
                <p>City</p>
                <p>Street</p>
              </div>
              <div className="text-end">
                <p className="font-bold">INDIA</p>
                <p>Ayodhya</p>
                <p>Faizabad</p>
              </div>
            </div>
          </div>
        </div>

        {/* Email/LinkedIn/Whatsapp Info */}
        <div className="bg-gray-100 p-6 shadow-md h-[260px]">
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

          <div className="flex mb-4 flex flex-col w-full items-center justify-between">
            <div className="w-10 h-10 bg-yellow-500 rounded-full mb-4 text-center font-bold flex items-center justify-center">
              <img src={contactIcon} alt="" />
            </div>
            <div className="w-full flex lg:justify-between justify-center gap-24 lg:gap-0">
              <div className="">
                <p className="font-bold">Email</p>
                <p>LinkedIn</p>
                <p>Whatsapp</p>
              </div>
              <div className="text-end">
                <p className="font-bold">hindiabuzar@gmail.com</p>
                <a href="">Linked in</a>
                <p>+91 7525899794</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
