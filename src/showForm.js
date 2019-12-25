import React from 'react';
import {Form, Input, Button, Icon,Select,Radio} from 'antd';

const { Option } = Select;
const Index = ({form: {getFieldDecorator, validateFields}, current}) => {
  const handleLogin = () => {
    validateFields((err, values) => {
      if (!err) {
        alert('1233');
      }
    });
  };
  if(current===0){
  return (
      <div className='formShow'>
        <Form>
        <Form.Item label="机构名">
          {getFieldDecorator('机构名', {
            rules: [
              {
                required: true,
                message: '请输入机构名',
              }
            ],
          })(
            <Input
              prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="请输入机构名"
            />,
          )}
        </Form.Item>
        <Form.Item label="用户名" hasFeedback>
          {getFieldDecorator('用户名', {
            rules: [
              {
                required: true,
                message: '请输入用户名!',
              }
            ],
          })(
          <Input
            prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25)'}} />} 
            placeholder="请输入用户名"
          />
          )}
        </Form.Item>
        <Form.Item label="地&nbsp;&nbsp;&nbsp;&nbsp;区" hasFeedback>
          {getFieldDecorator('select', {
            rules: [{ required: true, message: 'Please select your country!' }],
          })(
            <Select placeholder="请选择地区">
              <Option value="KM">昆明</Option>
              <Option value="LJ">丽江</Option>
              <Option value="DL">大理</Option>
              <Option value="CX">楚雄</Option>
            </Select>,
          )}
        </Form.Item>
        <Form.Item label="*&nbsp;状&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;态">
          {getFieldDecorator('radio-group')(
            <Radio.Group>
              <Radio value="a">激活</Radio>
              <Radio value="b">未激活</Radio>
            </Radio.Group>
          )}
        </Form.Item>

          </Form>
          </div>
  );
};
if(current===1){
    return <div>角色权限分配页面</div>
}
}

export default Form.create()(Index);
