import React, { useRef, useState, useEffect } from "react";
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
  const [date, setDate] = useState(new Date());
  const [passengers, setPassengers] = useState(1);
  const [classType, setClassType] = useState("economy");
  const [activeButton, setActiveButton] = useState("books");
  const [showOverlay, setShowOverlay] = useState(false);

  const [departureDate, setDepartureDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const datePickerRef = useRef(null);

  const [searchType, setSearchType] = useState(["예약번호", "노선조회"]);
  const [searchValue, setSearchValue] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [passengerLastName, setPassengerLastName] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 4);

  const formatDate = (date) => date.toISOString().split("T")[0];

  const dateOptions = [];
  for (let i = -3; i <= 1; i++) {
    const newDate = new Date();
    newDate.setDate(today.getDate() + i);
    dateOptions.push(formatDate(newDate));
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
  };

  const toggleSwitch = () => setIsChecked(!isChecked);
  const toggleStar = () => setStar(!isStar);

  // 📌 날짜 변경 핸들러
  const handleDateChange = (selectedDate) => {
    console.log("선택된 날짜:", selectedDate);
    setDate(selectedDate);  // ✅ 선택한 날짜를 state에 저장
    setIsOpen(false); // ✅ 날짜 선택 후 달력 닫기
  };

  const handleSearchTypeChange = (e) => {
    const selectedType = e.target.value;
    setSearchType([selectedType]);

    if (selectedType === "노선조회") {
      setFlightNumber("");
    } else {
      setDeparture("");
      setArrival("");
    }
  };

  const handleSearchValueChange = (e) => setSearchValue(e.target.value);

  const isValidSearchValue =
    (searchType === "예약번호" && /^\d{8}$/.test(searchValue)) ||
    (searchType === "항공권번호" && /^[A-Za-z0-9]{6}$/.test(searchValue));

  // 버튼 클릭 시 불투명 배경 표시 및 div 상단의 margin 조정
  const handleButtonClick = (button) => {
    setActiveButton(button);
    setShowOverlay(true); // overlay 표시
  };

  // Overlay 클릭 시 처리
  const handleOverlayClick = () => {
    setShowOverlay(false); // Overlay 사라지기
  };
  // 입력 필드 클릭 시 overlay 활성화
  const handleInputFocus = () => {
    setShowOverlay(true);
  };
  // ✅ date 상태 변화 확인
  useEffect(() => {
    console.log("현재 date 상태:", date);
  }, [date]);


  return (
    <div className="relative w-full h-full flex flex-col items-center">
      {/* Overlay */}
      {showOverlay && (
        <div
          className="absolute inset-0 bg-black opacity-50 z-30 cursor-pointer"
          onClick={handleOverlayClick} // Overlay 클릭 시 handler 추가
        />
      )}

      {/* Swiper 컴포넌트 */}
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
        modules={[Autoplay, Pagination, Navigation]}
        className="sec1-swiper"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {Array.from({ length: 5 }, (_, index) => (
          <SwiperSlide key={index} className="h-[300px] flex items-center justify-center text-black text-2xl font-bold">
            Slide {index + 1}
          </SwiperSlide>
        ))}
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
      <button className="custom-next absolute top-1/2 right-[17%] transform -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 bg-white/30 rounded-full backdrop-blur-[10px] hover:bg-white/50 transition">
        ❯
      </button>

      <div className={`w-[1280px] z-40 absolute left-[20%] top-0 box-border mx-auto transition-all duration-1000 ease-in-out ${showOverlay ? 'mt-[100px]' : 'mt-[652px]'}`}>
        {/* 항공권 관련 버튼 */}
        <div className="-mt-14 flex w-full max-w-4xl text-center absolute">
          <button
            className={`p-5 w-[150px] h-[65px] ${activeButton === "books" ? "bg-white text-blue-700" : "bg-red-500"} text-white rounded-lg shadow-lg`}
            onClick={() => handleButtonClick("books")}
          >
            항공권 예약
          </button>
          <button
            className={`p-5 w-[150px] h-[65px] ${activeButton === "secrch" ? "bg-white text-blue-700" : "bg-pink-800"} text-white rounded-lg shadow-lg`}
            onClick={() => handleButtonClick("secrch")}
          >
            예약 조회
          </button>
          <button
            className={`p-5 w-[150px] h-[65px] ${activeButton === "checkin" ? "bg-white text-blue-700" : "bg-blue-700"} text-white rounded-lg shadow-lg`}
            onClick={() => handleButtonClick("checkin")}
          >
            체크인
          </button>
          <button
            className={`p-5 w-[150px] h-[65px] ${activeButton === "arrive" ? "bg-white text-blue-700" : "bg-yellow-400"} text-white rounded-lg shadow-lg`}
            onClick={() => handleButtonClick("arrive")}
          >
            출도착 조회
          </button>
        </div>


        {/* 항공권 예약 폼 */}
        <div className={`z-30 relative ${activeButton !== "books" && "hidden"}`}>
          <div className="w-auto py-[30px] px-[50px] bg-[#ffff] rounded-b-lg shadow-2xl">
            <div className="books">
              <div className="flex items-center relative">
                <div className="flex items-center gap-3 h-[46px]">
                  <span className="font-medium">마일리지 사용</span>
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
                      className={`absolute top-1/2 transform -translate-y-1/2 w-[30px] h-[30px] bg-white flex items-center justify-center text-xs font-bold transition-all duration-300 shadow-lg ${isChecked ? "left-[28px]" : "left-[0px]"}`}
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

                <div className="w-[46px] h-[46px] bg-[#f3f3f3] ml-[15px] flex items-center justify-center cursor-pointer" onClick={toggleStar}>
                  <img src={isStar ? "/img/starfill.png" : "/img/star.png"} alt="Star Icon" className="w-[20px] h-[20px] transition-all duration-300" />
                </div>

                <div className="pl-4">
                  <input type="checkbox" />
                  <label className="ml-2 font-medium">가까운 날짜 조회</label>
                </div>

                <div className="absolute right-[30px]">
                  <button className="font-bold border-solid border-rose-700 border-[1px] py-[9px] px-[9px]">쿠폰조회</button>
                </div>
              </div>

              <div className="bg-white rounded-lg flex items-center gap-4 relative mt-5">
                {/* 출발지 입력 */}
                <input
                  type="text"
                  placeholder="출발지"
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                  onFocus={handleInputFocus}  // ⭐ 포커스 시 overlay 활성화
                  className="border border-gray-300 rounded-md p-2 w-[120px]"
                />

                {/* 도착지 입력 */}
                <input
                  type="text"
                  placeholder="도착지"
                  value={arrival}
                  onChange={(e) => setArrival(e.target.value)}
                  onFocus={handleInputFocus}  // ⭐ 포커스 시 overlay 활성화
                  className="border border-gray-300 rounded-md p-2 w-[120px]"
                />

                {/* 📌 탑승일 입력 필드 */}
                <div className="relative w-[140px]">
                  <input
                    type="text"
                    placeholder="탑승일"
                    value={date ? date.toLocaleDateString("ko-KR") : ""}
                    onClick={() => setIsOpen(!isOpen)}
                    readOnly
                    className="border border-gray-300 rounded-md p-2 w-full cursor-pointer"
                  />

                  {isOpen && (
                    <div className="absolute top-12 left-0 bg-white shadow-lg border border-gray-300 rounded-md z-50">
                      <DatePicker
                        selected={date}
                        onChange={handleDateChange}
                        dateFormat="yyyy-MM-dd"
                        inline
                        monthsShown={2}
                        minDate={new Date()}
                        showPopperArrow={false}
                      />
                    </div>
                  )}
                </div>

                {/* 탑승객 수 */}
                <input
                  type="number"
                  min="1"
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  onFocus={handleInputFocus}  // ⭐ 포커스 시 overlay 활성화
                  className="border border-gray-300 rounded-md p-2 w-[80px]"
                />

                {/* 좌석 등급 */}
                <select
                  value={classType}
                  onChange={(e) => setClassType(e.target.value)}
                  onFocus={handleInputFocus}  // ⭐ 포커스 시 overlay 활성화
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
          </div>
        </div>
        {/* 예약 조회 UI */}
        <div className={`z-30 relative ${activeButton !== "secrch" && "hidden"}`}>
          <div className="w-auto py-[30px] px-[50px] bg-[#ffff] rounded-b-lg shadow-2xl">
            <div className="secrch">
              <div>
                <p className="font-bold text-lg">예약하신 항공권의 여정을 편리하게 확인할 수 있습니다.</p>
              </div>
              <div className="bg-white rounded-lg flex flex-col items-center w-full mt-[30px]">
                <div className="flex gap-4 w-full justify-between">
                  {/* 예약번호 입력 */}
                  <input
                    type="text"
                    placeholder="예약번호"
                    className="border border-gray-300 rounded-md p-2 w-[180px]"
                  />

                  {/* 출발지 입력 */}
                  <input
                    type="text"
                    placeholder="출발지"
                    className="border border-gray-300 rounded-md p-2 w-[180px]"
                  />

                  {/* 도착지 입력 */}
                  <input
                    type="text"
                    placeholder="도착지"
                    className="border border-gray-300 rounded-md p-2 w-[180px]"
                  />

                  {/* 탑승일 (달력 UI) */}
                  <div className="relative w-[180px]" ref={datePickerRef}>
                    <input
                      type="text"
                      placeholder="탑승일"
                      value={departureDate ? departureDate.toLocaleDateString("ko-KR") : ""}
                      onClick={() => setIsOpen(!isOpen)}
                      readOnly
                      className="border border-gray-300 rounded-md p-2 w-full cursor-pointer"
                    />
                    {isOpen && (
                      <div className="absolute top-12 left-0 bg-white shadow-lg border border-gray-300 rounded-md z-50">
                        <DatePicker
                          selected={departureDate}
                          onChange={handleDateChange}
                          dateFormat="yyyy-MM-dd"
                          inline
                          monthsShown={2}
                          minDate={new Date()}
                          showPopperArrow={false}
                        />
                      </div>
                    )}
                  </div>

                  {/* 탑승객 성 입력 */}
                  <input
                    type="text"
                    placeholder="탑승객 성"
                    className="border border-gray-300 rounded-md p-2 w-[180px]"
                  />

                  {/* 탑승객 이름 입력 */}
                  <input
                    type="text"
                    placeholder="탑승객 이름"
                    className="border border-gray-300 rounded-md p-2 w-[180px]"
                  />
                </div>

                <p className="flex w-full justify-between mt-2">
                  <span className="sertext">예약번호는 8자리 숫자 또는 6자리 영문/숫자를 입력하세요.</span>
                  <span className="w-[380px]">
                    <span className="sertext inline-block w-[180px] font-semibold">예시 :  KIM</span>
                    <span className="sertext inline-block w-[180px] font-semibold ml-[20px]">예시 :  CHEOLSU</span>
                  </span>
                </p>

                <button className="mt-4 w-[230px] bg-blue-500 text-white rounded-md hover:bg-blue-600 transition p-[11px]">
                  예약조회
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 체크인 UI */}
        <div className={`z-30 relative ${activeButton !== "checkin" && "hidden"}`}>
          <div className="w-auto py-[30px] px-[50px] bg-[#ffff] rounded-b-lg shadow-2xl">
            <div className="checkin ">
              <div>
                <p className="font-bold text-lg">원하시는 좌석의 탑승권을 미리 발급받고 공항에서 대기시간을 줄이세요.</p>
              </div>
              <div className="py-6 flex flex-col items-center w-full">
                <div className="flex gap-4 w-full justify-between">
                  {/* 예약번호 or 항공권번호 선택 */}
                  <select
                    value={searchType[0]}
                    onChange={handleSearchTypeChange}
                    className="border border-gray-300 rounded-md p-2 w-[180px] cursor-pointer"
                  >
                    <option value="예약번호">예약번호</option>
                    <option value="항공권번호">항공권번호</option>
                  </select>

                  {/* 입력 필드 (8자리 숫자 or 6자리 영문/숫자) */}
                  <input
                    type="text"
                    placeholder={searchType.includes("예약번호") ? "8자리 숫자 또는 6자리 영문/숫자" : "숫자 13자리"}
                    value={searchValue}
                    onChange={handleSearchValueChange}
                    className={`border border-gray-300 rounded-md p-2 w-[230px] ${isValidSearchValue ? "border-green-500" : "border-red-500"}`}
                  />

                  {/* 탑승일 (오늘부터 4일까지 선택 가능) */}
                  <div className="relative w-[180px]" ref={datePickerRef}>
                    <input
                      type="text"
                      placeholder="탑승일"
                      value={departureDate ? departureDate.toLocaleDateString("ko-KR") : ""}
                      onClick={() => setIsOpen(!isOpen)}
                      readOnly
                      className="border border-gray-300 rounded-md p-2 w-full cursor-pointer"
                    />
                    {isOpen && (
                      <div className="absolute top-12 left-0 bg-white shadow-lg border border-gray-300 rounded-md z-50">
                        <DatePicker
                          selected={departureDate}
                          onChange={handleDateChange}
                          dateFormat="yyyy-MM-dd"
                          inline
                          monthsShown={1}
                          minDate={today}
                          maxDate={maxDate}
                          showPopperArrow={false}
                        />
                      </div>
                    )}
                  </div>

                  {/* 탑승객 성 입력 */}
                  <input
                    type="text"
                    placeholder="탑승객 성"
                    value={passengerLastName}
                    onChange={(e) => setPassengerLastName(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 w-[180px]"
                  />

                  {/* 예약 조회 버튼 */}
                  <button
                    className={`bg-blue-500 text-white px-8 py-2 rounded-md transition ${isValidSearchValue ? "hover:bg-blue-600" : "opacity-80 cursor-not-allowed"}`}
                    disabled={!isValidSearchValue}
                  >
                    예약 조회
                  </button>
                </div>

                <p className="flex w-full justify-end mt-2">
                  <span className="sertext w-[375px] font-semibold">예시 : KIM</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 도착 조회 UI */}
        <div className={`z-30 relative ${activeButton !== "arrive" && "hidden"}`}>
          <div className="w-auto py-[30px] px-[50px] bg-[#ffff] rounded-b-lg shadow-2xl">
            <div className="arrive">
              <div>
                <p className="font-bold text-lg">원하시는 좌석의 탑승권을 미리 발급받고 공항에서 대기시간을 줄이세요.</p>
              </div>
              <div className="flex items-center w-full mx-auto justify-between py-6">
                {/* 조회 방식 선택 (노선조회 / 편명조회) */}
                <div className="gap-4">
                  <select
                    value={searchType[1]}
                    onChange={handleSearchTypeChange}
                    className="border border-gray-300 rounded-md p-2 w-[200px] cursor-pointer"
                  >
                    <option value="노선조회">노선조회</option>
                    <option value="편명조회">편명조회</option>
                  </select>
                </div>

                {/* 노선조회 선택 시 출발지 & 도착지 입력창 표시 */}
                {searchType.includes("노선조회") ? (
                  <div>
                    <input
                      type="text"
                      placeholder="출발지"
                      value={departure}
                      onChange={(e) => setDeparture(e.target.value)}
                      className="border border-gray-300 rounded-md p-2 w-[200px]"
                    />
                    <input
                      type="text"
                      placeholder="도착지"
                      value={arrival}
                      onChange={(e) => setArrival(e.target.value)}
                      className="ml-[30px] border border-gray-300 rounded-md p-2 w-[200px]"
                    />
                  </div>
                ) : (
                  <input
                    type="text"
                    placeholder="숫자만 입력"
                    value={flightNumber}
                    onChange={(e) => setFlightNumber(e.target.value.replace(/[^0-9]/g, ""))}
                    className="border border-gray-300 rounded-md p-2 w-[400px]"
                  />
                )}

                {/* 날짜 선택 (오늘부터 3일 전 ~ 내일까지) */}
                <div>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 w-[200px] cursor-pointer"
                  >
                    <option value="">날짜 선택</option>
                    {dateOptions.map((date) => (
                      <option key={date} value={date}>{date}</option>
                    ))}
                  </select>
                </div>

                {/* 출도착 조회 버튼 */}
                <button className="w-[250px] bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
                  출도착 조회
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}