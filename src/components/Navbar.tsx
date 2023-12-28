import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const Navbar: React.FC = () => {
  return (
    <div className='navbar'>
      <div className='button'>
        <Button type='primary'>
          <Link to={`/Login`} >Logout</Link>
        
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
