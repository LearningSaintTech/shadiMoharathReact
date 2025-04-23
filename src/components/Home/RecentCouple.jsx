import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Couple22 from '../../assets/images/Couple22.svg';
import Couple23 from '../../assets/images/Couple23.svg';
import Couple3 from '../../assets/images/Couple3.svg';
import Couple28 from '../../assets/images/Couple28.svg';

const RecentCouples = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="hidden lg:block bg-[#fff6f1] py-10 px-4 md:px-20 text-center overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-medium mb-2" style={{fontFamily:"Raleway"}}>Recent Couples</h2>
      <p className="text-sm md:text-base max-w-xl mx-auto text-gray-600 mb-8 font-normal font-poppins">
        Personalized matchmaking services designed to connect you with your ideal life partner,
        based on compatibility, values, and aspirations.
      </p>

      <div className="relative w-full px-9">
        <div
          ref={prevRef}
          className="absolute -left-7 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-[#FCE2C5] rounded-full p-2 shadow-md"
        >
          <ChevronLeft className="w-6 h-6 text-[#C1645C]" />
        </div>
        <div
          ref={nextRef}
          className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-[#FCE2C5] rounded-full p-2 shadow-md"
        >
          <ChevronRight className="w-6 h-6 text-[#C1645C]" />
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1.2}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <img src={Couple23} alt="Couple 1" className="rounded-[1.042vw] w-[20.156vw] h-[27.552vw] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Couple3} alt="Couple 2" className="rounded-[1.042vw] w-[20.552vw] h-[27.552vw] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Couple22} alt="Couple 3" className="rounded-[1.042vw] w-[20.552vw] h-[27.552vw] object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Couple28} alt="Couple 4" className="rounded-[1.042vw] w-[20.552vw] h-[27.552vw] object-cover" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default RecentCouples;
