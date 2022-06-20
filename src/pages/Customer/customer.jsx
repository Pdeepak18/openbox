import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./customer.scss";
import DataVendor from "../../components/datatable/DataVendor";
function Customer() {
  return (
    <div className="Vendor">
      <Sidebar />
      <div className="mainContainer">
        <Navbar />
        <div className="bottom">
          <h1 className="title"><strong>Customer List</strong></h1>
          <DataVendor />
        </div>
      </div>
    </div>
  );
}

export default Customer;