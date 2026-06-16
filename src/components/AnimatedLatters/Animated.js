import React from "react";
import "./Animated.scss";

const Animated = ({ letterClass, strArray, idx }) => {
  const coloredLetters = ["m", "z"]; // الحروف اللي عايز تميزها

  return (
    <span>
      {strArray.map((char, i) => {
        let extraClass = "";

        // تجاهل المسافات
        

        return (
          <span
            key={`${char}-${i}`}
            className={`${letterClass} _${i + idx} ${extraClass}`}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
};

export default Animated;