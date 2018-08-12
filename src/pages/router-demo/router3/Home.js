import React from 'react'
import {HashRouter,Route,Link,Switch} from 'react-router-dom'
// import About from './About'
// import Topic from './Topic'
// import Main from './Main'


export default class Home extends React.Component{
    render(){
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                        <Link to="/main" >Home</Link>
                        </li>
                        <li>
                        <Link to="/about">About</Link>
                        </li>
                        <li>
                        <Link to="/topic">Topics</Link>
                        </li>
                        <li>
                        <Link to="/imooc">imooc</Link>
                        </li>
                    </ul>
                    <hr/>
                    {this.props.children}
                </div>
            </HashRouter>
        )
    }
}