import React from 'react'
import "./Register.css"


export default function RegisterWorkshop() {
  return (
    <div>
        


        <body style={{backgroundColor:"#dffcfc"}} className='bodyregistermaintop'>
                <div class="registermain " >
                    <header style={{color: "#5fcf80;"}}>Registration</header>

                    <form action="#" className=''>
                        <div class="form first" >
                            <div class="details personal">
                                <span class="title">Personal Details</span>

                                <div class="fields">
                                    <div class="input-field">
                                        <label>Full Name</label>
                                        <input type="text" placeholder="Enter your name" required />
                                    </div>

                                    <div class="input-field">
                                        <label>Date of Birth</label>
                                        <input type="date" placeholder="Enter birth date" required />
                                    </div>

                                    <div class="input-field">
                                        <label>Email</label>
                                        <input type="text" placeholder="Enter your email" required />
                                    </div>

                                    <div class="input-field">
                                        <label>Mobile Number</label>
                                        <input type="number" placeholder="Enter mobile number" required />
                                    </div>

                                    <div class="input-field">
                                        <label>Gender</label>
                                        <select required>
                                            <option disabled selected>Select gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Others</option>
                                        </select>
                                    </div>

                                    <div class="input-field">
                                        <label>Qualificaation</label>
                                        <input type="text" placeholder="Enter Your Pincode" required />
                                    </div>

                                    <div class="input-field ">
                                        <label>Address</label>
                                        <textarea type="text" placeholder="Enter Your Address" required>
                                        </textarea>
                                    </div>

                                    <div class="input-field">
                                        <label>Country</label>
                                        <input type="text" required />
                                    </div>

                                    <div class="input-field">
                                        <label>State</label>
                                        <input type="text" required />
                                    </div>

                                    <div class="input-field">
                                        <label>City/town</label>
                                        <input type="text" required />
                                    </div>


                                    <div class="input-field">
                                        <label>Pin Code</label>
                                        <input type="text" placeholder="Enter Your Pincode" required />
                                    </div>

                                    <div class="input-field">
                                        <label>Branch</label>
                                        <select required>
                                            <option disabled selected>Select Branch</option>
                                            <option>Piplani</option>
                                            <option>Jawahar Chowk</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="details ID ">
                                <span class="title">Course Details</span>

                                <div class="fields ">
                                    <div class="input-field">
                                        <label>Your course's</label>
                                        <select required>
                                            <option disabled selected>Select </option>

                                            <option>Html Css</option>
                                            <option>Java Script</option>
                                            <option>C & C++</option>
                                            <option>Java</option>
                                            <option>Paython</option>
                                            <option>Angular</option>
                                            <option>Android</option>
                                            <option>My Sql</option>
                                            <option>My Sql Server</option>
                                            <option>Oracel</option>
                                            <option>Networking</option>
                                            <option>Data Science</option>
                                            <option>Digital Marketing</option>
                                            <option>Ethical Hacking</option>
                                            <option>Linux</option>
                                            <option>Machine Learning</option>
                                            <option>Full Stack Devloper</option>
                                            <option>Node JS </option>
                                            <option>React JS</option>
                                            <option>Mean Stack Devloper</option>


                                        </select>


                                    </div>

                                    <button class="nextBtn">
                                        <span class="btnText">Submit</span>
                                        <i class="uil uil-navigator"></i>
                                    </button>

                                </div>
                            </div>


                        </div>
                    </form>
                </div>



                <script src="rg.js"></script>
            </body>


    </div>
  )
}
