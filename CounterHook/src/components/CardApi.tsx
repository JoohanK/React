import QuestList from "../hooks/useFetch";

const CardApi = () => {
  const { questList, loading } = QuestList({ numberOfQuests: 1 });

  return (
    <div className="card-api">
      <h2>Quest</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3>{questList[0].question}</h3>
          <ul>
            {questList[0].incorrect_answers.map((answer) => (
              <li key={answer}>{answer}</li>
            ))}
            <li className="correct-answer" key={questList[0].correct_answer}>
              {questList[0].correct_answer}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CardApi;
