import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Clasess.css";


export default function Clasess() {


    
    

    return (
        <div>

            <main id="main " className=' bgchange'>


                <section id="features" class="features">
                    <div class="container " data-aos="fade-up">

                        <div class="section-title">
                            <h2 class="animate__animated animate__bounceInRight text-dark">Our Live Clasess <small class="animate__animated animate__bounceInLeft">Update your skills with newest courses</small></h2>
                        </div>

                        <div class="row" data-aos="zoom-in" data-aos-delay="100">
                            <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                                <div class="icon-box  fa-3x">
                                    <img src="assets/images/Trainers/live.png" width="50" height="50"></img>
                                    <h3 className=''><a href="LiveClasess">live Clasess</a> </h3>
                                    <i class="fa-solid fa-angles-right fa-beat p-5"></i>
                                    
                                </div>
                                
                            </div>
                            <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                                <div class="icon-box  ">
                                    <img src="assets/images/Trainers/practice.png" width="50" height="50"></img>
                                    <h3><a href="Payment">Practice</a></h3>
                                    <i class="fa-solid fa-angles-right fa-beat p-5"></i>

                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4">
                                <div class="icon-box ">
                                    <img src="assets/images/Trainers/test.png" width="50" height="50"></img>
                                    <h3><a href="java">Tests</a></h3>
                                    <i class="fa-solid fa-angles-right fa-beat p-5"></i>

                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                                <div class="icon-box ">
                                    <img src="assets/images/Trainers/Solution.png" width="50" height="50"></img>
                                    <h3><a href="Python">Doubts & Solutions</a></h3><br/>
                                    <i class="fa-solid fa-angles-right fa-beat p-5"></i>

                                    
                                </div>
                               
                            </div>
                            
                        </div>
                        
                    </div>
                </section>


            </main>



        </div>

    )
}
