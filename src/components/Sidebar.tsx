import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  FileAddOutlined,
  FileSearchOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;


const Sidebar: React.FC = () => {
  return (
    <Sider className='sidebar'>
      <div className='logo'>SOCIOWEB</div>
      
      <Menu theme='dark' mode='inline' defaultSelectedKeys={['0']}>
        <Menu.Item key='1'icon={<DashboardOutlined/>} >
          <Link to={'/dashboard'} className='Link'>
            Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item key='2'icon={<FileAddOutlined/>} >
          <Link to={'/addpost'} className='Link'>
            Add Post
          </Link>
        </Menu.Item>
        <Menu.Item key='3'icon={<FileSearchOutlined/>} >
          <Link to={'/viewpost'} className='Link'>
            View Post
          </Link>
        </Menu.Item>
        <Menu.Item key='4'icon={<UserOutlined/>} >
          <Link to={'/profilepage'} className='Link'>
            Your Profile
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
