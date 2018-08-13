import React from 'react'
import {Card,Spin,Icon,Button,Alert} from 'antd'
import '../ui.less'

export default class Loadings extends React.Component{

    render(){
        const icon=<Icon type="loading" style={{fontSize:24}}/>
        const icon2=<Icon type="plus" style={{fontSize:24}}/>
        return(
            <div>
                <Card title="Spin 的用法" className="card-wrap">
                    <Spin size="small"/>
                    <Spin />
                    <Spin size="large"/>
                    <Spin indicator={icon}/>
                    <Spin indicator={icon2}/>
                </Card>
                <Card title="内容遮罩" className="card-wrap">
                    <Alert  
                        message="React"
                        description="欢迎你的到来"
                        type="info"
                    />
                    <Alert  
                        message="React"
                        description="欢迎你的到来"
                        type="warning"
                    />
                    <Spin>
                        <Alert
                            message="React"
                            description="欢迎你的到来"
                            type="warning"
                        />
                    </Spin>
                    <Spin tip="加载中...">
                        <Alert
                            message="React"
                            description="欢迎你的到来"
                            type="warning"
                        />
                    </Spin>
                    <Spin tip="加载中..." indicator={icon}>
                        <Alert
                            message="React"
                            description="欢迎你的到来"
                            type="warning"
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}