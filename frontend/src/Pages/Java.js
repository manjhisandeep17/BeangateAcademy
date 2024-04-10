import React from 'react'

export default function Java() {



    
    const abc= function course() {
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
                                <h2>Java <strong class="yellow">Programming</strong></h2>
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
                                                    <img src="assets/img/Courses/java.png" alt="" />
                                                </div>
                                                <p>Nowadays Java is one of the most utilized core language used by programmers and developers in IT
                                                    Industries.It is basic concept used by developers while developing softwares, games and other
                                                    applications as well as super computers.</p>
                                            </div>
                                            <div id="syllabus_page">
                                                <div class="course">
                                                    <h3>Syllabus</h3>
                                                </div>
                                                <ul>
                                                    <li><b> Basics of Java</b></li>
                                                    <li>
                                                        <ul>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>1. Introduction </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; What is java </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; History and features of java </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; JDK, JVM and JRE </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Deep architecture of JVM </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; What is IDE, examples of IDE’s </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Simple Hello java program </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Explanation of java program, compile and run </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Setting temporary and permanent of java classpath </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Program run by bat file </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; INTERVIEW QUESTIONS </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>2. Control Statements </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Conditional statements </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Iteration/looping statements </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Jump statements </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; 50 Programs (including recursion) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; INTERVIEW QUESTIONS </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>3. OOP’s Concept </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Class </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Methods </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Objects </p>
                                                                        <li>
                                                                            <p> &nbsp;&nbsp;&nbsp; &#8674; Different ways of creating objects </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &nbsp;&nbsp;&nbsp; &#8674; Cloning Objects, shallow and deep cloning</p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &nbsp;&nbsp;&nbsp; &#8674; Object life cycle </p>
                                                                        </li>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Garbage collection and finalize method </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Constructors </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Inheritance (IS-A & HAS-A Relationship) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Polymorphism </p>
                                                                        <li>
                                                                            <p> &nbsp;&nbsp;&nbsp; &#8674; Compile Time Polymorphism (Method Overloading) </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &nbsp;&nbsp;&nbsp; &#8674; Run Time Polymorphism (Method Overriding)</p>
                                                                        </li>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Encapsulation (Getter & Setter) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Abstraction </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Interfaces </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Keywords (this, super, static, final, strictfp) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Packages </p>
                                                                        <li>
                                                                            <p> &nbsp;&nbsp;&nbsp; &#8674; Organizing Classes and Interfaces in Packages </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &nbsp;&nbsp;&nbsp; &#8674; Package as Access Protection</p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &nbsp;&nbsp;&nbsp; &#8674; Defining Package</p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &nbsp;&nbsp;&nbsp; &#8674; CLASSPATH Setting for Packages</p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &nbsp;&nbsp;&nbsp; &#8674; Making JAR Files for Library Packages</p>
                                                                            <li>
                                                                                <p> &nbsp;&nbsp;&nbsp; &#8674; Import and Static Import</p>
                                                                            </li>
                                                                            <li>
                                                                                <p> &nbsp;&nbsp;&nbsp; &#8674; Naming Convention For Packages</p>
                                                                            </li>
                                                                        </li>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Access modifiers </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Nested class & interface </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Relationship Between Classes (aggregation(HAS-A),association, etc) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Covariant return type </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; INTERVIEW QUESTIONS </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>4. Exception Handling </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Exceptions and errors with diagram </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Types of exceptions </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Checked and unchecked exceptions </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Control Flow In Exceptions </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; try, catch, finally, throw, throws in Exception Handling </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; In-built and User Defined (custom) Exceptions </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; INTERVIEW QUESTIONS </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>5. Strings </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Character </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; What is String </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; CharSequence Interface </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; String class </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Methods of String class </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; How to create String (2 ways) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; String constant pool </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Explanation of creating objects with new and without new keyword (with memory in
                                                                            heap and String constant pool) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Garbage collection for strings </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; StringBuffer and StringBuilder classes and methods </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Difference between String and StringBuffer and StringBuilder </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Encryption and Decryption of Strings </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; INTERVIEW QUESTIONS </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>6. AWT and Swings (GUI Programming) </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Different GUI technology in java </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Starting, relation of AWT and Swing </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Different classes of AWT and Swing with diagram </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Components and Containers </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Basics of Components </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Using Containers </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Layout Managers </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Simple practical with notepad </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Adding a Menu to Window </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Drag and drop all </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Java Utilities (java.util Package) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Event handling </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>7. File I/O and Serialization </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; I/O Streams </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; File class </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Input from console (Keyboard) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; PrintStream class </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; PrintWriter class </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Compressing & Decompressing file </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; I/O Exceptions </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Serialization </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; transient keyword </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Encryption and Decryption of file </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>8. Multithreading and Synchronization </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; What is multithreading </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Life cycle of thread </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Creating of threads </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Thread scheduler </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Methods of thread (naming a thread, sleeping a thread,daemon thread, joining a
                                                                            thread) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Thread priority </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Performing single/multiple tasks from single/multiple thread </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Thread pool (important for messaging) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Thread group </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; ShutdownHook </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Synchronization </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>9. Collections </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Collection Framework API and diagram </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Java Collection Interfaces </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Java Collection Classes </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Map Concept </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Collections API Algorithm </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Comparable & Comparator Interface </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Difference between all the classes and interfaces </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; enum, enumerator and Iterator </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Generics </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>10. Applets </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Applet Basics</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Graphics in ap </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; plet </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Image in applet </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Animation in applet </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Event handling in applet </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>11. RMI & Networking </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; RMI introduction </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Networking concepts </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Socket programming </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Classes </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>12. Java Reflection </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Reflection API</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; newInstance() method </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; javap tool </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Creating javap tool </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Creating appletviewer </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Call private method</p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>13. Java new features</h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Java features in each version</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Java new features </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>14. Java JDBC </h5>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 course_right">
                                        <div class="card">
                                            <div class="card-header text-center">
                                                <h4 class="text-white">Batch Details</h4>
                                            </div>
                                            <div class="card-body">

                                                <div class="course-info d-flex justify-content-between align-items-center">
                                                    <h5>Trainer</h5>
                                                    <p><a href="#">MR. Pankaj Sir</a></p>
                                                </div>

                                                <div class="course-info d-flex justify-content-between align-items-center">
                                                    <h5>Course-Duration</h5>
                                                    <p>6 - 12 Month</p>
                                                </div>

                                                <div class="course-info d-flex justify-content-between align-items-center">
                                                    <h5>Course Fee</h5>
                                                    <p>$165</p>
                                                </div>

                                                <div class="course-info d-flex justify-content-between align-items-center">
                                                    <h5>Available Seats</h5>
                                                    <p>150</p>
                                                </div>

                                                <div class="course-info d-flex justify-content-between align-items-center">
                                                    <h5>training-Schedule</h5>
                                                    <p>11.00 pm - 02.00 pm</p>
                                                </div>
                                                <hr/>
                                                    <div class="all-courses text-center mt-3"> <a href="assets/register page/register page/rf.html" target="_blank"
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
