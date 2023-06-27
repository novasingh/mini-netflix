import React from "react";
import Page from "../../components/Page";
import { Switch, Route, useLocation, useRouteMatch } from "react-router-dom";
import SingleItem from "../../partials/Home/SingleItem";
import ListMovie from "../../partials/Home/ListMovie";

const Home = () => {
  const location = useLocation();
  const { path } = useRouteMatch();

  return (
    <Page id="page-home" title="Home">
      <Switch location={location}>
        <Route exact path={`${path}/`} children={<ListMovie />} />
        <Route exact path={`/movie/:id`} children={<SingleItem />} />
      </Switch>
    </Page>
  );
};

export default Home;
