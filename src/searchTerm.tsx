import React, { createContext, useContext, useState, ReactNode } from "react";

interface SearchTermContextType {
  searchTerms: string[];
  addSearchTerm: (term: string) => void;
}

const SearchTermContext = createContext<SearchTermContextType | undefined>(
  undefined
);

export const useSearchTerms = () => {
  const [globalSearchTerms, setGlobalSearchTerms] = useState([]);
  const context = useContext(SearchTermContext);
  if (!context) {
    throw new Error("useSearchTerms must be used within a SearchTermProvider");
  }
  return context;
};

interface SearchTermProviderProps {
  children: ReactNode;
}

export const SearchTermProvider: React.FC<SearchTermProviderProps> = ({
  children,
}) => {
  const [searchTerms, setSearchTerms] = useState<string[]>([]);

  const addSearchTerm = (term: string) => {
    setSearchTerms((prevTerms) => [...prevTerms, term]);
  };

  const value: SearchTermContextType = {
    searchTerms,
    addSearchTerm,
  };

  return (
    <SearchTermContext.Provider value={value}>
      {children}
    </SearchTermContext.Provider>
  );
};