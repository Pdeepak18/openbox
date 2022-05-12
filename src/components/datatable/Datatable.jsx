import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

const Datatable = () => {

  const [category, setCategory] = useState([]);

useEffect(() => {
  getAllCategory()
},[])

  const getAllCategory = async () => {
    var result = await fetch("http://localhost:8000/api/category/getAllCategory")
    var temp = await result.json()
    console.log(result)
    setCategory(temp)
    
  }

  const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "categoryName", headerName: "CategoryName", width: 200 },
    // { field: "description", headerName: "Description", width: 400}

  ]

  const handleDelete = (id) => {
    setCategory(category.filter((item) => item.id !== id));
  };




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
    <div className="datatable">
      <div className="datatableTitle">
        Add New Category
        <Link to="/categary/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={category}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
