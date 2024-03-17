import React, { useState, useEffect } from "react";
import { Props } from "../../Types";

const QueAnswers: React.FC<Props> = ({ questList }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [shuffledAnswers, setShuffledAnswers] = useState<string[][]>([]);
  const [answerResult, setAnswerResult] = useState<string>("");

  const sortArray = (array: any[]): any[] => {
    const sortedArray = [...array];

    sortedArray.sort((a, b) => {
      if (typeof a === "string" && typeof b === "string") {
        return a.localeCompare(b);
      } else if (typeof a === "number" && typeof b === "number") {
        return a - b;
      } else {
        return 0;
      }
    });

    return sortedArray;
  };

  useEffect(() => {
    const shuffled = questList.map((quest) => {
      const answers = [...quest.incorrect_answers, quest.correct_answer];
      return sortArray(answers);
    });
    setShuffledAnswers(shuffled);
  }, [questList]);

  const handleClick = () => {
    const correctAnswer = questList
      .map((quest) => quest.correct_answer)
      .join("");

    let isCorrect = false;

    if (!selectedAnswer) {
      setAnswerResult("Please select an answer!");
      return;
    }

    shuffledAnswers.forEach((answers) => {
      answers.forEach((answer) => {
        if (selectedAnswer === answer && selectedAnswer === correctAnswer) {
          isCorrect = true;
        }
      });
    });

    isCorrect
      ? setAnswerResult("Correct answer!")
      : setAnswerResult("Incorrect answer!");
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
                  {shuffledAnswers[index]?.map((answer, idx) => (
                    <li key={idx}>
                      <input
                        type="radio"
                        name={`answers_${index}`}
                        value={answer}
                        checked={selectedAnswer === answer}
                        onChange={() => setSelectedAnswer(answer)}
                      />
                      <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Make Guess</button>
      <p>{answerResult}</p>
    </div>
  );
};

export default QueAnswers;
