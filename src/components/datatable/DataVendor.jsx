import "./datasub.scss";
import { DataGrid } from "@mui/x-data-grid";
import { vendorColumn, vendorRow } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
// import lol from ""

const DataVendor = () => {
  const [data, setData] = useState(vendorRow);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="./VendorProfile" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datasub">
      <DataGrid
        className="datagrid"
        rows={data}
        columns={vendorColumn.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
};
export default DataVendor;