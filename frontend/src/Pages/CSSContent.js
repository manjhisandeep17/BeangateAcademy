import React from 'react'

export default function CSSContent() {

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
                                <h2>CSS<strong class="yellow">Programming</strong></h2>
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
                                                <p>CSS (Cascading Style Sheets) is a fundamental technology used to define the look and feel of web pages. A CSS course covers the principles and techniques of using CSS to create visually appealing and accessible websites.

                                                    The course typically begins with an introduction to the basic concepts of CSS, including the structure of CSS rules, selectors, properties, and values. Students will learn how to apply CSS to control the layout, typography, colors, and other design aspects of web pages.

                                                    As the course progresses, students will gain more advanced knowledge and skills, such as using CSS frameworks, responsive design, and animation. They will also learn how to troubleshoot common CSS problems and optimize CSS performance.

                                                    A comprehensive CSS course may cover topics such as:

                                                    Box model and layout techniques
                                                    Selectors and specificity
                                                    Typography and text manipulation
                                                    Colors and gradients
                                                    Responsive design and media queries
                                                    CSS frameworks such as Bootstrap and Foundation
                                                    CSS preprocessors like Sass and Less
                                                    CSS animations and transitions
                                                    Debugging and troubleshooting techniques
                                                    CSS optimization and performance tuning
                                                    By the end of the course, students should have a strong foundation in CSS and be able to create professional-looking, responsive, and accessible web pages.                </p>
                                            </div>
                                            <div id="syllabus_page">
                                                <div class="course">
                                                    <h3>Syllabus</h3>
                                                </div>
                                                <ul>

                                                    <h4>&nbsp;</h4><h4>Here's a syllabus for the comprehensive CSS course:</h4><p>&nbsp;</p><p>Week 1: Introduction to CSS</p><ul><li>What is CSS and why it's important</li><li>Overview of Bootstrap's features and benefits</li><li>Setting up a Bootstrap project</li><li>Bootstrap Grid System</li></ul><h4>&nbsp;</h4><p>Week 2: Bootstrap CSS Classes</p><ul><li>Using Bootstrap's pre-defined CSS classes to style text, tables, forms, and buttons</li><li>Using Bootstrap's typography and spacing classes</li><li>Creating responsive images and videos with Bootstrap</li></ul><h4>&nbsp;</h4><p>Week 3: Bootstrap Components</p><ul><li>Introduction to Bootstrap's UI components, such as Navbar, Carousel, Modal, and Accordion</li><li>Using Bootstrap's JavaScript plugins to enhance UI functionality</li><li>Customizing Bootstrap components to fit your design</li></ul><h4>&nbsp;</h4><p>Week 4: Bootstrap Layout</p><ul><li>Creating complex layouts with Bootstrap</li><li>Working with nested rows and columns</li><li>Using the Bootstrap utility classes for responsive layout</li></ul><h4>&nbsp;</h4><p>Week 5: Bootstrap Forms and Validation</p><ul><li>Creating forms with Bootstrap</li><li>Using Bootstrap's form control classes</li><li>Customizing form validation with Bootstrap</li></ul><h4>&nbsp;</h4><p>Week 6: Bootstrap Customization</p><ul><li>Customizing Bootstrap's CSS and JavaScript</li><li>Using Sass with Bootstrap</li><li>Theming Bootstrap with CSS variables</li></ul><h4>&nbsp;</h4><p>Week 7: Bootstrap Project</p><ul><li>Students will apply their knowledge of Bootstrap to create a responsive and visually appealing website. The project will include a design brief, wireframes, and a final website implementation using Bootstrap and HTML.</li></ul><h4>&nbsp;</h4><p>Week 8: Advanced Bootstrap Techniques (Optional)</p><ul><li>Advanced Bootstrap techniques such as SASS, customizing themes, and creating a custom grid system</li><li>Using Bootstrap with other front-end frameworks and libraries such as Angular and React</li></ul>                </ul>
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
