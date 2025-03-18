import { motion, useScroll, useTransform } from "framer-motion";

export default function Sec3() {
  const { scrollYProgress } = useScroll(); // 스크롤 진행도 가져오기

  // ✅ 각 열마다 다른 높이로 이동 (x1, x3, x5 위로 / x2, x4 아래로)
  const xValues = [
    useTransform(scrollYProgress, [0, 1], [50, -50]),
    useTransform(scrollYProgress, [0, 1], [-50, 50]),
    useTransform(scrollYProgress, [0, 1], [50, -50]),
    useTransform(scrollYProgress, [0, 1], [-50, 50]),
    useTransform(scrollYProgress, [0, 1], [50, -50]),
  ];

  // ✅ 열의 제목 (카테고리명)
  const columnTitles = ["화장품", "전자기기", "럭셔리", "건강식품", "향수"];

  // ✅ 열마다 다른 이미지 배열 (가로 5줄, 세로 7줄)
  const columnImages = [
    [
      { src: "/img/Sec3/cosmetics/Athe.png", title: "Athe", desc: "럭셔리 스킨케어 브랜드" },
      { src: "/img/Sec3/cosmetics/Barneys.png", title: "Barneys", desc: "프리미엄 뷰티 제품" },
      { src: "/img/Sec3/cosmetics/Esteelauder.jpg", title: "Estee Lauder", desc: "고급 화장품 브랜드" },
      { src: "/img/Sec3/cosmetics/Medicube.png", title: "Medicube", desc: "피부과학 화장품" },
      { src: "/img/Sec3/cosmetics/Smnovella.png", title: "Santa Maria Novella", desc: "이탈리아 명품 향수" },
      { src: "/img/Sec3/cosmetics/Sulwhasoo.png", title: "Sulwhasoo", desc: "한방 스킨케어" },
      { src: "/img/Sec3/cosmetics/Sulwhasoocream.png", title: "Sulwhasoo Cream", desc: "프리미엄 크림" },
    ],
    [
      { src: "/img/Sec3/electronic/Bang.jpg", title: "Bang & Olufsen", desc: "고급 오디오 브랜드" },
      { src: "/img/Sec3/electronic/Bangspk.jpg", title: "Bang Speaker", desc: "프리미엄 블루투스 스피커" },
      { src: "/img/Sec3/electronic/Omron.png", title: "Omron", desc: "건강 관리 기기" },
      { src: "/img/Sec3/electronic/Rocks.png", title: "Rocks", desc: "무선 이어폰" },
      { src: "/img/Sec3/electronic/Rucipello.png", title: "Rucipello", desc: "전동 칫솔 브랜드" },
      { src: "/img/Sec3/electronic/Therabody.jpg", title: "Therabody", desc: "마사지 기기" },
      { src: "/img/Sec3/electronic/Voicecady.png", title: "Voice Caddy", desc: "골프 거리 측정기" },
    ],
    [
      { src: "/img/Sec3/fashion/Ball.png", title: "Ball", desc: "럭셔리 시계 브랜드" },
      { src: "/img/Sec3/fashion/Didi.jpg", title: "Didi", desc: "트렌디 패션 브랜드" },
      { src: "/img/Sec3/fashion/Dupong.png", title: "Dupong", desc: "프리미엄 패션" },
      { src: "/img/Sec3/fashion/Goldden.jpeg", title: "Goldden", desc: "고급 액세서리" },
      { src: "/img/Sec3/fashion/Montblang.png", title: "Montblang", desc: "명품 필기구" },
      { src: "/img/Sec3/fashion/Ston.png", title: "Ston", desc: "디자이너 브랜드" },
      { src: "/img/Sec3/fashion/Toss.jpg", title: "Toss", desc: "캐주얼 패션" },
    ],
    [
      { src: "/img/Sec3/healthfood/Jungkwanjang.png", title: "정관장", desc: "홍삼 건강식품" },
      { src: "/img/Sec3/healthfood/Nzma.jpg", title: "NZMA", desc: "프리미엄 건강 보조제" },
      { src: "/img/Sec3/healthfood/Nzmajelly.jpg", title: "NZMA Jelly", desc: "건강 젤리" },
      { src: "/img/Sec3/healthfood/Orthomol.png", title: "Orthomol", desc: "비타민 보충제" },
      { src: "/img/Sec3/healthfood/Raydel.png", title: "Raydel", desc: "영양 건강식품" },
      { src: "/img/Sec3/healthfood/Regina.png", title: "Regina", desc: "면역력 강화 제품" },
      { src: "/img/Sec3/healthfood/Royaljelly.png", title: "Royal Jelly", desc: "로얄젤리 건강식품" },
    ],
    [
      { src: "/img/Sec3/perfume/Feragamo.jpg", title: "Ferragamo", desc: "럭셔리 향수 브랜드" },
      { src: "/img/Sec3/perfume/Joloves.jpeg", title: "Jo Loves", desc: "프리미엄 향수" },
      { src: "/img/Sec3/perfume/Jomalone.png", title: "Jo Malone", desc: "명품 향수 브랜드" },
      { src: "/img/Sec3/perfume/Monparis.png", title: "Mon Paris", desc: "로맨틱 향수" },
      { src: "/img/Sec3/perfume/Orepaong.jpg", title: "Orepaong", desc: "프랑스 향수 브랜드" },
      { src: "/img/Sec3/perfume/Santamaria.jpg", title: "Santa Maria", desc: "이탈리아 클래식 향수" },
      { src: "/img/Sec3/perfume/Son.png", title: "Son", desc: "고급 퍼퓸" },
    ],
  ];

  return (
    <motion.div className="relative h-[200vh] flex flex-row items-center justify-center gap-40 border-2 border-black p-6 rounded-lg shadow-lg">
  {xValues.map((x, colIndex) => (
    <div key={colIndex} className="flex flex-col gap-6 items-center">
      {/* ✅ 각 열의 제목 */}
      <p className="text-2xl font-bold mb-4">{columnTitles[colIndex]}</p>
      {(columnImages[colIndex] || []).map((item, rowIndex) => (
        <motion.div
          key={`${colIndex}-${rowIndex}`}
          className="flex flex-col items-center text-center"
          style={{ y: x }} // ✅ 이미지 + 제목 + 설명이 함께 움직이도록 설정
        >
          <motion.img
            src={item.src}
            alt={item.title}
            className="w-44 h-44 object-cover rounded-lg shadow-lg"
            whileHover={{ scale: 1.1 }} // ✅ 마우스 호버 시 확대
            transition={{ duration: 0.3 }} // ✅ 부드러운 애니메이션 추가
          />
          <p className="mt-2 text-lg font-bold">{item.title}</p>
          <p className="text-sm text-gray-600">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  ))}
</motion.div>

  );
}
