import React from 'react'

export default function Csharp() {


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
                                <h2>C-Sharp <strong class="yellow">Programming</strong></h2>
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
                                                    <img src="http://beangates.com/BG_Academy/assets/course/1678185198c-sharp.png" alt="" />
                                                </div>
                                                <p>This C# course is designed to provide students with a comprehensive understanding of the C# programming language, which is commonly used for developing applications for Microsoft's .NET platform. The course covers the fundamentals of C# programming, object-oriented programming concepts, and application development with .NET frameworks and libraries.

                                                    The course begins by introducing the history and role of C# programming and then guides students through setting up a development environment and learning the basic syntax and structure of the language. Students will learn about using variables, data types, and expressions in C#, as well as control structures and functions.

                                                    In the following weeks, students will delve into object-oriented programming in C#, which includes classes and objects, encapsulation, inheritance, polymorphism, abstract classes, interfaces, and exceptions.

                                                    The course also covers .NET frameworks and libraries such as .NET Framework and .NET Core, the Common Language Runtime (CLR), Windows Forms and WPF for creating desktop applications, and ADO.NET for working with databases. Students will also learn web development using ASP.NET and MVC architecture, creating web applications with Razor syntax, and working with data using Entity Framework.

                                                    The course concludes with advanced C# concepts, such as generics and collections, multi-threading and concurrency, LINQ (Language-Integrated Query), and advanced debugging and testing techniques.

                                                    Throughout the course, students will participate in lectures, demonstrations, and hands-on exercises, allowing them to practice and apply what they have learned. The final project allows students to demonstrate their proficiency in C# by creating practical applications using the language.

                                                    Upon completion of the course, students will have a strong foundation in C# programming language and be able to develop various applications for .NET platforms.                </p>
                                            </div>
                                            <div id="syllabus_page">
                                                <div class="course">
                                                    <h3>Syllabus</h3>
                                                </div>
                                                <ul>

                                                    <h4>&nbsp;</h4><h4>Here's a syllabus for the C# course:</h4><h2>&nbsp;</h2><p><strong>Week 1: Introduction to C#</strong></p><ul><li>History of C# and its role in programming</li><li>Setting up a development environment</li><li>Basic syntax and structure of C#</li><li>Using variables, data types, and expressions in C#</li></ul><h2>&nbsp;</h2><p><strong>Week 2: Control Structures and Functions in C#</strong></p><ul><li>Control structures such as if/else, loops, and switch statements</li><li>Functions and parameters in C#</li><li>Passing arguments by value and by reference</li><li>Overloading functions in C#</li></ul><h2>&nbsp;</h2><p><strong>Week 3: Object-Oriented Programming in C#</strong></p><ul><li>Classes and objects in C#</li><li>Encapsulation, inheritance, and polymorphism in C#</li><li>Abstract classes and interfaces in C#</li><li>Creating and using exceptions in C#</li></ul><h2>&nbsp;</h2><p><strong>Week 4: C# Frameworks and Libraries</strong></p><ul><li>.NET Framework and .NET Core</li><li>Common Language Runtime (CLR)</li><li>Creating applications with Windows Forms and WPF</li><li>Working with databases using ADO.NET</li></ul><h2>&nbsp;</h2><p><strong>Week 5: Web Development with C#</strong></p><ul><li>Introduction to ASP.NET and MVC architecture</li><li>Creating web applications with Razor syntax</li><li>Working with data using Entity Framework</li></ul><h2>&nbsp;</h2><p><strong>Week 6: Advanced C# Concepts</strong></p><ul><li>Generics and collections in C#</li><li>Multi-threading and concurrency in C#</li><li>LINQ (Language-Integrated Query)</li><li>Advanced debugging and testing techniques</li></ul><h2>&nbsp;</h2><p><strong>Week 7: Final Project</strong></p><ul><li>Students will work on a final project, applying the skills and concepts they have learned throughout the course.</li></ul>                </ul>
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
                                                        2 months                             </div>
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
