import React from 'react'
import {Card,Button,Table,Form, Select, Modal,message,DatePicker} from 'antd'
import axios from '../../axios'
import Utils from '../../utils/utils'
import './detail.less'

const FormItem = Form.Item
const Option = Select.Option


export default class Order extends React.Component{
    state={}

    componentDidMount(){
        let orderId = this.props.match.params.detailId
        if(orderId){
            this.getDetailInfo(orderId)

        }
    }

    renderMap=(result)=>{
        this.map = new window.BMap.Map('orderDetailMap');


        // this.map.centerAndZoom('北京',11)

        this.addMapControl()
        this.drawBikeRoute(result.position_list)
        this.drawServiceArea(result.area)
    }


    //添加地图控件
    addMapControl=()=>{
        let map = this.map
        map.addControl(new window.BMap.ScaleControl({anchor:window.BMAP_ANCHOR_TOP_RIGHT}))
        map.addControl(new window.BMap.NavigationControl({anchor:window.BMAP_ANCHOR_TOP_RIGHT}))
    }

    drawBikeRoute=(positionList)=>{
        let map = this.map
        let startPoint = ''
        let endPoint = ''
        if(positionList.length > 0){
            let arr = positionList[0]
            startPoint = new window.BMap.Point(arr.lon,arr.lat)
            let startIcon = new window.BMap.Icon('/assets/start_point.png',new window.BMap.Size(36,42),{
                imageSize:new window.BMap.Size(36,42),
                anchor:new window.BMap.Size(36,42)
            })

            let startMaker = new window.BMap.Marker(startPoint,{icon:startIcon}) 

            this.map.addOverlay(startMaker)

            let arr2 = positionList[positionList.length-1]
            endPoint = new window.BMap.Point(arr2.lon,arr2.lat)
            let endIcon = new window.BMap.Icon('/assets/end_point.png',new window.BMap.Size(36,42),{
                imageSize:new window.BMap.Size(36,42),
                anchor:new window.BMap.Size(36,42)
            })

            let endMaker = new window.BMap.Marker(endPoint,{icon:endIcon}) 

            this.map.addOverlay(endMaker)

            //链接路线图
            let trackPoint = []
            for(let i =0;i<positionList.length;i++){
                let point = positionList[i]
                trackPoint.push(new window.BMap.Point(point.lon,point.lat))
            }

            let polyline = new window.BMap.Polyline(trackPoint,{
                strokeColor:'#1869AD',
                strokeWeigth:3,
                strokeOpacity:1
            })
            this.map.addOverlay(polyline)

            //绘制服务区
            this.map.centerAndZoom(endPoint,11)
        }
    }

    drawServiceArea = (positionList)=>{
        let trackPoint = []
        for(let i =0;i<positionList.length;i++){
            let point = positionList[i]
            trackPoint.push(new window.BMap.Point(point.lon,point.lat))
        }
        let polygon = new window.BMap.Polygon(trackPoint,{
            strokeColor:'#CE0000',
            strokeWeigth:4,
            strokeOpacity:1,
            fillColor:'#ff8605',
            fillOpacity:0.4
        })

        this.map.addOverlay(polygon)
    }

    // add

    getDetailInfo=(orderId)=>{
        axios.ajax({
            url:'/order/detail',
            data:{
                params:{
                    orderId:orderId
                }
            }
        }).then(res=>{
            if(res.code == 0){
                this.renderMap(res.result)
                this.setState({
                    orderInfo:res.result
                })
            }
        })
    }
    render(){
        return (
            <div>
                <Card>
                    <div id="orderDetailMap" className="order-map"></div>
                    <div className="detail-items">
                        <div className="item-title">基础信息</div>
                        <ul className="detail-form">
                            <li>
                                <div className="detail-form-left">用车模式</div>
                                <div className="detail-form-content"></div>
                            </li>
                            <li>
                                <div className="detail-form-left">订单编号</div>
                                <div className="detail-form-content"></div>
                            </li>
                            <li>
                                <div className="detail-form-left">车辆编号</div>
                                <div className="detail-form-content"></div>
                            </li>
                            <li>
                                <div className="detail-form-left">用户姓名</div>
                                <div className="detail-form-content"></div>
                            </li>
                            <li>
                                <div className="detail-form-left">手机号码</div>
                                <div className="detail-form-content"></div>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="detail-items">
                        <div className="item-title">行驶轨迹</div>
                        <ul className="detail-form">
                            <li>
                                <div className="detail-form-left">行程起点</div>
                                <div className="detail-form-content"></div>
                            </li>
                            <li>
                                <div className="detail-form-left">行程终点</div>
                                <div className="detail-form-content"></div>
                            </li>
                            <li>
                                <div className="detail-form-left">行驶里程</div>
                                <div className="detail-form-content"></div>
                            </li>
                        </ul>
                    </div>
                </Card>
            </div>
        )
    }
}