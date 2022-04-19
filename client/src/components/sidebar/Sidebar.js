import "./sidebar.scss";
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';
import PersonTwoToneIcon from '@mui/icons-material/PersonTwoTone';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';
import StackedLineChartTwoToneIcon from '@mui/icons-material/StackedLineChartTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import SettingsIcon from '@mui/icons-material/Settings';
import HealthAndSafetyTwoToneIcon from '@mui/icons-material/HealthAndSafetyTwoTone';
import InsertChartTwoToneIcon from '@mui/icons-material/InsertChartTwoTone';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">Dashy</div>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <hr />
          <li>
            <DashboardTwoToneIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <hr />
          <li>
            <PersonTwoToneIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <StorefrontTwoToneIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <ShoppingCartTwoToneIcon className="icon" />
            <span>Orders</span>
          </li>
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
          <ExitToAppIcon  className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="color__option"></div>
        <div className="color__option"></div>
        <div className="color__option"></div>
        {/* <div className="color__option"></div>
        <div className="color__option"></div>
        <div className="color__option"></div> */}
      </div>
    </div>
  );
};

export default Sidebar;
