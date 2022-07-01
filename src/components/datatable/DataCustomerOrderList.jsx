import { DataGrid } from "@mui/x-data-grid";

export default function DataCustomerOrderList(){
  const userColumns = [
    { field: "id", headerName: "ORDER ID", width: 200 },
    { field: "productName", headerName: "PRODUCT NAME", width: 400 },
    { field: "quantity", headerName: "QUANTITY", width: 200 },
    { field: "price", headerName: "PRICE", width: 230 },
  ];
  const userRow=[
    {id:1,productName:"iPhone 13",quantity:"2",price:"59,000"}
  ]
  return(
    <div className="datasub">
      <DataGrid
        className="datagrid"
        rows={userRow}
        columns={userColumns}
        pageSize={8}
        rowsPerPageOptions={[10]}
        //checkboxSelection
      />
    </div>

  );
}