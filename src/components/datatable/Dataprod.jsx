import "./dataprod.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import React from "react";
import { alpha, styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import axios from "axios";
import Productedit from '../../pages/product/productedit/Productedit';
import Productview from '../../pages/product/productview/Productview';
import Box from '@mui/material/Box';
const Dataprod = () => {

  //Disable switch
  //const label = { inputProps: { 'aria-label': 'Switch demo' } };
  //const [checked, setChecked] = React.useState(false);
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
        "http://localhost:8000/api/product/editStatus",
        { id }
      );
  };

  //end of disable  switch code

  async function handleView (id){
  return(
     <div>
       <Productview />
     </div>
     
   )
 }

 async function handleEdit (id){
 
   
  return(
    <div>
      <Productedit />
    </div>
    
  )
}
  const [data, setData] = useState(userRows);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getAllProduct();
  }, []);

  const getAllProduct = async () => {
    var result = await fetch("http://localhost:8000/api/product/getAllProduct");
    var temp = await result.json();
    console.log(result);
    setProduct(temp);
    //setChecked(temp[0].isActive)
    console.log(temp[0].isActive)
  };

  const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "productName", headerName: "ProductName", width: 300 },
    //{field: "isActive", headerName: "Status", width: 300}
   
  ];

  async function handleDelete (id) {
    if (window.confirm("Want to delete?")) {
      setProduct(product.filter((item) => item.id !== id));

      let del = await axios.post(
        "http://localhost:8000/api/product/deleteProductById",
        { id }
      );

      del = await del.json();
      console.log(del);
      getAllProduct();
    }
  };


  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={"/product/view/"+params.row.id} style={{ textDecoration: "none" }}>
              <div className="viewButton"
               onClick={() => handleView(params.row.id)}
               >View</div>
            </Link>
            <Link to={"/product/edit/"+params.row.id} style={{ textDecoration: "none" }}>
              <div className="viewButton"
              onClick={() => handleEdit(params.row.id)}>Edit</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
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
      return(
        <div className="cellAction" >
            <RedSwitch  checked={params.row.isActive==0 ? true :false}    onClick={() => handleStatus(params.row.id)}  inputProps={{ 'aria-label': 'controlled' }}/>
            <label >{params.row.isActive==0 ? "Disable" :"Enable"}</label>
        </div>
      )
    }
  }];



  return (
    <div className="dataprod">
      <div className="dataprodTitle">
        <h1><strong>Products</strong></h1>

        <Link to="/product/new" className="link">
          Add New Product
        </Link>
      </div>
      <div className="datasubProduct">
      <Box sx={{ height: 800, width: '100%' }}>
        
      <DataGrid
        className="datagrid"
        rows={product}
        columns={userColumns.concat(actionColumn).concat(actionStatus)}
        pageSize={13}
        rowsPerPageOptions={[13]}
        //checkboxSelection
        />
        </Box>
        </div>
    </div>
  );
};

export default Dataprod;
