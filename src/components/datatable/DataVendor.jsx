import "./datasub.scss";
import { DataGrid } from "@mui/x-data-grid";
import { vendorColumn, vendorRow } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Switch from "@mui/material/Switch";
import { alpha, styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import Vendordetails from '../vendor/vendorDetail/vendorDetails'
import VendorProfile from '../../pages/Vendor/VendorProfile'
import Box from '@mui/material/Box';
const initialSort = [{
  field: 'verified',
  dir: 'asc'
}];

const DataVendor = () => {
  const [sort, setSort] = useState(initialSort);
  const [data, setData] = useState();
  //Switch
  const RedSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: red[900],
      '&:hover': {
        backgroundColor: alpha(red[900], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: red[900],
    },
  }));
  const GreenSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: green[600],
      '&:hover': {
        backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: green[600],
    },
  }));
  

  async function handleStatus(id) {
    status(id)
    window.location.reload()

    
  }

  const status = async (id) => {
   
    let del = await axios.post(
        "http://localhost:8000/api/vendormanagement/editStatus",
        { id }
      );
  };
  async function handleVerified(id) {
    verified(id)
    window.location.reload()

    
  }

  const verified = async (id) => {
  //  alert(id)
    let del = await axios.post(
        "http://localhost:8000/api/vendormanagement/editVerified",
        { id }
      );
  };

  // View 
  async function handleView (id){

   return(
      <div>
        <VendorProfile />
      </div>
    )
  }

  // fetch all vendor list
  const [vendor, setVendor] = useState([]);

  useEffect(() => {
    getAllVendor();
  }, []);

  const getAllVendor = async () => {
    var result = await fetch(
      "http://localhost:8000/api/vendormanagement/getMainList"
    );
    var temp = await result.json();
    console.log(result);
    setVendor(temp);
  };


  //columns
  const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Vendor Name", width: 200 },
    { field: "email", headerName: "Vendor Email", width: 200 },
    { field: "phone", headerName: "Vendor Phone-no", width: 200 },
  ];


  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={"/vendor/view/"+params.row.id} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
          </div>
        );
      },
    },
  ];


  const actionStatus = [{
    field: "status",
    headerName: "isActive",
    width: 150,
    renderCell: (params) => {
      return(
        <div className="cellAction" >
            <RedSwitch  checked={params.row.isActive==0 ? true :false}  onClick={() => handleStatus(params.row.id)}  inputProps={{ 'aria-label': 'controlled' }}/>
            <label >{params.row.isActive==0 ? "Disable" :"Enable"}</label>
        </div>
      )
    }
  }];

  const actionVerified = [{
    field: "verified",
    headerName: "IsVerified",
    width: 150,
    type: 'string',
    renderCell: (params) => {

      return(
        <div className="cellAction" >
            <GreenSwitch  checked={params.row.isVerified==1 ? true :false}  onClick={() => handleVerified(params.row.id)}  inputProps={{ 'aria-label': 'controlled' }}/>
            <label >  {params.row.isVerified==1 ? "Verified" :"Not Verified"}</label>
        </div>
      )
    },
    sortComparator: (v1, v2) => v1.name.localeCompare(v2.name)
  }];


  return (
    <div className="data-sub">
      <Box sx={{ height: 800, width: '100%' }}>
      <DataGrid
     // sortable={true} sort={sort} onSortChange={e => {setSort(e.sort)}}
        className="datagrid"
        rows={vendor}
        columns={userColumns.concat(actionColumn).concat(actionStatus).concat(actionVerified)}
        pageSize={13}
        rowsPerPageOptions={[13]}
      />
      </Box>
    </div>
  );
};
export default DataVendor;