import "./orderlist.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Ordercard from "../../components/order/Ordercard"
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { maxWidth, width } from "@mui/system";

const columns = [
{field:'id', headerName:"ORDER ID",width: 200},
  {
    field: "Order",
    headerName: "ORDER",
    renderCell: () => {
      return (
        <Ordercard/>
      );
    },
    width: 1000,

  }

];

const rows = [
  { id:"405-6059282" },
  { id: "405-6059283" },
  { id: "405-6059284" },
  { id: "405-6059285" },
  { id: "405-6059286" },
  { id: "405-6059287" },
  { id: "405-6059288" },
  { id: "405-6059289" },
  { id: "405-60592810" },
  { id: "405-60592811" },

];

export default function Orderlist() {

  return (
    <div className="Order">
      <Sidebar />
      <div className="mainContainer">
        <Navbar />
        <div className="m-3 orderlist">
          <h1> <strong> Bassic Accounting</strong></h1>
          <div>
            <Box sx={{ height: 800, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
                rowHeight={250}

              />
            </Box>

          </div>
        </div>
      </div>
    </div>

  );

}