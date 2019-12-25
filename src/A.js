import React from 'react'
import { Menu, Icon } from 'antd';
import {Link,Route,HashRouter} from 'react-router-dom'
export default class Siderbar extends React.Component{
    constructor(props){
        super()
        this.state={
            pos:45
        }
    }
    render(){
        const { SubMenu } = Menu;
        return <div className="siderbar">
            <h3>信息共享</h3>
            <Menu onClick={this.handleClick} mode="vertical" className="navmenu">
                    <SubMenu
                    key="sub1"
                    title={
                        <span>
                        <Icon type="edit" />
                        <span>系统管理</span>
                        </span>
                    }
                    >
                        <Menu.Item key="1"><Link to='/page1'>模块1</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/page2'>模块2</Link></Menu.Item>
                        <Menu.Item key="3"><Link to='/page3'>模块3</Link></Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu>
                    <SubMenu
                    key="sub2"
                    title={
                        <span>
                        <Icon type="appstore" />
                        <span>目录配置</span>
                        </span>
                    }
                    >
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    </SubMenu>
                    <SubMenu
                    key="sub4"
                    title={
                        <span>
                        <Icon type="setting" />
                        <span>资源管理</span>
                        </span>
                    }
                    >
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
        </Menu>
        </div>
    }
}