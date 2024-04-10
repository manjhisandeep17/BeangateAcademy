import React from 'react'

export default function JavaScript() {

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
                                <h2>Java Script <strong class="yellow">Programming</strong></h2>
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
                                                    <img src="http://beangates.com/BG_Academy/assets/course/1678186010java-script.png" alt="" />
                                                </div>
                                                <p>A JavaScript course is designed to teach students how to use JavaScript, a programming language that is widely used for creating interactive and dynamic websites. The course will cover a range of topics, including:

                                                    Introduction to JavaScript: students will learn what JavaScript is, why it's important, and how to set up a JavaScript environment.
                                                    JavaScript Syntax and Basic Concepts: students will learn the basic syntax and concepts of JavaScript, including variables, data types, operators, and control structures.
                                                    Functions and Objects: students will learn how to create and use functions, as well as how to work with objects and object-oriented programming concepts.
                                                    DOM Manipulation: students will learn how to manipulate HTML and CSS using JavaScript through the Document Object Model (DOM).
                                                    Event Handling: students will learn how to handle user events, such as clicks and mouseovers, using JavaScript.
                                                    Ajax and APIs: students will learn how to use Ajax and APIs to make requests to external resources and display dynamic content on a web page.
                                                    Error Handling and Debugging: students will learn how to handle errors and debug JavaScript code using browser tools and other debugging techniques.
                                                    Best Practices and Advanced Concepts: students will learn advanced JavaScript concepts, such as closures, prototypes, and modules, as well as best practices for writing efficient and maintainable code.
                                                    By the end of the course, students will have a solid understanding of how to use JavaScript to create interactive and dynamic websites, as well as how to debug and optimize JavaScript code. They will also have a good foundation for learning more advanced JavaScript concepts and frameworks.                </p>
                                            </div>
                                            <div id="syllabus_page">
                                                <div class="course">
                                                    <h3>Syllabus</h3>
                                                </div>
                                                <ul>

                                                    <h4>&nbsp;</h4><h4>Here's a syllabus for the comprehensive JavaScript course:</h4><p>&nbsp;</p><p>Week 1: Introduction to JavaScript</p><ul><li>What is JavaScript and why it's important</li><li>Setting up a JavaScript environment</li><li>Basic JavaScript syntax and concepts</li></ul><p>&nbsp;</p><p>Week 2: Variables and Data Types</p><ul><li>Working with variables and constants</li><li>Primitive and non-primitive data types</li><li>Type coercion and conversion</li></ul><p>&nbsp;</p><p>Week 3: Operators and Control Structures</p><ul><li>Arithmetic, comparison, logical, and assignment operators</li><li>Conditional statements (if/else, switch)</li><li>Looping structures (for, while, do-while)</li></ul><p>&nbsp;</p><p>Week 4: Functions and Scope</p><ul><li>Creating and invoking functions</li><li>Function parameters and return values</li><li>Function scope and closures</li></ul><p>&nbsp;</p><p>Week 5: Arrays and Objects</p><ul><li>Working with arrays and array methods</li><li>Creating and manipulating objects</li><li>Object-oriented programming concepts</li></ul><p>&nbsp;</p><p>Week 6: DOM Manipulation</p><ul><li>Introduction to the Document Object Model (DOM)</li><li>Selecting and modifying HTML elements with JavaScript</li><li>Creating and deleting elements dynamically</li></ul><p>&nbsp;</p><p>Week 7: Events and Event Handling</p><ul><li>Handling user events (clicks, mouseovers, etc.)</li><li>Event listeners and event delegation</li><li>Working with the Event object</li></ul><p>&nbsp;</p><p>Week 8: Ajax and APIs</p><ul><li>Introduction to Ajax and APIs</li><li>Making requests to external resources with JavaScript</li><li>Displaying dynamic content on a web page</li></ul><p>&nbsp;</p><p>Week 9: Error Handling and Debugging</p><ul><li>Common JavaScript errors and how to handle them</li><li>Debugging techniques and tools</li><li>Best practices for writing efficient and maintainable code</li></ul><p>&nbsp;</p><p>Week 10: Advanced JavaScript Concepts (Optional)</p><ul><li>Prototypes and inheritance</li><li>Asynchronous JavaScript and Promises</li><li>Modules and Namespacing</li></ul>                </ul>
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
                                                        3 months                             </div>
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
