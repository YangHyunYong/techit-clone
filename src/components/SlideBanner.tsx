import { FC } from "react";
import Image1 from "/images/unity.webp";

const SlideBanner: FC = () => {
  return (
    <div className="h-[400px] relative items-center">
      <div className="text-white container-style flex flex-col h-full justify-center">
        <h3 className="text-[32px] font-bold">유니티 게임 스쿨 1기</h3>
        <h5 className=" mt-2">게임 개발자로 거듭나기 위한 6개월간의 여정</h5>
      </div>
      <img
        className="absolute top-0 -z-10 w-full h-full object-cover"
        src={Image1}
        alt="이세계 유니티"
      />
    </div>
  );
};
export default SlideBanner;
