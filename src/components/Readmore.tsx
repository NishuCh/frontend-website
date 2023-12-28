import React, { useState, useEffect } from 'react';
import { Typography } from 'antd';
import './Readmore.css';

const { Title, Paragraph } = Typography;

const Readmore: React.FC = () => {
  return (
    <div>
      <div className='read-more'>
        <Title level={2}>HTML</Title>
        <Paragraph>
         <p> HTML stands for Hypertext markup language. It is used in web development.</p>
        </Paragraph>
      </div>
    </div>
  );
};

export default Readmore;
