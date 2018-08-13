import React from 'react'
import {Card,Button,Modal} from 'antd'
import '../ui.less'

export default class Modals extends React.Component{

    state={
        showModal1:false,
        showModal2:false,
        showModal3:false,
        showModal4:false
    }
    handleOpen(type){
        this.setState({[type]:true})
        
    }

    handleHideModal(type){
        this.setState({[type]:false})
        
    }
    handleMsg=(type)=>{
        Modal[type]({
            title:'确认？',
            content:'你确定你学会react了吗？',
            onOk(){
                console.log('ok')
            },
            onCancel(){
                console.log('cancel')
            }
        })
    }
    render(){
        return (
            <div>
                
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModal4')}>水平垂直居中</Button>

                </Card>
                <Card title="信息确认框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleMsg('confirm')}>confirm</Button>
                    <Button type="primary" onClick={()=>this.handleMsg('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.handleMsg('success')}>success</Button>
                    <Button type="primary" onClick={()=>this.handleMsg('warning')}>warning</Button>

                </Card>
                <Modal 
                    title="React"
                    visible={this.state.showModal1}
                    onCancel={()=>{this.handleHideModal('showModal1')}}
                >       
                    <p>
                        欢迎学习!
                    </p>
                </Modal>
                <Modal 
                    title="React"
                    visible={this.state.showModal2}
                    okText="好的"
                    cancelText="算了"
                    onCancel={()=>{this.handleHideModal('showModal2')}}
                >       
                    <p>
                        欢迎学习!
                    </p>
                </Modal>
                <Modal 
                    style={{top:20}}
                    title="React"
                    visible={this.state.showModal3}
                    onCancel={()=>{this.handleHideModal('showModal3')}}
                >       
                    <p>
                        欢迎学习!
                    </p>
                </Modal>
                <Modal 
                    title="React"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.showModal4}
                    onCancel={()=>{this.handleHideModal('showModal4')}}
                >       
                    <p>
                        欢迎学习!
                    </p>
                </Modal>
            </div>
        )
    }
}