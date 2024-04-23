import React from "react";
import Results from "./Results";
import {Routes, Route, useNavigate } from "react-router-dom";

const MyRoutes = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/search");
    }
  }, [navigate]);

  return (
    <Routes>
      <Route exact path="/search" element={<Results />} />
      <Route exact path="/images" element={<Results />} />
      <Route exact path="/videos" element={<Results />} />
    </Routes>
  );
};

export default MyRoutes;
