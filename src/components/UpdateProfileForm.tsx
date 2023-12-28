import React, { useState } from 'react';
import './UpdateProfileForm.css';
import prof_img from '../profile_img.avif';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Form, Input, Button } from 'antd';

const UpdateProfileForm: React.FC = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRole(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform update profile logic here
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Footer />
      <div className='Update'>
        <div className='Update-head'>
          <h2>Update Your Profile Here!</h2>
        </div>
        <div className='Update-container'>
          <div className='Update-content'>
            <img src={prof_img} alt='Profile' />
          </div>
          <Form className='Update-form1' onFinish={handleSubmit}>
  <h2>Update Profile!</h2>
  <Form.Item label='Name'>
    <Input type='text' value={name} onChange={handleNameChange} />
  </Form.Item>
  <Form.Item label='Role'>
    <Input type='text' value={role} onChange={handleRoleChange} />
  </Form.Item>
  <Form.Item label='Email address'>
    <Input type='email' name='email' value={email} onChange={handleEmailChange} />
  </Form.Item>
  <Form.Item label='Change Password'>
    <Input type='password' name='password' value={password} onChange={handlePasswordChange} />
  </Form.Item>
  <Form.Item>
    <Button type='primary' htmlType='submit'>
      Update
    </Button>
  </Form.Item>
</Form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileForm;
