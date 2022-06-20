import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
  let GSTIN = "1028HDSAJ"
  return (
    <div className="row">

      <div>
        <h2>
          <strong>
            Vendor Details
          </strong>
        </h2>

      </div>


      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header><strong>Vendor Details</strong> </Accordion.Header>
          <Accordion.Body>
            <div className="row">
              <div className="col">
                <div className="VendorDetails">
                  <span><strong>Name :</strong> </span>
                </div>
                <div className="VendorDetails">
                  <span><strong>Phone No. :</strong> </span>
                </div>
                <div className="VendorDetails">
                  <span><strong>Email :</strong></span>
                </div>
                <div className="VendorDetails">
                  <span> <strong>Location :</strong> </span>
                </div>
              </div>
              <div className="col">
                <div className="VendorDetails">

                  <span>Tony Stark</span>
                </div>
                <div className="VendorDetails">
                  <span>212-970-4133</span>
                </div>
                <div className="VendorDetails">
                  <span>tony.stark@stark.com</span>
                </div>
                <div className="VendorDetails">
                  <span>10880 Malibu Point, 90265</span>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>


        <Accordion.Item eventKey="1" >
          <Accordion.Header ><strong>Store Details </strong></Accordion.Header>
          <Accordion.Body >
            <div class="row">
              <div class="col">
                <div class="StoreDetails"><span><strong>Store Name:</strong></span>  </div>
                <div class="StoreDetails"><span><strong>GSTIN: </strong></span> </div>
                <div class="StoreDetails"><span><strong>Address: </strong></span></div>
                <div class="StoreDetails"><span><strong>Date of Joining: </strong></span></div>
              </div>
              <div class="col">
                <div class="StoreDetails"><span>Stark Enterprises</span> </div>
                <div class="StoreDetails"><span>29GGGGG1314R9Z6 </span></div>
                <div class="StoreDetails"><span>10880 Malibu Point, 90265</span></div>
                <div class="StoreDetails"><span>14th June | 2022</span></div>
              </div>
            </div>

          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2" >
          <Accordion.Header ><strong>Bank Details</strong></Accordion.Header>
          <Accordion.Body >
          <div class="row">
            <div class="col">
              <div class="bankDetails"><span><strong>Bank Account Holder Name: </strong></span>
              </div>
              <div class="bankDetails"><span><strong>Bank Account Number:</strong></span></div>
              <div class="bankDetails"><span><strong>IFSC Code:</strong></span></div>
              <div class="bankDetails"><span><strong>Bank Name:</strong></span></div>
              <div class="bankDetails"><span><strong>Branch Name:</strong></span> </div>
              <div class="bankDetails"><span><strong>City:</strong></span></div>
              <div class="bankDetails"><span><strong>State:</strong></span></div>
            </div>
            <div class="col">
              <div class="bankDetails"><span>Anthony Stark</span>
              </div>
              <div class="bankDetails"><span>0112345678 </span> </div>
              <div class="bankDetails"><span>PAYPAL0MAL</span> </div>
              <div class="bankDetails"><span>PayPal</span> </div>
              <div class="bankDetails"><span>Getty Villa</span> </div>
              <div class="bankDetails"><span>Malibu</span> </div>
              <div class="bankDetails"><span>California</span> </div>
            </div>
          </div>

          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3" >
          <Accordion.Header ><strong>Documents </strong></Accordion.Header>
          <Accordion.Body >
            <div class="row">
            <div class="row">
            <div class="col">
              <div class="Documents"><span><strong>Address Proof: </strong></span></div>
              <div class="Documents"><span><strong>Signature:</strong></span></div>
              <div class="Documents"><span><strong>Cancelled Cheque</strong></span></div>              
            </div>
            <div class="col">
              <div class="Documents"><button type="button" class="btn btn-sm btn-outline-warning">View</button></div>
              <div class="Documents"><button type="button" class="btn btn-sm btn-outline-warning">View</button></div>
              <div class="Documents"><button type="button" class="btn btn-sm  btn-outline-warning">View</button></div>
            </div>
          </div>
          </div>

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      



    </div>
  );
}

export default BasicExample;