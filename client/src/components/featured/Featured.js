import "./featured.scss";
import MoreVertTwoTone from "@mui/icons-material/MoreVertTwoTone";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured__top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertTwoTone fontSize="small" />
      </div>
      <div className="featured__bottom">
        <div className="featured__chart">
          <CircularProgressbar 
            value={70}
            text={"70%"}
            strokeWidth={3}
          />
        </div>
        <p className="title">Total Sales This Month</p>
        <p className="amount">$222</p>
        <p className="description">*** Last payment may not be fully processed and included in the calculations.</p>
        <div className="summary">
          <div className="item">
            <div className="item__title">Target</div>
            <div className="item__result negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="result__amount">$12.22k</div>
            </div>
          </div>
          <div className="item">
            <div className="item__title">Last Week</div>
            <div className="item__result positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="result__amount">$12.22k</div>
            </div>
          </div>
          <div className="item">
            <div className="item__title">Last Month</div>
            <div className="item__result positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="result__amount">$12.22k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
