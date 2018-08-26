import React from 'react'
import { Row,Col } from 'antd';
import Utils from '../../utils/utils'
import axios from '../../axios'
import './index.less'

export default class Header extends React.Component{
    state = {}
    componentWillMount(){
        this.setState({
            userName:'河畔一角'
        })
        setInterval(()=>{
            let systemTime = Utils.formateDate(new Date().getTime())
            this.setState({
                systemTime
            })
        },1000)
        this.getWeatherAPIData()
    }

    getWeatherAPIData(){
        let city = '北京'
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=LiVGnpjjmsCLPPMUOj8UzZsGMOkj9pT8'
        }).then((res)=>{
            let data = res[0].weather_data[0]
            this.setState({
                dataPictureUrl:data.dayPictureUrl,
                weather:data.weather
            })
            console.log(res)
        })
    }
    render(){
        const menuType = this.props.menuType
        return (
            <div className="header">
                <Row className="header-top">
                {
                    menuType ? <Col span="6" className="logo">
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <span>Imooc 通用管理系统</span>
                </Col> : ''
                }
                    
                    <Col span={menuType ? '18' : "24"}>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                {
                    menuType ? '' : <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">首页</Col>
                    <Col span="20" className="breadcrumb-weather">
                        <span className="date">{this.state.systemTime}</span>
                        <span className="weather-img">
                            <img src={this.state.dataPictureUrl} alt=""/>
                            
                        </span>
                        <span className="weather-detail">{this.state.weather}</span>
                    </Col>
                </Row>
                }
                
            </div>
        )
    }
}