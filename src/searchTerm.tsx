import React, { createContext, useContext, useState, ReactNode } from "react";

interface SearchTermContextType {
  searchTerms: string[];
  searchedPictures: any[];
  addSearchTerm: (term: string) => void;
  setSearchedPictures: (pictures: any[]) => void;
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
  const [searchedPictures, setSearchedPictures] = useState<any[]>([]);

  const addSearchTerm = (term: string) => {
    const trimmedTerm = term.trim();
    if (trimmedTerm !== "" && !searchTerms.includes(trimmedTerm)) {
      setSearchTerms((prevTerms) => [...prevTerms, trimmedTerm]);
    }
  };

  const value: SearchTermContextType = {
    searchTerms,
    searchedPictures,
    addSearchTerm,
    setSearchedPictures,
  };

  return (
    <SearchTermContext.Provider value={value}>
      {children}
    </SearchTermContext.Provider>
  );
};
