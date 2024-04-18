import { useEffect, useState } from "react";
import { Quest } from "../types";

const QuestList = ({ numberOfQuests }: { numberOfQuests: number }) => {
  const [questList, setQuestList] = useState<Quest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchQuests = async () => {
      try {
        const url = `https://opentdb.com/api.php?amount=${numberOfQuests}&type=multiple`;
        const result = await fetch(url);
        const quests = await result.json();
        setQuestList(quests.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching quests:", error);
        setLoading(false);
      }
    };

    const delay = 2000;
    const timer = setTimeout(() => {
      fetchQuests();
    }, delay);

    return () => clearTimeout(timer);
  }, [numberOfQuests]);

  return { questList, loading, QuestList };
};

export default QuestList;
