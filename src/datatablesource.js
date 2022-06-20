export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "category",
    headerName: "Category",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.category}
        </div>
      );
    },
  },
  // {
  //   field: "email",
  //   headerName: "Email",
  //   width: 230,
  // },

  // {
  //   field: "age",
  //   headerName: "Age",
  //   width: 100,
  // },

  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];

//temporary data
export const userRows = [
  {
    id: 1,
    category: "Acessories",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    // status: "active",
    // email: "1snow@gmail.com",
    // age: 35,
  },
  {
    id: 2,
    category: "Electronics",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    // email: "2snow@gmail.com",
    // status: "passive",
    // age: 42,
  },
  {
    id: 3,
    category: "Electronics",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    // email: "3snow@gmail.com",
    // status: "pending",
    // age: 45,
  },
  {
    id: 4,
    category: "Electronics",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    category: "Electronics",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    category: "Electronics",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  // {
  //   id: 7,
  //   username: "Clifford",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   email: "7snow@gmail.com",
  //   status: "passive",
  //   age: 44,
  // },
  // {
  //   id: 8,
  //   username: "Frances",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   email: "8snow@gmail.com",
  //   status: "active",
  //   age: 36,
  // },
  // {
  //   id: 9,
  //   username: "Roxie",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   email: "snow@gmail.com",
  //   status: "pending",
  //   age: 65,
  // },
  // {
  //   id: 10,
  //   username: "Roxie",
  //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //   email: "snow@gmail.com",
  //   status: "active",
  //   age: 65,
  // },
];


// Temporary Vendor Data's

export const vendorColumn =[
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "VendorName",
    headerName: "Vendor Name",
    width: 400,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.VendorName}
        </div>
      );
    },
  },
  { field: "PhoneNo", headerName: "Phone No.", width: 200 },
  { field: "Email", headerName: "Email", width: 400 },

];

export const vendorRow=[
  {
    id: 1,
    VendorName: "John Doe",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    PhoneNo:"212-970-4133",
    Email:"john.doe@nomail.com"
  },
  {
    id: 2,
    VendorName: "John Doe",
    img: "https://source.unsplash.com/random/300x300",
    PhoneNo:"212-970-4133",
    Email:"john.doe@nomail.com"
  },
  {
    id: 3,
    VendorName: "John Doe",
    img: "https://source.unsplash.com/random/300x300",
    PhoneNo:"212-970-4133",
    Email:"john.doe@nomail.com"
  },
  {
    id: 4,
    VendorName: "John Doe",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    PhoneNo:"212-970-4133",
    Email:"john.doe@nomail.com"
  },
  {
    id: 5,
    VendorName: "John Doe",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    PhoneNo:"212-970-4133",
    Email:"john.doe@nomail.com"
  },
  {
    id: 6,
    VendorName: "John Doe",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    PhoneNo:"212-970-4133",
    Email:"john.doe@nomail.com"
  },
  {
    id: 7,
    VendorName: "John Doe",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    PhoneNo:"212-970-4133",
    Email:"john.doe@nomail.com"
  },
  {
    id: 8,
    VendorName: "John Doe",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    PhoneNo:"212-970-4133",
    Email:"john.doe@nomail.com"
  },
  {
    id: 9,
    VendorName: "John Doe",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    PhoneNo:"212-970-4133",
    Email:"john.doe@nomail.com"
  },
  {
    id: 10,
    VendorName: "John Doe",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    PhoneNo:"212-970-4133",
    Email:"john.doe@nomail.com"
  },
  {
    id: 11,
    VendorName: "John Doe",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    PhoneNo:"212-970-4133",
    Email:"john.doe@nomail.com"
  },
  {
    id: 12,
    VendorName: "John Doe",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    PhoneNo:"212-970-4133",
    Email:"john.doe@nomail.com"
  },
  {
    id: 13,
    VendorName: "John Doe",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    PhoneNo:"212-970-4133",
    Email:"john.doe@nomail.com"
  },
  {
    id: 14,
    VendorName: "John Doe",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    PhoneNo:"212-970-4133",
    Email:"john.doe@nomail.com"
  },
  {
    id: 15,
    VendorName: "John Doe",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    PhoneNo:"212-970-4133",
    Email:"john.doe@nomail.com"
  },
  {
    id: 16,
    VendorName: "John Doe",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    PhoneNo:"212-970-4133",
    Email:"john.doe@nomail.com"
  },
  {
    id: 17,
    VendorName: "John Doe",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    PhoneNo:"212-970-4133",
    Email:"john.doe@nomail.com"
  },
];
