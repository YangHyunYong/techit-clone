import { FC, useState } from "react";

import ClassButton from "./ClassButton";
import ClassCard from "./ClassCard";
import classData from "../data/classData.json";

const ClassSection: FC = () => {
  const [classCardComps, setClassCardComps] = useState([]);

  return (
    <>
      <div className="border border-techit-gray-100 rounded-lg p-6 flex flex-wrap gap-[10px]">
        {classData.map((v, i) => (
          <ClassButton
            key={i}
            classData={v}
            classCardComps={classCardComps}
            setClassCardComps={setClassCardComps}
          />
        ))}
      </div>
      <ul className="grid grid-cols-2 gap-6 mt-6">
        {classCardComps.map((v, i) => (
          <li
            key={v.name + i}
            className="border border-techit-gray-100 rounded-lg max-w-[604px] w-full"
          >
            <ClassCard
              name={v.name}
              description={v.description}
              image={v.image}
              bgColor={v.bgColor}
              alarm={v.alarm}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ClassSection;
