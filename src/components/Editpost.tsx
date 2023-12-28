import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Editpost: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <div className='addpost'>
      <Navbar/>
      <Sidebar/>
      <Footer/>
      <div className='form'>
        <div className='form-heading'>
          <h2>Edit Your Post Here!</h2> 
        </div>
        <Form form={form} onFinish={onFinish}>
          <div className='row'>
            <div className='col'>
              <Form.Item name='post_title' rules={[{ required: true, message: 'Please enter the post title' }]}>
                <Input placeholder='Post Title' prefix={<EditOutlined />} />
              </Form.Item>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <Form.Item name='post_description' rules={[{ required: true, message: 'Please enter the post description' }]}>
                <Input.TextArea placeholder='Post Description' />
              </Form.Item>
            </div>
          </div>
          <div className='row'>
            <div className='sub-btn'>
              <Button type='primary' htmlType='submit'>Update</Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Editpost;
