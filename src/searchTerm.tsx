import React, { createContext, useContext, useState, ReactNode } from "react";

interface SearchTermContextType {
  searchTerms: string[];
  addSearchTerm: (term: string) => void;
}

const SearchTermContext = createContext<SearchTermContextType | undefined>(
  undefined
);

export const useSearchTerms = () => {
  const context = useContext(SearchTermContext);
  if (!context) {
    throw new Error("Can't use useSearchTerms");
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
    const trimmedTerm = term.trim();
    if (trimmedTerm !== "" && !searchTerms.includes(trimmedTerm)) {
      setSearchTerms((prevTerms) => [...prevTerms, trimmedTerm]);
    }
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
