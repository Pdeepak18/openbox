import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import { vendorColumn, vendorRow } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Transactiontable = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [transactiondetails, setTransactiondetails] = useState([]);


    useEffect(() => {
        fetchTransactionDetailsbyVendorId(params.id);
      }, []);

      const fetchTransactionDetailsbyVendorId = async (id) => {
   
        var result = await axios.post(
          "http://localhost:9000/api/order/showAllOrders",
          {vendorId:id }
        );
        var ans = await result.data;
        console.log(ans);
        setTransactiondetails(ans);
      };

      const userColumns = [
        { field: "id", headerName: "ID", width: 70 },
        { field: "name", headerName: "Name", width: 200 },
        { field: "quantity", headerName: "Quanity", width: 200 },
        { field: "amount", headerName: "Amount", width: 200 },
        { field: "Date", headerName: "Date", width: 200 },
        {
          field: "orderStatus", headerName: "OrderStatus"
          , width: 200
        }
      ]


  return (
   <div className="datasub">
      <DataGrid
        className="datagrid"


        rows={transactiondetails}
        columns={userColumns}
        pageSize={8}
        rowsPerPageOptions={[10]}
        //checkboxSelection
      />
    </div>
  )
}

export default Transactiontable