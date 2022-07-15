import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Widget = ({ type,countt }) => {

 
 

  let data;

  
  const amount = 100;
  const diff = 18;

  switch (type) {

    case "user":
      data = {
        title: "Total Customers",
        isMoney: false,
        count:{countt},
        // <Link to="/vendor" style={{ textDecoration: "none" }}></Link>,
        link:(<Link to="/customer" style={{ textDecoration: "none",color:"black" }}><span>Customer List</span></Link> ),
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;

    case "vendor":
      data = {
        title: "Total Vendors",
        isMoney: false,
        count:{countt},
        link:(<Link to="/vendor" style={{ textDecoration: "none",color:"black" }}><span>Vendor List</span></Link> ),
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
        
      };
      break;

    case "pending":
      data = {
        title: "Pending Vendors",
        isMoney: true,
        count:{countt},
        link: (<Link to="/vendor" style={{ textDecoration: "none",color:"black" }}><span>Pending List</span></Link> ),
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;


    case "order":
      data = {
        title: "Monthly Orders",
        isMoney: true,
        count:{countt},
        link: (<Link to="/basicAccounting" style={{ textDecoration: "none",color:"black" }}><span>Order's List</span></Link> ),
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
           {countt}
         
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon} 
      </div>
      {/* //{console.log(countCustomer ,countVendor ,pendingVendor,monthlyOrders)} */}
    </div>
  );
};

export default Widget;
