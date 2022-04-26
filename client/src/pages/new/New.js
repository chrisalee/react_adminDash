import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title }) => {

  const [file, setFile] = useState('');

  return (
    <div className="new">
      <Sidebar />
      <div className="new__container">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="new__left">
            <img
              src={file ? URL.createObjectURL(file) : "https://icons-for-free.com/iconfiles/png/512/camera+photo+upload+icon-1320184663794870720.png"}
              alt=""
            />
          </div>
          <div className="new__right">
            <form>
              <div className="form__input">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input 
                  type="file" 
                  id="file" 
                  style={{ display: "none" }} 
                  onChange={(event) => setFile(event.target.files[0])}
                />
              </div>

              {inputs.map((input) => (
                <div className="form__input" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
