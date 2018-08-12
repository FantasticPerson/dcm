import React from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom'

import About from '../router1/About'
import Topic from '../router1/Topic'
import Main from '../router1/Main'
// import Main from './Main'



import Home from './Home'

export default class IRouter extends React.Component{
    render(){
        return (
            <Router>
                <div>
                    <Home>
                        <Route exact path="/" component={Main}/>
                        <Route path="/about" component={About}/>
                        <Route path="/topic" component={Topic}/>
                    </Home>
                </div>
            </Router>
        )
    }
}