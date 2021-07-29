import React from "react";
import { Route } from "react-router-dom";
import AppLayout from "./layout";

interface Props {
  path: string,
  component: React.FC,
  layout: string,
}

const AppRoute : React.FC<Props> = ({path, component, layout}) => {
  return (
    <Route
      path={path}
      exact
      render={props => {
        return (
          <AppLayout
            layout={layout}
            component={component}
          />
        );
      }}
    />);
};

export default AppRoute;
