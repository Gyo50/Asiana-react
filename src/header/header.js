import React, { Component } from 'react';

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
<header className="fixed w-full bg-blue-800 text-white py-4 h-auto">
  <div className="container mx-auto flex justify-between items-center px-4">
      <h1 className='text-xl font-bold'>
        <a href='#'>
          <span>ASIANA AIRLINES</span>
        </a>
      </h1>
    <nav className='flex space-x-6'>
      <ul className="flex space-x-6">
        
        {/* 예약 */}
        <li className=""
            onMouseEnter={() => this.handleMouseEnter('예약')} 
            onMouseLeave={this.handleMouseLeave}>
          <a href="#" className="hover:text-gray-300">예약</a>

          {this.state.activeDropdown === '예약' && (
            <div 
              dir='ltr' 
              className="absolute left-0 top-full w-full bg-slate-400 text-black shadow-lg p-6 flex flex-col items-center text-center"
            >
              <div className="grid grid-cols-5 gap-8 w-full max-w-6xl">
                
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
                <ul className="flex flex-col border-s-2 border-gray-200">
                  <h2 className="font-bold text-lg mb-4">체크인 하기</h2>
                </ul>

                {/* 운항정보 */}
                <ul className="flex flex-col border-s-2 border-gray-200">
                  <h2 className="font-bold text-lg mb-4">운항정보</h2>
                  <li><a href="#" className="block hover:text-blue-500">스케줄 조회</a></li>
                  <li><a href="#" className="block hover:text-blue-500">출도착 조회</a></li>
                </ul>

                {/* 취항지정보 */}
                <ul className="flex flex-col border-s-2 border-gray-200">
                  <h2 className="font-bold text-lg mb-4">취항지정보</h2>
                  <li><a href="#" className="block hover:text-blue-500">운항 노선</a></li>
                  <li><a href="#" className="block hover:text-blue-500">여행 정보</a></li>
                  <li><a href="#" className="block hover:text-blue-500">캐빈승무원 여행일기</a></li>
                </ul>

              </div>
            </div>
          )}
        </li>
          
              <li className="relative"
                  onMouseEnter={() => this.handleMouseEnter('여행준비')} 
                  onMouseLeave={this.handleMouseLeave}>
                <a href="#" className="hover:text-gray-300">여행준비</a>

                {/* 여행준비 드롭다운 */}
                {this.state.activeDropdown === '여행준비'&& (
                  <div className="absolute left-0 top-full bg-white text-black shadow-lg p-4 w-[300px]">
                    
                    <ul className="mb-4">
                      <h2 className="font-bold text-lg">체크인 안내</h2>
                      <li><a href="#" className="block hover:text-blue-500">사전 체크인</a></li>
                      <li><a href="#" className="block hover:text-blue-500">공항 체크인</a></li>
                      <li><a href="#" className="block hover:text-blue-500">국내선 비상구 우선 배정</a></li>
                    </ul>

                    
                    <ul className="mb-4">
                      <h2 className="font-bold text-lg">수화물</h2>
                      <li><a href="#" className="block hover:text-blue-500">이용안내</a></li>
                      <li><a href="#" className="block hover:text-blue-500">위탁수하물</a></li>
                      <li><a href="#" className="block hover:text-blue-500">휴대수화물</a></li>
                      <li><a href="#" className="block hover:text-blue-500">수화물계산기</a></li>
                      <li><a href="#" className="block hover:text-blue-500">운송제한 물품</a></li>
                      <li><a href="#" className="block hover:text-blue-500">수화물 보상</a></li>
                    </ul>

                    
                    <ul className="mb-4">
                      <h2 className="font-bold text-lg">도움이 필요한 고객</h2>
                      <li><a href="#" className="block hover:text-blue-500">장애인 고객</a></li>
                      <li><a href="#" className="block hover:text-blue-500">고령자 고객</a></li>
                      <li><a href="#" className="block hover:text-blue-500">임산부 고객</a></li>
                      <li><a href="#" className="block hover:text-blue-500">유/소아 동반 고객</a></li>
                      <li><a href="#" className="block hover:text-blue-500">혼자여행하는 어린이/청소년</a></li>
                      <li><a href="#" className="block hover:text-blue-500">반려동물동반</a></li>
                      <li><a href="#" className="block hover:text-blue-500">의료도움이 필요한 고객</a></li>
                    </ul>

                    <ul className="mb-4">
                      <h2 className="font-bold text-lg">출입국 규정 안내</h2>
                      <li><a href="#" className="block hover:text-blue-500">출입국 규정 정보</a></li>
                      <li><a href="#" className="block hover:text-blue-500">출입국 신고서</a></li>
                    </ul>


                  </div>
                )}
              </li>
              {/* 스카이패스 메뉴 */}
              <li className="relative"
                  onMouseEnter={() => this.handleMouseEnter('여행')} 
                  onMouseLeave={this.handleMouseLeave}>
                <a href="#" className="hover:text-gray-300">여행</a>

                {this.state.activeDropdown == '여행'&& (
                  <div className="absolute left-0 top-full bg-white text-black shadow-lg p-4 w-[300px]">
                    
                    <ul className="mb-4">
                      <h2 className="font-bold text-lg">공항에서</h2>
                      <li><a href="#" className="block hover:text-blue-500">공항안내</a></li>
                      <li><a href="#" className="block hover:text-blue-500">탑승수속절차</a></li>
                      <li><a href="#" className="block hover:text-blue-500">라운지이용</a></li>
                      <li><a href="#" className="block hover:text-blue-500">인청공항 환승프로그램</a></li>
                    </ul>

                    
                    <ul className="mb-4">
                      <h2 className="font-bold text-lg">기내에서</h2>
                      <li><a href="#" className="block hover:text-blue-500">클래스별 안내</a></li>
                      <li><a href="#" className="block hover:text-blue-500">비즈니스</a></li>
                      <li><a href="#" className="block hover:text-blue-500">이코노미</a></li>
                      <li><a href="#" className="block hover:text-blue-500">기내서비스순서</a></li>
                      <li><a href="#" className="block hover:text-blue-500">국제선 기내면세품</a></li>
                      <li><a href="#" className="block hover:text-blue-500">특별 기내식</a></li>
                      <li><a href="#" className="block hover:text-blue-500">기내 유실물 조회</a></li>
                      <li><a href="#" className="block hover:text-blue-500">기내 엔터테인먼트</a></li>
                    </ul>

                    <ul className="mb-4">
                      <h2 className="font-bold text-lg">항공기 정보</h2>
                      <li><a href="#" className="block hover:text-blue-500">A380-800</a></li>
                      <li><a href="#" className="block hover:text-blue-500">A350-900</a></li>
                      <li><a href="#" className="block hover:text-blue-500">B777-200ER</a></li>
                      <li><a href="#" className="block hover:text-blue-500">A330-300</a></li>
                      <li><a href="#" className="block hover:text-blue-500">B767-300</a></li>
                      <li><a href="#" className="block hover:text-blue-500">A321-neo</a></li>
                      <li><a href="#" className="block hover:text-blue-500">A321-200</a></li>
                    </ul>

                    {/* 마일리지 몰 */}
                    <ul className="mb-4">
                      <h2 className="font-bold text-lg">추가요금 부가서비스</h2>
                      <li><a href="#" className="block hover:text-blue-500">A380 비지니스 스위트 좌석</a></li>
                      <li><a href="#" className="block hover:text-blue-500">이코노미 스마티움</a></li>
                      <li><a href="#" className="block hover:text-blue-500">엑스트라 레그룸 좌석</a></li>
                      <li><a href="#" className="block hover:text-blue-500">듀오 좌석</a></li>
                      <li><a href="#" className="block hover:text-blue-500">프런트 존</a></li>
                      <li><a href="#" className="block hover:text-blue-500">업그레이트 스탠바이</a></li>
                      <li><a href="#" className="block hover:text-blue-500">기내 Wi-Fi</a></li>
                      <li><a href="#" className="block hover:text-blue-500">도움이 필요한 고객</a></li>
                      <li><a href="#" className="block hover:text-blue-500">수하물 사전 구매</a></li>
                    </ul>

                    <ul className="mb-4">
                      <h2 className="font-bold text-lg">매직 보딩 패스</h2>
                      <li><a href="#" className="block hover:text-blue-500">KAL스토어</a></li>
                      <li><a href="#" className="block hover:text-blue-500">Food&Beverage</a></li>
                      <li><a href="#" className="block hover:text-blue-500">호텔</a></li>
                      <li><a href="#" className="block hover:text-blue-500">라이프/투어</a></li>
                    </ul>

                  </div>
                )}
              </li>


              <li className="relative"
                  onMouseEnter={() => this.handleMouseEnter('아시아나클럽')} 
                  onMouseLeave={this.handleMouseLeave}>
                <a href="#" className="hover:text-gray-300">아시아나클럽</a>

                {this.state.activeDropdown == '아시아나클럽'&& (
                  <div className="absolute left-0 top-full bg-white text-black shadow-lg p-4 w-[300px]">
                    
                    <ul className="mb-4">
                      <h2 className="font-bold text-lg">회원제도</h2>
                      <li><a href="#" className="block hover:text-blue-500">회원안내</a></li>
                      <li><a href="#" className="block hover:text-blue-500">가족 마일리지 합산 및 마일리지 양도</a></li>
                      <li><a href="#" className="block hover:text-blue-500">할인 제휴사</a></li>
                      <li><a href="#" className="block hover:text-blue-500">뉴스레터</a></li>
                    </ul>

                    
                    <ul className="mb-4">
                      <h2 className="font-bold text-lg">마일리지적립</h2>
                      <li><a href="#" className="block hover:text-blue-500">아시아나항공</a></li>
                      <li><a href="#" className="block hover:text-blue-500">스타얼라이언스/제휴항공사</a></li>
                      <li><a href="#" className="block hover:text-blue-500">마일리지 적립몰</a></li>
                      <li><a href="#" className="block hover:text-blue-500">금융(신용카드.환전)</a></li>
                      <li><a href="#" className="block hover:text-blue-500">쇼핑</a></li>
                      <li><a href="#" className="block hover:text-blue-500">여행(호텔,렌터카)</a></li>
                      <li><a href="#" className="block hover:text-blue-500">라이프(통신,보험)</a></li>
                      <li><a href="#" className="block hover:text-blue-500">누락마일리지적립</a></li>
                    </ul>

                    <ul className="mb-4">
                      <h2 className="font-bold text-lg">마일리지사용</h2>
                      <li><a href="#" className="block hover:text-blue-500">아시아나항공</a></li>
                      <li><a href="#" className="block hover:text-blue-500">스타얼라이언스/제휴항공사</a></li>
                      <li><a href="#" className="block hover:text-blue-500">마일리지사용물</a></li>
                    </ul>


                    <ul className="mb-4">
                      <h2 className="font-bold text-lg">마일리지 적립몰</h2>
                      <li><a href="#" className="block hover:text-blue-500">A380 비지니스 스위트 좌석</a></li>
                      <li><a href="#" className="block hover:text-blue-500">이코노미 스마티움</a></li>
                      <li><a href="#" className="block hover:text-blue-500">엑스트라 레그룸 좌석</a></li>
                      <li><a href="#" className="block hover:text-blue-500">듀오 좌석</a></li>
                      <li><a href="#" className="block hover:text-blue-500">프런트 존</a></li>
                      <li><a href="#" className="block hover:text-blue-500">업그레이트 스탠바이</a></li>
                      <li><a href="#" className="block hover:text-blue-500">기내 Wi-Fi</a></li>
                      <li><a href="#" className="block hover:text-blue-500">도움이 필요한 고객</a></li>
                      <li><a href="#" className="block hover:text-blue-500">수하물 사전 구매</a></li>
                    </ul>

                  </div>
                )}
              </li>
            </ul>
            <div>
              <div>
                <div><a></a></div>
              </div>
              <div>
                <div><a></a></div>
              </div>
              <div>
                <div><a></a></div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
