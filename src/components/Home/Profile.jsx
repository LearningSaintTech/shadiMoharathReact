import React, { useState } from "react";

const dataByCategory = {
  "Mother Tongue": [
    "Bihari", "Bengali", "Hindi Delhi", "Hindi", "Gujarati", "Kannada",
    "Malayalam", "Marathi", "Oriya", "Punjabi", "Rajasthani", "Tamil", "Telugu",
    "Hindi UP", "Hindi MP", "Konkani", "Himachali", "Haryanvi", "Assamese",
    "Kashmiri", "Sikkim Nepali", "Tulu",
  ],
  Caste: [
    "Aggarwal", "Kanyakubj Brahmin", "Brahmin", "Jat", "Kayastha", "Khatri", "Kshatriya",
    "Maratha", "Rajput", "Sindhi","Sunni","Arora","Shwetamber","Yadava","Bania","Scheduled Caste","Digambar","Sikh Jat","Gupta","Teli","Vaishnav","Kurmi kshatriya"
  ],
  Religion: ["Hindu", "Muslim", "Christian", "Sikh", "Jain", "Bahai"],
  City: ["New Delhi", "Seattle","Panvel","Navi Mumbai","Los Angeles","Illinois","Denver","Delhi","Mumbai","Kolkata","Ghaziabad","Hyderabad","Gurgaon","Kanpur","Ludhiana","Fridabad","Thane","Aligarh","Patna","Boston","Pune","Noida","Jaipur","Allahabad", "Bangalore", "Hyderabad", "Chennai"],
  Occupation: ["Engineers", "Doctor","Buissnessman","Nurse","Govt Services","Ias","CDA","Cyber Network Security", "CA Accountant","NGO Social Services","Police", "Teacher", "Artist", "Lawyer"],
  State: ["Uttar Pradesh", "Bihar", "Maharashtra", "Tamil Nadu", "Punjab","karnataka","Andhra Pradesh","Tamil Nadu","West Bengal","Madhya Pradesh","Haryana","Kerla","Rajasthan","Orrisa","Assam","Jammu&Kashmir",
   "Jharkhand","Manipur","Meghalaya","Nagaland","Himachal Pradesh"]
};

const Profile = () => {
  const [selectedCategory, setSelectedCategory] = useState("Mother Tongue");

  return (
    <div className="hidden bg-white py-10 px-2 md:px-16 sm:block">
      <div className="mx-auto text-center">
        {/* Headings */}
        <h2 className="text-[#A7B5C4] lg:text-[2vw] text-[1.5vw] font-semibold">
          BROWSE
        </h2>
        <h1 className="lg:text-[2.2vw] text-[3.2vw] font-semibold mt-2">
          <span className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] font-bold bg-clip-text text-transparent">
            Matrimonial
          </span>
          <span className="text-[#656F7D] lg:pl-[0.5vw] md:pl-[1.5vw] font-bold">
            Profiles by
          </span>
        </h1>

        {/* Categories */}
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-[1.2vw]">
          {Object.keys(dataByCategory).map((category, index) => (
            <span
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer px-[1.2vw] py-[0.8vw] font-semibold rounded-full transition duration-200 ${
                selectedCategory === category
                  ? "bg-[#E3CBBE] text-[#C1645C]"
                  : "text-[#8997A0] hover:text-red-500"
              }`}
            >
              {category}
            </span>
          ))}
        </div>

        {/* Separator Data */}
        <div className="mt-6 rounded-xl p-6 hidden md:block">
          <div className="flex flex-wrap justify-center items-center px-20 gap-y-3 text-[#BDBEC0] font-normal text-[1vw] max-md:text-[0.781vw] max-xl:text-[1.4vw]">
            {dataByCategory[selectedCategory].map((item, index, array) => (
              <span key={index} className="flex items-center">
                <span className="cursor-pointer">{item}</span>
                {index !== array.length - 1 && (
                  <span className="mx-4 text-gray-400">|</span>
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
