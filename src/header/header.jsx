import React, { Component } from 'react';
import "./header.css";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDropdown: null, // 현재 활성화된 드롭다운 (예약, 여행준비, 스카이패스)
    };
  }

  // 드롭다운 열기
  handleMouseEnter = (menu) => {
    this.setState({ activeDropdown: menu });
  };

  // 드롭다운 닫기
  handleMouseLeave = () => {
    this.setState({ activeDropdown: null });
  };

  render() {
    return (
      <header className="fixed w-full bg-blue-800 text-white z-10">
        <div className="flex gap-6 justify-end text-white h-auto mr-[270px] mt-1">
          {["회원가입", "이벤트", "자주 묻는 질문", "언어 선택"].map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 rounded-md cursor-pointer transition-all duration-300 
                     hover:border-blue-500 hover:shadow-lg border border-transparent"
            >
              {item}
            </div>
          ))}
        </div>
        <nav className='relative flex space-x-6'>
          <div className="container mx-auto flex justify-evenly items-center px-4 gap-20">
            <h1 className='text-xl font-bold'>
              <a href='#'>
                <span>ASIANA AIRLINES</span>
              </a>
            </h1>
            <ul className="flex gap-3">
              <div
                className="nav-container"
                onMouseEnter={() => this.handleMouseEnter('예약')}
                onMouseLeave={this.handleMouseLeave}>
                {/* 예약 */}
                <li className="navlist p-[20px] cursor-pointer">
                  <a href="#" className="hover:text-gray-300">예약</a>
                </li>
                {this.state.activeDropdown === '예약' && (
                  <div
                    dir='ltr'
                    className="absolute m-0 left-0 top-full w-full bg-slate-400 text-black shadow-lg p-6 flex flex-col items-center text-center"
                  >
                    <div className="grid grid-cols-5 gap-8 w-full max-w-6xl z-50">

                      {/* 항공권 예약 */}
                      <ul className="flex flex-col border-s-2 border-gray-200 text-start">
                        <h2 className="font-bold text-lg mb-4 pl-6">항공권 예약</h2>
                        <li><a href="#" className="block hover:text-blue-500 pl-6">항공권 예약</a></li>
                        <li><a href="#" className="block hover:text-blue-500 pl-6">항공권 변경 및 환불</a></li>
                        <li><a href="#" className="block hover:text-blue-500 pl-6">온라인예약 안내</a></li>
                        <li><a href="#" className="block hover:text-blue-500 pl-6">최저가 간편조회</a></li>
                        <li><a href="#" className="block hover:text-blue-500 pl-6">신용카드 혜택</a></li>
                        <li><a href="#" className="block hover:text-blue-500 pl-6">철도 연계 서비스</a></li>
                      </ul>

                      {/* 예약조회 */}
                      <ul className="flex flex-col border-s-2 border-gray-200 text-start">
                        <h2 className="font-bold text-lg mb-4 pl-6">예약조회</h2>
                        <li><a href="#" className="block hover:text-blue-500 pl-6">예약내역</a></li>
                        <li><a href="#" className="block hover:text-blue-500 pl-6">항공권 구매내역</a></li>
                      </ul>

                      {/* 체크인 */}
                      <ul className="flex flex-col border-s-2 border-gray-200 text-start">
                        <h2 className="font-bold text-lg mb-4 pl-6">체크인 하기</h2>
                      </ul>

                      {/* 운항정보 */}
                      <ul className="flex flex-col border-s-2 border-gray-200 text-start">
                        <h2 className="font-bold text-lg mb-4 pl-6">운항정보</h2>
                        <li><a href="#" className="block hover:text-blue-500 pl-6">스케줄 조회</a></li>
                        <li><a href="#" className="block hover:text-blue-500 pl-6">출도착 조회</a></li>
                      </ul>

                      {/* 취항지정보 */}
                      <ul className="flex flex-col border-s-2 border-gray-200 text-start">
                        <h2 className="font-bold text-lg mb-4 pl-6">취항지정보</h2>
                        <li><a href="#" className="block hover:text-blue-500 pl-6">운항 노선</a></li>
                        <li><a href="#" className="block hover:text-blue-500 pl-6">여행 정보</a></li>
                        <li><a href="#" className="block hover:text-blue-500 pl-6">캐빈승무원 여행일기</a></li>
                      </ul>

                    </div>
                  </div>
                )}
              </div>



              <div
                className=" nav-container"
                onMouseEnter={() => this.handleMouseEnter('여행준비')}
                onMouseLeave={this.handleMouseLeave}>
                {/* 여행준비 드롭다운 */}
                <li className="navlist p-[20px] cursor-pointer">
                  <a href="#" className="hover:text-gray-300">여행준비</a>
                </li>
              {/* 여행준비 드롭다운 */}
              {this.state.activeDropdown === '여행준비' && (
                <div dir='ltr' className="absolute left-0 top-full w-full bg-slate-400 text-black shadow-lg p-6 flex flex-col items-center text-center">
                  <div className="grid grid-cols-5 gap-8 w-full max-w-6xl">
                    <ul className="flex flex-col border-s-2 border-gray-200 text-start">
                      <h2 className="font-bold text-lg mb-4 pl-6">체크인 안내</h2>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">사전 체크인</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">공항 체크인</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">국내선 비상구 우선 배정</a></li>
                    </ul>


                    <ul className="flex flex-col border-s-2 border-gray-200 text-start">
                      <h2 className="font-bold text-lg mb-4 pl-6">수화물</h2>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">이용안내</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">위탁수하물</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">휴대수화물</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">수화물계산기</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">운송제한 물품</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">수화물 보상</a></li>
                    </ul>


                    <ul className="flex flex-col border-s-2 border-gray-200 text-start">
                      <h2 className="font-bold text-lg mb-4 pl-6">도움이 필요한 고객</h2>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">장애인 고객</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">고령자 고객</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">임산부 고객</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">유/소아 동반 고객</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">혼자여행하는 어린이/청소년</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">반려동물동반</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">의료도움이 필요한 고객</a></li>
                    </ul>

                    <ul className="flex flex-col border-s-2 border-gray-200 text-start">
                      <h2 className="font-bold text-lg mb-4 pl-6">출입국 규정 안내</h2>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">출입국 규정 정보</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">출입국 신고서</a></li>
                    </ul>
                  </div>

                </div>
              )}
              </div>


              <div
                className=" nav-container"
                onMouseEnter={() => this.handleMouseEnter('여행')}
                onMouseLeave={this.handleMouseLeave}>
                {/* 여행준비 드롭다운 */}
                <li className="navlist p-[20px] cursor-pointer">
                  <a href="#" className="hover:text-gray-300">여행</a>
                </li>
              {this.state.activeDropdown == '여행' && (
                <div dir='ltr' className="absolute left-0 top-full w-full bg-slate-400 text-black shadow-lg p-6 flex flex-col items-center text-center">
                  <div className="grid grid-cols-5 gap-8 w-full max-w-6xl">
                    <ul className="flex flex-col border-s-2 border-gray-200 text-start">
                      <h2 className="font-bold text-lg mb-4 pl-6">공항에서</h2>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">공항안내</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">탑승수속절차</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">라운지이용</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">인청공항 환승프로그램</a></li>
                    </ul>


                    <ul className="flex flex-col border-s-2 border-gray-200 text-start">
                      <h2 className="font-bold text-lg mb-4 pl-6">기내에서</h2>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">클래스별 안내</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">비즈니스</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">이코노미</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">기내서비스순서</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">국제선 기내면세품</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">특별 기내식</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">기내 유실물 조회</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">기내 엔터테인먼트</a></li>
                    </ul>

                    <ul className="flex flex-col border-s-2 border-gray-200 text-start">
                      <h2 className="font-bold text-lg mb-4 pl-6">항공기 정보</h2>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">A380-800</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">A350-900</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">B777-200ER</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">A330-300</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">B767-300</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">A321-neo</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">A321-200</a></li>
                    </ul>

                    {/* 마일리지 몰 */}
                    <ul className="flex flex-col border-s-2 border-gray-200 text-start">
                      <h2 className="font-bold text-lg mb-4 pl-6">추가요금 부가서비스</h2>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">A380 비지니스 스위트 좌석</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">이코노미 스마티움</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">엑스트라 레그룸 좌석</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">듀오 좌석</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">프런트 존</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">업그레이트 스탠바이</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">기내 Wi-Fi</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">도움이 필요한 고객</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">수하물 사전 구매</a></li>
                    </ul>

                    <ul className="flex flex-col border-s-2 border-gray-200 text-start">
                      <h2 className="font-bold text-lg mb-4 pl-6">매직 보딩 패스</h2>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">KAL스토어</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">Food&Beverage</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">호텔</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">라이프/투어</a></li>
                    </ul>

                  </div>

                </div>
              )}
              </div>


              <div
                className=" nav-container"
                onMouseEnter={() => this.handleMouseEnter('아시아나클럽')}
                onMouseLeave={this.handleMouseLeave}>
                {/* 여행준비 드롭다운 */}
                <li className="navlist p-[20px] cursor-pointer">
                  <a href="#" className="hover:text-gray-300">아시아나클럽</a>
                </li>
              {this.state.activeDropdown == '아시아나클럽' && (
                <div className="absolute left-0 top-full w-full bg-slate-400 text-black shadow-lg p-6 flex flex-col items-center text-center">
                  <div className="grid grid-cols-5 gap-8 w-full max-w-6xl">
                    <ul className="flex flex-col border-s-2 border-gray-200 text-start">
                      <h2 className="font-bold text-lg mb-4 pl-6">회원제도</h2>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">회원안내</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">가족 마일리지 합산 및 마일리지 양도</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">할인 제휴사</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">뉴스레터</a></li>
                    </ul>


                    <ul className="flex flex-col border-s-2 border-gray-200 text-start">
                      <h2 className="font-bold text-lg mb-4 pl-6">마일리지적립</h2>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">아시아나항공</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">스타얼라이언스/제휴항공사</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">마일리지 적립몰</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">금융(신용카드.환전)</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">쇼핑</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">여행(호텔,렌터카)</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">라이프(통신,보험)</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">누락마일리지적립</a></li>
                    </ul>

                    <ul className="flex flex-col border-s-2 border-gray-200 text-start">
                      <h2 className="font-bold text-lg mb-4 pl-6">마일리지사용</h2>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">아시아나항공</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">스타얼라이언스/제휴항공사</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">마일리지사용물</a></li>
                    </ul>


                    <ul className="flex flex-col border-s-2 border-gray-200 text-start">
                      <h2 className="font-bold text-lg mb-4 pl-6">마일리지 적립몰</h2>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">A380 비지니스 스위트 좌석</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">이코노미 스마티움</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">엑스트라 레그룸 좌석</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">듀오 좌석</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">프런트 존</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">업그레이트 스탠바이</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">기내 Wi-Fi</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">도움이 필요한 고객</a></li>
                      <li><a href="#" className="block hover:text-blue-500 pl-6">수하물 사전 구매</a></li>
                    </ul>
                  </div>
                </div>
              )}
              </div>
            </ul>
            <div className='w-auto h-auto'>
              <div>
                <div><a className='w-10 h-10 bg-airplan inline-block'></a></div>
              </div>
              <div>
                <div><a></a></div>
              </div>
              <div>
                <div><a></a></div>
              </div>
            </div>
          </div>
        </nav>
      </header >
    );
  }
}

export default Header;
