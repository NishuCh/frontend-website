import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Layout } from 'antd';
import Dashboard from './components/Dashboard';
import Addpost from './components/Addpost';
import Viewpost from './components/Viewpost';
import Editpost from './components/Editpost';
import Readmore from './components/Readmore';
import Comment from './components/Comment';
import ProfilePage from './components/ProfilePage';
import UpdateProfileForm from './components/UpdateProfileForm';
import Login from './components/Login';
import Register from './components/Register';

const { Content } = Layout;

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Content>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/addpost" element={<Addpost />} />
              <Route path="/viewpost" element={<Viewpost />} />
              <Route path='/Editpost/' element={<Editpost />} />
              <Route path='/ProfilePage/' element={<ProfilePage />} />
              <Route path='/Readmore/' element={<Readmore />} />
              <Route path='/UpdateProfileForm/' element={<UpdateProfileForm />} />
              <Route path='/Comment/' element={<Comment />} />
              <Route path="/Login" element={<Login />} />
              <Route path='/Register' element={<Register />} />
            </Routes>
          </Content>
        </Layout>
        <Outlet />
      </BrowserRouter>
    </>
  );
}

export default App;
