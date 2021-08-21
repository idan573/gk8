import HomePage from "../../pages/homepage/HomePage";

export enum AppPageName {
  HOME_PAGE = "homePage",
}

export interface IRouteDefinition {
  path: string;
  title: string;
  search?: string[];
  component: React.ComponentClass | React.FunctionComponent;
}

type AppRouteDefinitionsMapping = {
  [key in AppPageName]: IRouteDefinition;
};

export const appRoutes: AppRouteDefinitionsMapping = {
  [AppPageName.HOME_PAGE]: {
    path: "/monitor",
    title: "GR8 Home Page",
    component: HomePage,
    search: ["someArg"],
  },
};
