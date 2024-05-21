import { FC, useEffect, useState } from "react";

interface ClassButtonProps {
  name: string;
  classCardComps: React.ReactNode[];
  setClassCardComps: (comps: React.ReactNode[]) => void;
}

const ClassButton: FC<ClassButtonProps> = ({
  name,
  classCardComps,
  setClassCardComps,
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const onClickClass = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    if (isClicked) {
      setClassCardComps([...classCardComps, <li key={name}>{name}</li>]);
    } else {
      console.log(classCardComps);
      const temp = classCardComps.filter((v) => {
        console.log(v);
        if (v !== name) {
          return v;
        }
      });

      setClassCardComps(temp);
    }
  }, [isClicked]);

  return (
    <button
      className={`${
        isClicked
          ? "border-techit-main text-techit-main bg-[#fff7ed]"
          : "border-techit-gray-100"
      } px-3 py-2 text-lg border rounded-md`}
      onClick={onClickClass}
    >
      {name}
    </button>
  );
};

export default ClassButton;
