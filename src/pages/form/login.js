import React from 'react'
import {Card,Form, Input, Button,message,Icon, Checkbox} from 'antd'
const FormItem = Form.Item

class Login extends React.Component{
    handleSubmit=()=>{
        let values = this.props.form.getFieldsValue()
        this.props.form.validateFields((err,values)=>{
            if(!err){
                message.success(`${values.userName},恭喜你，您通过本次表单组件学习，密码为${values.password}`)
            }
        })
    }
    render(){
        const {getFieldDecorator} = this.props.form 
        return (
            <div>
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名"/>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码"/>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录水平表单" style={{marginTop:10}}>
                    <Form layout="horizontal" style={{width:300}}>
                        <FormItem>
                            {
                                getFieldDecorator('username',{
                                    initialValue:'Jack',
                                    rules:[
                                        {
                                            required:true,
                                            message:'用户名不能为空'
                                        },
                                        {
                                            min:5,max:10,
                                            message:'长度不在范围内'
                                        },
                                        {
                                            pattern:/^\w+$/g,
                                            message:'只能包含字母或数字'
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="user"/>} placeholder="请输入用户名"/>
                                )
                            }
                            
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('password',{
                                    initialValue:'123456',
                                    rules:[]
                                })(
                                    <Input prefix={<Icon type="lock"/>} placeholder="请输入密码"/>
                                )
                            }
                            
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remenber',{
                                    valuePropName:'checked',
                                    initialValue:true,
                                    rules:[]
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href="#" style={{float:'right'}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(Login)