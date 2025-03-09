import React, {  useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';

import './Sec2.css';

// import required modules
import { EffectCoverflow, Pagination, Mousewheel } from 'swiper/modules';

export default function Sec2({ isScrolled }) {
  const [localScrolled, setLocalScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setLocalScrolled(true);
      } else {
        setLocalScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  return (
    <>
      <div  className={`mt-[350px] w-full h-48 bg-lightblue transition-transform duration-1000 ease-out ${localScrolled || isScrolled ? 'translate-y-[-1000px]' : 'translate-y-0'}`}>
        <div className='flex w-full justify-between text-base font-bold pt-4 '>
          <p><h1>최저가 간편 조회</h1></p>
          <p><span>오늘부터 6개월 내 출발하는 항공편의 최저가와 출발일을 간편하게 조회하실 수 있습니다.</span></p>
        </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        mousewheel={true}
        modules={[EffectCoverflow, Pagination, Mousewheel]}
        className="sec2-swiper"
      >
        <SwiperSlide>
          <div className='relative'>
            <img src="https://ozimg.flyasiana.com/image_fixed/destination/des_M_LAX_01.jpg" />
            <div className='absolute bottom-0 left-0 w-full bg-opacity-80 bg-black px-[20px] py-[10px] text-white text-left'>
              <p className='text-base font-bold mb-1'>
                <span>서울 / 인천</span>
                <span className="relative pr-4 before:absolute before:left-0 before:content-['\2190'] before:text-xl after:absolute after:right-0 after:content-['\2192'] after:text-xl top-[-5px] mx-2">
                  &nbsp;
                </span>
                <span>로스앤젤레스</span>
              </p>
              <p className='text-base mb-1'><span>왕복</span></p>
              <p className='text-base font-bold'>
                <span>KRW</span>
                <span className='ml-1 text-xl text-red-500'>1,145,900</span>
                <span className='ml-1 text-lg'>~</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src="https://ozimg.flyasiana.com/image_fixed/destination/des_M_FRA_01.jpg" />
            <div className='absolute bottom-0 left-0 w-full bg-opacity-80 bg-black px-[20px] py-[10px] text-white text-left'>
              <p className='text-base font-bold mb-1'>
                <span>서울 / 인천</span>
                <span className="relative pr-4 before:absolute before:left-0 before:content-['\2190'] before:text-xl after:absolute after:right-0 after:content-['\2192'] after:text-xl top-[-5px] mx-2">
                  &nbsp;
                </span>
                <span>프랑크푸르트</span>
              </p>
              <p className='text-base mb-1'><span>왕복</span></p>
              <p className='text-base font-bold'>
                <span>KRW</span>
                <span className='ml-1 text-xl text-red-500'>1,084,800</span>
                <span className='ml-1 text-lg'>~</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src="https://ozimg.flyasiana.com/image_fixed/destination/des_M_SFO_02.jpg" />
            <div className='absolute bottom-0 left-0 w-full bg-opacity-80 bg-black px-[20px] py-[10px] text-white text-left'>
              <p className='text-base font-bold mb-1'>
                <span>서울 / 인천</span>
                <span className="relative pr-4 before:absolute before:left-0 before:content-['\2190'] before:text-xl after:absolute after:right-0 after:content-['\2192'] after:text-xl top-[-5px] mx-2">
                  &nbsp;
                </span>
                <span>센프란시스코</span>
              </p>
              <p className='text-base mb-1'><span>왕복</span></p>
              <p className='text-base font-bold'>
                <span>KRW</span>
                <span className='ml-1 text-xl text-red-500'>745,900</span>
                <span className='ml-1 text-lg'>~</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src="https://ozimg.flyasiana.com/image_fixed/destination/des_M_BKK_01.jpg" />
            <div className='absolute bottom-0 left-0 w-full bg-opacity-80 bg-black px-[20px] py-[10px] text-white text-left'>
              <p className='text-base font-bold mb-1'>
                <span>서울 / 인천</span>
                <span className="relative pr-4 before:absolute before:left-0 before:content-['\2190'] before:text-xl after:absolute after:right-0 after:content-['\2192'] after:text-xl top-[-5px] mx-2">
                  &nbsp;
                </span>
                <span>방콕</span>
              </p>
              <p className='text-base mb-1'><span>왕복</span></p>
              <p className='text-base font-bold'>
                <span>KRW</span>
                <span className='ml-1 text-xl text-red-500'>540,300</span>
                <span className='ml-1 text-lg'>~</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src="https://ozimg.flyasiana.com/image_fixed/destination/des_M_NRT_02.jpg" />
            <div className='absolute bottom-0 left-0 w-full bg-opacity-80 bg-black px-[20px] py-[10px] text-white text-left'>
              <p className='text-base font-bold mb-1'>
                <span>서울 / 인천</span>
                <span className="relative pr-4 before:absolute before:left-0 before:content-['\2190'] before:text-xl after:absolute after:right-0 after:content-['\2192'] after:text-xl top-[-5px] mx-2">
                  &nbsp;
                </span>
                <span>도쿄 / 나리타</span>
              </p>
              <p className='text-base mb-1'><span>왕복</span></p>
              <p className='text-base font-bold'>
                <span>KRW</span>
                <span className='ml-1 text-xl text-red-500'>369,600</span>
                <span className='ml-1 text-lg'>~</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src="https://ozimg.flyasiana.com/image_fixed/destination/des_M_CDG_01.jpg" />
            <div className='absolute bottom-0 left-0 w-full bg-opacity-80 bg-black px-[20px] py-[10px] text-white text-left'>
              <p className='text-base font-bold mb-1'>
                <span>서울 / 인천</span>
                <span className="relative pr-4 before:absolute before:left-0 before:content-['\2190'] before:text-xl after:absolute after:right-0 after:content-['\2192'] after:text-xl top-[-5px] mx-2">
                  &nbsp;
                </span>
                <span>파리 / 샤를 드 골</span>
              </p>
              <p className='text-base mb-1'><span>왕복</span></p>
              <p className='text-base font-bold'>
                <span>KRW</span>
                <span className='ml-1 text-xl text-red-500'>886,900</span>
                <span className='ml-1 text-lg'>~</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src="https://ozimg.flyasiana.com/image_fixed/destination/des_M_CEB_02.jpg" />
            <div className='absolute bottom-0 left-0 w-full bg-opacity-80 bg-black px-[20px] py-[10px] text-white text-left'>
              <p className='text-base font-bold mb-1'>
                <span>서울 / 인천</span>
                <span className="relative pr-4 before:absolute before:left-0 before:content-['\2190'] before:text-xl after:absolute after:right-0 after:content-['\2192'] after:text-xl top-[-5px] mx-2">
                  &nbsp;
                </span>
                <span>세부</span>
              </p>
              <p className='text-base mb-1'><span>왕복</span></p>
              <p className='text-base font-bold'>
                <span>KRW</span>
                <span className='ml-1 text-xl text-red-500'>412,900</span>
                <span className='ml-1 text-lg'>~</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src="https://ozimg.flyasiana.com/image_fixed/destination/des_M_SGN_01.jpg" />
            <div className='absolute bottom-0 left-0 w-full bg-opacity-80 bg-black px-[20px] py-[10px] text-white text-left'>
              <p className='text-base font-bold mb-1'>
                <span>서울 / 인천</span>
                <span className="relative pr-4 before:absolute before:left-0 before:content-['\2190'] before:text-xl after:absolute after:right-0 after:content-['\2192'] after:text-xl top-[-5px] mx-2">
                  &nbsp;
                </span>
                <span>호찌민</span>
              </p>
              <p className='text-base mb-1'><span>왕복</span></p>
              <p className='text-base font-bold'>
                <span>KRW</span>
                <span className='ml-1 text-xl text-red-500'>376,300</span>
                <span className='ml-1 text-lg'>~</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img src="https://ozimg.flyasiana.com/image_fixed/destination/des_M_CAN_02.jpg" />
            <div className='absolute bottom-0 left-0 w-full bg-opacity-80 bg-black px-[20px] py-[10px] text-white text-left'>
              <p className='text-base font-bold mb-1'>
                <span>서울 / 인천</span>
                <span className="relative pr-4 before:absolute before:left-0 before:content-['\2190'] before:text-xl after:absolute after:right-0 after:content-['\2192'] after:text-xl top-[-5px] mx-2">
                  &nbsp;
                </span>
                <span>광저우[廣州]</span>
              </p>
              <p className='text-base mb-1'><span>왕복</span></p>
              <p className='text-base font-bold'>
                <span>KRW</span>
                <span className='ml-1 text-xl text-red-500'>307,400</span>
                <span className='ml-1 text-lg'>~</span>
              </p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
      </div>
    </>
  );
}
