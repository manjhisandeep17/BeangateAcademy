import React from 'react'

export default function Angular() {


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

                            <hr/>

                            <div class="container-fluid mt-5">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="course_left">
                                            <div id="course_page">
                                                <div class="course ">
                                                    <h3>Course Description</h3>
                                                </div>
                                                <div class="slideimg text-center">
                                                    <img src="assets/img/Courses/angular-logo.png" alt="" />
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
                                                    <li><b> Basics of Angular & Java Script</b></li>
                                                    <li>
                                                        <ul class="course-list">
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>1. Overview & installation </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Overview & installation </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; MVC Architecture </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Setting up the Environment </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; First Application </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Working with ng attributes</p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>2. Expressions and Data Binding</h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Number and String Expressions </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Object Binding and Expressions </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Arrays </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Forgiving BehaviourForgiving Behaviour </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Understanding Data Binding </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>3. Working with Directives </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Introduction to directives </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Core Directives </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Conditional Directives </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Styles Directives </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Mouse and Keyboard Events Directives </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>4. Controllers </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Introduction to Controllers </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Programming Controllers & $scope object </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Adding Behaviour to a Scope Object </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Passing Parameters to methods </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Having Array as members in controller scope </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Nested Controllers and Scope Inheritence </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Multiple Controllers and their scopes </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>5. Working With Filters </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Filters </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Built-In Filters </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Built-In Filters </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Uppercase and Lowercase Filters </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Currency and Number Formatting Filters </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; OrderBy Filter </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>6. Working With Input Forms </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Using Simple Form </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Working with Select and Options </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Input Validations </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Using CSS classes </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Form Events </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Custom Model update triggers </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Custom Validations </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>7. Modules </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Why Module? </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Module Loading and Dependencies </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Recommended Setup of Application </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Creation and Retrieval </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>8. Services </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Understanding Services </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Developing Creating Services </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Using a Service </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Injecting Dependencies in a Service </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>9. Ajax in AngularJS </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; $http Service </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; $q Service </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Ajax Impl using $http and $q Service </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>10. Routing </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Introduction to SPA </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Creating HTML Templates </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Configuring Route Provider </p>
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
