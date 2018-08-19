import React from 'react'
import {Card,Table} from 'antd'
import axios from 'axios'

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
        this.setState({
            dataSource
        })
        this.request()
    }
    request(){
        axios.get('https://www.easy-mock.com/mock/5b798f78bcb2ab748b0c256b/table/table/list')
        .then(res=>{
           if( res.status == '200' && res.data.code == 0){
               this.setState({
                dataSource2:res.data.result
               })
           }
            console.log(res)
        })
    }
    render(){
        const {dataSource} = this.state
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
                dataIndex:'sex'
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
                <Card title="动态数据渲染表格" style={{margin:'0 10'}}>
                    <Table
                        pagination={false}
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                    />
                </Card>
            </div>
        )
    }
}