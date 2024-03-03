import { useSearchTerms } from "../../searchTerm";
import { HistoryContainer, HistoryItem } from "./styles";

const History = () => {
  const { searchTerms } = useSearchTerms();
  return (
    <HistoryContainer>
      <h2>ისტორია</h2>
      {searchTerms.map((term, index) => (
        <HistoryItem key={index}>{term}</HistoryItem>
      ))}
    </HistoryContainer>
  );
};

export default History;
