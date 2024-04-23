import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();


export const useResultContext = () => useContext(ResultContext)
export default ResultContext;