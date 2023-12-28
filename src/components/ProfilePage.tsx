import React from 'react';
import './ProfilePage.css';
import { Link } from 'react-router-dom';
import profileimg from '../source.png';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const ProfilePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="fixed-sidebar">
        <Sidebar />
      </div>
      <Footer/>
      <div className='small-card'>
      <div className="profile_content">
       
        <div className='profile_container'>
        <h1>Your Profile</h1>
          <div className="profile_card">
            <h2>Your Posts</h2>
            {/* Add your posts content here */}
          </div>
          <div className="profile_card">
            <h2>Liked Posts</h2>
            {/* Add liked posts content here */}
          </div>
          <div className="profile_card">
            <h2>Your Bookmarks</h2>
            {/* Add your bookmarks content here */}
          </div>
        </div>
        </div>
        <section className="profile_main">
          <div className="profile-card">
            <div className="profile_image">
              <img src={profileimg} alt="Profile image" className="profile-pic" />
            </div>
            <div className="profile_data">
              <h2>Nishu Choudhary</h2>
              <h5>nishuchoudhary137@gmail.com</h5>
              <span className='profile_span'>Web Developer</span>
            </div>
            <div className="profile_row">
              <div className="profile_infor">
                <h3>Likes</h3>
                <span className='profile_span'>120</span>
              </div>
              <div className="profile_infor">
                <h3>Posts</h3>
                <span className='profile_span'>500</span>
              </div>
              <div className="profile_infor">
                <h3>Comments</h3>
                <span className='profile_span'>209</span>
              </div>
            </div>
            <div className="profile_buttons">
            <Link to={`/UpdateProfileForm`} className="btn">Update Profile</Link>
             
            </div>
          </div>
        </section>
      </div>
    
    </div>
  );
};

export default ProfilePage;
