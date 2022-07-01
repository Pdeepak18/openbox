import "./vendor.scss";
import "../datatable/datasub.scss"
import { DataGrid } from "@mui/x-data-grid";
import { vendorColumn, vendorRow } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";

const Producttable = () => {
  const params = useParams();
  //const navigate = useNavigate();

  
  const [vendorproduct, setVendorproduct] = useState([]);

  useEffect(() => {
    fetchProductByvendorId();
  }, []);

  const fetchProductByvendorId = async () => {
   
    var result = await axios.post(
      "http://localhost:9000/api/list/getAllProduct",
      { id:params.id }
    );
    var ans = await result.data;
    console.log(ans);
    setVendorproduct(ans);
  };

  const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "productName", headerName: "productName", width: 400 },
    { field: "quantity", headerName: "quantity", width: 200 },
    { field: "price", headerName: "price", width: 230 },
  ];

  return (
    <div className="datasub">
      <DataGrid
        className="datagrid"


        rows={vendorproduct}
        columns={userColumns}
        pageSize={8}
        rowsPerPageOptions={[10]}
        //checkboxSelection
      />
    </div>
  );
};

export default Producttable;