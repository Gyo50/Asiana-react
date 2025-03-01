import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import DatePicker from "react-datepicker";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "react-datepicker/dist/react-datepicker.css";
import "./custom-datepicker.css";

export default function Sec1() {
  const swiperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [isStar, setStar] = useState(false);
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [classType, setClassType] = useState("economy");

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
  const handleSearch = () => {
    alert(
      `출발지: ${departure}\n도착지: ${arrival}\n탑승일: ${date}\n탑승객: ${passengers}명\n좌석등급: ${classType}`
    );
  }
  const toggleStar = () => {
    setStar(!isStar);
  };

  const [departureDate, setDepartureDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleDateChange = (date) => {
    setDepartureDate(date);
    setIsOpen(false); // 날짜 선택 후 달력 닫기
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

      <button className="custom-prev absolute top-1/2 left-[17%] transform -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 bg-white/30 rounded-full backdrop-blur-[10px] hover:bg-white/50 transition">
        ❮
      </button>
      <button className="custom-next absolute top-1/2 right-[17%] transform -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 bg-white/30 rounded-full backdrop-blur-[100px] hover:bg-white/50 transition">
        ❯
      </button>

      {/* 추가할 컨텐츠 (항공권 예약, 예약 조회 등) */}
      <div className="w-[1280px] z-20 absolute left-[20%] top-0 box-border mt-[652px] mx-auto ">
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

        { /* 항공권 */}
        <div className="z-30 relative">
          <div className="w-auto py-[30px] px-[50px] bg-[#ffff] rounded-b-lg shadow-2xl">
            <div className="books hidden">
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
                      className={`absolute top-1/2 transform -translate-y-1/2 w-[30px] h-[30px] bg-white flex items-center justify-center text-xs font-bold transition-all duration-300 shadow-lg ${isChecked ? "left-[28px]" : "left-[0px]"
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
                  <label className="ml-2 font-medium" htmlFor="">가까운 날짜 조회</label>
                </div>
                <div className="absolute right-[30px]">
                  <button className="font-bold border-solid border-rose-700 border-[1px] py-[9px] px-[9px]">쿠폰조회</button>
                </div>
              </div>
              <div className="bg-white rounded-lg flex items-center gap-4 relative mt-5">
                {/* 출발지 */}
                <input
                  type="text"
                  placeholder="출발지"
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-[120px]"
                />

                {/* 도착지 */}
                <input
                  type="text"
                  placeholder="도착지"
                  value={arrival}
                  onChange={(e) => setArrival(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-[120px]"
                />

                {/* 탑승일 */}
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-[140px]"
                />

                {/* 탑승객 수 */}
                <input
                  type="number"
                  min="1"
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-[80px]"
                />

                {/* 좌석 등급 */}
                <select
                  value={classType}
                  onChange={(e) => setClassType(e.target.value)}
                  className="border border-gray-300 rounded-md p-2 w-[140px]"
                >
                  <option value="economy">이코노미</option>
                  <option value="business">비즈니스</option>
                  <option value="first">퍼스트 클래스</option>
                </select>

                {/* 조회 버튼 */}
                <button
                  onClick={handleSearch}
                  className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition absolute right-[30px]"
                >
                  조회
                </button>
              </div>
            </div>
            <div className="secrch">
              <div><p>예약하신 항공권의 여정을 편리하게 확인할 수 있습니다.</p></div>
              <div className="bg-white pt -6 rounded-lg flex flex-col items-center w-full ">
                {/* 가로 정렬된 입력 필드 */}
                <div className="flex gap-4 w-full justify-between">
                  {/* 예약번호 */}
                  <input
                    type="text"
                    placeholder="예약번호"
                    className="border border-gray-300 rounded-md p-2 w-[180px]"
                  />

                  {/* 출발지 */}
                  <input
                    type="text"
                    placeholder="출발지"
                    className="border border-gray-300 rounded-md p-2 w-[180px]"
                  />

                  {/* 도착지 */}
                  <input
                    type="text"
                    placeholder="도착지"
                    className="border border-gray-300 rounded-md p-2 w-[180px]"
                  />

                  {/* 탑승일 (달력 UI) */}
                  <div className="relative w-[180px]">
                    <input
                      type="text"
                      placeholder="탑승일"
                      value={departureDate ? departureDate.toLocaleDateString("ko-KR") : ""}
                      onClick={() => setIsOpen(!isOpen)}
                      readOnly
                      className="border border-gray-300 rounded-md p-2 w-full cursor-pointer"
                    />

                    {/* 달력 창 */}
                    {isOpen && (
                      <div className="absolute top-12 left-0 bg-white shadow-lg border border-gray-300 rounded-md z-50">
                        <DatePicker
                          selected={departureDate}
                          onChange={handleDateChange}
                          dateFormat="yyyy-MM-dd"
                          inline
                          monthsShown={2}  // 한 번에 두 개의 달 표시
                          minDate={new Date()} // 오늘 이후 날짜만 선택 가능
                          showPopperArrow={false}
                        />
                      </div>
                    )}
                  </div>

                  {/* 탑승객 성 */}
                  <input
                    type="text"
                    placeholder="탑승객 성"
                    className="border border-gray-300 rounded-md p-2 w-[180px]"
                  />

                  {/* 탑승객 이름 */}
                  <input
                    type="text"
                    placeholder="탑승객 이름"
                    className="border border-gray-300 rounded-md p-2 w-[180px]"
                  />
                </div>
                <p className="flex w-full justify-between mt-2">
                  <span className="sertext">예약번호는 8자리 숫자 또는 6자리 영문/숫자를 입력하세요.</span>
                  <span className="w-[380px]">
                    <span className="sertext inline-block w-[180px]">예시 :  KIM</span>
                    <span className="sertext inline-block w-[180px] ml-[20px]">예시 :  CHEOLSU</span>
                  </span>
                </p>
                {/* 조회 버튼 */}
                <button className="mt-4 w-[230px] bg-blue-500 text-white rounded-md hover:bg-blue-600 transition p-[11px]">
                  예약조회
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
