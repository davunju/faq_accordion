import { useState } from "react";
import minus from "../assets/icon-minus.svg";
import plus from "../assets/icon-plus.svg";

export default function Accordion({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  const [isActive, setIsActive] = useState(false);
  const minuSign = <img src={minus} alt="minus sign" />;
  const pluSign = <img src={plus} alt="plus sign" />;

  return (
    <>
      <div className="shadow p-4">
        <div
          className="flex select-none cursor-pointer justify-between"
          onClick={() => setIsActive(!isActive)}
        >
          <h1 className="text-darkPurple font-600 transition-all duration-[250ms] ease-in-out mobile:text-base">
            {title}
          </h1>
          <div>{isActive ? minuSign : pluSign}</div>
        </div>
        {isActive && (
          <p className="font-400 text-sm text-darkPurple opacity-80 leading-normal max-w-[400px]">
            {content}
          </p>
        )}
      </div>
    </>
  );
}
