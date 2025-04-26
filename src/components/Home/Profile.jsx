import React from "react";

const Profile = () => {
  return (
    <div className="hidden  bg-white py-10 px-2 md:px-16 sm:block">
      <div className=" mx-auto text-center">
        {/* Headings */}
        <h2 className="text-[#A7B5C4] lg:text-[2.vw] text-[1.5vw] font-semibold ">
          BROWSE
        </h2>
        <h1 className="lg:text-[2.2vw] text-[3.2vw] font-semibold  mt-2">
          <span className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] font-bold bg-clip-text text-transparent">
            Matrimonial
          </span>
          <span className="text-[#656F7D] lg:pl-[0.5vw] md:pl-[1.5vw]  font-bold">
            Profiles by
          </span>
        </h1>

        {/* Categories */}
        <div className="mt-4 flex flex-row items-center justify-center lg:gap-14 gap-8 text-gray-600 lg:text-[1.2vw] text-[1.8vw]">
          <span className="bg-[#E3CBBE] px-[1.2vw] py-[0.8vw]  font-semibold rounded-full text-[#C1645C]">
            Mother Tongue
          </span>
          <span className="bg-[#E3CBBE] px-[1.2vw] py-[0.8vw]  font-semibold rounded-full text-[#C1645C]">
            caste
          </span>

          {[
            "Caste",
            "Religion",
            "City",
            "Occupation",
            "State",
            
          ].map((category, index) => (
            <span
              key={index}
              className="cursor-pointer text-[#8997A0] hover:text-red-500 py-2 max-xl:py-3 max-xl:text-[1.5vw] "
            >
              {category}
            </span>
          ))}
        </div>

        <div className="mt-4 rounded-xl p-6 hidden md:block ">
  <div className="flex flex-wrap justify-center items-center px-20 max-md:px-6 max-xl:px-[6vw] gap-y-3 max-md:gap-y-3.5 max-xl:gap-y-4 text-[#BDBEC0] font-normal text-[1vw] max-md:text-[0.781vw] max-xl:text-[1.4vw]">
    {[
      "Bihari",
      "Bengali",
      "Hindi Delhi",
      "Hindi",
      "Gujarati",
      "Kannada",
      "Malayalam",
      "Marathi",
      "Oriya",
      "Punjabi",
      "Rajasthani",
      "Tamil",
      "Telugu",
      "Hindi UP",
      "Hindi MP",
      "Konkani",
      "Himachali",
      "Haryanvi",
      "Assamese",
      "Kashmiri",
      "Sikkim Nepali",
      "Tulu",
    ].map((language, index, array) => (
      <span key={index} className="flex items-center">
        <span className="cursor-pointer">{language}</span>
        {index !== array.length - 1 && (
          <span className="mx-4 max-md:mx-2.5 max-xl:mx-3.5 text-gray-400">|</span>
        )}
      </span>
    ))}
  </div>
</div>
      </div>
    </div>
  );
};

export default Profile;
