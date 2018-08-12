import React from 'react'
import {HashRouter,Route,Link} from 'react-router-dom'

export default class Main extends React.Component{
    render(){
        return (
            <div>
                this is main 222
                <div>
                    <Link to="/main/test-id">嵌套路由</Link>
                    <Link to="/main/456">嵌套路由2</Link>
                </div>

                <hr/>
                {this.props.children}
            </div>
        )
    }
}