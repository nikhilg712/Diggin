import React, { createContext, useState } from "react";
import  ResultContext  from './ResultContext.js'; // Import the ResultContext

const baseUrl = "https://google-search74.p.rapidapi.com/";

const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
        "X-RapidAPI-Host": "google-search74.p.rapidapi.com",
      },
    });
      
    const data = await response.json()
    setResults(data)
    setIsLoading(false)
  };

  return (
    <ResultContext.Provider value={{ results, getResults, isLoading, searchTerm, setSearchTerm }}>
      {children}
    </ResultContext.Provider>
  );
};

export default ResultContextProvider;
