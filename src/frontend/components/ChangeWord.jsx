import React from "react";

const ChangeWord = ({ list }) => {
  const [currentWord, setCurrentWord] = React.useState(list[0]);

  const handleWordClick = () => {
    const nextIndex = (list.indexOf(currentWord) + 1) % list.length;
    setCurrentWord(list[nextIndex]);
  };

  return (
    <span
      className="underline cursor-pointer font-semibold select-none"
      onClick={handleWordClick}
    >
      {currentWord}
    </span>
  );
};

export default ChangeWord;
