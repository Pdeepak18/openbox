import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Vendor.scss";
import DataVendor from "../../components/datatable/DataVendor";
function Vendor() {
  return (
    <div className="Vendor">
      <Sidebar />
      <div className="mainContainer">
        <Navbar />
        <div className="bottom">
          <h1 className="title"><strong>Vendor List</strong></h1>
          <DataVendor />
        </div>
      </div>
    </div>
  );
}

export default Vendor;