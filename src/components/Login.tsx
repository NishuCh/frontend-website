import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import conimg from '../contact1.png';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
    };

    return (
        <div>
            <div className='login'>
                <div className='log-head'>
                    <h2>Hey Welcome Back Please Login Here!</h2>
                </div>
                <div className='con-container'>
                    <div className='con-content'>
                        <img src={conimg} alt="Contact" />
                    </div>
                    <Form className='con-form1' onFinish={handleLogin}>
                        <h2>Login Here!</h2>
                        <Form.Item name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
                            <Input prefix={<UserOutlined />} type="email" placeholder="Email address" />
                        </Form.Item>
                        <Form.Item name="password" rules={[{ required: true, message: 'Please enter your password' }]}>
                            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className='log-btn'>
                                Login
                            </Button>
                            <br />
                            <Button className='create-account'>
                                <Link to={`/Register`}>Don't have an account?</Link>
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;
