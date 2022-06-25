import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ProductionQuantityLimitsRoundedIcon from '@mui/icons-material/ProductionQuantityLimitsRounded';
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CategoryIcon from '@mui/icons-material/Category';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import PeopleIcon from '@mui/icons-material/People';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import CompareIcon from '@mui/icons-material/Compare';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import name from './name.png'

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top ">
      <Link to="/" style={{ textDecoration: "none" }}>
          {/* <span className="logo" >  OPENBOX.IN</span> */}
          <img className = "nameIcon" src={name} alt="" />
        </Link>
      </div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li></Link>
          <p className="title">LISTS</p>
          <Link to="/categary" style={{ textDecoration: "none" }}>
            <li>
              <CategoryIcon className="icon" />
              <span>Category</span>
            </li>
          </Link>
          <Link to="/subcategary" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Sub-Category</span>
            </li>
          </Link>
          <Link to="/product" style={{ textDecoration: "none" }}>
            <li>
              <ProductionQuantityLimitsRoundedIcon className="icon" />
              <span>Product</span>
            </li>
          </Link>
          
          <Link to="/vendor" style={{ textDecoration: "none" }}>
          <li>
            <PeopleIcon className="icon" />
            <span>Vendor's List</span>
          </li>
          </Link>

          <Link to="/customer" style={{ textDecoration: "none" }}>
          <li>
            <PeopleIcon className="icon" />
            <span>Customer's List</span>
          </li>
          </Link>
          
          <p className="title">USEFUL</p>
          <Link to="/taxmaster" style={{ textDecoration: "none" }}>
          
          <li>
            <AppRegistrationIcon className="icon" />
            <span>Taxmaster</span>
          </li>
          </Link>

          <Link to="/bassicAccounitng" style={{ textDecoration: "none" }}> 
          <li>
            <CurrencyRupeeIcon className="icon" />
            <span>Bassic Accounting</span>
          </li>
          </Link>
          
          <Link to="/banner" style={{ textDecoration: "none" }}>
            <li>
            <NotificationsNoneIcon className="icon" />
            <span>Banner</span>
          </li>
          </Link>
          <p className="title">SERVICE</p>
          {/* <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Basic Accounting</span>
          </li> */}
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>User Right Accounting</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
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
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
       
      </div> */}
    </div>
  );
};

export default Sidebar;
