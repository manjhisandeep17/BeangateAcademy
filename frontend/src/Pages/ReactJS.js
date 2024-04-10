import React from 'react'

export default function ReactJS() {


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



<div>


<section>
    <div class="container">
        <div class="row py-1">
            <div class="container" style={{marginTop: "0px;"}}>
                <div class="titlepage">
                    <h2>React JS Trainning <strong class="yellow">Programming</strong></h2>
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
                                        <img src="assets/img/Courses/react-native-logo.png" alt="" />

                                    </div>
                                    <p>ReactJS basically is an open-source JavaScript library which is used for developing user
                                        interfaces specifically for single page applications. It’s used for handling view layer for web
                                        and mobile applications. React also allows us to create reusable User Interface components.
                                    </p>
                                </div>
                                <div id="syllabus_page">
                                    <div class="course">
                                        <h3>Syllabus</h3>
                                    </div>
                                    <ul>
                                        <li><b> Basics of React JS Trainning</b></li>
                                        <li>
                                            <ul class="course-list">
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>1. REACTJS ─ OVERVIEW </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; React ─ Features </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; React ─ Advantages </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; React ─ Limitations </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>2. REACTJS ─ ENVIRONMENT SETUP</h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Step 1 -Install Global Packages </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Step 2 -Create the Root Folder </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Step 3 - Add Dependencies and Plugins </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Step 4 - Create the Files </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Step 5 - Set Compiler, Server and Loaders </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Step 6 - index.html </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Step 7 - App.jsx and main.js </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Step 8 - Running the Server </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>3. REACTJS ─ JSX Using JSX </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Nested Elements </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Attributes </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; JavaScript Expressions </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Styling </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Comments </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Naming Convention </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>4. REACTJS ─ COMPONENTS </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Stateless Example </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Stateful Example </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>5. REACTJS ─ PROPS OVERVIEW </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Using Props Default Props </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; State and Props </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>6. REACTJS ─ PROPS VALIDATION </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Validating Props </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>7. REACTJS ─ COMPONENT API </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Set State </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Force Update </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Find Dom Node </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>8. REACTJS ─ COMPONENT LIFE CYCLE </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Lifecycle Methods </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>9. REACTJS ─ FORMS </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Simple Example </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Complex Example </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>10. REACTJS ─ EVENTS </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Simple Example </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Child Events </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>11. REACTJS ─ REFS </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Using Refs </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>12. REACTJS ─ KEYS </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Using Keys </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>13. REACTJS ─ ROUTER </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Install a React Router </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Create Components </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Add a Router </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>14. REACTJS ─ FLUX CONCEPT </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Flux Elements </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Flux Pros </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>15. REACTJS ─ USING FLUX </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Step 1 - Install Redux </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Step 2 - Create Files and Folders </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Step 3 - Actions </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Step 4 - Reducers </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Step 5 - Store </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Step 6 - Root Component </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Step 7 - Other Components </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>16. REACTJS ─ ANIMATIONS </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Step 1 - Install React CSS Transitions Group </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Step 2 - Add a CSS file </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Step 3 - Appear Animation </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Step 4 - Enter and Leave Animations </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>17. Project Work</h5>
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

    </div>
  )
}
