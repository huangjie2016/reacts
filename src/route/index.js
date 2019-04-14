import React from 'react';
import {Switch, Route} from "react-router-dom";

import Home2 from '../pages/Home2';
import OnePage from '../pages/OnePage';
import TwoPage from '../pages/TwoPage';
import This from '../pages/This';
import Mount from '../pages/Mount';
import HooksTest1 from '../hooks/test1';
import HooksUseState from '../hooks/useState';

const Routers = (
    <Switch>
        <Route path="/" exact component={Home2} />
        <Route path="/onePage" component={OnePage} />
        <Route path="/twoPage/:id" component={TwoPage} />
        <Route path="/this" component={This} />
        <Route path="/mount"  component={Mount} />
        <Route path="/hooksTest1" component={HooksTest1} />
        <Route path="/hooksUseState" component={HooksUseState} />
    </Switch>
);

export default Routers