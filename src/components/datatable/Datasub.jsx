import "./datasub.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
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

const Datasub = () => {

  //Disable switch
  //const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const [checked, setChecked] = React.useState(false);
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

    alert("Want to Disable: "+ id+ " id  ")
    setChecked(id.target.checked);
  }

  //end of disable  switch code


  
  const[value,setValue]=useState("");

  const [categoryId,setcategoryID] =useState()


    //select the category 
    const handleChange =e =>
    {
        setcategoryID(e.target.value)
        console.log(e.target)
        setValue(e.target.value);
        fetchSubCategoryById(e.target.value)
        
    }
  //fetch category name in the dropdown
  const [item, setItem] = useState([])
    useEffect(() => {
      fetchCategory()
  },[])

  const fetchCategory = async () => {
      var result = await fetch("http://localhost:8000/api/category/getAllCategory")
      var temp = await result.json()
      console.log(temp)
      setItem(temp)
 }



  //fetch subcategory name
  const [subcategory, setsubCategory] = useState([]);


  const fetchSubCategoryById = async(id) => {
 
    var result =await axios.post('http://localhost:8000/api/subcategory/getsubCategoryByCategoryId', 
    {categoryId :id})
    var ans = await result.data
    setsubCategory(ans)
    }
    
   
 

  // useEffect(() => {
  //   fetchSubCategoryById(categoryId)
  // },[])


  // const getAllSubCategory = async () => {
  //   var result = await fetch("http://localhost:8000/api/subcategory/getAllsubCategory")
  //   var temp = await result.json()
  //   console.log(result)
  //   setsubCategory(temp)
    
  // }


  //
  const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
   { field: "subcategoryName", headerName: "SubCategoryName", width: 200 },
    //{ field: "description", headerName: "Description", width: 400}
]


  
async function  handleDelete  (id)  {
  
   
    if(window.confirm("Want to delete?")){
    setsubCategory(subcategory.filter((item) => item.id !== id));
    
    
    let del= await axios.post('http://localhost:8000/api/subcategory/deleteSubcategoryById', 
    {id})

  del=await del.json();
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
            <Link to="/Subcategary/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <Link to="/Subcategary/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">Edit</div>
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
            <RedSwitch    onClick={() => handleStatus(params.row.id)}  inputProps={{ 'aria-label': 'controlled' }}/>
            <label >Disable</label>
        </div>
      )
    }
  }];


  return (
    <div className="datasub">
      <div className="datasubTitle">
        Add New Sub-Category
        <Link to="/subcategary/new" className="link">
          Add New
        </Link>
      </div>

      <div className="bodycat ">
                    <h3 className='temp'>Select the category</h3>
                    <Box sx={{ minWidth: 100 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" style={{ fontSize: 20 }}>Cat</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={value}
                                label="Cat"
                                style={{ width: 470 }}
                                onChange={handleChange}
                            >   
                                {
                                    item.map((i)=>(
                                        <MenuItem  value={i.id} key={i.id} >{i.categoryName}</MenuItem>
                                    ))
                                }
                                
                                
                            </Select>
                        </FormControl>
                    </Box>

                </div>
      <DataGrid
        className="datagrid"
        rows={subcategory}
        columns={userColumns.concat(actionColumn).concat(actionStatus)}
        pageSize={8}
        rowsPerPageOptions={[10]}
        //checkboxSelection
      />
    </div>
  );
};

export default Datasub;
