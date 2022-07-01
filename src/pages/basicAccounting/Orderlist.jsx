import "./orderlist.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Ordercard from "../../components/order/Ordercard"
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { maxWidth, width } from "@mui/system";
import { Link } from "react-router-dom";


const status = "Pending"



const columns = [
  { field: 'id', headerName: "ORDER ID", width: 150, },
  { field: 'date', headerName: "ORDER PLACED", width: 200 },
  { field: 'productName', headerName: "PRODUCT NAME", width: 200 },
  { field: 'quantity', headerName: "QUANTITY", width: 100 },
  { field: 'customer', headerName: "SHIP TO", width: 200 },
  { field: 'vendor', headerName: "SOLD BY", width: 200 },
  { field: 'amount', headerName: "TOTAL AMOUNT", width: 150 },
  {
    field: 'status', headerName: "ORDER STATUS",
    renderCell: () => {
      return (
        <>
          <button type="button" className="btn-sm ba">{status}</button>
        </>
      );
    },
    width: 150
  },
  {
    field: 'detail', headerName: "DETAILS",
    renderCell: () => {
      return (
        <>
          <Link to={"/bassicAccounitng/orderdetails"} >
            <button type="button" className="btn-sm bd">Details</button>
          </Link>
        </>
      );


    }, width: 100
  }

];

// if want to use OrderCard Component
// {
//   field: "Order",
//   headerName: "ORDER",
//   renderCell: () => {
//     return (
//       <Ordercard />
//     );
//   },
//   width: 1000,
// },

const rows = [
  {
    id: "405-6059282", date: "20 June 2022", productName: "iPhone 13", quantity: "2", customer: "Tony Stark", vendor: "Stark Enterprises"
    , amount: "₹ 59, 999", status: "", detail: ""
  },
  {
    id: "405-6059282", date: "20 June 2022", productName: "iPhone 13", quantity: "2", customer: "Tony Stark", vendor: "Stark Enterprises"
    , amount: "₹ 59, 999", status: "", detail: ""
  },
  {
    id: "405-6059282", date: "20 June 2022", productName: "iPhone 13", quantity: "2", customer: "Tony Stark", vendor: "Stark Enterprises"
    , amount: "₹ 59, 999", status: "", detail: ""
  },
  {
    id: "405-6059282", date: "20 June 2022", productName: "iPhone 13", quantity: "2", customer: "Tony Stark", vendor: "Stark Enterprises"
    , amount: "₹ 59, 999", status: "", detail: ""
  },
  {
    id: "405-6059282", date: "20 June 2022", productName: "iPhone 13", quantity: "2", customer: "Tony Stark", vendor: "Stark Enterprises"
    , amount: "₹ 59, 999", status: "", detail: ""
  },
  {
    id: "405-6059282", date: "20 June 2022", productName: "iPhone 13", quantity: "2", customer: "Tony Stark", vendor: "Stark Enterprises"
    , amount: "₹ 59, 999", status: "", detail: ""
  },
  {
    id: "405-6059282", date: "20 June 2022", productName: "iPhone 13", quantity: "2", customer: "Tony Stark", vendor: "Stark Enterprises"
    , amount: "₹ 59, 999", status: "", detail: ""
  },
  {
    id: "405-6059282", date: "20 June 2022", productName: "iPhone 13", quantity: "2", customer: "Tony Stark", vendor: "Stark Enterprises"
    , amount: "₹ 59, 999", status: "", detail: ""
  },
  {
    id: "405-6059282", date: "20 June 2022", productName: "iPhone 13", quantity: "2", customer: "Tony Stark", vendor: "Stark Enterprises"
    , amount: "₹ 59, 999", status: "", detail: ""
  },
  {
    id: "405-6059282", date: "20 June 2022", productName: "iPhone 13", quantity: "2", customer: "Tony Stark", vendor: "Stark Enterprises"
    , amount: "₹ 59, 999", status: "", detail: ""
  },



];

export default function Orderlist() {

  return (
    <div className="Order">
      <Sidebar />
      <div className="mainContainer">
        <Navbar />
        <div className="m-3 orderlist">
          <h1> <strong> Basic Accounting</strong></h1>
          <div>
            <Box sx={{ height: 800, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={13}
                rowsPerPageOptions={[13]}
                disableSelectionOnClick
              />
            </Box>

          </div>
        </div>
      </div>
    </div>

  );

}