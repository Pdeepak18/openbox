import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Vendor.scss";

import ProfileCard from "../../components/vendor/profile"
import Details from "../../components/vendor/vendorDetail/vendorDetails"
import List from "../../components/table/ProductTable";
import Table from "../../components/table/Table";

function Vendor() {
  return (
    <div className="Vendor">
      <Sidebar />
      <div className="mainContainer">
        <Navbar />
        <div className="top">
          <ProfileCard
            name="Rita Correia"
            age="32"
            storeName="Appario Retailers"
            dateRegistered="5-6-22"
            productsSold="800"
            rating="3.4/5"
          ></ProfileCard>
          {/* <div className="right">
            <Chart1 aspect={3 / 1} title="Product Sold/Month" />
          </div> */}
          <div className="right bottom">
            <Details aspect={3/1}/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title"><strong>Listed Products</strong></h1>
          <List />
        </div>
        <div className="bottom">
          <h1 className="title"><strong>Transaction History</strong></h1>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Vendor;