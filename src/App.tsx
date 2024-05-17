import { FC, useEffect, useState } from "react";
import TopBanner from "./components/TopBanner";

const App: FC = () => {
  const [isViewed, setIsViewed] = useState<boolean>(false);

  useEffect(() => {
    const savedIsViewed = localStorage.getItem("isViewed");

    if (savedIsViewed === "1") setIsViewed(true);
  }, []);

  return (
    <div className="font-pretendard">
      {!isViewed && <TopBanner setIsViewed={setIsViewed} />}
    </div>
  );
};
export default App;
