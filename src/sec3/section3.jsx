import { motion, useScroll, useTransform } from "framer-motion";

export default function Sec3() {
  const { scrollYProgress } = useScroll(); // 스크롤 진행도 가져오기

  // ✅ 각 열마다 다른 높이로 이동
  const x1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const x3 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const x4 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const x5 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const xValues = [x1, x2, x3, x4, x5];

  // ✅ 열마다 다른 이미지 배열 (가로 5줄, 세로 7줄)
  const columnImages = [
    [
        "/img/Sec3/cosmetics/Athe.png",
        "/img/Sec3/cosmetics/Barneys.png",
        "/img/Sec3/cosmetics/Esteelauder.jpg",
        "/img/Sec3/cosmetics/Medicube.png",
        "/img/Sec3/cosmetics/Smnovella.png",
        "/img/Sec3/cosmetics/Sulwhasoo.png",
        "/img/Sec3/cosmetics/Sulwhasoocream.png",
      ],
      [
        "/img/Sec3/electronic/Bang.jpg",
        "/img/Sec3/electronic/Bangspk.jpg",
        "/img/Sec3/electronic/Omron.png",
        "/img/Sec3/electronic/Rocks.png",
        "/img/Sec3/electronic/Rucipello.png",
        "/img/Sec3/electronic/Therabody.jpg",
        "/img/Sec3/electronic/Voicecady.png",
      ],
      [
        "/img/Sec3/fashion/Ball.png",
        "/img/Sec3/fashion/Didi.jpg",
        "/img/Sec3/fashion/Dupong.png",
        "/img/Sec3/fashion/Goldden.jpeg",
        "/img/Sec3/fashion/Montblang.png",
        "/img/Sec3/fashion/Ston.png",
        "/img/Sec3/fashion/Toss.jpg",
      ],
      [
        "/img/Sec3/healthfood/Jungkwanjang.png",
        "/img/Sec3/healthfood/Nzma.jpg",
        "/img/Sec3/healthfood/Nzmajelly.jpg",
        "/img/Sec3/healthfood/Orthomol.png",
        "/img/Sec3/healthfood/Raydel.png",
        "/img/Sec3/healthfood/Regina.png",
        "/img/Sec3/healthfood/Royaljelly.png",
      ],
      [
        "/img/Sec3/perfume/Feragamo.jpg",
        "/img/Sec3/perfume/Joloves.jpeg",
        "/img/Sec3/perfume/Jomalone.png",
        "/img/Sec3/perfume/Monparis.png",
        "/img/Sec3/perfume/Orepaong.jpg",
        "/img/Sec3/perfume/Santamaria.jpg",
        "/img/Sec3/perfume/Son.png",
      ],
  ];

  return (
    <div className="relative h-[100vh] flex flex-row items-center justify-center gap-10">
      {xValues.map((x, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-4">
          {columnImages[colIndex].map((src, rowIndex) => (
            <motion.img
              key={`${colIndex}-${rowIndex}`}
              src={src}
              alt={`img-${colIndex}-${rowIndex}`}
              className="w-40 h-40 object-cover rounded-lg shadow-lg"
              style={{ y: x }} // ✅ 각 열의 이동값 적용
            />
          ))}
        </div>
      ))}
    </div>
  );
}
