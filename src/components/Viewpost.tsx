import { Link } from 'react-router-dom';
import './Viewpost.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Viewpost: React.FC = () => {

  return (
    <div className='viewpost'>
      <Navbar />
      <Sidebar />
      <Footer />
      <div className='table-cont'>
        <h2>View Post Here!</h2>
        <table className='table'>
          <thead>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Post Tittle</th>
              <th scope="col">Post Description</th>
              <th scope="col">EDIT</th>
              <th scope="col">DELETE</th>
            </tr>
          </thead>
          <tbody>
       
              <tr>
                <td>1</td>
                <td>HTML</td>
              
                <td>HTML stands for Hypertext markup language...</td>
             
                <td><Link className="edit-btn" to={`/Editpost`}>EDIT</Link></td>
                <td><Link className="delete-btn" to={`/`}>DELETE</Link></td>
              </tr>
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Viewpost;
