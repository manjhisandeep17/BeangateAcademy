import React from 'react'

export default function NodeJS() {

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
                                <h2>Node JS Trainning <strong class="yellow">Programming</strong></h2>
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
                                                    <img src="assets/img/Courses/nodejs-removebg-preview.png" alt="" />

                                                </div>
                                                <p> 1. Access in depth, hand on training for web designing and Node JS Programming.
                                                    2.Learn from experts who are having the company experience.
                                                    3.We also provide you the knowledge how to make your project live.
                                                    4.with us you can become a full fledged Node JS engineer.
                                                </p>
                                            </div>
                                            <div id="syllabus_page">
                                                <div class="course">
                                                    <h3>Syllabus</h3>
                                                </div>
                                                <ul>
                                                    <li><b> Basics of Node JS Trainning</b></li>
                                                    <li>
                                                        <ul class="course-list">
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>1. Introduction </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; What is Nodejs </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Features of Nodejs </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Who Uses Nodejs </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Concepts </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Where to Use Nodejs </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Where Not to Use Nodejs </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>2. Environment Setup & Installation </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Try it Option Online </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Local Environment Setup </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Text Editor </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; The Nodejs Runtime </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Download Nodejs Archive </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Installation on UNIX/Linux/Mac OS X and SunOS </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Installation on Windows </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Verify Installation: Executing a File </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Creating Nodejs Application </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>3. REPL Terminal</h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Online REPL Terminal </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; REPL Commands </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Stopping REPL </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>4. NPM </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Installing Modules using NPM </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Global vs Local Installation </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Using package json </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Attributes of Package json </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Uninstalling a Module </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Updating a Module </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Search a Module </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Create a Module </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>5. Callback Concept </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; What is Callback? </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Blocking Code Example </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Non-Blocking Code Example </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>6. Event Loop </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Event-Driven Programming </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Example </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; How Node Applications Work? </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>7. Event Emitter </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; EventEmitter Class </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Methods </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Class Methods </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Events </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Example </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>8. Buffers </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Creating Buffers </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Writing to Buffers </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Reading from Buffers </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Convert Buffer to JSON </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Concatenate Buffers </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Compare Buffers </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Copy Buffer </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Slice Buffer </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Buffer Length </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Methods Reference </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Class Methods </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>9. Streams </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; What are Streams? </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Reading from a Stream </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Writing to a Stream </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Piping the Streams </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Chaining the Streams </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>10. File System </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Synchronous vs Asynchronous </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Open a File </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Get File Information </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Writing a File </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Reading a File </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Closing a File </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Truncate a File </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Delete a File </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Create a Directory </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Read a Directory </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Remove a Directory </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Methods Reference </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>11. Global Objects </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; __filename </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; __dirname </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; setTimeout(cb, ms) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; clearTimeout (t) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; setInterval(cb, ms) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Global Objects </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Nodejs </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; iv </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Console Object </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Process Object </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>12. Utility Modules </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; OS Module </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Path Module </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Net Module </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; DNS Module </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Domain Module </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>13. Web Module </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; What is a Web Server? </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Web Application Architecture </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Creating a Web Server using Node </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Make a request to Nodejs server </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Creating a Web client using Node </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>14. Express Framework </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Express Overview </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Installing Express </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Hello world Example </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Request & Response </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Request Object </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Response Object </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Basic Routing </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Serving Static Files </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; GET Method </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; POST Method </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; File Upload </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Cookies Management </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>15. RESTful API </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; What is REST Architecture? </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; HTTP methods </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; RESTful Web Services </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Creating RESTful for a Library </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; List Users </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Add Users </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Show Detail </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Delete a User </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>16. Scaling an application </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; The exec() method </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; The spawn() Method </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; The fork() Method </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>17. Packaging </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; JXcore Installation </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Packaging the Code </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Launching JX File </p>
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
