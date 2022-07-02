import "./datasub.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Switch from "@mui/material/Switch";
import { alpha, styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import Box from '@mui/material/Box';
import React from 'react'
import CustomerProfile from "../../pages/Customer/CustomerProile";


const Datacustomer = () => {
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


  async function handleStatus(id) {
    status(id)
    window.location.reload()


  }

  const status = async (id) => {

    let del = await axios.post(
      "http://localhost:8000/api/customerManagement/editStatus",
      { id }
    );
  };

  // View 
  async function handleView(id) {
    //alert(id)
    return (
      <div>
        <CustomerProfile />
      </div>
    )
  }

  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    getAllCustomer();
  }, []);

  const getAllCustomer = async () => {
    var result = await fetch(
      "http://localhost:8000/api/customerManagement/getAllCustomerList"
    );
    var temp = await result.json();
    console.log(result);
    setCustomer(temp);
  };


  //columns
  const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Customer Name", width: 200 },
    { field: "email", headerName: "Customer Email", width: 200 },
    { field: "phone", headerName: "Customer Phone-no", width: 200 },
  ];


  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={"/customer/view/" + params.row.id} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
          </div>
        );
      },
    },
  ];


  const actionStatus = [{
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellAction" >
          <RedSwitch checked={params.row.isActive == 0 ? true : false} onClick={() => handleStatus(params.row.id)} inputProps={{ 'aria-label': 'controlled' }} />
          <label >{params.row.isActive==0 ? "Disable" :"Enable"}</label>
        </div>
      )
    }
  }];

  return (
    <div className="data-sub">
      <Box sx={{ height: 800, width: '100%' }}>
        <DataGrid

          className="datagrid"
          rows={customer}
          columns={userColumns.concat(actionColumn).concat(actionStatus)}
          pageSize={13}
          rowsPerPageOptions={[13]}
        />
      </Box>
    </div>
  )
}

export default Datacustomer