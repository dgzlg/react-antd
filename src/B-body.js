import React, { Component } from 'react';
import { Table, Divider, Tag,Icon,Button, Menu, Dropdown,Popconfirm, message,Row, Col,Modal,Steps, Form} from 'antd';
import './b-body.less'
import Index from './showForm.js'
const { Step } = Steps;
 

class Bbody extends Component {
    constructor(props){
        super(props)
        this.state={
            loading:false,
            visible:false,
            current:0
        }
    }
    handleDelete(){
        message.success('已经删除',2);
    }
    cancel(){
        message.error('取消删除');
    }
    showModal(e){
        this.setState({
          visible: true
        });
      };
    handleCancel(e){
        this.setState({
          visible: false
        });
      };
    handleOk(e){
        this.setState({
          visible: false
        });
      };
      onChange(current){
        console.log('onChange:', current);
        this.setState({ current });
      };
    
    render() {
        const menu = (
            <Menu>
              <Menu.Item key="1"><Button icon='edit'>编辑</Button></Menu.Item>
              <Menu.Item key="2"><Popconfirm
                    title="Are you sure delete this task?"
                    onConfirm={this.handleDelete}
                    onCancel={this.cancel}
                    okText="Yes"
                    cancelText="No"
                >
            <Button icon='delete'>删除</Button>
            </Popconfirm></Menu.Item>
            </Menu>
          );
        const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              align:'center',
              render: text => <a>{text}</a>,
            },
            {
              title: 'Age',
              dataIndex: 'age',
              align:'center',
              key: 'age',
            },
            {
              title: 'Address',
              dataIndex: 'address',
              align:'center',
              key: 'address',
            },
            {
              title: 'Tags',
              key: 'tags',
              align:'center',
              dataIndex: 'tags',
              render: tags => (
                  tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                      color = 'volcano';
                    }
                    return (
                      <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                      </Tag>
                    );
                  })
              ),
            },
            {
              title: 'Action',
              key: 'action',
              render: () => (
                <Dropdown overlay={menu}>
                    <Button>
                        操作 <Icon type="down" />
                    </Button>
                </Dropdown>
              ),
            },
          ];
          
          const data = [
            {
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['nice', 'developer'],
            },
            {
              key: '2',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
            },
            {
              key: '3',
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
            },
          ];
          const { current } = this.state;
          return (
            <div>
            <Row className='contentEdit'>
                <Col span={2}>
                    <Button type="primary" icon="plus"  onClick={this.showModal.bind(this)}>
                        新增
                    </Button>
                    <Modal
                        title="编辑内容"
                        visible={this.state.visible}
                        onOk={this.handleOk.bind(this)}
                        onCancel={this.handleCancel.bind(this)}
                        >
                      <div className='step'>
                      <Steps current={current} onChange={this.onChange.bind(this)} direction="vertical">
                        <Step title="Step 1" description="基本信息填写用户基本信息" />
                        <Step title="Step 2" description="角色分配给用户分配角色" />
                      </Steps>
                      </div>
                      <Index current={this.state.current}/>
                    </Modal>
                </Col>
            <Col span={2}><Button icon="search">搜索</Button></Col>
            <Col span={2}><Button icon="rest">重置</Button></Col>
            </Row>
              <Table columns={columns} dataSource={data} />
            </div>
        );
    }
}
 
export default Bbody;