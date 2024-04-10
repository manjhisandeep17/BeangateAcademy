import React from 'react'

export default function PHP() {
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
                        <div class="container" style={{ marginTop: "20px;" }}>
                            <div class="titlepage">
                                <h2>PHP Full Stack <strong class="yellow">Programming</strong></h2>
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
                                                    <img src="http://beangates.com/BG_Academy/assets/course/1678187043phplogo.png" alt="" />
                                                </div>
                                                <p>A full-stack PHP course typically covers both the front-end and back-end development aspects of building web applications using PHP. The course is designed to equip students with the skills and knowledge needed to build complete web applications from start to finish.


                                                    Here's an outline of the topics that may be covered in a PHP Full Stack course :


                                                    Introduction to PHP :
                                                    Basic syntax and data types, variables, operators, control structures, functions, and arrays.


                                                    Object-Oriented Programming (OOP) in PHP:
                                                    Classes, objects, inheritance, polymorphism, and encapsulation.


                                                    Web Development Basics:
                                                    HTML, CSS, JavaScript, and jQuery.
                                                    MySQL:
                                                    Introduction to database design and SQL, creating and modifying tables, queries, and data manipulation.


                                                    PHP Frameworks:
                                                    An introduction to popular PHP frameworks like Laravel, CodeIgniter, and CakePHP.


                                                    Front-end Frameworks:
                                                    Introduction to popular front-end frameworks like Angular, React, and Vue.js.


                                                    MVC Architecture:
                                                    Understanding of Model-View-Controller architecture, routing, and request-response cycle.


                                                    APIs:
                                                    Introduction to APIs, JSON, and RESTful APIs.


                                                    Deployment:
                                                    Deploying PHP applications to servers, version control with Git, and continuous integration.


                                                    Project Development:
                                                    A complete end-to-end project development cycle, covering front-end and back-end development and deployment.


                                                    The course may also cover other relevant topics like security, performance optimization, and best practices in web development using PHP. The duration of a full-stack PHP course may vary depending on the institute or organization offering it but typically ranges from a few weeks to several months.                </p>
                                            </div>
                                            <div id="syllabus_page">
                                                <div class="course">
                                                    <h3>Syllabus</h3>
                                                </div>
                                                <ul>

                                                    <h3>Here's a syllabus for the PHP Full Stack Development course:</h3><p>&nbsp;</p><h4>Week-1: Introduction to PHP</h4><ul><li>Overview of PHP and its uses in web development</li><li>Understanding PHP syntax and control structures</li><li>Basic PHP functions and data types</li><li>Writing and executing PHP scripts</li></ul><h4>Week-2: MySQL Database</h4><ul><li>Introduction to MySQL database and its importance in web development</li><li>Creating and managing a database</li><li>Structuring tables and using SQL queries</li><li>Connecting PHP to MySQL and querying data</li></ul><h4>Week-3: HTML, CSS, and JavaScript</h4><ul><li>Understanding the fundamentals of HTML and CSS</li><li>Creating and styling web pages using CSS</li><li>Introduction to JavaScript and its use in client-side scripting</li><li>Handling events and manipulating the DOM with JavaScript</li></ul><h4>Week-4: Object-Oriented Programming in PHP</h4><ul><li>Understanding the principles of object-oriented programming (OOP)</li><li>Implementing classes and objects in PHP</li><li>Using inheritance, encapsulation, and polymorphism in PHP</li><li>Creating and using interfaces and abstract classes</li></ul><h4>Week-5: PHP Frameworks</h4><ul><li>Introduction to popular PHP frameworks like Laravel or CodeIgniter</li><li>Installing and configuring a PHP framework</li><li>Using a framework to build web applications with a Model-View-Controller (MVC) architecture</li></ul><h4>Week-6: Advanced PHP Topics</h4><ul><li>Handling user authentication and authorization in PHP</li><li>Sending emails and working with files in PHP</li><li>Best practices for optimizing PHP code for performance and scalability</li></ul><h4>Week-7: Final Project</h4><p>Using the skills and knowledge acquired throughout the course, students will work on a final project to build a full-stack web application using PHP and MySQL.</p><h4>Important :</h4><p>Throughout the course, students will work on various hands-on projects and assignments to reinforce their learning and gain practical experience. They will also receive guidance and support from experienced instructors.</p>                </ul>
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
                                                        4 months                            </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-8">
                                                        Availiable Seats
                                                    </div>
                                                    <div class="col-md-4">
                                                        15                            </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-8">
                                                        Online Trainning Schedule:
                                                    </div>
                                                    <div class="col-md-4">
                                                        2023-03-07 16:00:00 </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-8">
                                                        Offline Trainning Schedule:
                                                    </div>
                                                    <div class="col-md-4">
                                                        2023-03-07 16:00:00                          </div>
                                                </div>
                                                <div class="all-courses text-center mt-4"> <a href="Register" class="get-started-btn my-3">
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
