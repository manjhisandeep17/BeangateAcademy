import React from 'react'

export default function Payment() {
  return (
    <div>
        
        <div class="site-section bg-image overlay-primary" >
                <div class="container mt-3 mb-3">
                    <div class="row align-items-stretch mt-5">
                        
                        <div className='col-md-5'>
                            <img src="assets/img/barcode.png" alt="" class="img-fluid shadow" style={{border: "1px solid #fff", width:"100%"}}  />

                        </div>
                        <div class="col-md-7">
                            <div class="bg-white h-100 p-4 shadow">
                                {/* <h3 class="mb-4 text-cursive">Donate Now</h3> */}
                                <div class="">
                                    <div class="card-head">
                                        <div class="card-body " style={{marginLeft: "3rem"}}>
                                            <h2 class="mb-5 text-cursive">BeanGate IT Solution:-</h2>
                                            {/* <h3 class="mb-5 text-cursive">Dwarka Women Child Care Society:-</h3>  */}
                                            <h5 class="mb-4  ml-5">Bank Name:-  HDFC Bank LTD</h5>
                                            <h5 class="mb-4  ml-5">Branch:- Piplani , Bhopal</h5>
                                            <h5 class="mb-4  ml-5">SB Account Number:- 04001450000192</h5>
                                            <h5 class="mb-4  ml-5">IFSC Code:- HDFC0000400</h5>
                                            <h5 class="mb-4  ml-5">MICR Code:-462240003</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}
