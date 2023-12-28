import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './Addpost.css';

const Addpost: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className='addpost'>
      <Navbar />
      <Sidebar />
      <Footer />
      <div className='form'>
        <div className='form-heading'>
          <h2>Add Post Here!</h2>
        </div>
        <Form name='addPostForm' onFinish={onFinish}>
          <Form.Item
            name='post_title'
            rules={[{ required: true, message: 'Please enter the post title!' }]}
          >
            <Input  placeholder='Post Title' />
          </Form.Item>
          <Form.Item
            name='post_description'
            rules={[{ required: true, message: 'Please enter the post description!' }]}
          >
            <Input.TextArea  placeholder='Post Description' />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Addpost;
