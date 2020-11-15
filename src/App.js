import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//Pages
import HomePage from "./pages/Home";
import FavoritesPage from "./pages/Favorites";
import NotFound from "./pages/404";

// Main component that displays the header and the chosen page by react-router
// Empty path redirects to 'Home' page and any path that not exists redirects to '404 - not found' page
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/home" />} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/favorites" component={FavoritesPage} />
        <Route exact path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default App;
