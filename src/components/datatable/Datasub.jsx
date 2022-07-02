import "./datasub.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Dropdown } from 'semantic-ui-react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Switch from "@mui/material/Switch";
import React from "react";
import { alpha, styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import axios from "axios";
import Subcategoryview from '../../pages/list/subcategoryview/Subcategoryview';
import Subcategoryedit from '../../pages/list/subcategoryedit/Subcategoryedit';

const Datasub = () => {

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
    //window.location.reload()
    fetchSubCategoryById(value)
   
  }

  const status = async (id) => {

    let del = await axios.post(
      "http://localhost:8000/api/subcategory/editStatus",
      { id }
    );
  };



  //end of disable  switch code

  async function handleView(id) {


    return (
      <div>
        <Subcategoryview />
      </div>

    )
  }

  async function handleEdit(id) {


    return (
      <div>
        <Subcategoryedit />
      </div>

    )
  }


  const [value, setValue] = useState("");

  const [categoryId, setcategoryID] = useState()


  //select the category 
  const handleChange = e => {
    setcategoryID(e.target.value)
    console.log(e.target)
    setValue(e.target.value);
   
    fetchSubCategoryById(e.target.value)

  }
  //fetch category name in the dropdown
  const [item, setItem] = useState([])
  useEffect(() => {
    fetchCategory()
  }, [])

  const fetchCategory = async () => {
    var result = await fetch("http://localhost:8000/api/category/getAllCategory")
    var temp = await result.json()
    console.log(temp)
    setItem(temp)
  }



  //fetch subcategory name
  const [subcategory, setsubCategory] = useState([]);


  const fetchSubCategoryById = async (id) => {

    var result = await axios.post('http://localhost:8000/api/subcategory/getsubCategoryByCategoryId',
      { categoryId: id })
     
    var ans = await result.data
    setsubCategory(ans)
  }


  const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "subcategoryName", headerName: "SubCategoryName", width: 200 }
  ]



  async function handleDelete(id) {


    if (window.confirm("Want to delete?")) {
     


      let del = await axios.post('http://localhost:8000/api/subcategory/deleteSubcategoryById',
        { id })

      del = await del.data;
      var mssg=del.message
      if( mssg=="product"){
        alert("Unable to Delete you have product in these category ")
      }else{
        setsubCategory(subcategory.filter((item) => item.id !== id));
      }
      console.log(del);
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
            <Link to={"/subcategary/view/" + params.row.id} style={{ textDecoration: "none" }}>
              <div className="viewButton"
                onClick={() => handleView(params.row.id)}>View</div>
            </Link>
            <Link to={"/subcategary/edit/" + params.row.id} style={{ textDecoration: "none" }}>
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
      return (
        <div className="cellAction" >
          <RedSwitch checked={params.row.isActive == 0 ? true : false} onClick={() => handleStatus(params.row.id)} inputProps={{ 'aria-label': 'controlled' }} />
          <label >{params.row.isActive==0 ? "Disable" :"Enable"}</label>
        </div>
      )
    }
  }];


  return (
    <div className="datasubCategory">
      <div className="datasubTitle ms-2 mt-2">
        <h1><strong>Sub-Categories</strong></h1>

        <Link to="/subcategary/new" className="link me-2">
          Add New Sub-Category
        </Link>
      </div>

      <div className="bodycat ">
        <h3 className='temp'>Select the category</h3>
     
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" style={{ fontSize: 20}}>Category </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={value}
              label="Cat"
              style={{ width: 470 }}
              onChange={handleChange}
            >
              {
                item.map((i) => (
                  <MenuItem value={i.id} key={i.id} >{i.categoryName}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        

      </div>

        <div className="data-sub">
      <Box sx={{ height: 700, width: '100%' }} className="mb-4">
      <DataGrid
        className="datagrid ms-2 "
        rows={subcategory}
        columns={userColumns.concat(actionColumn).concat(actionStatus)}
        pageSize={8}
        rowsPerPageOptions={[10]}
        //checkboxSelection
        />
      </Box>
      </div>
    </div>
  );
};

export default Datasub;
