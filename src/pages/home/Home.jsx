import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {

const [countVendor, setCountVendor] = useState("")
const [countCustomer, setCountCustomer] = useState("")
const [pendingVendor, setPendingVendor] = useState("")
const [monthlyOrders, setMonthlyOrders] = useState("")

  useEffect(() => {
    getCountOfVendor();
    getCountOfCustomer();
    getUnverifiedVendor();
    getMonthlyOrders();
  }, [])

  const getCountOfVendor = async () => {
    var result = await fetch("http://localhost:8000/api/dashboard/getCountOfVendor")
    var temp = await result.json()
    setCountVendor(temp[0].NumberOfVendors)
  }

  const getCountOfCustomer = async () => {
    var result = await fetch("http://localhost:8000/api/dashboard/getCountOfCustomer")
    var temp = await result.json()
    setCountCustomer(temp[0].NumberOfCustomer)
  }

  const getUnverifiedVendor = async () => {
    var result = await fetch("http://localhost:8000/api/dashboard/getUnverifiedVendor")
    var temp = await result.json()
    setPendingVendor(temp[0].NumberOfUnverifiedVendors)
  }

  const getMonthlyOrders = async () => {
    var result = await fetch("http://localhost:8000/api/dashboard/getMonthlyOrders")
    var temp = await result.json()
    setMonthlyOrders(temp[0].MonthlyOrders)
  }
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" countt={countVendor} />
          <Widget type="vendor" countt={countCustomer}/>
          <Widget type="pending" countt={pendingVendor} />
          <Widget type="order" countt={monthlyOrders}/>
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        {/* <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
