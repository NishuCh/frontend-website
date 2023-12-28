import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import conimg from '../contact1.png';

const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values: any) => {
    setLoading(true);
    // Perform registration logic here
  };

  return (
    <div>
      <div className='login'>
        <div className='log-head'>
          <h2>Feel free to connect with us</h2>
        </div>
        <div className='con-container'>
          <div className='con-content'>
            <img src={conimg} alt="Contact" />
          </div>
          <Form name="register" onFinish={onFinish} className='con-form'>
            <h2>Register Here!</h2>
            <Form.Item
              name="first_name"
              rules={[{ required: true, message: 'Please enter your first name' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="First Name" />
            </Form.Item>
            <Form.Item
              name="last_name"
              rules={[{ required: true, message: 'Please enter your last name' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Last Name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' }
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please enter your password' }]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className='log-btn1' loading={loading}>
                Register
              </Button>
              <br/>
              <Button className='create-account1'>
                <Link to={`/Login`}>Already have an account?</Link>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
