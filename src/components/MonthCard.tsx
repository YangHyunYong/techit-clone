import { FC } from "react";

interface MonthCardProps {
  cardData: {
    title: string;
    image: string;
    "d-day": string;
    description: string;
    period: string;
  };
}

const MonthCard: FC<MonthCardProps> = ({ cardData }) => {
  return (
    <li className="flex border border-techit-gray-100 rounded-lg w-[486px] ">
      <img
        className="w-[208px] rounded-l-lg object-cover"
        src={`/images/kdts/${cardData.image}.webp`}
        alt={cardData.image}
      />
      <div className="p-4">
        <span>{cardData["d-day"]}</span>
        <h3 className="mt-2 mb-1 text-xl font-bold">{cardData.title}</h3>
        <h5 className="mb-1 text-lg">{cardData.description}</h5>
        <span className="text-techit-gray-200">{cardData.period}</span>
      </div>
    </li>
  );
};

export default MonthCard;
