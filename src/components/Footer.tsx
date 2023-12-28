import React from 'react';
import { Layout } from 'antd';
import './Footer.css';

const { Footer } = Layout;

const CustomFooter: React.FC = () => {
  return (
    <Footer className='footer'>
      <div className='footer-content'>
        <h2>Created By <span>Nishu Choudhary</span> || All Rights Reserved</h2>
      </div>
    </Footer>
  );
};

export default CustomFooter;
