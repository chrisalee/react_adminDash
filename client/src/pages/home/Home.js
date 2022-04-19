import React from "react";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home__container">
        <Navbar />
        <div className="home__widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
        </div>
        <div className="home__charts">
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Home;
