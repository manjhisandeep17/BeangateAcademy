import React from 'react'

export default function Python() {


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
                                <h2>Python <strong class="yellow">Programming</strong></h2>
                            </div>
                        </div>
                        <div class="container-fluid px-5">

                            <div class="course">
                                <div class="btn" onClick={abc}>Course Description</div>
                                <span class="course_span"> |</span>
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
                                                    <img src="assets/img/Courses/python-logo.png" alt="" />
                                                </div>
                                                <p>Python is a high level language, which is widely used for general purpose programming as it
                                                    integrates with your systems more effectively. It runs on all the operating systems like Windows,
                                                    Linux/Unix, and Mac OS etc. It has also been ported to the .NET and Java virtual machines. </p>


                                            </div>
                                            <div id="syllabus_page">
                                                <div class="course">
                                                    <h3>Syllabus</h3>
                                                </div>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>1. Introduction & Installation </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; History of Python </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Python Features </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Environment </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Local Environment Setup </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Getting Python </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Installing Python</p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Setting up PATH </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Setting path at Unix/Linux</p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Setting path at Windows </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Python Environment Variables </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Running Python </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>2. Python Syntax </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; First Python Program </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Python Identifiers </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Python Keywords </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Lines and Indentation </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Multi-Line Statements </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Quotation in Python</p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Comments in Python </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Using Blank Lines </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Waiting for the User </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Multiple Statements on a Single Line </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Multiple Statement Groups as Suites </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Command Line Arguments </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Accessing Command-Line Arguments</p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Parsing Command-Line Arguments </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>3. Variables & Data Types </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Assigning Values to Variables </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Multiple Assignment</p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Standard Data Types </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Python Numbers </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Python Strings </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Python Lists </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Python Tuples </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Python Dictionary </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Data Type Conversion </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>4. Operators </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Types of Operators </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Python Arithmetic Operators </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Python Comparison Operators </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Python Assignment Operators </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Python Bitwise Operators </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Python Logical Operators </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Python Membership Operators </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Python Identity Operators </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Python Operators Precedence </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>5. Conditional Statements </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; If Statement </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The elseif Statement </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Single Statement Suites </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Loops </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; While Loop </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The Infinite Loop </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Using else Statement with Loops </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Single Statement Suites </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; For Loop </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Iterating by Sequence Index </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Using else Statement with Loops </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Nested Loops. </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Loop Control Statements</p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Break Statement </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Continue Statement </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Pass Statement </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>6. Working With Numbers & Strings</h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Number Type Conversion </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Random Number Functions </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Trigonometric Functions </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Mathematical Constants </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Accessing Values in Strings </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Updating Strings </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Escape Characters </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; String Special Operators </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; String Formatting Operator </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Triple Quotes </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Unicode String </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Built-in String Methods </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>7. Collections API </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; *LISTS </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658;Python Lists </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Accessing Values in Lists </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Updating Lists </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Deleting List Elements </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Basic List Operations </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Indexing, Slicing, and Matrixes </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Built-in List Functions </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; *TUPLES </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Accessing Values in Tuples </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Updating Tuples</p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Deleting Tuple Elements</p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Basic Tuples Operations </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Indexing, Slicing, and Matrixes </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; No Enclosing Delimiters </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Built-in Tuple Functions </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; DICTIONARY </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Accessing Values in Dictionary </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Updating Dictionary </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Delete Dictionary Elements </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Properties of Dictionary Keys </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Built-in Dictionary Functions and Methods </p>
                                                        </li>

                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>8. Date and Time </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; What is Tick? </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; What is TimeTuple? </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Getting Current Time </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Getting Formatted Time </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Getting Calendar for a Month </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The time Module </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The calendar Module </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Other Modules and Functions </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>9. Function & Modules </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Defining a Function </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Calling a Function </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Passing by Reference Versus Passing by Value </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Function Arguments </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Required Arguments</p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Keyword Arguments </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Default Arguments </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Variable Length Arguments </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The Anonymous Functions </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The return Statement </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Scope of Variables</p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Global vs. Local variables </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The import Statement </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The from import Statement</p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The from import * Statement </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Locating Modules </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The PYTHONPATH Variable </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Namespaces and Scoping </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The dir( ) Function </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The globals() and locals() Functions </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The reload() Function </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Packages in Python</p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>10. Peer-to-Peer Communication </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; FILES I/O </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Printing to the Screen </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Reading Keyboard Input </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The raw_input Function </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The input Function </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Opening and Closing Files</p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The open Function </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The file Object Attributes </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The close() Method </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Reading and Writing Files </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The write() Method </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The read() Method </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; File Positions </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Renaming and Deleting Files </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The rename() Method </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The remove() Method </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Directories in Python </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The mkdir() Method </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The chdir() Method </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The getcwd() Method </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The rmdir() Method </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; File and Directory Related Methods </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>11. Exception Handling </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Introduction of Exception? </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Handling an Exception </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The except Clause with No Exceptions </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The except Clause with Multiple Exception </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The try-finally Clause </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Argument of an Exception </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Raising an Exception </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; User-Defined Exceptions </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>12. OOPS Concepts in python</h5>
                                                        </li>
                                                        <li>
                                                            <p> &#8658;Overview of OOPs Terminology </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Creating Classes </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Creating Instance Objects </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Accessing Attributes </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Built-In Class Attributes </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Destroying Objects (Garbage Collection) </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Class Inheritance </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Overriding Methods </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Base Overloading Methods </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Overloading Operators </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Data Hiding </p>
                                                        </li>

                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>13. Regular Expression </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The match Function </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The search Function </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Matching Versus Searching </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Search and Replace </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Regular-Expression Modifiers: Option Flags </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Regular-Expression Patterns </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Regular-Expression Examples </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Grouping with Parentheses </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h4>ADVANCE PYTHON</h4>
                                                        </li>
                                                        <li>
                                                            <h5>14. CGI PROGRAMMING</h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; CGI PROGRAMMING </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; CGI Introduction? </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Web Browsing </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; CGI Architecture </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Web Server Support and Configuration </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; First CGI Program </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; HTTP Header </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; CGI Environment Variables </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; GET and POST Methods </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Passing Information using GET method </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Simple URL Example : Get Method </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Simple FORM Example: GET Method </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Passing Information Using POST Method </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Passing Checkbox Data to CGI Program </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Passing Radio Button Data to CGI Program </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Passing Text Area Data to CGI Program </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Passing Drop Down Box Data to CGI Program </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Using Cookies in CGI </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; How It Works? </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Setting up Cookies </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Retrieving Cookies </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; File Upload Example </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; How To Raise a "File Download" Dialog Box? </p>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>15. Database Connectivity </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; What is MySQLdb? </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Install MySQLdb? </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Database Connection </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Creating Database Table </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; INSERT Operation </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; READ Operation </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Update Operation </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; DELETE Operation </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Performing Transactions </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; COMMIT Operation </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; ROLLBACK Operation </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Disconnecting Database </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Handling Errors </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>16. Socket Programming and Email API </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; What is Sockets? </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The socket Module </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Server Socket Methods </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Client Socket Methods </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; General Socket Methods </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; A Simple Server </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; A Simple Client </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Python Internet modules </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Further Readings </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Sending an HTML e-mail using Python </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Sending Attachments as an E-mail </p>
                                                        </li>
                                                    </ul>
                                                </li>






                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>17. Multithreading </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Starting a New Thread </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The Threading Module </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Creating Thread Using Threading Module </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Synchronizing Threads </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Multithreaded Priority Queue </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; XML PROCESSING </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; What is XML? </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; XML Parser Architectures and APIs </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Parsing XML with SAX APIs </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The make_parser Method </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The parse Method </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The parseString Method </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Parsing XML with DOM APIs </p>
                                                        </li>

                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>18. GUI Programming </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Tkinter Programming </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Tkinter Widgets </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Geometry Management </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; FURTHER EXTENSIONS </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Pre-Requisites for Writing Extensions </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; First Look at a Python Extension </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The C Functions </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The Method Mapping Table </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The Initialization Function </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Building and Installing Extensions </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Importing Extensions </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Passing Function Parameters </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The PyArg_ParseTuple Function </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Returning Values </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; The Py_BuildValue Function </p>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>19. Web Development Frameworks </h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Django </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Flask </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; Pyramid </p>
                                                        </li>

                                                    </ul>
                                                </li>
                                                <li class="justify-content-between d-flex">
                                                    <ul>
                                                        <li>
                                                            <h5>20. Project Work</h5>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; System analysis and design </p>
                                                        </li>
                                                        <li>
                                                            <p>&#8658; SRS,FRS,DFD </p>
                                                        </li>

                                                    </ul>
                                                </li>
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
