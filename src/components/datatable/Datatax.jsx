import "./datatax.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";


const Datatax = () => {
  const [Tax, setTax] = useState([]);
  const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "TaxName", width: 200 },
    { field: "value", headerName: "TaxValue", width: 200 },
  ];

  useEffect(() => {
    getAllTax();
  }, []);

  async function handleDelete(id) {
    if (window.confirm("Want to delete?")) {
      setTax(Tax.filter((item) => item.id !== id));

      let del = await axios.post(
        "http://localhost:8000/api/tax/deleteTaxById",
        { id }
      );

      del = await del.json();
      console.log(del);
      getAllTax();
    }
  }

  const getAllTax = async () => {
    var result = await fetch("http://localhost:8000/api/tax/getAllTax");
    var temp = await result.json();
    console.log(result);
    setTax(temp);
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
    <div className="datatax">
      <div className="datataxTitle">
        Add New Tax-Details
        <Link to="/taxmaster/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={Tax}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        //checkboxSelection
      />
    </div>
  );
};

export default Datatax;
