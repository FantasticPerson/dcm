import React from 'react'
import {Card,Button,Modal,notification,Tabs, message,Icon} from 'antd'
import '../ui.less'

export default class Tab extends React.Component{
    newTabIndex = 4
    componentWillMount(){
        const panes = [
            {
                title:'tab1',
                content:'tab 2',
                key:'1'
            },
            {
                title:'tab2',
                content:'tab 2',
                key:'2'
            },
            {
                title:'tab3',
                content:'tab 2',
                key:'3'
            }
        ]
        this.setState({
            panes:panes,
            active:'1'
        })
    }
    onTabChange=(key)=>{
        message.info('H1,choose tab '+key)
    }

    onChange=(key)=>{
        this.setState({
            active:key
        })
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: activeKey, content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, active:activeKey });
    }
    remove = (targetKey) => {
        let active = this.state.active;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && active === targetKey) {
            active = panes[lastIndex].key;
        }
        console.log(active)
        this.setState({ panes, active:active });
    }

    render(){
        return (
            <div>
                <Card className="card-wrap" title="标签">
                    <Tabs defaultActiveKey="1" onChange={this.onTabChange}>
                        <Tabs.TabPane tab="tab1" key="1">Content of tab</Tabs.TabPane>
                        <Tabs.TabPane tab="tab2" key="2" disabled>Content of tab</Tabs.TabPane>
                        <Tabs.TabPane tab="tab3" key="3">Content of tab</Tabs.TabPane>

                    </Tabs>
                </Card>
                <Card className="card-wrap" title="带icon的标签">
                    <Tabs defaultActiveKey="1" onChange={this.onTabChange}>
                        <Tabs.TabPane tab={<span><Icon type="plus"/>tab1</span>} key="1">Content of tab</Tabs.TabPane>
                        <Tabs.TabPane tab={<span><Icon type="edit"/>tab1</span>} key="2">Content of tab</Tabs.TabPane>
                        <Tabs.TabPane tab={<span><Icon type="delete"/>tab1</span>} key="3">Content of tab</Tabs.TabPane>

                    </Tabs>
                </Card>
                <Card className="card-wrap" title="可以编辑的标签">
                    <Tabs 
                        activeKey={this.state.active} 
                        type="editable-card" 
                        onChange={this.onChange}
                        onEdit={this.onEdit}
                        // defaultActiveKey={this.state.active}
                    >
                        {this.state.panes.map((item)=>{
                            return <Tabs.TabPane tab={item.title} key={item.key}>{item.content}</Tabs.TabPane>
                        })}

                    </Tabs>
                </Card>
            </div>
        )
    }
}