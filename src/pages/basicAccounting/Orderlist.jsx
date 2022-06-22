import "./orderlist.scss"

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import Ordercard from "../../components/order/Ordercard"

export default function Orderlist() {

  return (
    <div className="Order"> 
      <Sidebar />
      <div className="mainContainer">
        <Navbar />
        <div className="m-3 orderlist">
          <h1> <strong> Bassic Accounting</strong></h1>
          <Ordercard/>
          <Ordercard/>
          <Ordercard/>
          </div>
        </div>
      </div>

  );

}