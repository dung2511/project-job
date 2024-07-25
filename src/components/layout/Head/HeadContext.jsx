import React, { createContext, useState, useContext } from "react";

const HeadContext = createContext();

export const HeadProvider = ({ children }) => {
  const [head, setHead] = useState({
    title: "Job Finder",
    description: "Default Description",
  });

  return (
    <HeadContext.Provider value={{ head, setHead }}>
      {children}
    </HeadContext.Provider>
  );
};

export const useHead = () => useContext(HeadContext);