import React from 'react'
import {Card,Table} from 'antd'
import axios from '../../axios/index'

export default class BasicTable extends React.Component{
    state={dataSource:[],dataSource2:[]}
    componentDidMount(){
        const dataSource = [
            {
                id:'0',userName:'jack',sex:'1',state:'1',interest:'1',birthday:'2000-01-01',address:'北京市海淀区奥林匹克公园',time:'09:00'
            },
            {
                id:'1',userName:'jack',sex:'1',state:'1',interest:'1',birthday:'2000-01-01',address:'北京市海淀区奥林匹克公园',time:'09:00'
            },
            {
                id:'2',userName:'jack',sex:'1',state:'1',interest:'1',birthday:'2000-01-01',address:'北京市海淀区奥林匹克公园',time:'09:00'
            },
            {
                id:'3',userName:'jack',sex:'1',state:'1',interest:'1',birthday:'2000-01-01',address:'北京市海淀区奥林匹克公园',time:'09:00'
            },
            {
                id:'4',userName:'jack',sex:'1',state:'1',interest:'1',birthday:'2000-01-01',address:'北京市海淀区奥林匹克公园',time:'09:00'
            },
            {
                id:'5',userName:'jack',sex:'1',state:'1',interest:'1',birthday:'2000-01-01',address:'北京市海淀区奥林匹克公园',time:'09:00'
            },
            {
                id:'6',userName:'jack',sex:'1',state:'1',interest:'1',birthday:'2000-01-01',address:'北京市海淀区奥林匹克公园',time:'09:00'
            },
            {
                id:'7',userName:'jack',sex:'1',state:'1',interest:'1',birthday:'2000-01-01',address:'北京市海淀区奥林匹克公园',time:'09:00'
            },
            {
                id:'8',userName:'jack',sex:'1',state:'1',interest:'1',birthday:'2000-01-01',address:'北京市海淀区奥林匹克公园',time:'09:00'
            }
        ]
        dataSource.map((item,index)=>item.key=index)
        this.setState({
            dataSource
        })
        this.request()
    }
    request(){
        axios.ajax({
            url:'/table/list',
            data:{
                params:{
                    page:1
                },
                isShowLoading:true
            }
        }).then((res)=>{
            this.setState({
                dataSource2:res.result
            })
        })
    }
    onRowClick=(r,index)=>{
        let selectKey = [index]
        this.setState({
            selectedRowKeys:selectKey,
            selectedItem:r
        })
    }
    render(){
        const {dataSource} = this.state
        const {selectedRowKeys} = this.state
        const columns = [
            {
                title:'id',
                dataIndex:'id'
            },
            {
                title:'用户名',
                dataIndex:'userName'
            },
            {
                title:'性别',
                dataIndex:'sex',
                render(sex){
                    return sex == 1 ? '男' : '女'
                }
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
        const rowSelection = {
            type:'radio',
            selectedRowKeys:selectedRowKeys
        }
        return (
            <div>
                <Card title="基础表格">
                    <Table
                        pagination={false}
                        bordered
                        columns={columns}
                        dataSource={dataSource}
                    />
                </Card>
                <Card title="mock-动态数据渲染表格" style={{margin:'0 10'}}>
                    <Table
                        pagination={false}
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                    />
                </Card>
                <Card title="mock-单选" style={{margin:'0 10'}}>
                    <Table
                        pagination={false}
                        bordered
                        onRow={(r,index)=>{
                            return {
                                onClick:()=>{this.onRowClick(r,index)}
                            }
                        }}
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={this.state.dataSource2}
                    />
                </Card>
            </div>
        )
    }
}