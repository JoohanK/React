export type Quest = {
  type: "multiple";
  difficulty: string;
  category: string;
  question: string;
  correct_answer: number;
  incorrect_answers: string[];
};

export default Quest;
