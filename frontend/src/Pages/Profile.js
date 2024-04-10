

import React from 'react';
import "./Profile.css";



export default function Profile() {

   
    return (
        <div>

            <form method='post '>
                <div className='container-md emp-profile'>
                    <div className='row'>
                        <div class="col-md-3 leftsh abc">
                            <div class="profile-img">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                                    alt="" />
                                <div class="file btn btn-lg btn-primary">
                                    Change Photo
                                    <input type="file" name="file" />
                                </div>
                            </div>
                            <div className='text-center'>
                                <h3>
                                    Priya Goutam
                                </h3>
                                <h6>
                                    Full Stack Developement
                                </h6>
                            </div>
                            <div class="profile-work mt-3 mb-3">
                                <h4 className=''> <i class="fa-solid fa-circle-info fa-beat"></i> Personal Details </h4>
                                <a href="">Phone No : 1234567890</a><br />
                                <a href="">D.O.B : 20/06/1999</a><br />
                                <a href="">Gender: Male </a><br />
                                <a href="">Email Address:  abc@gmail.com</a><br />
                                <a href="">Full Address:  Piplani Bhopal</a><br />
                                <h4> <i class="fa-solid fa-graduation-cap fa-beat"></i> Qualification</h4>

                                <a href=""> B.Tech</a><br />
                            </div>
                        </div>
                        <div className='col-md-9 leftsh '>
                            <div class="profile-head">

                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        {/* <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                                        aria-controls="home" aria-selected="True">Course Details</a> */}
                                        <a class="nav-link active" data-toggle="tab" href="#home"> <i class="fa-solid fa-book fa-beat"></i> Course Details</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                                            aria-controls="profile" aria-selected="false"> <i class="fa-solid fa-hand-holding-dollar fa-beat"></i> Fees Details</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#Assignment" role="tab"
                                            aria-controls="profile" aria-selected="false"> <i class="fa-solid fa-book fa-beat"></i>Assignments</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#Projects" role="tab"
                                            aria-controls="profile" aria-selected="false"> <i class="fa-solid fa-laptop-file fa-beat"></i> Projects</a>
                                    </li>
                                </ul>

                            </div>
                            <div class="tab-content profile-tab card p-5 abcd " id="myTabContent">
                                <div id="home" class="container tab-pane active"><br />
                                    <div class="row w-50">
                                        <div class="col-md-6">
                                            <label>Course Name</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Java Full Stack</p>
                                        </div>
                                    </div>
                                    <div class="row w-50">
                                        <div class="col-md-6">
                                            <label>Course Duration</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>6 Month</p>
                                        </div>
                                    </div>
                                    <div class="row w-50">
                                        <div class="col-md-6">
                                            <label>Course Start Date</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>15/06/2023</p>
                                        </div>
                                    </div>
                                    <div class="row w-50">
                                        <div class="col-md-6">
                                            <label>Course End Date</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>15/12/2023</p>

                                        </div>
                                    </div>
                                    <div class="row w-50">
                                        <div class="col-md-6">
                                            <label>Teach By</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Pankaj Sir</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade mart" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label>Paid</label>
                                        </div>
                                        <div class="col-md-4">
                                            <p>00</p>
                                        </div>
                                        <div class="col-md-4">
                                            <p>15 Aug 2023</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label>UnPaid</label>
                                        </div>
                                        <div class="col-md-4">
                                            <p>00</p>
                                        </div>
                                        <div class="col-md-4">
                                            <p>15 Aug 2023</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label>Total Fees</label>
                                        </div>
                                        <div class="col-md-4">
                                            <p>00</p>
                                        </div>
                                        <div class="col-md-4">
                                            <p>15 Sep 2023</p>
                                        </div>
                                    </div>

                                </div>
                                <div class="tab-pane fade mart " id="Assignment" role="tabpanel" aria-labelledby="profile-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Assignment -1</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Submited</p>
                                        </div>
                                        
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Assignment -2</label>

                                        </div>
                                        <div class="col-md-6">
                                            <p>Not Submitted</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Assignment -3</label>

                                        </div>
                                        <div class="col-md-6">
                                            <p>Submited</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Assignment -4</label>

                                        </div>
                                        <div class="col-md-6">
                                            <p>Not Submitted</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Assignment -5</label>

                                        </div>
                                        <div class="col-md-6">
                                            <p>Submited</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Assignment -6</label>

                                        </div>
                                        <div class="col-md-6">
                                            <p>Not Submitted</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Assignment -7</label>

                                        </div>
                                        <div class="col-md-6">
                                            <p>Submited</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Assignment -8</label>

                                        </div>
                                        <div class="col-md-6">
                                            <p>Not Submitted</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Assignment -9</label>

                                        </div>
                                        <div class="col-md-6">
                                            <p>Submited</p>
                                        </div>
                                    </div><div class="row">
                                        <div class="col-md-6">
                                            <label>Assignment -10</label>

                                        </div>
                                        <div class="col-md-6">
                                            <p>Not Submitted</p>
                                        </div>
                                    </div>
                                    

                                </div>

                                <div class="tab-pane fade mart " id="Projects" role="tabpanel" aria-labelledby="profile-tab">
                                    <div class="row">
                                        <h3 className='m-2'> Minor Project's</h3>
                                        <div class="col-md-6">
                                            <label>Project -1</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Submited</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Project -2</label>

                                        </div>
                                        <div class="col-md-6">
                                            <p>Not Submitted</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Project -3</label>

                                        </div>
                                        <div class="col-md-6">
                                            <p>Submited</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <h3 className='m-2'> Major Project's</h3>
                                        <div class="col-md-6">
                                            <label>Project -1</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Submited</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Project -2</label>

                                        </div>
                                        <div class="col-md-6">
                                            <p>Not Submitted</p>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                            
                        </div>


                    </div>
                </div>
            </form>

        </div>
    )
}
