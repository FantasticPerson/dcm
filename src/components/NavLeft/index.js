import React from 'react';
import {NavLink} from 'react-router-dom'
import MenuConfig from '../../config/menuConfig'
import {Menu} from 'antd'
import './index.less'

const SubMenu = Menu.SubMenu

export default class NavLeft extends React.Component{
    componentWillMount(){
        const MenuTreeNode = this.renderMenu(MenuConfig)
        this.setState({
            MenuTreeNode
        })
    }
    //菜单渲染
    renderMenu = (data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                    )
            } else {
                return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
                </Menu.Item>
            }
        })
    }

    render(){
        
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>Imooc MS</h1>
                </div>
                <Menu theme="dark">
                    {this.state.MenuTreeNode}
                </Menu>
            </div>
        )
    }
}