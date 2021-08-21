import React from "react";
import { Redirect, Router } from "react-router-dom";
import HomePage from "../../../pages/homepage/HomePage";
import {
  AppPageName,
  appRoutes,
} from "../../../services/navigationService/appRoutes";

export const AppBody: React.FC = () => {
  const getContent = () => {
    return (
      <>
        <HomePage />
      </>
    );
  };

  return <div className={`app-body`}>{getContent()}</div>;
};
