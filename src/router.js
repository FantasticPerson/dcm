import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
// import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import NoMatch from './pages/noMatch'
import Notice from './pages/ui/notice'
import Message from './pages/ui/message';
import Gallery from './pages/ui/gallery';
import Carousel from './pages/ui/carousel';
import Login from './pages/form/login';
import FormRegister from './pages/form/register';
import BasicTable from './pages/table/basicTable';
import HighTable from './pages/table/highTable'

import Tabs from './pages/ui/tab';

export default class IRouter extends React.Component{
    render(){
        return (
            <HashRouter>
                <App>
                    <Switch>
                        {/* <Route path="/login" component={Login}></Route> */}
                        <Route path="/admin" render={()=>
                            <Admin>
                                <Switch>
                                    <Route path="/admin/ui/buttons" component={Buttons}></Route>
                                    <Route path="/admin/ui/modals" component={Modals}></Route>
                                    <Route path="/admin/ui/loadings" component={Loadings}></Route>
                                    <Route path="/admin/ui/notification" component={Notice}></Route>
                                    <Route path="/admin/ui/messages" component={Message}></Route>
                                    <Route path="/admin/ui/tabs" component={Tabs}></Route>
                                    <Route path="/admin/ui/gallery" component={Gallery}></Route>
                                    <Route path="/admin/ui/carousel" component={Carousel}></Route>
                                    <Route path="/admin/form/login" component={Login}></Route>
                                    <Route path="/admin/form/reg" component={FormRegister}></Route>
                                    <Route path="/admin/table/basic" component={BasicTable}></Route>
                                    <Route path="/admin/table/high" component={HighTable}></Route>
                                    
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