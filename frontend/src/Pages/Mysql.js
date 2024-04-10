import React from 'react'

export default function Mysql() {


    const abc = function course() {
        var c = document.getElementById("course_page");
        var s = document.getElementById("syllabus_page");

        c.style.display = "block";
        s.style.display = "none";
    }

    const xyz = function syllabus() {
        var c = document.getElementById("course_page");
        var s = document.getElementById("syllabus_page");

        c.style.display = "none";
        s.style.display = "block";
    }


    return (
        <div>


            <section>
                <div class="container">
                    <div class="row py-1">
                        <div class="container" style={{ marginTop: "0px;" }}>
                            <div class="titlepage">
                                <h2> Php My Sql <strong class="yellow">Programming</strong></h2>
                            </div>
                        </div>
                        <div class="container-fluid px-5">

                            <div class="course">
                                <div class="btn" onClick={abc}>Course Description</div>
                                <span class="course_span">|</span>
                                <div class="btn" onClick={xyz}>Syllabus</div>
                            </div>

                            <hr />

                            <div class="container-fluid mt-5">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="course_left">
                                            <div id="course_page">
                                                <div class="course ">
                                                    <h3>Course Description</h3>
                                                </div>
                                                <div class="slideimg text-center">
                                                    <img src="assets/img/Courses/sql.png" alt="" />

                                                </div>
                                                <p>PHP sql training is the ideal target to set your career in developement. Acquiring complete
                                                    knowledge about PHP will enhance more your skill to land on best software developement sector.
                                                    This program will help you to sharpen your knowledge on core as well as advanced proficiency.
                                                </p>
                                            </div>
                                            <div id="syllabus_page">
                                                <div class="course">
                                                    <h3>Syllabus</h3>
                                                </div>
                                                <ul>
                                                    <li><b> Basics of Android</b></li>
                                                    <li>
                                                        <ul class="course-list">
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>1. HTML </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Introduction to Php </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Introduction To HTML </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Html Basic Tag </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; HTML Image, Hyperlink </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; HTML List </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; HTML Table </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; HTML Frame </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; HTML Forms </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; HTML Font </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Marquee Tag </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>2. DHTML (CSS)</h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Introduction to CSS </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; CSS Background </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; CSS Margin </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; CSS Padding </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; CSS Border </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; CSS Float </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; CSS Links </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; CSS Text </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; CSS Outline </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>3. JavaScript </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Introduction to Java Script </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Java Script Variable </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Statement </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Operator </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Function </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Alerts </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Array </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Form Validation </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Java script Event </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Java script Date function </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; GetElementById </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>4. Server Knowledge </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Server </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Types of server </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; How to Install Server </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Server Setting </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Server Setting and Php setting </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>5. Core PHP </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Syntax of Php </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Echo , Variable </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Php String </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Php Operator </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Php Statement </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Php Loop </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Php function </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Php Array </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Php date Function </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Php File </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Php Cookie </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Php Session </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Php Oops </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Php Class and object </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Php File Upload </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>6. Php+ mysql </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Introduction to Database </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Sql and Mysql </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Use Mysql </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Database Connectivity </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Create Database and Table </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Mysql Command </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Select </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Update </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Delete </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Insert </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Import </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Export </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Other Myql command </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>7. Advanced Php (CMS) </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Joomla </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Drupal </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Wordpress </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Mediawiki </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; PhpBB </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Magento </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>8. Jquery </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Introduction To Jquery </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Jquery Library </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Effective and attractive Webpage Using Jquery </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>9. Webhosting </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Introduction To WebHosting </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Ftp Server </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; File Upload </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Cpanel </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Create New User </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Database File Uplaod </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>10. Project Work </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; System Analysis & Design </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; SRS, FRS </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; DFD </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 course_right mt-5 ">
                                        <div class="card">
                                            <div class="card-header text-center">
                                                <h4>Batch Details</h4>
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-md-8">
                                                        Duration
                                                    </div>
                                                    <div class="col-md-4">
                                                        6-12 Month's
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-8">
                                                        Availiable Seats
                                                    </div>
                                                    <div class="col-md-4">
                                                        150
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-8">
                                                        Online Trainning Schedule:
                                                    </div>
                                                    <div class="col-md-4">
                                                        11:00am To 02:00pm
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-8">
                                                        Offline Trainning Schedule:
                                                    </div>
                                                    <div class="col-md-4">
                                                        11:00am To 02:00pm
                                                    </div>
                                                </div>
                                                <div class="all-courses text-center mt-4"> <a href="assets/register page/register page/rf.html"
                                                    class="get-started-btn my-3">
                                                    Register Here
                                                </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


        </div>
    )
}
