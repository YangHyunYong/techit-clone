import { FC, useEffect, useState } from "react";
import TopBanner from "./components/TopBanner";
import Header from "./components/Header";
import SlideBanner from "./components/SlideBanner";

const App: FC = () => {
  const [isViewed, setIsViewed] = useState<boolean>(false);

  useEffect(() => {
    const savedIsViewed = localStorage.getItem("isViewed");

    if (savedIsViewed === "1") setIsViewed(true);
  }, []);

  return (
    <div className="font-pretendard">
      {!isViewed && <TopBanner setIsViewed={setIsViewed} />}
      <Header></Header>
      <SlideBanner></SlideBanner>
    </div>
  );
};
export default App;
