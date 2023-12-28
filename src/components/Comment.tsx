import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './Comment.css';
import messimg from '../message.png';

const Comment: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className='comment'>
      <Navbar />
      <Sidebar/>
      <Footer />

      <Form className='com-form' onFinish={onFinish}>
        <div className='com-img'>
          <img src={messimg} alt="message" />
          <div className='col'>
            <h2 className='com-heading'>Share your opinions here! </h2>
            <Form.Item name="comment">
              <Input.TextArea className="com-textarea" placeholder='Add Comment' />
            </Form.Item>
          </div>
          <div className='col'>
            <div className='com-btn'>
              <Button type='primary' htmlType='submit' className='com'>Submit</Button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Comment;
