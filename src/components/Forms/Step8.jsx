import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { RiCameraFill } from "react-icons/ri";
import { IoImageSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

const Step8 = ({ back, next, percentage, selectedImage, handleImageUpload }) => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white">
      {/* Curved Top Section */}
      <div className="relative w-full h-40 bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] rounded-b-[50%] overflow-hidden">
        <button onClick={back} className="absolute top-4 left-4 bg-white rounded-full p-2">
          <IoArrowBack className="text-[#ED1C24] w-5 h-5" />
        </button>
        <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center border-2 border-white rounded-full text-xs font-bold text-white">
          {percentage}%
        </div>
      </div>

      {/* Profile Picture with + icon */}
      <div className="relative -mt-12">
        <div className="w-28 h-28 rounded-full border-4 border-[#ED1C24] overflow-hidden shadow-lg">
          {selectedImage ? (
            <img src={selectedImage} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
              No Image
            </div>
          )}
        </div>
        <label htmlFor="file-upload">
          <div className="absolute bottom-1 right-1 bg-white border border-gray-300 rounded-full p-1 cursor-pointer">
            <FaPlus className="text-[#ED1C24] w-3 h-3" />
          </div>
        </label>
      </div>

     
      {/* Text */}
      <div className="mt-6 text-center px-6">
        <h2 className="text-md font-semibold text-[#5B3E58]">Add photo to complete your profile</h2>
        <p className="text-xs text-gray-400 mt-1">Photo Privacy Controls Available In App Setting</p>
      </div>

      {/* Icon Buttons */}
      <div className="flex gap-6 mt-6">
        <label
          htmlFor="file-upload"
          className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-lg cursor-pointer"
        >
          <RiCameraFill className="text-[#ED1C24] w-6 h-6" />
        </label>
        <label
          htmlFor="file-upload"
          className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-lg cursor-pointer"
        >
          <IoImageSharp className="text-[#ED1C24] w-6 h-6" />
        </label>
      </div>

      {/* Continue Button */}
      <div className="mt-auto w-full px-6 pb-10 pt-14">
        <button
          onClick={next}
          className="w-full py-3 rounded-full bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] text-white font-semibold shadow-md"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Step8;
