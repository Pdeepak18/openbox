import "./dataprod.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

const Dataprod = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const [product, setProduct] = useState([]);

  useEffect(() => {
    getAllProduct()
  },[])
  
    const getAllProduct = async () => {
      var result = await fetch("http://localhost:8000/api/product/getAllProduct")
      var temp = await result.json()
      console.log(result)
      setProduct(temp)
      
    }

  const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    // { field: "categoryName", headerName: "CategoryName", width: 200 },
    // { field: "subcategoryName", headerName: "SubcategoryName", width: 200 },
    { field: "productName", headerName: "ProductName", width: 300 },
    //{ field: "description", headerName: "Description", width: 400}

  ]
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/product/test" style={{ textDecoration: "none" }}>
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
    <div className="dataprod">
      <div className="dataprodTitle">
        Add New Product
        <Link to="/product/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={product}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default Dataprod;
