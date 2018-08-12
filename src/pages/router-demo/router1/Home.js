import React from 'react'
import {HashRouter,Route,Link,Switch} from 'react-router-dom'
import About from './About'
import Topic from './Topic'
import Main from './Main'

export default class Home extends React.Component{
    render(){
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                        <Link to="/" >Home</Link>
                        </li>
                        <li>
                        <Link to="/about">About</Link>
                        </li>
                        <li>
                        <Link to="/topic">Topics</Link>
                        </li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route path="/about" component={About}/>
                        <Route path="/topic" component={Topic}/>
                    </Switch>
                    {/* <Route exact path="/" component={Main}/>
                    <Route path="/about" component={About}/>
                    <Route path="/topic" component={Topic}/> */}
                </div>
            </HashRouter>
        )
    }
}