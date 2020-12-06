import React, { FC, Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Loader from "./components/Loader";

const Search = lazy(() => import("./pages/Search"));

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Search} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
