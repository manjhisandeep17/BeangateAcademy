import React from 'react'

export default function Bootstrap() {

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
                                <h2>Bootstrap <strong class="yellow">Programming</strong></h2>
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
                                                    <img src="http://beangates.com/BG_Academy/assets/course/1678186938bootstrap.png" alt="" />
                                                </div>
                                                <p>A Bootstrap course is designed to teach students how to use Bootstrap, a popular front-end framework for building responsive and mobile-first websites. The course will cover a range of topics, including:

                                                    Introduction to Bootstrap: students will learn what Bootstrap is, why it's important, and how to set up a project using Bootstrap.
                                                    Bootstrap CSS Classes: students will learn how to use Bootstrap's pre-defined CSS classes to style text, tables, forms, and buttons, as well as how to create responsive images and videos.
                                                    Bootstrap Components: students will learn how to use Bootstrap's UI components, such as Navbar, Carousel, Modal, and Accordion, to create responsive and visually appealing websites.
                                                    Bootstrap Layout: students will learn how to create complex layouts using Bootstrap's grid system, as well as how to work with nested rows and columns.
                                                    Bootstrap Forms and Validation: students will learn how to create forms using Bootstrap's form control classes, as well as how to customize form validation with Bootstrap.
                                                    Bootstrap Customization: students will learn how to customize Bootstrap's CSS and JavaScript to fit their design needs, as well as how to use Sass with Bootstrap and theme Bootstrap with CSS variables.
                                                    Bootstrap Project: students will apply their knowledge of Bootstrap to create a responsive and visually appealing website, including a design brief, wireframes, and a final website implementation using Bootstrap and HTML.
                                                    By the end of the course, students will have a solid understanding of how to use Bootstrap to create responsive and mobile-first websites, as well as how to customize Bootstrap to fit their design needs.                </p>
                                            </div>
                                            <div id="syllabus_page">
                                                <div class="course">
                                                    <h3>Syllabus</h3>
                                                </div>
                                                <ul>

                                                    <h4>&nbsp;</h4><h4>Here's a syllabus for the comprehensive Bootstrap course:</h4><p>&nbsp;</p><p>Week 1: Introduction to Bootstrap</p><ul><li>What is Bootstrap and why it's important</li><li>Overview of Bootstrap's features and benefits</li><li>Setting up a Bootstrap project</li><li>Bootstrap Grid System</li></ul><h4>&nbsp;</h4><p>Week 2: Bootstrap CSS Classes</p><ul><li>Using Bootstrap's pre-defined CSS classes to style text, tables, forms, and buttons</li><li>Using Bootstrap's typography and spacing classes</li><li>Creating responsive images and videos with Bootstrap</li></ul><h4>&nbsp;</h4><p>Week 3: Bootstrap Components</p><ul><li>Introduction to Bootstrap's UI components, such as Navbar, Carousel, Modal, and Accordion</li><li>Using Bootstrap's JavaScript plugins to enhance UI functionality</li><li>Customizing Bootstrap components to fit your design</li></ul><h4>&nbsp;</h4><p>Week 4: Bootstrap Layout</p><ul><li>Creating complex layouts with Bootstrap</li><li>Working with nested rows and columns</li><li>Using the Bootstrap utility classes for responsive layout</li></ul><h4>&nbsp;</h4><p>Week 5: Bootstrap Forms and Validation</p><ul><li>Creating forms with Bootstrap</li><li>Using Bootstrap's form control classes</li><li>Customizing form validation with Bootstrap</li></ul><h4>&nbsp;</h4><p>Week 6: Bootstrap Customization</p><ul><li>Customizing Bootstrap's CSS and JavaScript</li><li>Using Sass with Bootstrap</li><li>Theming Bootstrap with CSS variables</li></ul><h4>&nbsp;</h4><p>Week 7: Bootstrap Project</p><ul><li>Students will apply their knowledge of Bootstrap to create a responsive and visually appealing website. The project will include a design brief, wireframes, and a final website implementation using Bootstrap and HTML.</li></ul><h4>&nbsp;</h4><p>Week 8: Advanced Bootstrap Techniques (Optional)</p><ul><li>Advanced Bootstrap techniques such as SASS, customizing themes, and creating a custom grid system</li><li>Using Bootstrap with other front-end frameworks and libraries such as Angular and React</li></ul>                </ul>
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
                                                        2 month                            </div>
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
