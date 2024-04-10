import React from 'react'

export default function CPlusplus() {


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
                        <div class="container" style={{marginTop: "20px;"}}>
                            <div class="titlepage">
                                <h2>Angular & Java Script <strong class="yellow">Programming</strong></h2>
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
                                                    <img src="assets/img/Courses/c-plus-plus1.png" alt="" />
                                                </div>
                                                <p>1. Access in depth, hand on training for web designing and angular JS Programming.
                                                    2.Learn from experts who are having the company experience.
                                                    3.To improve the vision of developement with our independent platform under the guidance of our
                                                    experience trainers and makes your concepts more strong.
                                                    4.We also provide you the knowledge how to make your project live.
                                                    5.with us you can become a full fledged Angular JS engineer.
                                                </p>
                                            </div>
                                            <div id="syllabus_page">
                                                <div class="course">
                                                    <h3>Syllabus</h3>
                                                </div>
                                                <ul>
                                                    <li><b> Basics of C & C++</b></li>
                                                    <li>
                                                        <ul>
                                                            <li>Programming Fundamentals</li>
                                                            <li>Operators & Expressions</li>
                                                            <li>Data Input & Output,Loops and Decisions</li>
                                                            <li>Functions ,Arrays,Pointers,Strings</li>
                                                            <li>Control Structure,File Stream</li>
                                                            <li>Operators and Function Overloading</li>
                                                            <li>C++, Data Structure Introduction of C++</li>
                                                            <li>OOPS, Virtual Functions</li>
                                                            <li>File & Streams</li>
                                                            <li>Implementing Inheritance and Polymorphism</li>
                                                            <li>Applications Development Wizards</li>
                                                            <li>DAO,ODBC,RDO,ADO</li>
                                                            <li>Templates and Exceptions Handling</li>
                                                            <li>Event Driven Programming</li>
                                                            <li>Understanding Code Modules</li>
                                                            <li>Introductions of SQL</li>
                                                            <li>Data Reports</li>
                                                        </ul>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 course_right mt-5 ">
                                        <div class="card">
                                            <div class="card-header  text-center">
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
