import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Test from './Test';

export default class Home extends React.Component{
    render(){
        return (
            <Router>
                <div>
                    <p>我是Home组件</p>
                    <Link to="/test">点我显示Test组件</Link>
                </div>
                <div>
                    <Route path="/test" component={Test} />
                </div>
            </Router>
        )
    }
}