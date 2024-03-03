import styled from "styled-components";

export const HistoryContainer = styled.div`
  color: rgba(38, 74, 60, 100);
  text-align: center;
`;

export const HistoryItem = styled.button`
  color: rgba(38, 74, 60, 0.74);
  border: none;
  font-size: 16px;
  font-weight: bold;
  background-color: rgba(220, 241, 225, 0.74);

  &: hover {
    cursor: pointer;
  }
`;
