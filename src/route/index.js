import React from 'react';
import {Switch, Route} from "react-router-dom";

import Home2 from '../pages/Home2';
import OnePage from '../pages/OnePage';
import TwoPage from '../pages/TwoPage';
import This from '../pages/This';
import Mount from '../pages/Mount';

const Routers = (
    <Switch>
        <Route path="/" exact component={Home2} />
        <Route path="/onePage" component={OnePage} />
        <Route path="/twoPage/:id" component={TwoPage} />
        <Route path="/this" component={This} />
        <Route path="/mount"  component={Mount} />
    </Switch>
);

export default Routers