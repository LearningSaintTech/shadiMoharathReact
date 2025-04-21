import React from 'react';
import Icon from '../../assets/images/Icon.svg';

const Wedding = () => {
  return (
    <div
      className="bg-[#FFF6F4] flex justify-center gap-[6vw] md:gap-[4vw] lg:gap-[2vw] my-[10vw] md:my-[6vw] lg:my-[4vw]"
      style={{ fontFamily: 'Ramaraja' }}
    >
      <div className="grid grid-cols-1 gap-[10vw] md:gap-[6vw] lg:gap-[2vw] md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="flex justify-center">
          <div className="bg-white rounded-[4vw] md:rounded-[2vw] lg:rounded-[1.2vw] text-center py-[12vw] md:py-[6vw] lg:py-[3.5vw] px-[0.5vw] md:px-[2vw] lg:px-[1.3vw] border border-[#ED1C2426] flex flex-col items-center">
            <img
              src={Icon}
              alt="Genuine Profiles"
              className="w-[18vw] h-[18vw] md:w-[10vw] md:h-[10vw] lg:w-[7vw] lg:h-[7vw] rounded-full border border-[#ED1C24]  border-light mb-[4vw] md:mb-[2vw] lg:mb-[1.5vw]"
            />
            <h3 className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent text-[7vw] md:text-[3vw] lg:text-[1.7vw] font-medium mb-[2vw] md:mb-[0.5vw] lg:mb-[0.3vw]">
              Genuine Profiles
            </h3>
            <p
              className="text-black text-[5.1vw] md:text-[2vw] lg:text-[1.1vw] w-[80vw] md:w-[30vw] lg:w-[18vw] font-medium text-center"
              style={{ fontFamily: 'Raleway' }}
            >
              Contact Genuine Profiles With 100% Verified Mobile
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex justify-center">
          <div className="bg-white rounded-[4vw] md:rounded-[2vw] lg:rounded-[1.2vw] text-center py-[12vw] md:py-[6vw] lg:py-[3.5vw] px-[0.5vw] md:px-[2vw] lg:px-[1.3vw] border border-[#ED1C2426] flex flex-col items-center">
            <img
              src={Icon}
              alt="Most Trusted"
              className="w-[18vw] h-[18vw] md:w-[10vw] md:h-[10vw] lg:w-[7vw] lg:h-[7vw] rounded-full border border-[#ED1C24] mb-[4vw] md:mb-[2vw] lg:mb-[1.5vw]"
            />
            <h3 className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent text-[7vw] md:text-[3vw] lg:text-[1.7vw] font-medium mb-[2vw] md:mb-[0.5vw] lg:mb-[0.3vw]">
              Most Trusted
            </h3>
            <p
              className="text-black text-[5.5vw] md:text-[2vw] lg:text-[1.1vw] w-[80vw] md:w-[30vw] lg:w-[18vw] font-medium text-center"
              style={{ fontFamily: 'Raleway' }}
            >
              The Most Trusted Wedding Matrimony Brand Lorem
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex justify-center">
          <div className="bg-white rounded-[4vw] md:rounded-[2vw] lg:rounded-[1.2vw] text-center py-[12vw] md:py-[6vw] lg:py-[3.5vw] px-[0.5vw] md:px-[2vw] lg:px-[1.3vw] border border-[#ED1C2426] flex flex-col items-center">
            <img
              src={Icon}
              alt="2000+ Weddings"
              className="w-[18vw] h-[18vw] md:w-[10vw] md:h-[10vw] lg:w-[7vw] lg:h-[7vw] rounded-full border border-[#ED1C24] mb-[4vw] md:mb-[2vw] lg:mb-[1.5vw]"
            />
            <h3 className="bg-gradient-to-r from-[#F05A8E] to-[#ED1C24] bg-clip-text text-transparent text-[7vw] md:text-[3vw] lg:text-[1.7vw] font-medium mb-[2vw] md:mb-[0.5vw] lg:mb-[0.3vw]">
              2000+ Weddings
            </h3>
            <p
              className="text-black text-[5vw] md:text-[2vw] lg:text-[1.1vw] w-[80vw] md:w-[30vw] lg:w-[18vw] font-medium text-center"
              style={{ fontFamily: 'Raleway' }}
            >
              Lakhs Of Peoples Have Found Their Life Partner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wedding;