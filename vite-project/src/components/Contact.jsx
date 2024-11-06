import React from "react";
import { MdOutlineMessage } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
function Contact() {
  return (
    <div className="p-16">
      {/* contact page header */}
      <div>
        <h1 className="font-bold text-6xl mb-4">CONTACT US</h1>
        <p className="text-slate-600 font-medium">
          LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT,
          <br /> OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE
          CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL,
          <br /> OR SOCIAL MEDIA.
        </p>
      </div>
      {/* contact form */}
      <div className="flex flex-row mt-6">
        <div>
          <div className="flex flex-row">
            <button className="border text-white bg-black p-2 text-xs mr-4 flex items-center gap-x-1 w-36">
              <MdOutlineMessage /> VIA SUPPORT CHAT
            </button>
            <button className="border text-white bg-black p-2 text-xs flex items-center gap-x-1 w-36 justify-center">
              <IoCallSharp /> VIA CALL
            </button>
          </div>
          <div>
            <button className=" border border-slate-900 text-black p-2 text-xs flex items-center gap-x-1 w-80 justify-center mt-4 ">
              <MdOutlineMessage />
              VIA EMAIL FORM
            </button>
          </div>

          <div className="mt-4  relative">
            <label
              htmlFor="name"
              className="absolute left-3 -top-2 bg-white px-1 text-sm text-gray-500 "
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              className="border border-slate-600 rounded-md p-2 pt-4 w-80 h-9"
            />
          </div>
          <div className="mt-4  relative">
            <label
              htmlFor="email"
              className="absolute left-3 -top-2 bg-white px-1 text-sm text-gray-500 "
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              className="border border-slate-600 rounded-md p-2 pt-4 w-80 h-9"
            />
          </div>

          <div className="mt-4 relative">
            <label
              htmlFor="text"
              className="absolute left-3 -top-2 bg-white px-1 text-sm text-gray-500"
            >
              Text
            </label>
            <textarea
              name="text"
              id="text"
              className="border border-slate-600 rounded-md p-2 pt-6 w-80 h-5/6 resize-none  "
              placeholder=" "
            ></textarea>
          </div>

          <div>
            <button type="submit" className="ml-40 text-white bg-black rounded border border-slate-600 p-1 w-40">SUBMIT</button>
          </div>
        </div>

        {/* contact form image */}
        <div className="w-96 ml-48 -mt-12">
          <img src="./public/service.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
