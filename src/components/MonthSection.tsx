import { useEffect, useState } from "react";
import monthData from "../data/monthData.json";
import MonthCard from "./MonthCard";

const MonthSection = () => {
  const [currentMonthData, setCurrentMonthData] = useState(monthData[0]);
  const [currentPage, setCurrentPage] = useState(0);

  const onClickPrev = () => {
    if (currentPage === 0) {
      setCurrentPage(monthData.length - 1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const onClickNext = () => {
    if (monthData.length - 1 === currentPage) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    setCurrentMonthData(monthData[currentPage]);
  }, [currentPage]);

  return (
    <div>
      <div className="flex justify-center">
        <button onClick={onClickPrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 lg:w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <div className="font-semibold mx-2 text-2xl">
          {Object.keys(currentMonthData)[0]}
        </div>
        <button onClick={onClickNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 lg:w-6"
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
      {currentMonthData[Object.keys(currentMonthData)[0]].length === 0 ? (
        <div className="flex flex-col items-center mt-4">
          <img className="w-[138px]" src="/images/empty.png" alt="empty" />
          <div className="mt-3 text-techit-gray-200">
            해당 달에는 수강 가능한 클래스가 없습니다.
          </div>
        </div>
      ) : (
        <ul className="grid grid-cols-2 mt-4 gap-6 justify-items-center">
          {currentMonthData[Object.keys(currentMonthData)[0]].map((v, i) => (
            <MonthCard key={i} cardData={v} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default MonthSection;
