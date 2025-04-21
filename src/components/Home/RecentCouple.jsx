import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Couple22 from '../../assets/images/Couple22.svg';
import Couple23 from '../../assets/images/Couple23.svg';
import Couple3 from '../../assets/images/Couple3.svg';
import Couple28 from '../../assets/images/Couple28.svg';

export default function RecentCouples() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  const couples = [
    {
      id: 1,
      image: Couple22,
      alt: 'Indian couple in traditional wedding attire',
    },
    {
      id: 2,
      image: Couple23,
      alt: 'Couple in red and gold traditional wedding clothes',
    },
    {
      id: 3,
      image: Couple3,
      alt: 'Couple in cream and gold wedding attire',
    },
    {
      id: 4,
      image: Couple28,
      alt: 'Couple in red wedding outfits',
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setVisibleCount(1); // Mobile
      else if (width < 1024) setVisibleCount(2); // Tablet
      else setVisibleCount(4); // Desktop
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % couples.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + couples.length) % couples.length);
  };

  const displayItems = [];
  for (let i = 0; i < visibleCount; i++) {
    const index = (currentIndex + i) % couples.length;
    displayItems.push(couples[index]);
  }

  return (
    <div className="py-8  hidden sm:block">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[2vw] font-medium text-center mb-2" style={{ fontFamily: 'Raleway' }}>
          Recent Couples
        </h2>
        <p className="text-center font-poppins font-light text-gray-600 mb-8 mx-auto max-w-2xl text-[0.9vw]">
          Personalized matchmaking services designed to connect you with your ideal life partner, based on compatibility, values, and aspirations.
        </p>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-3 bg-[#FCE2C5] rounded-full p-2 shadow z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-[#C1645C]" />
          </button>

          {/* Carousel */}
          <div className="flex justify-center overflow-hidden">
            <div className="flex gap-3 transition-transform duration-300">
              {displayItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl overflow-hidden shadow-md flex-shrink-0  w-[15vw] h-auto"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-3 bg-[#FCE2C5] rounded-full p-2 shadow z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-[#C1645C]" />
          </button>
        </div>
      </div>
    </div>
  );
}
