import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";


const New = () => {
  return (
    <div className='new'>
        <Sidebar />
        <div className="new__container">
          <Navbar />
          <div className="top">
            <h1>Add New User</h1>
          </div>
          <div className="bottom">
            <div className="new__left">
              <img src="https://icons-for-free.com/iconfiles/png/512/camera+photo+upload+icon-1320184663794870720.png" alt="" />
            </div>
            <div className="new__right">
              <form>
                <div className="form__input">
                  <label htmlFor='file'>
                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input type="file" id='file' style={{display: "none"}}/>
                </div>
                <div className="form__input">
                  <label>Username:</label>
                  <input type="text" placeholder='enter username' />
                </div>
                <div className="form__input">
                  <label>Full Name:</label>
                  <input type="text" placeholder='enter full name' />
                </div>
                <div className="form__input">
                  <label>Email:</label>
                  <input type="email" placeholder='enter email' />
                </div>
                <div className="form__input">
                  <label>Phone:</label>
                  <input type="text" placeholder='enter phone number' />
                </div>
                <div className="form__input">
                  <label>Password:</label>
                  <input type="password" placeholder='enter password' />
                </div>
                <div className="form__input">
                  <label>Address:</label>
                  <input type="text" placeholder='enter address' />
                </div>
                <div className="form__input">
                  <label>Country</label>
                  <input type="text" placeholder='enter country' />
                </div>
                <button>Send</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default New;