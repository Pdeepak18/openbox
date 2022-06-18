import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import './databanner.scss'
import axios from "axios";
import Modal from 'react-modal';
import Button from '@mui/material/Button';
import Bannerview from '../../pages/bannerview/Bannerview';
import { PropaneSharp } from '@mui/icons-material';
import Banneredit from '../../pages/banneredit/Banneredit';


const Databanner = () => {
    const[Banner,setBanner]=useState([]);
  

    const userColumns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "name", headerName: "Name", width: 200 },
      { field: "description", headerName: "Category", width: 200 },
  
    ]
    useEffect(() => {
    getAllBanner();
  }, []);

  const getAllBanner = async () => {
    var result = await fetch("http://localhost:8000/api/banner/getAllBanner");
    var temp = await result.json();
    console.log(result);
    setBanner(temp);
  };



    async function handleDelete(id) {
    if (window.confirm("Want to delete?")) {
      setBanner(Banner.filter((item) => item.id !== id));

      let del = await axios.post(
        "http://localhost:8000/api/banner/deleteBannerById",
        { id }
      );

      del = await del.json();
      console.log(del);
      getAllBanner();
    }
  }

  async function handleView (id){
   
    
    return(
      <div>
        <Bannerview />
      </div>
      
    )
  }

  async function handleEdit (id){
  
    
   return(
     <div>
       <Banneredit />
     </div>
     
   )
 }

  


    const actionColumn = [
      {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="cellAction">
              <Link to={"/banner/view/"+params.row.id} style={{ textDecoration: "none" }}> 
                <div className="viewButton"
                  onClick={() => handleView(params.row.id)}
                >
                
                View
                </div>

               </Link> 
              <Link to={"/banner/edit/"+params.row.id} style={{ textDecoration: "none" }} >
                <div className="editButton"
                onClick={() => handleEdit(params.row.id)}
                >
                Edit
                </div>
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


  return (
    <div  className="databanner">
        <div className="databannerTitle">
      Add New Banner
      <Link to="/banner/new" className="link">
        Add New
      </Link>
    </div>
    <DataGrid
      className="datagrid"
      rows={Banner}
      columns={userColumns.concat(actionColumn)}
      pageSize={10}
      rowsPerPageOptions={[10]}
      editRowsModel
      //checkboxSelection
    />
  </div>
    
  )
}

export default Databanner