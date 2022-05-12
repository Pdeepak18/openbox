import "./datatax.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";





// const userColumns = [
//     { field: "id", headerName: "ID", width: 70 },
//     { field: "TaxName", headerName: "TaxName", width: 200 },
//     // { field: "description", headerName: "Description", width: 400}

//   ]


// const actionColumn = [
//     {
//       field: "action",
//       headerName: "Action",
//       width: 200,
//       renderCell: (params) => {
//         return (
//           <div className="cellAction">
//             <Link to="/categary/test" style={{ textDecoration: "none" }}>
//               <div className="viewButton">View</div>
//             </Link>
//             <Link to="/Subcategary/test" style={{ textDecoration: "none" }}>
//               <div className="viewButton">Edit</div>
//             </Link>
//             <div
//               className="deleteButton"
//               //onClick={() => handleDelete(params.row.id)}
//             >
//               Delete
//             </div>
//           </div>
//         );
//       },
//     },
//   ];


function Datatax() {

    const{Tax,setTax}=useState([]);
    const userColumns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "TaxName", headerName: "TaxName", width: 200 },
        
    
      ]
    
    
    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction">
                <Link to="/categary/test" style={{ textDecoration: "none" }}>
                  <div className="viewButton">View</div>
                </Link>
                <Link to="/Subcategary/test" style={{ textDecoration: "none" }}>
                  <div className="viewButton">Edit</div>
                </Link>
                <div
                  className="deleteButton"
                  //onClick={() => handleDelete(params.row.id)}
                >
                  Delete
                </div>
              </div>
            );
          },
        },
      ];
    

  return (
    <div className="datatax">
    <div className="datataxTitle">
      Add New Tax-Details
      <Link to="/categary/new" className="link">
        Add New
      </Link>
    </div>
    <DataGrid
      className="datagrid"
      rows={Tax}
      columns={userColumns.concat(actionColumn)}
      pageSize={10}
      rowsPerPageOptions={[10]}
      checkboxSelection
    />
  </div>
  )
}

export default Datatax