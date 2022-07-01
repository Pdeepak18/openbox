import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./customerprofile.scss";
import DataCustomerOrderList from "../../components/datatable/DataCustomerOrderList";
import Profile from "../../components/customer/Profile"
import Details from "../../components/customer/Details"

export default function CustomerProfile(){
  return(
    <div className="customerProfile">
      <Sidebar/>
      <div className="customerProfileContainer">
        <Navbar/>
        <div className="customerProfileCard">

        <div className="top">
          <Profile
            name="Tony Stark"
            productsBuyed="800"
          ></Profile>
          {/* <div className="right">
            <Chart1 aspect={3 / 1} title="Product Sold/Month" />
          </div> */}
          <div className="right bottom border rounded-3">
            <Details aspect={3/1}/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title"><strong>Order Details</strong></h1>
          <DataCustomerOrderList />
        </div>
      </div>
    </div>
    </div>
    
  );
}