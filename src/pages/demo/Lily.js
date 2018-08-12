import React from 'react'

export default class Life extends React.Component{
    constructor(props){
        super(props)
        this.state={count:0}
    }
    // state={
    //     count:0
    // }

    handleAdd(){
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return (
            <div>
                <p>React 生命周期介绍</p>
                <button onClick={this.handleAdd.bind(this)}></button>
                <p>{this.state.count}</p>
            </div>
        )
    }
}