import "./navbar.scss";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import eye from '../../assets/eye.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__search">
          <input type="text" placeholder="Search..." />
          <SearchTwoToneIcon />
        </div>
        <div className="navbar__items">
          <div className="navbar__item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="navbar__item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="navbar__item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="navbar__item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="navbar__item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="navbar__item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="navbar__item">
            <img
              src={eye}
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
