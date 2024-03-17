export type Quest = {
  type: "multiple";
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type Props = {
  questList: Quest[];
};
