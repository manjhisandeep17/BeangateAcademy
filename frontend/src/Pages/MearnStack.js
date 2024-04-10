import React from 'react'

export default function MearnStack() {

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
                                <h2>MERN Stack <strong class="yellow">Programming</strong></h2>
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
                                                    <img src="http://beangates.com/BG_Academy/assets/course/1678185854meanstack.png" alt="" />
                                                </div>
                                                <p>This course provides a comprehensive introduction to the MERN Stack, a popular web development stack consisting of MongoDB, Express.js, React, and Node.js. Students will learn the fundamentals of each component and how to integrate them to build robust and scalable web applications.

                                                    The course will cover a wide range of topics, including setting up the development environment, creating and managing databases with MongoDB, building RESTful APIs with Node.js and Express.js, developing front-end components with React, and deploying MERN Stack applications to production environments.

                                                    By the end of the course, students will be able to:

                                                    Understand the architecture and components of the MERN Stack
                                                    Develop and manage databases using MongoDB
                                                    Build RESTful APIs using Node.js and Express.js
                                                    Develop front-end components using React
                                                    Deploy MERN Stack applications to production environments
                                                    This course is ideal for students with a background in web development or programming who are interested in learning the MERN Stack and its applications. Prior knowledge of HTML, CSS, JavaScript, and web development concepts is recommended, but not required.                </p>
                                            </div>
                                            <div id="syllabus_page">
                                                <div class="course">
                                                    <h3>Syllabus</h3>
                                                </div>
                                                <ul>

                                                    <p>&nbsp;</p><h4>Here's a syllabus for the MERN Stack course:</h4><h2>&nbsp;</h2><p><strong>Week 1: Introduction to MERN Stack</strong></p><ul><li>Overview of MERN Stack and its components</li><li>Understanding Node.js and its role in MERN Stack</li><li>Setting up the development environment</li><li>Basic concepts of React and MongoDB</li></ul><h2>&nbsp;</h2><p><strong>Week 2: Node.js and Express.js</strong></p><ul><li>Introduction to Node.js and its features</li><li>Understanding Express.js and its architecture</li><li>Building a simple web application using Node.js and Express.js</li><li>Working with RESTful APIs</li></ul><h2>&nbsp;</h2><p><strong>Week 3: MongoDB</strong></p><ul><li>Introduction to MongoDB and its features</li><li>Understanding NoSQL databases</li><li>Working with collections and documents</li><li>CRUD operations with MongoDB</li></ul><h2>&nbsp;</h2><p><strong>Week 4: React Basics</strong></p><ul><li>Introduction to React and its architecture</li><li>Setting up a React application</li><li>Building components and services</li><li>Understanding the basics of reactive programming with Redux</li></ul><h2>&nbsp;</h2><p><strong>Week 5: Advanced React</strong></p><ul><li>Working with forms and templates</li><li>Routing and navigation in React</li><li>Introduction to Material-UI</li><li>Introduction to server-side rendering with Next.js</li></ul><h2>&nbsp;</h2><p><strong>Week 6: MERN Stack Project</strong></p><ul><li>Students will work on a MERN Stack project, integrating the knowledge and skills learned in the course into a real-world application.</li></ul>                </ul>
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
                                                        6 months                            </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-8">
                                                        Availiable Seats
                                                    </div>
                                                    <div class="col-md-4">
                                                        25                            </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-8">
                                                        Online Trainning Schedule:
                                                    </div>
                                                    <div class="col-md-4">
                                                        2023-03-07 16:00:00                            </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-8">
                                                        Offline Trainning Schedule:
                                                    </div>
                                                    <div class="col-md-4">
                                                        2023-03-07 16:00:00                          </div>
                                                </div>
                                                <div class="all-courses text-center mt-4"> <a href="http://beangates.com/BG_Academy/home/signup" class="get-started-btn my-3">
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
