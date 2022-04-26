import './single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';
import eye from '../../assets/eye.png';

const Single = () => {
  return (
    <div className='single'>
      <Sidebar />
      <div className="single__container">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="edit__button">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={eye} alt="" className='item__image'/>
              <div className="details">
                <h1 className="item__title">C Lee</h1>
                <div className="item__detail">
                  <span className="item__key">Email:</span>
                  <span className="item__value">christopher.lee222@yahoo.com</span>
                </div>
                <div className="item__detail">
                  <span className="item__key">Phone:</span>
                  <span className="item__value">(513) 515-7231</span>
                </div>
                <div className="item__detail">
                  <span className="item__key">Address:</span>
                  <span className="item__value">1 Main St Chicago, IL</span>
                </div>
                <div className="item__detail">
                  <span className="item__key">Country:</span>
                  <span className="item__value">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title='User Spending (Last 6 months)'/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Table />
        </div>
      </div>

    </div>
  )
}

export default Single