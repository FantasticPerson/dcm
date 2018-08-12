import React from 'react'
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom'

import About from '../router1/About'
import Topic from '../router1/Topic'
import Main from './Main'

import Info from './Info'

import Home from './Home'

import NoMatch from './NoMatch'

export default class IRouter extends React.Component{
    render(){
        return (
            <Router>
                <div>
                    <Home>
                        <Switch>
                            <Route path="/main" render={()=>{
                                return (
                                    <Main>
                                        <Route path="/main/:mainId" component={Info}></Route>
                                    </Main>
                                )
                            }}/>
                            <Route path="/about" component={About}/>
                            <Route path="/topic" component={Topic}/>
                            <Route component={NoMatch}></Route>
                        </Switch>
                    </Home>
                </div>
            </Router>
        )
    }
}