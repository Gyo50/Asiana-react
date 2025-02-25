import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css"; // 스타일 적용
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Sec1() {
  const swiperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [isStar, setStar] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  const handleToggleAutoplay = () => {
    if (swiperRef.current) {
      if (isPlaying) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleStar = () => {
    setStar(!isStar);
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }} // 커스텀 네비게이션 추가
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <SwiperSlide className="h-[300px] flex items-center justify-center text-black text-2xl font-bold">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="h-[300px] flex items-center justify-center text-black text-2xl font-bold">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="h-[300px] flex items-center justify-center text-black text-2xl font-bold">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="h-[300px] flex items-center justify-center text-black text-2xl font-bold">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="h-[300px] flex items-center justify-center text-black text-2xl font-bold">
          Slide 5
        </SwiperSlide>
      </Swiper>

      {/* Swiper Pagination & Autoplay Button */}
      <div className="absolute bottom-48 left-[30%] transform -translate-x-1/2 flex items-center z-10">
        <div className="flex gap-2 custom-pagination"></div>

        <button onClick={handleToggleAutoplay} className="flex justify-center items-center w-10 h-10">
          <img
            src={isPlaying ? "/img/pause.png" : "/img/play.png"}
            alt="Autoplay Control"
            className="w-3 h-3 object-contain"
          />
        </button>
      </div>

      {/* 커스텀 Navigation 버튼 */}
      <button className="custom-prev absolute top-1/2 left-[17%] transform -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 bg-white/30 rounded-full backdrop-blur-[10px] hover:bg-white/50 transition">
        ❮
      </button>
      <button className="custom-next absolute top-1/2 right-[17%] transform -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 bg-white/30 rounded-full backdrop-blur-[100px] hover:bg-white/50 transition">
        ❯
      </button>

      {/* 추가할 컨텐츠 (항공권 예약, 예약 조회 등) */}
      <div className="w-[1280px] z-20 absolute left-[20%] top-0 box-border mt-[652px] mx-auto">
        <div className="-mt-14 flex w-full max-w-4xl text-center absolute">
          <div className="p-5 w-[150px] h-[65px] bg-red-500 bg-opacity-80 text-white rounded-lg shadow-lg cursor-pointer hover:bg-blue-700 transition">
            항공권 예약
          </div>
          <div className="p-5 w-[150px] h-[65px] bg-pink-800 bg-opacity-80 text-white rounded-lg shadow-lg cursor-pointer hover:bg-blue-700 transition">
            예약 조회
          </div>
          <div className="p-5 w-[150px] h-[65px] bg-blue-700 bg-opacity-80 text-white rounded-lg shadow-lg cursor-pointer hover:bg-blue-700 transition">
            체크인
          </div>
          <div className="p-5 w-[150px] h-[65px] bg-yellow-400 bg-opacity-80 text-white rounded-lg shadow-lg cursor-pointer hover:bg-blue-700 transition">
            출도착 조회
          </div>
        </div>

        <div className="z-30 relative">
          <div className="w-auto py-[30px] px-[50px] bg-[#ffff] rounded-b-lg">
            <div className="flex items-center relative">
              <div className="flex items-center gap-3 h-[46px]">
                <span className=" font-medium">마일리지 사용</span>
                <label className="relative flex items-center cursor-pointer w-[50px] h-[25px]">
                  <input
                    type="checkbox"
                    id="allChecked"
                    className="sr-only peer"
                    checked={isChecked}
                    onChange={toggleSwitch}
                  />
                  <div className="w-full h-full bg-gray-400 peer-checked:bg-blue-500 relative transition duration-300"></div>
                  <div
                    className={`absolute top-1/2 transform -translate-y-1/2 w-[30px] h-[30px] bg-white flex items-center justify-center text-xs font-bold transition-all duration-300 shadow-sm ${isChecked ? "left-[28px]" : "left-[0px]"
                      }`}
                  >
                    {isChecked ? "ON" : "OFF"}
                  </div>
                </label>
              </div>
              <span className="line inline-block float-left w-[1px] h-[46px] bg-[#ccc] my-[5px] mx-[15px]"></span>
              <div className="h-auto">
                <ul className="flex h-[46px] items-center text-center">
                  <li className="w-[105px] h-full leading-[46px] bg-[#f3f3f3]"><a href="#">왕복</a></li>
                  <li className="w-[105px] h-full leading-[46px] bg-[#f3f3f3]"><a href="#">편도</a></li>
                  <li className="w-[105px] h-full leading-[46px] bg-[#f3f3f3]"><a className="arrow-box" href="#"><span className="arrow">다구간</span></a></li>
                </ul>
              </div>
              <div
                className="w-[46px] h-[46px] bg-[#f3f3f3] ml-[15px] flex items-center justify-center cursor-pointer"
                onClick={toggleStar}>
                <img
                  src={isStar ? "/img/starfill.png" : "/img/star.png"}
                  alt="Star Icon"
                  className="w-[20px] h-[20px] transition-all duration-300"
                />
              </div>
              <div className="pl-4">
                <input type="checkbox" />
                <label className="ml-2" htmlFor="">가까운 날짜 조회</label>
              </div>
              <div>
                <button className="font-bold border-solid border-rose-700 border-[1px] py-[9px] px-[9px]">쿠폰조회</button>
              </div>
            </div>
          </div>
          
        </div>
        <div></div>
      </div>
    </div>
  );
}
