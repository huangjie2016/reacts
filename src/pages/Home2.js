import React from 'react';
import {Link} from "react-router-dom";
import Child from './Child';

export default class Home2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            father: 'father',
            childValue: ''
        }
    }

    changeRoute = () => {
        this.props.history.push('/twoPage');
    };

    getChildValue = (val) => {
        if(val){
            this.setState({
                childValue: val
            })
        }
    };

    render(){
        return (
            <div>
                <div>
                    <p>我是Home2组件</p>
                    <Link to="/onePage">点我跳转到one页面</Link><br/>
                    <Link to="/twoPage/2">点我跳转到two页面</Link><br/>
                    <Link to="/this">点我跳转到this页面</Link>
                    <p onClick={this.changeRoute}>点我试试</p>
                </div>
                <div>
                    <p>我是父组件</p>
                    <Child value={this.state.father} getChildValue={this.getChildValue} />
                    <p>{this.state.childValue}</p>
                </div>
            </div>
        )
    }
}