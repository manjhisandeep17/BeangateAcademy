import React from 'react'

export default function Header() {
    return (
        <div>





            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center">

                    <a href="index.html" class="logo me-auto"><img src="assets/img/Beangate-logo.png"
                        alt="" class="img-fluid" /></a>

                    <nav id="navbar" class="navbar order-last order-lg-0">
                        <ul>
                            <li><a class="active" href="/">Home</a></li>
                            <li><a href="courses">Courses</a></li>

                            <li class="dropdown"><a href="#"><span>Training</span> <i class="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="OnlineTraining">Online Training</a></li>
                                    <li><a href="Internship">Internship</a></li>
                                </ul>
                            </li>

                            <li class="dropdown"><a href="#"><span>Study Material</span> <i class="bi bi-chevron-down"></i></a>
                                <ul>

                                    <li><a href="DigitalNotes">Digital Notes</a></li>
                                    <li><a href="InterviewQuestion">Interview Questions</a></li>
                                </ul>
                            </li>
                            <li class="dropdown"><a href="#"><span>About</span> <i class="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="About">About Us</a></li>
                                    <li><a href="TermsOfServices">Terms Of services</a></li>
                                    <li><a href="PrivacyAndPolicy">Privacy Policy</a></li>
                                </ul>
                            </li>
                            <li><a href="Contact">Contact</a></li>
                            {/* <li><a class="" href="Clasess">clasess</a></li> */}

                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>

                    </nav>

                    <a href="Login" target="_blank" class="get-started-btn">Login</a>

                </div>
            </header>


        </div>
    )
}
