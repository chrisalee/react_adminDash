import "./sidebar.scss";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import PersonTwoToneIcon from "@mui/icons-material/PersonTwoTone";
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import NotificationsNoneTwoToneIcon from "@mui/icons-material/NotificationsNoneTwoTone";
import StackedLineChartTwoToneIcon from "@mui/icons-material/StackedLineChartTwoTone";
import LocalShippingTwoToneIcon from "@mui/icons-material/LocalShippingTwoTone";
import SettingsIcon from "@mui/icons-material/Settings";
import HealthAndSafetyTwoToneIcon from "@mui/icons-material/HealthAndSafetyTwoTone";
import InsertChartTwoToneIcon from "@mui/icons-material/InsertChartTwoTone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkmodeContext } from "../../context/darkmodeContext";

const Sidebar = () => {

  const { dispatch } = useContext(DarkmodeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logo">Dashy</div>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <hr />
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardTwoToneIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <hr />
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonTwoToneIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StorefrontTwoToneIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to='/orders' style={{textDecoration: "none"}}>
          <li>
            <ShoppingCartTwoToneIcon className="icon" />
            <span>Orders</span>
          </li>
          </Link>
          <li>
            <LocalShippingTwoToneIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <hr />
          <li>
            <StackedLineChartTwoToneIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneTwoToneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <hr />
          <li>
            <HealthAndSafetyTwoToneIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <InsertChartTwoToneIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <hr />
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="color__option" onClick={() => dispatch({ type: "LIGHT" })}></div>
        <div className="color__option" onClick={() => dispatch({ type: "DARK" })}></div>
        {/* ************* if want to include other color options ************* */}
        {/* <div className="color__option"></div>
        <div className="color__option"></div>
        <div className="color__option"></div> 
        <div className="color__option"></div> */}
      </div>
    </div>
  );
};

export default Sidebar;
