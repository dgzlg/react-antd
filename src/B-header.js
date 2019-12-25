import React from 'react'

import { Menu, Dropdown, Icon,Divider } from 'antd';
import './b-header.less'
export default class Bheader extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const menu=<Menu>
        <Menu.Item>
            <span>退出</span>
        </Menu.Item>
        <Menu.Item>
            <span>设置</span>
        </Menu.Item>
    </Menu>
        return (
        <div className='headerTop'>
            <div className='pathArray'>
            <span>流程管理</span>
            </div>
            <div className='loginOut'>
            <Dropdown overlay={menu}>
                <span>
                <Icon type="user" />
                <Divider type="vertical" />
                admin
                </span>
            </Dropdown>
            </div>
        </div>
        )}
}