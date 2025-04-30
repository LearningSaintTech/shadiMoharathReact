import React, { useState } from "react";
import { MdArrowBack, MdOutlineArrowCircleRight } from "react-icons/md";
import { RiCameraFill } from "react-icons/ri";
import { IoImageSharp } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import Couple4 from "../../assets/images/Couple4.svg";
import FormArrow from "../../assets/images/Formarrow.svg";
import { FaAngleDown } from "react-icons/fa6";
// import Step8 from "./forms/Step8"; // Adjust path as needed



const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

// Cities List Based on State
const citiesByState = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur"],
  "Arunachal Pradesh": ["Itanagar"],
  "Assam": ["Guwahati", "Silchar"],
  "Bihar": ["Patna", "Gaya","Motihari","Bhagalpur","Muzaffarpur","Darbhanga","Purnea","Begusarai"],
  "Chhattisgarh": ["Raipur", "Bilaspur"],
  "Goa": ["Panaji", "Margao"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara"],
  "Haryana": ["Gurugram", "Faridabad"],
  "Himachal Pradesh": ["Shimla", "Manali"],
  "Jharkhand": ["Ranchi", "Jamshedpur"],
  "Karnataka": ["Bengaluru", "Mysuru"],
  "Kerala": ["Kochi", "Thiruvananthapuram"],
  "Madhya Pradesh": ["Bhopal", "Indore"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
  "Manipur": ["Imphal"],
  "Meghalaya": ["Shillong"],
  "Mizoram": ["Aizawl"],
  "Nagaland": ["Kohima"],
  "Odisha": ["Bhubaneswar", "Cuttack"],
  "Punjab": ["Amritsar", "Ludhiana"],
  "Rajasthan": ["Jaipur", "Udaipur"],
  "Sikkim": ["Gangtok"],
  "Tamil Nadu": ["Chennai", "Coimbatore"],
  "Telangana": ["Hyderabad", "Warangal"],
  "Tripura": ["Agartala"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi","Noida","Agra","Ghaziabad","Meerut","Bareilly"],
  "Uttarakhand": ["Dehradun", "Haridwar"],
  "West Bengal": ["Kolkata", "Siliguri"],
};
const ProfileForm = () => {
  const totalSteps = 8;
  const [step, setStep] = useState(8); // Set to 8 for testing Step 8

  // Step-1
  const [profileFor, setProfileFor] = useState("");
  const [gender, setGender] = useState("");

  // Step-2
  const [religion, setReligion] = useState("");
  const [community, setCommunity] = useState("");
  const [subCommunity, setSubCommunity] = useState("");
  const [noBar, setNoBar] = useState(false);

  // Step-3 → Country / Step-4 → State / Step-5 → City
  const [country, setCountry] = useState("");
  const [stateField, setStateField] = useState("");
  const [city, setCity] = useState("");
  //Step-4
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  
  // Step-5: Additional fields
  const [maritalStatus, setMaritalStatus] = useState("");
  const [height, setHeight] = useState("");
  const [diet, setDiet] = useState("");

  // Step-6: Education
  const [highestQualification, setHighestQualification] = useState("");
  const [college, setCollege] = useState("");

  // Step-7: Work
  const [annualIncome, setAnnualIncome] = useState("");
  const [workDetails, setWorkDetails] = useState("");

  // Step-8
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const percentage = Math.round(((step - 1) / (totalSteps - 1)) * 100);

  const next = () => {
    // Validations per step
    if (step === 1 && (!profileFor || !gender)) {
      return alert("Please select Profile For and Gender");
    }
    if (
      step === 2 &&
      (!religion || (!community && !noBar) || (!subCommunity && !noBar))
    ) {
      return alert("Please fill out all fields or check ‘Caste no bar’");
    }
    if (step === 3 && !country) {
      return alert("Please select Country");
    }
    if (step === 4 && !stateField) {
      return alert("Please select State");
    }
    if (step === 5 && (!maritalStatus || !height || !diet)) {
      return alert("Please select Marital Status, Height, and Diet");
    }
    if (step === 6 && (!highestQualification || !college)) {
      return alert("Please select Highest Qualification and College");
    }
    if (step === 7 && (!annualIncome || !workDetails)) {
      return alert("Please select Annual Income and Work Details");
    }

    if (step < totalSteps) setStep((s) => s + 1);
    else alert("Form submitted!");
  };

  const back = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  return (
    // <div classNameme="relative bg-white rounded-2xl shadow-lg p-8 w-[476px] h-[45vw] flex flex-col">
      // <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="relative bg-white rounded-2xl shadow-lg p-8 sm:p-8 flex flex-col 
    sm:h-[600px] h-[550px] w-[316px]  sm:w-[476px]">
      
    {/* Your content goes here */}
  
      {/* Content */}
      <div className="flex-1 ">
        {step === 1 && (
          <>
            <div className="flex justify-between items-center  mb-4">
            <button onClick={back} className="p-2">
                
              </button>
              <div className="w-10 h-10 relative">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9155"
                    className="stroke-gray-300"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9155"
                    className="stroke-red-500"
                    strokeDasharray={`${percentage} 100`}
                    strokeWidth="2"
                    fill="none"
                  />
                  <text
                    x="18"
                    y="20.5"
                    textAnchor="middle"
                    className="fill-gray-600 text-xs"
                  >
                    {percentage}%
                  </text>
                </svg>
              </div>
            </div>
            <h2 className="text-lg font-semibold text-[#620B00] py-8">
              This Profile is for
            </h2>
            <div className="flex flex-wrap gap-[10px] mb-8">
              {[
                "Myself",
                "Son",
                "Daughter",
                "Brother",
                "Sister",
                "Friend",
                "Relative",
              ].map((opt) => (
                <button
                  key={opt}
                  onClick={() => setProfileFor(opt)}
                  className={` w-[87px] h-[27px] sm:w-[130px] sm:h-[40px] rounded-[8px] border text-sm font-medium ${
                    profileFor === opt
                      ? "bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] text-white border-transparent"
                      : "border-[#F05A8E] text-[#F05A8E] bg-transparent"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <h2 className="text-lg font-semibold text-[#620B00] mb-6">
              Your Gender
            </h2>
            <div className="flex gap-[10px]">
              {["Male", "Female"].map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`w-[90px] h-[27px] sm:w-[130px] sm:h-[40px] rounded-[8px] border text-sm font-medium ${
                    gender === g
                      ? "bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] text-white border-transparent"
                      : "border-[#F05A8E] text-[#F05A8E] bg-transparent"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="flex justify-between items-center mb-4">
              <button onClick={back} className="p-2">
                <img src={FormArrow} alt="Back" className="w-8 h-8" />
              </button>
              <div className="w-10 h-10 relative">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9155"
                    className="stroke-gray-300"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9155"
                    className="stroke-red-500"
                    strokeDasharray={`${percentage} 100`}
                    strokeWidth="2"
                    fill="none"
                  />
                  <text
                    x="18"
                    y="20.5"
                    textAnchor="middle"
                    className="fill-gray-600 text-xs"
                  >
                    {percentage}%
                  </text>
                </svg>
              </div>
            </div>
            <h2 className="text-lg font-semibold text-[#620B00] mb-6">
              Your Religion
            </h2>
            <select
              value={religion}
              onChange={(e) => setReligion(e.target.value)}
              className="w-full border-2 border-[#BBBBBB] rounded-[8px] px-4 py-2 mb-4 text-sm"
            >
              <option value="">Select Religion</option>
              {[
                "Hindu",
                "Muslim",
                "Christian",
                "Sikh",
                "Jain",
                "Buddhist",
                "Jewish",
                "Parsi",
                "Spiritual-Not religious",
                "No Religion",
                "Others",
              ].map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            

            <h2 className="text-lg font-semibold text-[#620B00] mb-6">
              Community
            </h2>
            <select
              value={community}
              onChange={(e) => setCommunity(e.target.value)}
              className="w-full border-2  border-[#BBBBBB] rounded-[8px] px-4 py-2 mb-4 text-sm"
            >
              <option value="">Select Community</option>
              {[
                "General",
                "OBC",
                "SC",
                "ST",
                "Urdu",
                "Hindi",
                "Punjabi",
                "Marathi",
                "Kannada",
                "Telugu",
                "Bengali",
                "Arabic",
                "Arunachali",
                "Assamese",
                "Awadhi",
                "Bengali",
                "Bihari",
                "Bhojpuri",
                "Bodo",
                "Dogri",
                "English",
                "French",
                "German",
                "Gujarati",
                "Hindi",
                "Kannada",
                "Kashmiri",
                "Konkani",
                "Kumaoni",
                "Maithili",
                "Malayalam",
                "Marathi",
                "Nepali",
                "Odia",
                "Punjabi",
                "Sanskrit",
                "Sindhi",
                "Tamil",
                "Telugu",
                "Urdu",
                "Tulu",
              ].map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <h2 className="text-lg font-semibold text-[#620B00] mb-6">
              Sub-Community
            </h2>
            <select
              value={subCommunity}
              onChange={(e) => setSubCommunity(e.target.value)}
              className="w-full border-2  border-[#BBBBBB] rounded-[8px] px-4 py-2 mb-4 text-sm"
            >
              <option value="">Select Sub-Community</option>
              {[
                "Agarwal",
                "Arora",
                "Baniya",
                "Bania",
                "Mahajan",
                "Marwari",
                "Modi",
                "Gupta",
                "Shah",
                "Baidya",
                
                
                "Billava",
                "Tulu",
                "Iyer",
                "Iyengar",
                "Vanniyar",
                "Thevar",
                "Nadar",
                "Chettiar",
                "Vanniyar",
                "Mudaliar",
                "Telugu Brahmin",
                "Kapu",
                "Reddy",
                "Kamma",
                "Velama",
                "Golla",
                "Kavara",
                "Syrian Christian",
                "Roman Catholic",
                "Protestant",
                "Jacobite",
                "Latin Catholic",
                "Chamar",
                "Paswan",
                "Valmiki",
                "Dhobi",
                "Sonar",
                "Saini",
                "Chaupal",
                "Ramdasia",
                "Bhutia",
                "Garo",
                "Khasi",
                "Mizo",
                "Naga",
                "Santhal",
                "Munda",
                "Ho",
                "Oraon",
                "Ramgarhia",
                
                "Sindhi",
                "Bengali",
                "Marathi",
                "Gujarati",
                "Kashmiri Pandit",
                "Himachali",
                "Haryanvi",
              ].map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>

            <label className="flex items-center text-sm mb-4">
              <input
                type="checkbox"
                checked={noBar}
                onChange={(e) => setNoBar(e.target.checked)}
                className="mr-2"
              />
              Not particular about my partner's community(Caste no bar)
            </label>
          </>
        )}

        {step === 3 && (
          <>
            <div className="flex justify-between items-center mb-4">
              <button onClick={back} className="p-2">
              <img src={FormArrow} alt="Back" className="w-8 h-8" />

              </button>
              <div className="w-10 h-10 relative">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9155"
                    className="stroke-gray-300"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9155"
                    className="stroke-red-500"
                    strokeDasharray={`${percentage} 100`}
                    strokeWidth="2"
                    fill="none"
                  />
                  <text
                    x="18"
                    y="20.5"
                    textAnchor="middle"
                    className="fill-gray-600 text-xs"
                  >
                    {percentage}%
                  </text>
                </svg>
              </div>
            </div>
            <h2 className="text-lg font-semibold text-[#620B00] mb-6">
              Country
            </h2>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border-2 border-[#F05A8E] rounded-[8px] px-4 py-2 mb-8 text-sm"
            >

              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
            <h2 className="text-lg font-semibold text-[#620B00] mb-6">
              State
            </h2>
            <select
      value={stateField}
      onChange={(e) => setStateField(e.target.value)}
      className="w-full border-2 border-[#F05A8E] rounded-[8px] px-4 py-2 mb-4 text-sm"
      disabled={country !== "India"} // Only enable if country is India
    >
      <option value="">Select State</option>
      {indianStates.map((state) => (
        <option key={state} value={state}>
          {state}
        </option>
      ))}
    </select>
    <h2 className="text-lg font-semibold text-[#620B00] mb-6">
              City
            </h2>
    <select
      value={city}
      onChange={(e) => setCity(e.target.value)}
      className="w-full border-2 border-[#F05A8E] rounded-[8px] px-4 py-2 mb-8 text-sm"
      disabled={!stateField} // Only enable if state is selected
    >
      <option value="">Select City</option>
      {citiesByState[stateField]?.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
          </>
        )}

{step === 4 && (
  <>
    {/* Header with Back + Progress */}
    <div className="flex justify-between items-center mb-4">
      <button onClick={back} className="p-2">
      <img src={FormArrow} alt="Back" className="w-8 h-8" />

      </button>
      <div className="w-10 h-10 relative">
        <svg viewBox="0 0 36 36" className="w-full h-full">
          <circle
            cx="18"
            cy="18"
            r="15.9155"
            className="stroke-gray-300"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="18"
            cy="18"
            r="15.9155"
            className="stroke-red-500"
            strokeDasharray={`${percentage} 100`}
            strokeWidth="2"
            fill="none"
          />
          <text
            x="18"
            y="20.5"
            textAnchor="middle"
            className="fill-gray-600 text-xs"
          >
            {percentage}%
          </text>
        </svg>
      </div>
    </div>

    {/* Personal Details */}
    <h2 className="text-lg font-semibold text-[#620B00] mb-4">
      Full Name
    </h2>
    <input
      type="text"
      value={fullName}
      onChange={(e) => setFullName(e.target.value)}
      placeholder="Full Name"
      className="w-full border-2 border-[#F05A8E] rounded-[8px] px-4 py-2 mb-4 text-sm"
    />
     <h2 className="text-lg font-semibold text-[#620B00] mb-4">
      Date of Birth
    </h2>
    <input
      type="date"
      value={dob}
      onChange={(e) => setDob(e.target.value)}
      className="w-full border-2 border-[#F05A8E] rounded-[8px] px-4 py-2 mb-4 text-sm"
    />
     <h2 className="text-lg font-semibold text-[#620B00] mb-4">
      Email ID  
    </h2>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email ID"
      className="w-full border-2 border-[#F05A8E] rounded-[8px] px-4 py-2 mb-8 text-sm"
    />
   <span className="text-[#380700] text-[12px]"> Provide email ID for verification and communication.</span> 

    {/* (Optional) If you still want the State selector here */}
    
  </>
)}


        {step === 5 && (
          <>
            <div className="flex justify-between items-center mb-4">
              <button onClick={back} className="p-2">
              <img src={FormArrow} alt="Back" className="w-8 h-8" />

              </button>
              <div className="w-10 h-10 relative">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9155"
                    className="stroke-gray-300"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9155"
                    className="stroke-red-500"
                    strokeDasharray={`${percentage} 100`}
                    strokeWidth="2"
                    fill="none"
                  />
                  <text
                    x="18"
                    y="20.5"
                    textAnchor="middle"
                    className="fill-gray-600 text-xs"
                  >
                    {percentage}%
                  </text>
                </svg>
              </div>
            </div>
            <h2 className="text-lg font-semibold text-[#620B00] mb-6">
              Marital Status
            </h2>
            <select
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
              className="w-full border-2 border-[#F05A8E] rounded-[8px] px-4 py-2 mb-8 text-sm"
            >
              <option value="">Select Marital Status</option>
              <option value="Never Married">Never Married</option>
              <option value="Divorced">Divorced</option>
              <option value="Widowed">Widowed</option>
              <option value="Awaiting Divorce">Awaiting Divorce</option>
              <option value="Annulled">Annulled</option>
            </select>

            <h2 className="text-lg font-semibold text-[#620B00] mb-6">
              Height
            </h2>
            <select
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border-2 border-[#F05A8E] rounded-[8px] px-4 py-2 mb-8 text-sm"
            >
              <option value="">Select Height</option>
              <option value="4'0">4'0"</option>
              <option value="5'0">5'0"</option>
              <option value="6'0">6'0"</option>
            </select>

            <h2 className="text-lg font-semibold text-[#620B00] mb-6">Diet</h2>
            <select
              value={diet}
              onChange={(e) => setDiet(e.target.value)}
              className="w-full border-2 border-[#F05A8E] rounded-[8px] px-4 py-2 mb-8 text-sm"
            >
              <option value="">Select Diet</option>
              <option value="Veg">Veg</option>
              <option value="Non-veg">Non-veg</option>
              <option value="Occasionally Non-veg">Occasionally Non-veg</option>
              <option value="Jain">Jain</option>
              <option value="Eggetarian">Eggetarian</option>
              <option value="Vegan">Vegan</option>
            </select>
          </>
        )}

{step === 6 && (
  <>
    <div className="flex justify-between items-center mb-4">
      <button onClick={back} className="p-2">
      <img src={FormArrow} alt="Back" className="w-8 h-8" />

      </button>
      <div className="w-10 h-10 relative">
        <svg viewBox="0 0 36 36" className="w-full h-full">
          <circle
            cx="18"
            cy="18"
            r="15.9155"
            className="stroke-gray-300"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="18"
            cy="18"
            r="15.9155"
            className="stroke-red-500"
            strokeDasharray={`${percentage} 100`}
            strokeWidth="2"
            fill="none"
          />
          <text
            x="18"
            y="20.5"
            textAnchor="middle"
            className="fill-gray-600 text-xs"
          >
            {percentage}%
          </text>
        </svg>
      </div>
    </div>

    <h2 className="text-lg font-semibold text-[#620B00] mb-6">
      Highest Qualification
    </h2>
    <select
      value={highestQualification}
      onChange={(e) => setHighestQualification(e.target.value)}
      className="w-full border-2 border-[#F05A8E] rounded-[8px] px-4 py-2 mb-8 text-sm"
    >
      <option value="">Select Qualification</option>
      <option value="MBA">MBA</option>
      <option value="B.Tech">B.Tech</option>
      <option value="PhD">PhD</option>
    </select>

    <h2 className="text-lg font-semibold text-[#620B00] mb-6">
      College
    </h2>
    <select
      value={college}
      onChange={(e) => setCollege(e.target.value)}
      className="w-full border-2 border-[#F05A8E] rounded-[8px] px-4 py-2 mb-8 text-sm"
    >
      <option value="">Select College</option>
      <option value="IIT">IIT</option>
      <option value="IIM">IIM</option>
      <option value="Other">Other</option>
    </select>
  </>
)}

        {step === 7 && (
          <>
            <div className="flex justify-between items-center mb-4">
              <button onClick={back} className="p-2">
               
                              <img src={FormArrow} alt="Back" className="w-8 h-8" />

              </button>
              <div className="w-10 h-10 relative">
                <svg viewBox="0 0 36 36" className="w-full h-full">
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9155"
                    className="stroke-gray-300"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9155"
                    className="stroke-red-500"
                    strokeDasharray={`${percentage} 100`}
                    strokeWidth="2"
                    fill="none"
                  />
                  <text
                    x="18"
                    y="20.5"
                    textAnchor="middle"
                    className="fill-gray-600 text-xs"
                  >
                    {percentage}%
                  </text>
                </svg>
              </div>
            </div>
            <h2 className="text-lg font-semibold text-[#620B00] mb-6">
              Annual Income
            </h2>
            <select
              value={annualIncome}
              onChange={(e) => setAnnualIncome(e.target.value)}
              className="w-full border-2 border-[#F05A8E] rounded-[8px] px-4 py-2 mb-8 text-sm"
            >
              <option value="">Select Income</option>
              <option value="5-10 LPA">Upto INR 1 Lakh</option>
              <option value="5-10 LPA"> INR 1 Lakh to 2 Lakh</option>
              <option value="5-10 LPA"> INR 2 Lakh to 3 Lakh</option>
              <option value="5-10 LPA"> INR 3 Lakh to 4 Lakh</option>
              <option value="5-10 LPA"> INR 4 Lakh to 5 Lakh</option>
              <option value="5-10 LPA"> INR 5 Lakh to 10 Lakh</option>

              <option value="5-10 LPA"> INR 15 Lakh</option>

              <option value="10-20 LPA">10-20 LPA</option>
            </select>

            <h2 className="text-lg font-semibold text-[#620B00] mb-6">
              Work Details
            </h2>
            <select
              value={workDetails}
              onChange={(e) => setWorkDetails(e.target.value)}
              className="w-full border-2 border-[#F05A8E] rounded-[8px] px-4 py-2 mb-8 text-sm"
            >
              <option value="">You work with</option>
              <option value="Private Company">Private Company</option>
              <option value="Government">Government</option>
              <option value="Government">Government/Public Sector</option>
              <option value="Government">Buissness/Self Employed</option>

              <option value="Government">Not Working</option>
            </select>
            <select
              value={workDetails}
              onChange={(e) => setWorkDetails(e.target.value)}
              className="w-full border-2 border-[#F05A8E] rounded-[8px] px-4 py-2 mb-8 text-sm"
            >
              <option value="">You Work as</option>
              <option value="Private Company">Private Company</option>
              <option value="Government">Government/Public Sector</option>
              <option value="Government">Buissness/Self Employed</option>

              <option value="Government">Not Working</option>

            </select>
          </>
        )}
{step === 8 && (
      <>
      <div className="flex flex-col h-auto w-full min-h-screen ">
        {/* Top Gradient Background */}
        <div className="relative bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] w-full h-[150px] rounded-b-[60%]">
          <div>
            {/* Header */}
          <div className="absolute top-0 left-0 w-full flex justify-between items-center px-4 py-4">
            <button onClick={back} className="p-2">
              <IoArrowBack className="w-8 h-8 text-white" />
            </button>
            <div className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full text-xs font-bold text-white">
              {percentage}%
            </div>
          </div>
          </div>
        </div>

        {/* Profile Picture Upload Section */}
        <div className="relative flex flex-col items-center -mt-14 px-4">
          {/* Image */}
          <div className="relative w-24 h-24">
            <div className="w-24 h-24 rounded-full border-2 border-[#ED1C24] overflow-hidden bg-gray-200 shadow-md flex items-center justify-center text-gray-400">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>No Image</span>
              )}
            </div>
          </div>

          {/* Hidden Input */}
          

          {/* Instructions */}
          <div className="flex flex-col items-center mt-6">
            <h2 className="text-lg font-semibold text-gray-600 text-center">
              Add photo to complete your profile
            </h2>
            <p className="text-xs text-gray-500 mt-1 text-center px-2">
              PHOTO PRIVACY CONTROLS AVAILABLE IN APP SETTINGS
            </p>
          </div>

          {/* Upload Buttons */}
          <div className="flex gap-4 items-center justify-center mt-6">
            <label
              htmlFor="file-upload"
              className="flex items-center justify-center w-12 h-12  rounded-full border border-gray-300 cursor-pointer"
            >
              <RiCameraFill className="text-black w-6 h-6" />
            </label>
            <label
              htmlFor="file-upload"
              className="flex items-center justify-center w-12 h-12  rounded-full border border-gray-300 cursor-pointer"
            >
              <IoImageSharp className="text-black w-6 h-6" />
            </label>
          </div>

          {/* Continue Button for Step 8 */}
          <div className="w-full mt-10 px-4 items-center justify-center py-14">
            <button
              onClick={next}
              className="w-full bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] text-white rounded-full flex items-center justify-center gap-2 text-sm py-3"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      </>
    )}

    {/* Continue Button for Other Steps */}
    {step !== 8 && (
      <button
        onClick={next}
        className="mt-4 w-full h-auto bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] text-white rounded-[8px] flex items-center justify-center gap-2 text-sm py-3"
      >
        {step < totalSteps ? (
          <>
            Continue <MdOutlineArrowCircleRight />
          </>
        ) : (
          "Submit"
        )}
      </button>
    )}

  </div>
  </div>
  )};  



export default ProfileForm;


    
 
