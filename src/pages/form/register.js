import React from 'react'
import {Card,Form,Button,Input,Checkbox,Radio,Select,Switch,DatePicker,TimePicker,Upload,Icon,message, InputNumber} from 'antd'
import moment from 'moment'

const FormItem = Form.Item
const Option = Select.Option
const TextArea = Input.TextArea

class FormRegister extends React.Component{
    state={
        loading:true,
        imgUrl:null
    }

    getBase64(img,callback){
        const reader = new FileReader()
        reader.addEventListener('load',()=>{
            callback && callback(reader.result)
        })
        reader.readAsDataURL(img)
    }

    uploadChange(info){
        if(info.file.status == 'uploading'){
            this.setState({loading:true})
            return
        }
        if(info.file.status == 'done'){
            this.getBase64(info.file.originFileObj,imgUrl=>{
                this.setState({
                    imgUrl,
                    loading:false
                })
            })
        }
    }
    handleSubmit(){
        let userInfo = this.props.form.getFieldsValue()
        console.log(userInfo)
    }
    render(){
        const {getFieldDecorator} = this.props.form
        const formItemLayout = {
            labelCol:{
                xs:24,
                sm:4
            },
            wrapperCol:{
                xs:24,
                sm:20
            }
        }
        const RowObj = {
            minRows:4,
            maxRows:6
        }
        const offsetLayout={
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }
        return (
            <div>
                <Card title="注册表单">
                    <Form layout="horizontal">
                        <FormItem label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator('username',{
                                    initialValue:'',
                                    rules:[
                                        {
                                            required:true,
                                            message:'用户名不能为空'
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="user"/>} placeholder="请输入用户名"/>
                                )
                            }
                        </FormItem>
                        <FormItem label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator('userpwd',{
                                    initialValue:'',
                                    rules:[
                                        {
                                            required:true,
                                            message:'密码不能为空'
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="user"/>} placeholder="请输入密码"/>
                                )
                            }
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                            {
                                getFieldDecorator('sex',{
                                    initialValue:'1'
                                })(
                                    <Radio.Group>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </Radio.Group>
                                )
                            }
                        </FormItem>
                        <FormItem label="年龄" {...formItemLayout}>
                            {
                                getFieldDecorator('age',{
                                    initialValue:'18'
                                })(
                                    <InputNumber/>
                                )
                            }
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                            {
                                getFieldDecorator('state',{
                                    initialValue:'2'
                                })(
                                    <Select>
                                        <Option value="1">咸鱼一条</Option>
                                        <Option value="2">风华浪子</Option>
                                        <Option value="3">百度才子</Option>
                                        <Option value="4">百度FE</Option>
                                        <Option value="5">创业者</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                            {
                                getFieldDecorator('hooby',{
                                    initialValue:['2','5']
                                })(
                                    <Select mode="multiple">
                                        <Option value="1">爱好1</Option>
                                        <Option value="2">爱好2</Option>
                                        <Option value="3">爱好3</Option>
                                        <Option value="4">爱好4</Option>
                                        <Option value="5">爱好5</Option>
                                        <Option value="6">爱好6</Option>
                                        <Option value="7">爱好7</Option>
                                        <Option value="8">爱好8</Option>
                                        <Option value="9">爱好9</Option>
                                        <Option value="10">爱好10</Option>
                                        <Option value="11">爱好11</Option>
                                        <Option value="12">爱好12</Option>
                                        <Option value="13">爱好13</Option>

                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="是否已婚" {...formItemLayout}>
                            {
                                getFieldDecorator('isMarried',{
                                    valuePropName:'checked',
                                    initialValue:true
                                })(
                                    <Switch/>
                                )
                            }
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator('birthday',{
                                    initialValue:moment('2018-08-08')
                                })(
                                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
                                )
                            }
                        </FormItem>
                        <FormItem label="联系地址" {...formItemLayout}>
                            {
                                getFieldDecorator('area',{
                                    initialValue:''
                                })(
                                    <TextArea autosize={RowObj}/>
                                )
                            }
                        </FormItem>
                        <FormItem label="早起时间" {...formItemLayout}>
                            {
                                getFieldDecorator('time')(
                                    <TimePicker/>
                                )
                            }
                        </FormItem>
                        <FormItem label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator('avatar')(
                                    <Upload
                                        listType="picture-card"
                                        showUploadList={false}
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        onChange={this.uploadChange.bind(this)}
                                    >
                                        {
                                            this.state.imgUrl ? <img src={this.state.imgUrl}/> : <Icon type="plus"/> 
                                        }
                                    </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout} labelCol={{offset:3}}>
                            {
                                getFieldDecorator('agree')(
                                    <Checkbox>我已经阅读过<a href="#">慕课协议</a></Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout} labelCol={{offset:3}}>
                            <Button type="primary" onClick={this.handleSubmit.bind(this)}>注册</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}


export default Form.create()(FormRegister)
