import React from 'react'

export default function Wordpress() {

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
                                <h2>Wordpress  <strong class="yellow">Programming</strong></h2>
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
                                                    <img src="http://beangates.com/BG_Academy/assets/course/1682944917skype.png" alt="" />
                                                </div>
                                                <p>                </p>
                                            </div>
                                            <div id="syllabus_page">
                                                <div class="course">
                                                    <h3>Syllabus</h3>
                                                </div>
                                                <ul>

                                                    <p>&nbsp;</p><h4>Here is a syllabus for the WordPress course:</h4><h2>&nbsp;</h2><p><strong>Week 1: Introduction to WordPress</strong></p><ul><li>Overview of WordPress and its features</li><li>Understanding the difference between WordPress.org and WordPress.com</li><li>Setting up a WordPress website</li><li>Understanding the WordPress dashboard and menu options</li></ul><h2>&nbsp;</h2><p><strong>Week 2: Building a WordPress Website</strong></p><ul><li>Choosing a theme and customizing its appearance</li><li>Creating and managing pages and posts</li><li>Adding media (images, videos, etc.) to WordPress</li><li>Configuring widgets and plugins</li></ul><h2>&nbsp;</h2><p><strong>Week 3: WordPress Themes and Plugins</strong></p><ul><li>Understanding WordPress themes and how they work</li><li>Choosing and customizing a WordPress theme</li><li>Overview of popular WordPress plugins and their functionalities</li><li>Installing and configuring WordPress plugins</li></ul><h2>&nbsp;</h2><p><strong>Week 4: WordPress Security and Performance</strong></p><ul><li>Understanding WordPress security and common vulnerabilities</li><li>Best practices for securing a WordPress website</li><li>Introduction to WordPress caching and performance optimization techniques</li><li>Tips for improving WordPress website speed and performance</li></ul><h2>&nbsp;</h2><p><strong>Week 5: WordPress E-Commerce</strong></p><ul><li>Overview of WordPress e-commerce plugins (e.g., WooCommerce)</li><li>Setting up an online store with WordPress</li><li>Managing products, orders, and payments with WordPress</li><li>Best practices for e-commerce website design and optimization</li></ul><h2>&nbsp;</h2><p><strong>Week 6: WordPress Project</strong></p><ul><li>Students will work on a WordPress project, building and customizing a WordPress website from scratch using the skills and knowledge learned in the course.</li></ul>                </ul>
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
                                                        1 months                            </div>
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
