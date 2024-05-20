import { FC, useState } from "react";
import ktdData from "../data/kdtData.json";
import KdtCard from "./KdtCard";

const KdtSection: FC = () => {
  return (
    <section className="mt-10 lg:mt-20 container-style px-6">
      <div className="h-[64.5px] flex justify-between font-semibold items-end">
        <div className="h-full flex flex-col justify-between">
          <h5 className="text-techit-main">KDT 테킷 스쿨</h5>
          <h3 className="text-techit-gray-300 text-[26px]">
            K-Digital Training 부트캠프
          </h3>
        </div>
        <button className="flex items-center text-sm ">
          <span className="mr-1">자세히 보기</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 mt-10">
        {ktdData.map((v, i) => (
          <KdtCard key={i} kdtData={v}></KdtCard>
        ))}
      </ul>
    </section>
  );
};

export default KdtSection;
