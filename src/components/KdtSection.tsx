import { FC, useState } from "react";
import ktdData from "../data/kdtData.json";
import KdtCard from "./KdtCard";
import TitleBar from "./TitleBar";

const KdtSection: FC = () => {
  return (
    <section className="mt-10 lg:mt-20 container-style px-6">
      <TitleBar
        title="KDT 테킷 스쿨"
        description="K-Digital Training 부트캠프"
        isDetail={true}
      ></TitleBar>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 mt-10">
        {ktdData.map((v, i) => (
          <KdtCard key={i} kdtData={v}></KdtCard>
        ))}
      </ul>
    </section>
  );
};

export default KdtSection;
