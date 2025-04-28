import React, { useState } from "react";
import { MdArrowBack, MdOutlineArrowCircleRight } from "react-icons/md";
import { HiCamera } from "react-icons/hi";
import { FaImage } from "react-icons/fa";
import Couple4 from "../../assets/images/Couple4.svg";

const ProfileForm = () => {
  const totalSteps = 8;
  const [step, setStep] = useState(1);

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

    if (step < totalSteps) setStep((s1) => s1 + 1);
    else alert("Form submitted!");
  };

  const back = () => {
    if (step > 1) setStep((s1) => s1 - 1);
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-lg p-8 w-[476px] h-[630px] flex flex-col">
      {/* Header: back + progress */}
      <div className="flex justify-between items-center mb-4">
        <button onClick={back} className="p-2">
          <MdArrowBack
            className={`text-2xl ${
              step === 1 ? "text-gray-300 pointer-events-none" : "text-red-500"
            }`}
          />
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

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {step === 1 && (
          <>
            <h2 className="text-lg font-semibold text-[#620B00] mb-6">
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
                  className={`w-[130px] h-[40px] rounded-[8px] border text-sm font-medium ${
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
                  className={`w-[130px] h-[40px] rounded-[8px] border text-sm font-medium ${
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
            <h2 className="text-lg font-semibold text-[#620B00] mb-6">
              Your Religion
            </h2>
            <select
              value={religion}
              onChange={(e) => setReligion(e.target.value)}
              className="w-full border-2 border-[#F05A8E] rounded-[8px] px-4 py-2 mb-4 text-sm"
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
              className="w-full border-2 border-[#F05A8E] rounded-[8px] px-4 py-2 mb-4 text-sm"
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
              className="w-full border-2 border-[#F05A8E] rounded-[8px] px-4 py-2 mb-4 text-sm"
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
                "Chitpavan",
                "Deshastha",
                "Gaur",
                "Kanyakubja",
                "Kumain",
                "Madhwa",
                "Namboodiri",
                "Niyogi",
                "Rarhi",
                "Rajput",
                "Kshatriya",
                "Jat",
                "Jatt Sikh",
                "Gujjar",
                "Thakur",
                "Rathore",
                "Chauhan",
                "Sisodia",
                "Vohra",
                "Yadav",
                "Kurmi",
                "Jatav",
                "Lodha",
                "Nayak",
                "Kumhar",
                "Kumbhar",
                "Teli",
                "Vishwakarma",
                "Sunar",
                "Ezhava",
                "Nair",
                "Goud",
                "Reddy",
                "Naidu",
                "Kamma",
                "Balija",
                "Kapu",
                "Mudaliar",
                "Chettiar",
                "Lingayat",
                "Kuruba",
                "Gowda",
                "Bunt",
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
                "Jat Sikh",
                "Khatri Sikh",
                "Arora Sikh",
                "Sunni",
                "Shia",
                "Pathan",
                "Syed",
                "Memon",
                "Bohra",
                "Khoja",
                "Anglican",
                "Baptist",
                "Lutheran",
                "Pentecostal",
                "Punjabi",
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

            <label className="flex items-center text-sm mb-8">
              <input
                type="checkbox"
                checked={noBar}
                onChange={(e) => setNoBar(e.target.checked)}
                className="mr-2"
              />
              Caste no bar
            </label>
          </>
        )}

        {step === 3 && (
          <>
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
          </>
        )}

        {step === 4 && (
          <>
            <h2 className="text-lg font-semibold text-[#620B00] mb-6">State</h2>
            <select
              value={stateField}
              onChange={(e) => setStateField(e.target.value)}
              className="w-full border-2 border-[#F05A8E] rounded-[8px] px-4 py-2 mb-8 text-sm"
            >
              <option value="">Select State</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Punjab">Punjab</option>
              <option value="Karnataka">Karnataka</option>
            </select>
          </>
        )}

        {step === 5 && (
          <>
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
              <option value="IIT Delhi">IIT Delhi</option>
              <option value="IIM Ahmedabad">IIM Ahmedabad</option>
            </select>
          </>
        )}

        {step === 7 && (
          <>
            <h2 className="text-lg font-semibold text-[#620B00] mb-6">
              Annual Income
            </h2>
            <select
              value={annualIncome}
              onChange={(e) => setAnnualIncome(e.target.value)}
              className="w-full border-2 border-[#F05A8E] rounded-[8px] px-4 py-2 mb-8 text-sm"
            >
              <option value="">Select Income</option>
              <option value="5-10 LPA">5-10 LPA</option>
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
              <option value="">Select Work Details</option>
              <option value="Private Company">Private Company</option>
              <option value="Government">Government</option>
            </select>
          </>
        )}

{step === 8 && (
  <div className="flex flex-col h-full w-full bg-white overflow-y-auto">
    {/* Top Section with Pink Elliptical Background */}
    <div className="relative h-[200px] w-full">
      {/* Pink Elliptical Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] h-[200px] rounded-b-[70%]"></div>

      {/* Profile Image */}
      <div className="absolute inset-x-0 bottom-[-3rem] flex justify-center">
        <div className="relative">
          <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-md bg-gray-200 flex items-center justify-center text-gray-500">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={Couple4}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Plus (+) Button */}
          <label
            htmlFor="file-upload"
            className="absolute bottom-2 right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-[#F05A8E] text-2xl cursor-pointer"
          >
            +
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
      </div>
    </div>

    {/* Text Content */}
    <div className="flex flex-col items-center mt-16 px-4">
      <h2 className="text-lg font-semibold text-[#620B00] text-center">
        Add photo to complete your profile
      </h2>
      <p className="text-xs text-gray-500 mt-1 text-center">
        Photo Privacy Controls Available In App Setting
      </p>
    </div>

    {/* Upload Buttons */}
    <div className="flex gap-6 justify-center mt-8">
      {/* Camera Upload */}
      <label
        htmlFor="camera-upload"
        className="flex items-center justify-center w-14 h-14 bg-pink-50 rounded-full border-2 border-[#F05A8E] cursor-pointer"
      >
        <svg
          className="h-6 w-6 text-[#F05A8E]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 9a2 2 0 012-2h2l2-2h6l2 2h2a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </label>
      <input
        id="camera-upload"
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleImageChange}
      />

      {/* Gallery Upload */}
      <label
        htmlFor="gallery-upload"
        className="flex items-center justify-center w-14 h-14 bg-pink-50 rounded-full border-2 border-[#F05A8E] cursor-pointer"
      >
        <svg
          className="h-6 w-6 text-[#F05A8E]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </label>
      <input
        id="gallery-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
    </div>

    {/* Submit Button */}
    <button
      onClick={next}
      className="mt-auto mb-4 mx-4 h-[40px] bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] text-white rounded-[8px] flex items-center justify-center gap-2 text-sm"
    >
      Submit
    </button>
  </div>
)}
      </div>

      {/* Continue Button for Steps 1-7 */}
      {step !== 8 && (
        <button
          onClick={next}
          className="mt-4 w-full h-[40px] bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] text-white rounded-[8px] flex items-center justify-center gap-2 text-sm"
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
  );
};

export default ProfileForm;