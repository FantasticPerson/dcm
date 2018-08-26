import React from 'react'
import {Card,Button,Table,Form, Select, Modal,message,DatePicker} from 'antd'
import axios from '../../axios'
import Utils from '../../utils/utils'

const FormItem = Form.Item
const Option = Select.Option

export default class Order extends React.Component{
    state = {orderConfirmVisible:false,orderInfo:{},selectedItem:null}
    params={page:1}

    componentDidMount(){
        this.requestList()
    }

    requestList=()=>{
        let _this = this
        axios.ajax({
            url:'/order/list',
            data:{
                params:{
                    page:this.params.page
                }
            }
        }).then(res=>{
            if(res.code == 0){
                let list = res.result.item_list.map((item,index)=>{
                    item.key = index
                    return item
                })
                this.setState({list:list,pagination:Utils.pagination(res,(current)=>{
                    _this.params.page = current
                    _this.requestList()
                })})
            }
        })
    }

    handleFinish=()=>{
        axios.ajax({
            url:'/order/ebike_info',
            data:{
                params:{
                    id:1
                }
            }
        }).then(res=>{
            if(res.code == 0){
                this.setState({orderConfirmVisible:true,orderInfo:res.result})
                this.requestList()
            }
        })
        
    }

    handleFinishOrder=()=>{
        if(!this.state.selectedItem){
            Modal.info({
                title:'信息',
                content:'请选择一天订单进行结束'
            })
            return
        }
        let id = this.state.selectedItem.id
        
        axios.ajax({
            url:'/order/finish_order',
            data:{
                params:{
                    id:1
                }
            }
        }).then(res=>{
            if(res.code == 0){
                message.success('订单结束成功')
                this.setState({orderConfirmVisible:false})
                this.requestList()
            }
        })
    }

    onRowClick=(r,index)=>{
        let selectKey = [index]
        this.setState({
            selectedRowKeys:selectKey,
            selectedItem:r
        })
    }

    openDetail = ()=>{
        if(!this.state.selectedItem){
            Modal.info({
                title:'信息',
                content:'请选择一天订单进行结束'
            })
            return
        }
        let id = this.state.selectedItem.id
        window.open('/#/common/order/detail/'+id,'_blank')
        // window.location.href = '/#/common/order/detail'+id
    }
        

    render(){
        const {selectedRowKeys} = this.state
        const rowSelection = {
            type:'radio',
            selectedRowKeys:selectedRowKeys
        }
        // const rowCheckSelection = {
        //     type:'checkbox',
        //     selectedRowKeys:selectedRowKeys,
        //     onChange:(selectedRowKeys,selectedRows)=>{
        //         let ids = selectedRowKeys.map((item)=>{
        //             return item.id
        //         })
        //         this.setState({
        //             selectedRowKeys,
        //             selectedRows
        //         })
        //     }
        // }
        const columns = [
            {
                title:'订单编号',
                dataIndex:'order_sn'
            },
            {
                title:'车辆编号',
                dataIndex:'bike_sn'
            },
            {
                title:'用户名',
                dataIndex:'user_name'
            },
            {
                title:'手机号码',
                dataIndex:'mobile'
            },
            {
                title:'里程',
                dataIndex:'distance'
            },
            {
                title:'行驶时长',
                dataIndex:'total_time'
            },
            {
                title:'状态',
                dataIndex:'status'
            },
            {
                title:'开始时间',
                dataIndex:'start_time'
            },
            {
                title:'结束时间',
                dataIndex:'end_time'
            },
            {
                title:'订单金额',
                dataIndex:'total_fee'
            },
            {
                title:'实付金额',
                dataIndex:'user_pay'
            }
        ]
        const formItemLayout = {
            labelCol:{span:5},
            wrapperCol:{span:18}
        }
        // const rowSelection = {
        //     type:'radio'
        // }
        return (
            <div>
                <Card>
                    <FilterForm></FilterForm>
                </Card>
                <Card style={{marginTop:10}}>
                    <Button type="primary" onClick={this.openDetail}>订单详情</Button>
                    <Button type="primary" style={{marginLeft:10}} onClick={this.handleFinishOrder}>结束订单</Button>

                </Card>
                <div className="content-wrap">
                    <Table
                        columns={columns} 
                        dataSource={this.state.list} 
                        pagination={this.state.pagination} 
                        bordered={true}
                        rowSelection={rowSelection}
                        onRow={(r,index)=>{
                            return {
                                onClick:()=>{this.onRowClick(r,index)}
                            }
                        }}
                    />
                </div>
                <Modal
                    title="结束订单"
                    visible={this.state.orderConfirmVisible}
                    onCancel={()=>{this.setState({orderConfirmVisible:false})}}
                    onOk={this.handleFinishOrder}
                    width={600}
                >
                    <Form layout="horizontal">
                        <FormItem label="车辆编号" {...formItemLayout}>
                            {this.state.orderInfo.bike_sn}
                        </FormItem>
                        <FormItem label="剩余电量" {...formItemLayout}>
                            {this.state.orderInfo.battery + '%'}
                        </FormItem>
                        <FormItem label="行程开始时间" {...formItemLayout}>
                            {this.state.orderInfo.start_time}
                        </FormItem>
                        <FormItem label="当前位置" {...formItemLayout}>
                            {this.state.orderInfo.location}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}

class FilterForm extends React.Component{
    render(){
        const {getFieldDecorator} = this.props.form
        
        return(
            <Form layout="inline">
                <FormItem label="城市">
                    {
                        getFieldDecorator('city_id')(
                            <Select placeholder="全部" style={{width:80}}>
                                <Option value="">全部</Option>
                                <Option value="1">北京市</Option>
                                <Option value="2">天津市</Option>
                                <Option value="3">深圳市</Option>

                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="订单时间">
                    {
                        getFieldDecorator('start_time')(
                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"></DatePicker>
                        )
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('end_time')(
                            <DatePicker style={{marginLeft:5}} showTime format="YYYY-MM-DD HH:mm:ss"></DatePicker>
                        )
                    }
                </FormItem>
                <FormItem label="订单状态">
                    {
                        getFieldDecorator('op_model')(
                            <Select placeholder="全部" style={{width:80}}>
                                <Option value="">全部</Option>
                                <Option value="1">进行中</Option>
                                <Option value="2">结束行程</Option>

                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="加盟商授权状态">
                    <Button type="primary" style={{margin:'0 20px'}}>查询</Button>
                    <Button>重置</Button>
                </FormItem>
            </Form>
        )
    }
}
FilterForm = Form.create({})(FilterForm)