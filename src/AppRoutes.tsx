import React from "react";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./config/routes";

const AppRoutes = () => {
  return (
    <Routes>
      {appRoutes.map((route) => (
        <Route key={route.path} path={route.path} Component={route.Component} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
