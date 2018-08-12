import React from 'react'
import {HashRouter,Route,Link} from 'react-router-dom'

export default class Info extends React.Component{
    componentDidMount(){
        console.log(this.props.match.params)
    }
    render(){
        return (
            <div>
                this is topic
                {this.props.match.params.mainId}
            </div>
        )
    }
}