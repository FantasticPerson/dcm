import React from 'react'
import {Card,Button,Modal,notification,message} from 'antd'
import '../ui.less'

export default class extends React.Component {
    showMessage=(type)=>{
        message[type]('恭喜你,react课程晋级成功')
    }

    render(){
        return (
            <div>
                <Card className="card-wrap" title="消息通知">
                    <Button type="primart" onClick={()=>{this.showMessage('success')}}>Success</Button>
                    <Button type="primart" onClick={()=>{this.showMessage('info')}}>Info</Button>
                    <Button type="primart" onClick={()=>{this.showMessage('warning')}}>Warning</Button>
                    <Button type="primart" onClick={()=>{this.showMessage('error')}}>Error</Button>
                    <Button type="primart" onClick={()=>{this.showMessage('loading')}}>Loading</Button>
                </Card>
            </div>
        )
    }
}