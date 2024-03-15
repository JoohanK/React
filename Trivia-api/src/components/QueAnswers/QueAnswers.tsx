import { useState } from "react";
import { Quest } from "../../Types.tsx";

const QueAnswers = ({ questList }: { questList: Quest[] }) => {
  const shuffleArray = (array: any[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <div>
      <ul className="ul-main">
        {questList.map((quest, index) => (
          <li key={index}>
            <div className="cat-dif-box">
              <h2>{quest.category}</h2>
              <p>Difficulty: {quest.difficulty}</p>
            </div>
            <div className="que-ans-box">
              <p dangerouslySetInnerHTML={{ __html: quest.question }} />
              {quest.type === "multiple" && (
                <ul>
                  {shuffleArray([
                    ...quest.incorrect_answers,
                    quest.correct_answer,
                  ]).map((answer, idx) => (
                    <li key={idx}>
                      <input type="radio" name="anwers" />
                      <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueAnswers;
