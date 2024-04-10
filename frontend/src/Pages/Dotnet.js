import React from 'react'

export default function Dotnet() {



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
                                <h2>Dot Net Full Stack <strong class="yellow">Programming</strong></h2>
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
                                                    <img src="http://beangates.com/BG_Academy/assets/course/1678182244_NETLogo.png" alt="" />
                                                </div>
                                                <p>A full-stack .NET course covers the entire development stack, from the front-end to the back-end, using the .NET framework. The course aims to provide students with a comprehensive understanding of the .NET ecosystem, including C#, .NET Core, Entity Framework, and ASP.NET.

                                                    Here's an outline of the topics that may be covered in a .NET full-stack course:

                                                    Introduction to C#: Basic syntax and data types, variables, operators, control structures, functions, and classes.
                                                    Object-Oriented Programming (OOP) in C#: Inheritance, polymorphism, encapsulation, and abstraction.
                                                    .NET Framework: An overview of the .NET Framework, .NET Core, and the Common Language Runtime (CLR).
                                                    ASP.NET: Introduction to web development with ASP.NET, including creating web applications, handling HTTP requests, and building web services.
                                                    Entity Framework: Introduction to the Entity Framework, including data modeling, database operations, and querying data.
                                                    Front-end Development: HTML, CSS, JavaScript, and jQuery.
                                                    Front-end Frameworks: Introduction to popular front-end frameworks like Angular, React, and Vue.js.
                                                    MVC Architecture: Understanding of Model-View-Controller architecture, routing, and request-response cycle.
                                                    APIs: Introduction to APIs, JSON, and RESTful APIs.
                                                    Deployment: Deploying .NET applications to servers, version control with Git, and continuous integration.
                                                    Project Development: A complete end-to-end project development cycle, covering front-end and back-end development and deployment.
                                                    The course may also cover other relevant topics like security, performance optimization, and best practices in web development using. NET.                </p>
                                            </div>
                                            <div id="syllabus_page">
                                                <div class="course">
                                                    <h3>Syllabus</h3>
                                                </div>
                                                <ul>

                                                    <h4>&nbsp;</h4><h4>Here's the syllabus for a full-stack .NET course:</h4><p>&nbsp;</p><p>&nbsp;</p><p>Week-1: Introduction to C#</p><ul><li>Basic syntax and data types</li><li>Variables, operators, control structures, functions, and classes</li><li>Exception handling</li></ul><h4>&nbsp;</h4><p>Week-2: Object-Oriented Programming (OOP) in C#</p><ul><li>Inheritance, polymorphism, encapsulation, and abstraction</li><li>Interfaces and abstract classes</li><li>Generics and collections</li></ul><h4>&nbsp;</h4><p>Week-3: .NET Framework</p><ul><li>Introduction to .NET Core and the Common Language Runtime (CLR)</li><li>Introduction to Visual Studio and .NET development tools</li><li>Working with NuGet packages</li></ul><h4>&nbsp;</h4><p>Week-4: ASP.NET</p><ul><li>Introduction to web development with ASP.NET</li><li>Creating web applications and handling HTTP requests</li><li>Building web services using ASP.NET Web API</li></ul><h4>&nbsp;</h4><p>Week-5: Entity Framework</p><ul><li>Introduction to the Entity Framework</li><li>Data modeling, database operations, and querying data</li><li>Migrations and database seeding</li></ul><h4>&nbsp;</h4><p>Week-6: Front-end Development</p><ul><li>HTML, CSS, and JavaScript</li><li>jQuery and AJAX</li></ul><h4>&nbsp;</h4><p>Week-7: Front-end Frameworks</p><ul><li>Introduction to popular front-end frameworks like Angular, React, and Vue.js</li><li>Building web applications using a front-end framework</li></ul><h4>&nbsp;</h4><p>Week-8: MVC Architecture</p><ul><li>Understanding of Model-View-Controller architecture</li><li>Routing and request-response cycle</li><li>Building web applications using ASP.NET MVC</li></ul><h4>&nbsp;</h4><p>Week-9: APIs</p><ul><li>Introduction to APIs and web services</li><li>Building and consuming RESTful APIs</li><li>Securing APIs with authentication and authorization</li></ul><h4>&nbsp;</h4><p>Week-10: Deployment</p><ul><li>Deploying .NET applications to servers</li><li>Version control with Git</li><li>Continuous integration and deployment with Azure DevOps</li></ul><h4>&nbsp;</h4><p>Week-11: Project Development</p><ul><li>A complete end-to-end project development cycle</li><li>Building a web application using ASP.NET MVC, Entity Framework, and a front-end framework</li></ul>                </ul>
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
