import React from 'react'
import {Card,Button,Radio} from 'antd'
import './index.less'

export default class Login extends React.Component{
    
    state={
        showLoading:true,
        size:'default'
    }
    handleCloseLoading=()=>{
        console.log('loading')
        this.setState({showLoading:false})
    }

    handleChange=(e)=>{
        this.setState({size:e.target.value})
    }

    render(){
        return (
            <div>
                <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">Imooc</Button>
                    <Button >Imooc</Button>
                    <Button type="dashed">Imooc</Button>
                    <Button type="danger">Imooc</Button>
                    <Button disabled>Imooc</Button>
                    
                </Card>
                <Card title="图形按钮" className="card-wrap">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button icon="search" type="primary">搜索</Button>
                    <Button icon="download" type="primary">下载</Button>            
                </Card>
                <Card title="Loading按钮" className="card-wrap">
                    <Button loading={true} type="primary">确定</Button>
                    <Button shape="circle" loading={this.state.showLoading}  type="primary"></Button>
                    <Button loading={this.state.showLoading}>点击加载</Button>
                    <Button shape="circle" loading={this.state.showLoading}></Button>
                    <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>                    
                </Card>
                <Card title="按钮组" className="card-wrap">
                    <Button.Group>
                        <Button icon="left" type="primary">返回</Button>
                        <Button icon="right" type="primary">前进</Button>

                    </Button.Group>
                </Card>
                <Card title="按钮尺寸" className="card-wrap">
                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>

                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>Imooc</Button>
                    <Button  size={this.state.size}>Imooc</Button>
                    <Button  size={this.state.size} type="dashed">Imooc</Button>
                    <Button  size={this.state.size} type="danger">Imooc</Button>
                    <Button  size={this.state.size} disabled>Imooc</Button>
                </Card>
            </div>
        )
    }
}