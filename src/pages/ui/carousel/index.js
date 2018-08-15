import React from 'react'
import {Card ,Carousel} from 'antd'
import '../ui.less'

export default class Carousels extends React.Component{
    render(){
        return (
            <div className="slider-wrap">
                <Card title="图片背景轮播" className="card-wrap">
                    <Carousel autoplay={true} effec="fade">
                        <div><h3>Ant motion banner -react</h3></div>
                        <div><h3>Ant motion banner -vue</h3></div>
                        <div><h3>Ant motion banner -angular</h3></div>
                        <div><h3>Ant motion banner -backbone</h3></div>

                    </Carousel>
                </Card>
                <Card title="图片背景轮播" className="card-wrap">
                    <Carousel autoplay={true} effec="fade">
                        <div><img src={"carousel-img/carousel-1.jpg"}/></div>
                        <div><img src={"carousel-img/carousel-2.jpg"}/></div>
                        <div><img src={"carousel-img/carousel-3.jpg"}/></div>

                    </Carousel>
                </Card>
            </div>
        )
    }
        
}