import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./customer.scss";
import Datacustomer from "../../components/datatable/Datacustomer";
function Customer() {
  return (
    <div className="customer">
      <Sidebar />
      <div className="customerContainer">
        <Navbar />
        <div className="customerList">
          <h1><strong>Customer List</strong></h1>
          <Datacustomer />
        </div>
      </div>
    </div>
  );
}

export default Customer;