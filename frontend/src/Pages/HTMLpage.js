import React from 'react'

export default function HTMLpage() {
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
                                <h2>HTML <strong class="yellow">Programming</strong></h2>
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
                                                    <img src="http://beangates.com/BG_Academy/assets/course/1678170129html.png" alt="" />
                                                </div>
                                                <p>HTML (Hypertext Markup Language) is the foundation of web development. It is the markup language used to create web pages and is responsible for the structure, content, and layout of websites.

                                                    Our HTML course at Beangate Academy is designed to provide students with a solid understanding of HTML and its application in web development. The course covers the basics of HTML syntax, tags, attributes, and elements.

                                                    Students will learn how to create a well-structured and semantic HTML document, including headings, paragraphs, lists, links, and images. They will also learn about HTML forms, tables, and multimedia elements such as videos and audio.

                                                    In addition to the basics, the course will cover advanced topics such as CSS (Cascading Style Sheets) integration, responsive design, and accessibility. Students will gain hands-on experience by working on real-world projects and creating fully functional websites using HTML and CSS.

                                                    By the end of the course, students will have a strong foundation in HTML and be able to create professional-looking websites. They will also be prepared to move on to more advanced web development topics such as JavaScript and server-side programming.                </p>
                                            </div>
                                            <div id="syllabus_page">
                                                <div class="course">
                                                    <h3>Syllabus</h3>
                                                </div>
                                                <ul>

                                                    <h4>&nbsp;</h4><h4>Here's a syllabus for the HTML course at Beangate Academy:</h4><p>&nbsp;</p><p>Week 1:</p><ul><li>Introduction to HTML and web development</li><li>Understanding the structure of an HTML document</li><li>The basic syntax of HTML tags and attributes</li><li>Creating a basic HTML document with headings, paragraphs, and lists</li></ul><p>&nbsp;</p><p>Week 2:</p><ul><li>Working with links and images</li><li>Understanding the use of anchor tags and creating hyperlinks</li><li>Inserting and styling images</li><li>Creating tables and forms with HTML</li></ul><p>&nbsp;</p><p>Week 3:</p><ul><li>Introduction to CSS and its integration with HTML</li><li>Understanding CSS selectors, properties, and values</li><li>Styling HTML elements with CSS</li><li>Creating layouts with CSS</li></ul><p>&nbsp;</p><p>Week 4:</p><ul><li>Introduction to responsive web design</li><li>Understanding media queries and viewport</li><li>Creating a responsive website layout</li><li>Introduction to accessibility and best practices</li></ul><p>&nbsp;</p><p>Week 5:</p><ul><li>Advanced HTML topics such as multimedia elements (videos and audio)</li><li>Introduction to server-side programming with PHP and databases</li><li>Building a complete project using HTML and CSS</li></ul>                </ul>
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
                                                        30 Day's                            </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-8">
                                                        Availiable Seats
                                                    </div>
                                                    <div class="col-md-4">
                                                        20                            </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-8">
                                                        Online Trainning Schedule:
                                                    </div>
                                                    <div class="col-md-4">
                                                        2023-03-01 14:47:00                            </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-8">
                                                        Offline Trainning Schedule:
                                                    </div>
                                                    <div class="col-md-4">
                                                        2023-03-01 14:47:00                          </div>
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
