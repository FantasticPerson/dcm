import React from 'react'
import {Card,Table, Button,Modal,Badge,message} from 'antd'
import axios from '../../axios/index'
import Utils from '../../utils/utils'

export default class HighTable extends React.Component{
    state={dataSource:[]}
    params = {
        page:1
    }
    componentDidMount(){
        this.request()
    }
    request(){
        let _this = this
        axios.ajax({
            url:'/table/high',
            data:{
                params:{
                    page:this.params.page
                },
                isShowLoading:true
            }
        }).then((res)=>{
            this.setState({
                dataSource:res.result.list,
                pagination:Utils.pagination(res,(current)=>{
                    console.log(current)
                    _this.params.page = current
                    this.request()
                    //to-do
                })
            })
        })
    }
    handleChange=(p,filter,sorter)=>{
        this.setState({sortOrder:sorter.order})
    }
    handleDelete=(item)=>{
        console.log(item)
        Modal.confirm({
            title:'确认',
            content:'您确认删除此条数据吗?',
            onOk:()=>{
                message.success('删除成功')
                this.request()
            }
        })
    }
    render(){
        const columns = [
            {
                title:'id',
                dataIndex:'id',
                width:80,
                
            },
            {
                title:'用户名',
                dataIndex:'userName',
                width:80,
            },
            {
                title:'性别',
                dataIndex:'sex',
                width:80,
                render(sex){
                    return sex == 1 ? '男' : '女'
                },
            },
            {
                title:'状态',
                width:80,
                dataIndex:'state'
            },
            {
                title:'爱好',
                width:80,
                dataIndex:'interest'
            },
            {
                title:'生日',
                width:80,
                dataIndex:'birthday'
            },
            {
                title:'早起时间',
                width:80,
                dataIndex:'time'
            }
        ]
        const columns2 = [
            {
                title:'id',
                dataIndex:'id',
                width:80,
                fixed:'left'
            },
            {
                title:'用户名',
                dataIndex:'userName',
                width:80,
                fixed:'left'
            },
            {
                title:'性别',
                dataIndex:'sex',
                width:80,
                render(sex){
                    return sex == 1 ? '男' : '女'
                },
                fixed:'left'
            },
            {
                title:'状态',
                width:80,
                dataIndex:'state'
            },
            {
                title:'爱好',
                width:80,
                dataIndex:'interest'
            },
            {
                title:'生日',
                width:80,
                dataIndex:'birthday'
            },
            {
                title:'生日',
                width:80,
                dataIndex:'birthday'
            },
            {
                title:'生日',
                width:80,
                dataIndex:'birthday'
            },
            {
                title:'生日',
                width:80,
                dataIndex:'birthday'
            },
            {
                title:'生日',
                width:80,
                dataIndex:'birthday'
            },
            {
                title:'生日',
                width:80,
                dataIndex:'birthday'
            },
            {
                title:'生日',
                width:80,
                dataIndex:'birthday'
            },
            {
                title:'生日',
                width:80,
                dataIndex:'birthday'
            },
            {
                title:'生日',
                width:80,
                dataIndex:'birthday'
            },
            {
                title:'生日',
                width:80,
                dataIndex:'birthday'
            },
            {
                title:'生日',
                width:80,
                dataIndex:'birthday'
            },
            {
                title:'生日',
                width:80,
                dataIndex:'birthday'
            },
            {
                title:'生日',
                width:80,
                dataIndex:'birthday',
                fixed:'right'
            },
            {
                title:'早起时间',
                width:80,
                dataIndex:'time',
                fixed:'right'
            }
        ]
        const columns3 = [
            {
                title:'id',
                dataIndex:'id',
                
            },
            {
                title:'用户名',
                dataIndex:'userName',
            },
            {
                title:'性别',
                dataIndex:'sex',
                render(sex){
                    return sex == 1 ? '男' : '女'
                },
            },
            {
                title:'年龄',
                dataIndex:'age',
                sorter:(a,b)=>{
                    return a.age - b.age;
                },
                sortOrder:this.state.sortOrder
                
            },
            {
                title:'状态',
                dataIndex:'state'
            },
            {
                title:'爱好',
                dataIndex:'interest'
            },
            {
                title:'生日',
                dataIndex:'birthday'
            },
            {
                title:'早起时间',
                dataIndex:'time'
            }
        ]
        const columns4 = [
            {
                title:'id',
                dataIndex:'id',
                
            },
            {
                title:'用户名',
                dataIndex:'userName',
            },
            {
                title:'性别',
                dataIndex:'sex',
                render(sex){
                    return sex == 1 ? '男' : '女'
                },
            },
            {
                title:'年龄',
                dataIndex:'age',
                
            },
            {
                title:'状态',
                dataIndex:'state',
                render(state){
                    let config={
                        '1':<Badge status="success" text="游泳"/>,
                        '2':<Badge status="error" text="打篮球"/>,
                        '3':<Badge status="default" text="踢足球"/>,
                        '4':<Badge status="processing" text="跑步"/>,
                        '5':<Badge status="warning" text="爬山"/>
                    }
                    return config[state]
                }
            },
            {
                title:'爱好',
                dataIndex:'interest'
            },
            {
                title:'生日',
                dataIndex:'birthday'
            },
            {
                title:'操作',
                render:(text,item)=>{
                    return <Button size="small" onClick={()=>{this.handleDelete(item)}}>删除</Button>
                }
            }
        ]
        const {dataSource} = this.state
        return (
            <div>
                <Card title="头部固定">
                    <Table
                        pagination={false}
                        bordered
                        columns={columns}
                        dataSource={dataSource}
                        scroll={{y:240}}
                    />
                </Card>
                <Card title="左侧固定" style={{margin:'0 10'}}>
                    <Table
                        pagination={false}
                        bordered
                        columns={columns2}
                        dataSource={dataSource}
                        scroll={{x:1640}}
                    />
                </Card>
                <Card title="表格排序" style={{margin:'0 10'}}>
                    <Table
                        pagination={false}
                        bordered
                        columns={columns3}
                        dataSource={dataSource}
                        scroll={{x:1640}}
                        onChange={this.handleChange}
                    />
                </Card>
                <Card title="操作按钮" style={{margin:'0 10'}}>
                    <Table
                        pagination={false}
                        bordered
                        columns={columns4}
                        dataSource={dataSource}
                    />
                </Card>
            </div>
        )
    }
}