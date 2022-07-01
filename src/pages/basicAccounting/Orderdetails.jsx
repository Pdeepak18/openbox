import "./orderdeatils.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import iPhone from "../../components/order/iphone.jpg"


export default function Orderdetails() {

  return (
 
      <div className="Orderdetail">
        <Sidebar />
        <div className="mainContainer ">
          <Navbar />
          <div className="m-3 orderlist ">
            <h3> <strong> Order Details</strong></h3>
          
          <div className="row mt-4 ">
            {/* <div className="col-lg-3"></div> */}
            <div className="col-11 ">
              
              <div className="card">

                <div className="card-header">
                  <div className="row">
                    <div className="col-8">
                      <div className="row"><span> <strong>ORDER PLACED</strong> </span></div>
                      <div className="row"><span>20 June 2022</span></div>
                    </div>
                    <div className="col-4">
                      <div className="row"><span> <strong>ORDER ID</strong> </span></div>
                      <div className="row"><span># 405-6059282-4595534</span></div>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div>
                    <div className="conatiner-1 p-3 ">
                      <div className="row">
                        <div className="col-4 p-1">
                          <div className="row"> <span><strong>Shipping Address</strong></span> </div>
                          <div className="row"> <span>Tony Stark</span> </div>
                          <div className="row"> <span>AddressLine1:Room No. 307, Bldg No.: 6, Bhavani Welfare Society</span> </div>
                          <div className="row"> <span>AddressLine2:Malibu, California</span> </div>
                          <div className="row"> <span>Pincode:90265</span> </div>
                          <div className="row"> <span>Phone no.: 212-970-4133</span> </div>
                        </div>
                       
                        <div className="col-3 ms-5">
                          <div className="row"> <span><strong>Payment Method</strong></span> </div>
                          <div className="row"> <span>BHIM UPI</span> </div>
                        </div>
                        <div className="col-4">
                          <div className="row"> <span><strong>Order Summary</strong></span>
                            <div className="col-7">

                              <div className="row"> <span>Item Subtotal:</span> </div>
                              <div className="row"> <span>Discount: </span> </div>
                              <div className="row"> <span>Shipping: </span> </div>
                              <div className="row"> <span><strong>Grand Total:</strong></span> </div>
                            </div>
                            <div className="col-5">
                              <div className="row"> <span>₹ 59,999</span> </div>
                              <div className="row"> <span>₹ 7,000</span> </div>
                              <div className="row"> <span>₹ 0 </span> </div>
                              <div className="row"> <span><strong>₹ 53,999</strong></span> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container-2 mt-3 p-4 ">
                    <div className="row ">
                      <div className="col-5 ">
                        <div className="row vl me-2 ">
                        <span><strong>Product</strong></span>
                          <div className="col-4  productIMG ">
                            <img src={iPhone} width="100px" height="px" alt="Product Photo" />

                          </div>
                          <div className="col-8  productDetails ">
                            <div className="row"><span> <strong>Apple iPhone 11(128GB) -White</strong> </span></div>
                            <div className="row"><span> <strong>₹ 59,999</strong> </span></div>
                            <div className="row"><span> Sold by : Stark Enterprises </span></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-3 ">
                      <div className="row  vl"> <span><strong>Payment</strong></span>
                      <div className="col">
                        <div className="row">
                          <div className="col-7"> <span>Grand Total:</span></div>
                          <div className="col-5"><span>₹ 59,999</span> </div>
                        </div>
                        <div className="row">
                          <div className="col-7"> <span>GST(10%):</span></div>
                          <div className="col-5" ><span>₹ 6,000</span> </div>
                        </div>
                        <div className="row">
                          <div className="col-7"> <span>Price:</span></div>
                          <div className="col-5"><span>₹ 54,000</span> </div>
                        </div>
                        <div className="row">
                          <div className="col-7"> <span>Platform Fees(10%):</span></div>
                          <div className="col-5" style={{color:"red"}}><span>₹ 6,000</span> </div>
                        </div>
                        <div className="row">
                          <div className="col-7"> <span>Payment to Vendor:</span></div>
                          <div className="col-5" style={{color:"green"}}><span>₹ 48,000</span> </div>
                        </div>
                      </div>
                          </div>

                      </div>
                      {/* <div class="vr"></div> */}
                      <div className="col-4">
                        <div className="row d-flex flex-row status">
                        <span><strong>Status</strong></span>
                          <div className="col-6"> <span>Delivery Status:</span> </div>
                          <div className="col-6">
                            <div className="dropdown ">
                              <a className="btn btn-secondary dropdown-toggle bd" href="#" role="button" id="dropdownMenuLink"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Pending
                              </a>
                              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Pending</a></li>
                                <li><a className="dropdown-item" href="#">Delivered</a></li>
                                <li><a className="dropdown-item" href="#">Returned</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="row d-flex flex-row status mt-2 ">
                          <div className="col-6"> <span>Payment Status:</span> </div>
                          <div className="col-6">
                            <div className="dropdown">
                              <a className="btn btn-secondary dropdown-toggle bd" href="#" role="button" id="dropdownMenuLink"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Pending
                              </a>
                              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Pending</a></li>
                                <li><a className="dropdown-item" href="#">Done</a></li>
                                <li><a className="dropdown-item" href="#">Refunded</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="row d-flex flex-row status mt-2">
                          <div className="col-6"> <span>VP Status:</span> </div>
                          <div className="col-6">
                            <div className="dropdown">
                              <a className="btn btn-secondary dropdown-toggle bd" href="#" role="button" id="dropdownMenuLink"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Not Received
                              </a>
                              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Received</a></li>
                                <li><a className="dropdown-item" href="#">Returned</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
                <div className="container-3 p-3">
                  <div className="row">
                    <div className="col-5 ms-3">
                      <h5> <strong>Customer Detail</strong> </h5>
                      <div className="row p-3 Deatils ">
                        
                          <div className="row mt-3">
                            <div className="col-6"><span><strong>Customer Name:</strong></span></div>
                            <div className="col-6"><span>Tony Stark</span></div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-6"><span><strong>Phone Number:</strong></span></div>
                            <div className="col-6"><span>212-970-4133</span></div>
                          </div>
                          <div className="row mt-2 mb-3">
                            <div className="col-6"><span><strong>Email:</strong></span></div>
                            <div className="col-6"><span>tony.stark@starker.com</span></div>
                          </div>
                        <div/>
                      </div>
                    </div>
                    <div className="col-6 ms-5">
                      <h5> <strong>Vendor Detail</strong> </h5>
                      <div className="row p-3 Deatils">
                        <div className="row">
                          <div className="col-6"><span><strong>Vendor Name:</strong></span></div>
                          <div className="col-6"><span>Tony Stark</span></div>
                        </div>
                        <div className="row">
                          <div className="col-6"><span><strong>Store Name:</strong></span></div>
                          <div className="col-6"><span>Stark Enterprises</span></div>
                        </div>
                        <div className="row">
                          <div className="col-6"><span><strong>Phone Number:</strong></span></div>
                          <div className="col-6"><span>212-970-4133</span></div>
                        </div>
                        <div className="row">
                          <div className="col-6"><span><strong>Email:</strong></span></div>
                          <div className="col-6"><span>tony.stark@starker.com</span></div>
                        </div>
                        <div className="row">
                          <div className="col-6"><span><strong>Store Address:</strong></span></div>
                          <div className="col-6"><span>Malibu, California, 90265</span></div>
                        </div>
 
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-3"></div>
          </div>
          </div>
        </div>
        </div>
      );
}