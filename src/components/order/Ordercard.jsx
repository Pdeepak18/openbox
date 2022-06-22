import "./ordercard.css"
import iPhone from "./iphone.jpg"

export default function Ordercard(){

  return(
    <div>
    <div className="row">
      
      <div className="col-8">

      
        <div className="card">

          <div className="card-header ">
            <div className="row">
              <div className="col-2">
                <div className="row"><span> <strong>ORDER PLACED</strong> </span></div>
                <div className="row"><span>20 June 2022</span></div>
              </div>
              <div className="col-2">
                <div className="row"><span> <strong>TOTAL</strong> </span></div>
                <div className="row"><span>₹ 59,999</span></div>
              </div>
              <div className="col-2">
                <div className="row"><span> <strong>SHIP TO</strong> </span></div>
                <div className="row"><span>Tony Strak</span></div>
              </div>
              <div className="col-2">
                <div className="row"><span> <strong>SOLD BY</strong> </span></div>
                <div className="row"><span>Stark Enterprises</span></div>
              </div>
              <div className="col-4">
                <div className="row"><span> <strong>ORDER  # 405-6059282-4595534 </strong> </span></div>
                <div className="row"><button type="button" className="btn-sm bd">View order details</button>
                </div>
              </div>
            </div>
          </div>

          <div className="card-body">
            <div className="row  ">
              <div className="col-8">
                <div className="row">
                  <div className="col-4  productIMG">
                    <img src={iPhone} 
                    width="100px"
                    height="100px"
                    alt="Product Photo" />

                  </div>
                  <div className="col-8 productDetails">
                    <div className="row"><span> <strong>Apple iPhone 11(128GB) -White</strong> </span></div>
                    <div className="row"><span> <strong>₹ 59,999</strong> </span></div>
                    <div className="row"><span> Sold by : Appario Sellers </span></div>
                  </div>
                </div>

              </div>
              <div className="col-4 ">
                <div className="row"><button type="button" className="btn-sm ba">Pending</button></div>
                <div className="row mt-2"><button type="button" className="btn-sm bd">Delivered</button></div>
                <div className="row mt-2"><button type="button" className=" btn-sm bd">Returned</button></div>
              </div>
            </div>
          </div>
        </div>
        </div>

      </div>
      <hr />
      </div>
  );

}