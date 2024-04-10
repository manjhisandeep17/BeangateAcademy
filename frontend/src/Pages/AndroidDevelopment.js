import React from 'react'

export default function AndroidDevelopment() {


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
                                <h2>Android Development <strong class="yellow">Programming</strong></h2>
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
                                                    <img src="http://beangates.com/BG_Academy/assets/course/1678185376android.png" alt="" />
                                                </div>
                                                <p>This Android development course is designed to provide students with a comprehensive understanding of the Android platform and its development tools. The course covers the fundamentals of Android app development, user interface design, data persistence, networking, multimedia, security, and advanced Android development concepts.

                                                    The course begins by introducing the Android platform and guiding students through setting up the development environment. Students will learn how to create a simple Android application and understand the Android app lifecycle.

                                                    In the following weeks, students will delve into user interface design, learning about layouts and views, event handling and user input, styling and themes, and using fragments for responsive design. Students will also learn about data persistence in Android, including working with SQLite databases, Content Providers and URIs, file storage, and preferences.

                                                    The course also covers networking and web services in Android, including using HTTP and RESTful APIs, parsing JSON and XML data, creating web services in Android, and handling network errors and connectivity changes.

                                                    The multimedia and camera section of the course covers playing audio and video, capturing and storing images and video, working with the camera hardware, and integrating multimedia with the user interface.

                                                    In the advanced Android development section, students will learn about fragments and multi-pane layouts, services and broadcast receivers, background processing and threading, and security and permissions in Android.

                                                    The final project allows students to demonstrate their proficiency in Android development by creating practical applications using the concepts and skills they have learned throughout the course.

                                                    Throughout the course, students will participate in lectures, demonstrations, and hands-on exercises, allowing them to practice and apply what they have learned. Upon completion of the course, students will have a strong foundation in Android app development and be able to create a wide range of Android applications.                </p>
                                            </div>
                                            <div id="syllabus_page">
                                                <div class="course">
                                                    <h3>Syllabus</h3>
                                                </div>
                                                <ul>

                                                    <h4>&nbsp;</h4><h4>Here is a syllabus for the Android development course:</h4><h2>&nbsp;</h2><p><strong>Week 1: Introduction to Android Development</strong></p><ul><li>Overview of Android development</li><li>Setting up the development environment</li><li>Creating a simple Android application</li><li>Understanding the Android app lifecycle</li></ul><h2>&nbsp;</h2><p><strong>Week 2: User Interface Design in Android</strong></p><ul><li>Layouts and views</li><li>Event handling and user input</li><li>Styling and themes in Android</li><li>Using fragments for responsive design</li></ul><h2>&nbsp;</h2><p><strong>Week 3: Data Persistence in Android</strong></p><ul><li>Working with SQLite databases</li><li>Content Providers and URIs</li><li>File storage and preferences</li><li>Best practices for data persistence</li></ul><h2>&nbsp;</h2><p><strong>Week 4: Networking and Web Services in Android</strong></p><ul><li>Using HTTP and RESTful APIs</li><li>Parsing JSON and XML data</li><li>Creating web services in Android</li><li>Handling network errors and connectivity changes</li></ul><h2>&nbsp;</h2><p><strong>Week 5: Multimedia and Camera in Android</strong></p><ul><li>Playing audio and video</li><li>Capturing and storing images and video</li><li>Working with the camera hardware</li><li>Integrating multimedia with the user interface</li></ul><h2>&nbsp;</h2><p><strong>Week 6: Advanced Android Development</strong></p><ul><li>Fragments and multi-pane layouts</li><li>Services and broadcast receivers</li><li>Background processing and threading</li><li>Security and permissions in Android</li></ul><h2>&nbsp;</h2><p><strong>Week 7: Final Project</strong></p><ul><li>Students will work on a final project, applying the skills and concepts they have learned throughout the course.</li></ul>                </ul>
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
