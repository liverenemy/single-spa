import React, { useEffect, useState} from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import eventManager from "../../root-config/src/events/EventManager";
import ReactClickEvent, { REACT_CLICK_EVENT } from "./events/ReactClickEvent";
import AngularClickEvent, {
  ANGULAR_CLICK_EVENT,
} from "../../angular-app/src/events/AngularClickEvent";

export default function App({ name }) {
  const [reactAppClickTimes, setReactAppClickTimes] = useState(0);
  const [angularAppClickTimes, setAngularAppClickTimes] = useState(0);

  const handleButtonClick = () => {
    const newClickTimes = reactAppClickTimes + 1;
    eventManager.trigger(new ReactClickEvent(newClickTimes));
  };

  useEffect(() => {
    eventManager.on(REACT_CLICK_EVENT, (clickTimes: number) => {
      setReactAppClickTimes(clickTimes);
    });
    eventManager.on(ANGULAR_CLICK_EVENT, (clickTimes: number) => {
      setAngularAppClickTimes(clickTimes);
    });
  }, []);

  return (
    <Router>
      <div>
        <p>{name} is mounted</p>
        <p>
          <button onClick={handleButtonClick}>Click me!</button>
        </p>
        <p>React app clicks: {reactAppClickTimes}</p>
        <p>Angular app clicks: {angularAppClickTimes}</p>
        <nav>
          <ul>
            <li>
              <Link to="/react">Home</Link>
            </li>
            <li>
              <Link to="/react/about">About</Link>
            </li>
            <li>
              <Link to="/react/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/react/about">
            <About />
          </Route>
          <Route path="/react/users">
            <Users />
          </Route>
          <Route path="/react">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
