import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import NoMatch from './pages/noMatch'

export default class IRouter extends React.Component{
    render(){
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/admin" render={()=>
                            <Admin>
                                <Switch>
                                    <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                    <Route path="/admin/ui/modals" component={Modals}></Route>
                                    <Route path="/admin/ui/loadings" component={Loadings}></Route>

                                    <Route component={NoMatch}></Route>
                                </Switch>
                            </Admin>
                        }></Route>
                        <Route path="/order/detail" component={Login}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </App>                
            </HashRouter> 
        )
    }
}