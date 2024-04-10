import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Clasess from './Clasess';


export default function Home() {

 



    return (
        <div>
            
            {/* <div id="popup-form" data-aos="fade-down" data-aos-delay="100" className='center '>
                <div className='' >
                    <h2>Sign up for our newsletter!</h2>
                    <button type="button" class="btn btn-success">Register</button>
                    <button type="button" class="btn btn-danger">Cancel</button>
                </div>
            </div> */}

            
            <section id="home">
                <div class="row">

                    <div class="owl-carousel owl-theme home-slider">
                        <div class="item item-first">
                            <div class="caption">
                                <div class="container">
                                    <div class="col-md-6 col-sm-12">
                                        <h1 class="animate__animated animate__bounceInDown animate__slow ">Building careers <br />through learning</h1>
                                        <h3 class="animate__animated animate__bounceInRight animate__slow">Beangate Academy offers a range of courses and programs designed to
                                            help individuals develop the
                                            skills and knowledge they need to succeed in their chosen career paths.</h3>
                                        <a href="#feature" class="section-btn btn btn-default smoothScroll animate__animated animate__bounceInUp animate__slow">Get Started</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item item-second">
                            <div class="caption">
                                <div class="container">
                                    <div class="col-md-6 col-sm-12">
                                        <h1 class="animate__animated animate__bounceInDown animate__slow animate__delay-5s">Start your journey with our<br /> practical courses</h1>
                                        <h3 class="animate__animated animate__bounceInRight animate__slow animate__delay-5s">At Beangate Academy, we offer practical courses designed to help individuals kickstart their journey
                                            towards success. Our courses are designed to equip students with the skills and knowledge needed to
                                            excel in their chosen fields.</h3>
                                        <a href="#courses" class="section-btn btn btn-default smoothScroll animate__animated animate__bounceInUp animate__slow animate__delay-5s">Take a
                                            course</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item item-third">
                            <div class="caption">
                                <div class="container">
                                    <div class="col-md-6 col-sm-12">
                                        <h1 class="animate__animated animate__bounceInDown animate__slow animate__delay-5s  animate__repeat-2">Efficient Learning <br /> Methods</h1>
                                        <h3 class="animate__animated animate__bounceInRight animate__slow animate__delay-5s  animate__repeat-2">At Beangate Academy, we believe in using efficient learning methods to help our students achieve
                                            their academic and career goals. Our approach to education is based on the latest research in
                                            cognitive science, and our experienced instructors use a combination of traditional teaching methods
                                            and innovative learning techniques to ensure that our students learn effectively and efficiently.
                                        </h3>
                                        <a href="#contact" class="section-btn btn btn-default smoothScroll animate__animated animate__bounceInUp animate__slow animate__delay-5s animate__repeat-2">Let's
                                            chat</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <main id="main">

                <section id="about" class="about">

                    <div class="container" data-aos="fade-up">

                        <div class="row">
                            <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                                <img src="assets/img/about.jpg" class="img-fluid" alt=""/>
                            </div>
                                <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                                    <h3 class="text-center"><strong>Welcome
                                        To <br/>
                                            BeanGate Academy</strong></h3>
                                            <br/>
                                                <ul>
                                                    <li><i class="bi bi-check-circle"></i> BeanGate Academy make and keep our Resposiblities. Our team up with
                                                        other IT organizations to convey on the guarantees we make to our clients and accomplices.</li> <br/>
                                                        <li><i class="bi bi-check-circle"></i> This culture of cooperation enables all to talk reality, remain in
                                                            the discussion, and when vital, question business as usual which takes us to abnormal state. We
                                                            appreciate what we do and praise our victories.</li> <br/>
                                                            <li><i class="bi bi-check-circle"></i> Our Vision :- Our vision controls the means we take every day to
                                                                guarantee our clients get an answer conveyed agreeable to them. We manufacture trust, and we expect that
                                                                others are attempting to make the best decision.</li>
                                                </ul>
                                </div>
                            

                        
                        </div>
                    </div>
                </section>

                   
                        <section id="why-us" class="why-us section-bg">
                            <div class="container" data-aos="fade-up">

                                <div class="row">
                                    <div class="col-lg-4 d-flex align-items-stretch">
                                        <div class="content">
                                            <h3>Why Choose BeanGate Academy ?</h3>
                                            <p class="text-white">
                                                Beangate Academy is the best professional academy for providing internships with live projects. The
                                                teachers at Beangate Academy have more than 10 years of experience in the field of computer technology.
                                                We are offering a variety of courses and programming languages and preparing students for careers in
                                                computer science, software engineering, and web development.
                                            </p>
                                            <div class="text-center">
                                                <a href="About" class="more-btn">Learn More <i class="bx bx-chevron-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                        <div class="icon-boxes d-flex flex-column justify-content-center">
                                            <div class="row">
                                                <div class="col-xl-4 d-flex align-items-stretch">
                                                    <div class="icon-box mt-4 mt-xl-0">
                                                        <i class='bx bx-desktop'></i>
                                                        <h4>Live projects</h4>
                                                        <p>Beangate Academy is offering various programming languages in the
                                                            field of computer science and software engineering. Our courses are designed to equip students
                                                            with an in-depth knowledge base skills regarding new technology.</p>
                                                    </div>

                                                </div>
                                                <div class="col-xl-4 d-flex align-items-stretch">
                                                    <div class="icon-box mt-4 mt-xl-0">
                                                        <i class='bx bx-award'></i>
                                                        <h4>Industrial Training</h4>
                                                        <p>Beangate Academy is a platform that was created with the objective of providing a world-class
                                                            education to students. We provide industrial training to the students and provide them with
                                                            knowledge of technology and industries.</p>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4 d-flex align-items-stretch">
                                                    <div class="icon-box mt-4 mt-xl-0">
                                                        <i class='bx bx-briefcase'></i>
                                                        <h4>Job Placement</h4>
                                                        <p>Beangate Academy is a leading organisation that provides job placement, training, and guidance to
                                                            students. we offer an integrated solution that ensures you get the right skills needed to start
                                                            your career or expand your current one.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>


                       


                        <section id="features" class="features">
                            <div class="container" data-aos="fade-up">

                                <div class="section-title">
                                    <h2 class="animate__animated animate__bounceInRight">Our Courses <small class="animate__animated animate__bounceInLeft">Update your skills with newest courses</small></h2>
                                </div>

                                <div class="row" data-aos="zoom-in" data-aos-delay="100">
                                    
                                    <div class="col-lg-3 col-md-4">
                                        <div class="icon-box ">
                                            <img src="assets/img/Courses/java.png" width="50" height="50"></img>
                                            <h3><a href="java">Java</a></h3>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                                        <div class="icon-box">
                                            <img src="assets/img/Courses/python.png" width="50" height="50"></img>
                                            <h3><a href="Python">Python</a></h3>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-4">
                                        <div class="icon-box">
                                            <img src="assets/img/Courses/meanstack.png" width="50" height="50"></img>
                                            <h3><a href="MearnStack">Mearn Stack</a></h3>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-4 ">
                                        <div class="icon-box">
                                            <img src="assets/img/Courses/nodejs.png" width="50" height="50"></img>
                                            <h3><a href="NodeJS">Node_js</a></h3>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                                        <div class="icon-box">
                                            <img src="assets/img/Courses/html.png" width="50" height="50"></img>
                                            <h3><a href="HTMLpage">HTML</a></h3>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                                        <div class="icon-box">
                                            <img src="assets/img/Courses/css3.png" width="50" height="50"></img>
                                            <h3><a href="CSSContent">CSS</a></h3>
                                        </div>
                                    </div>

                                    {/* <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                                        <div class="icon-box">
                                            <img src="assets/img/Courses/PHP.png" width="50" height="50"></img>
                                            <h3><a href="PHP">PHP </a></h3>
                                        </div>
                                    </div> */}
                                    <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                                        <div class="icon-box">
                                            <img src="assets/img/Courses/android.png" width="50" height="50"></img>
                                            <h3><a href="Android">Android</a></h3>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
                                        <div class="icon-box">
                                            <img src="assets/img/Courses/angular.png" width="50" height="50"></img>
                                            <h3><a href="Angular">Angular_JS</a></h3>
                                        </div>
                                    </div>
                                    {/* <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
                                        <div class="icon-box">
                                            <img src="assets/img/Courses/full-stack-developer.png" width="50" height="50"></img>
                                            <h3><a href="Dotnet">Dot net </a></h3>
                                        </div>
                                    </div> */}
                                    <div class="col-lg-3 col-md-4 ">
                                        <div class="icon-box">
                                            <img src="assets/img/Courses/c-plus-plus.png" width="50" height="50"></img>
                                            <h3><a href="Cplusplus">C_++</a></h3>
                                        </div>
                                    </div>
                                    {/* <div class="col-lg-3 col-md-4 mt-4">
                                        <div class="icon-box">
                                            <img src="assets/img/Courses/machinelearning.png" width="50" height="50"></img>
                                            <h3><a href="MachineLearning">Machine_Learning</a></h3>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-4 mt-4">
                                        <div class="icon-box">
                                            <img src="assets/img/Courses/sql.png" width="50" height="50"></img>
                                            <h3><a href="Mysql">My_Sql</a></h3>
                                        </div>
                                    </div> */}
                                    {/* <div class="col-lg-3 col-md-4 mt-4">
                                        <div class="icon-box">
                                            <img src="assets/img/Courses/java-script.png" width="50" height="50"></img>
                                            <h3><a href="JavaScript">Java_Script</a></h3>
                                        </div>
                                    </div> */}
                                    <div class="col-lg-3 col-md-4 ">
                                        <div class="icon-box">
                                            <img src="assets/img/Courses/java-script.png" width="50" height="50"></img>
                                            <h3><a href="Bootstrap">Bootstrap</a></h3>
                                        </div>
                                    </div>
                                    {/* <div class="col-lg-3 col-md-4 mt-4">
                                        <div class="icon-box">
                                            <img src="assets/img/Courses/linux.png" width="50" height="50"></img>
                                            <h3><a href="Linux">Linux</a></h3>
                                        </div>
                                    </div> */}
                                    <div class="col-lg-3 col-md-4 ">
                                        <div class="icon-box">
                                            <img src="assets/img/Courses/react-native.png" width="50" height="50"></img>
                                            <h3><a href="ReactJS">React_Native</a></h3>
                                        </div>
                                    </div>
                                    {/* <div class="col-lg-3 col-md-4 mt-4">
                                        <div class="icon-box">
                                            <img src="assets/img/Courses/cloud-network.png" width="50" height="50"></img>
                                            <h3><a href="Wordpress">Wordpress</a></h3>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-4 mt-4">
                                        <div class="icon-box">
                                            <img src="assets/img/Courses/android.png" width="50" height="50"></img>
                                            <h3><a href="AndroidDevelopment">Android Development</a></h3>
                                        </div>
                                    </div> */}
                                    {/* <div class="col-lg-3 col-md-4 mt-4">
                                        <div class="icon-box">
                                            <img src="assets/img/Courses/c-sharp.png" width="50" height="50"></img>
                                            <h3><a href="Csharp">C Sharp</a></h3>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-4 mt-4">
                                        <div class="icon-box">
                                            <img src="assets/img/Courses/ethical.png" width="50" height="50"></img>
                                            <h3><a href="Ethical">Ethical_Hacking</a></h3>
                                        </div>
                                    </div> */}
                                    
                                    <div class="col-lg-3 col-md-4 ">
                                        <div class="icon-box">
                                            <img src="assets/img/Courses/react.png" width="50" height="50"></img>
                                            <h3><a href="ReactJS">React_JS</a></h3>
                                        </div>
                                    </div>
                                    {/* <div class="col-lg-3 col-md-4 mt-4">
                                        <div class="icon-box">
                                            <img src="assets/img/Courses/social-media-marketing.png" width="50" height="50"></img>
                                            <h3><a href="DigitalMarketing">Digital_Marketing</a></h3>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-4 mt-4">
                                        <div class="icon-box">
                                            <img src="assets/img/Courses/data_science.png" width="50" height="50"></img>
                                            <h3><a href="DataScience">Data_science</a></h3>
                                        </div>
                                    </div> */}
                                    
                                    
                                </div>
                                <div class="all-courses text-center"> <a href="Courses" class="allcourse">See All Courses
                                    Here</a>
                                </div>

                            </div>
                        </section>

                        <Clasess></Clasess>


                        {/* <section id="counts" class="counts section-bg">
                            <div class="container">

                                <div class="row counters">

                                    <div class="col-lg-3 col-6 text-center">
                                        <span data-purecounter-start="0" data-purecounter-end="250" data-purecounter-duration="1"
                                            class="purecounter"></span> 
                                        <p>Students</p>
                                    </div>

                                    <div class="col-lg-3 col-6 text-center">
                                        <span data-purecounter-start="0" data-purecounter-end="36" data-purecounter-duration="1"
                                            class="purecounter"></span>
                                        <p>Courses</p>
                                    </div>

                                    <div class="col-lg-3 col-6 text-center">
                                        <span data-purecounter-start="0" data-purecounter-end="2" data-purecounter-duration="1"
                                            class="purecounter"></span>
                                        <p>Academy</p>
                                    </div>

                                    <div class="col-lg-3 col-6 text-center">
                                        <span data-purecounter-start="0" data-purecounter-end="10" data-purecounter-duration="1"
                                            class="purecounter"></span>
                                        <p>Trainers</p>
                                    </div>

                                </div>

                            </div>
                        </section> */}

                                    


                        

                        <section id="popular-courses " class="courses section-bg">
                            <div class="container" data-aos="fade-up">

                                <div class="section-title">
                                    <h2 class="animate__animated animate__bounceInLeft">Popular Courses <small class="animate__animated animate__bounceInRight">Upgrade your skills with upgraded technology</small></h2>
                                </div>

                                <div class="row" data-aos="zoom-in" data-aos-delay="100">

                                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                        <div class="course-item">
                                            <img src="assets/img/codingjava.jpg" class="img-fluid" alt="..." />
                                            <div class="course-content">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <h3> <a href="Fullstack">Java Full Stack</a></h3>
                                                </div>

                                                <p>Beangate Academy is an excellent opportunity for anyone who wants to learn Java full-stack
                                                    development. The course is designed to give students a comprehensive overview of the different
                                                    components that make up a full-stack development environment. It covers everything from the basics of
                                                    programming languages to more advanced topics like security, databases, and web services.</p>
                                                <div class="trainer d-flex justify-content-between align-items-center">
                                                    <div class="trainer-profile d-flex align-items-center">
                                                        <img src="assets/img/trainers/trainer-1.jpg" class="img-fluid" alt="" />
                                                        <span>Pankaj Sir</span>
                                                    </div>
                                                    <div class="trainer-rank d-flex align-items-center">
                                                        <i class="bx bx-user"></i>&nbsp;50
                                                        &nbsp;&nbsp;
                                                        <i class="bx bx-heart"></i>&nbsp;65
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                        <div class="course-item">
                                            <img src="assets/img/coding-python.jpg" class="img-fluid" alt="..." />
                                            <div class="course-content">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <h3><a href="PythonFullstack">Python Full Stack</a></h3>
                                                </div>

                                                <p>Beangate Academy is offering a full-stack Python development course that is designed to give students
                                                    the skills they need to become successful web developers. The course will teach students the
                                                    fundamentals of server-side programming with Python. The Full
                                                    Stack Engineer includes using a range of different technologies and languages (such as Java,
                                                    JavaScript, HTML, PHP, C#) to develop applications.</p>
                                                <div class="trainer d-flex justify-content-between align-items-center">
                                                    <div class="trainer-profile d-flex align-items-center">
                                                        <img src="assets/img/trainers/rajverma.webp" class="img-fluid" alt="" />
                                                        <span>Raj Verma</span>
                                                    </div>
                                                    <div class="trainer-rank d-flex align-items-center">
                                                        <i class="bx bx-user"></i>&nbsp;35
                                                        &nbsp;&nbsp;
                                                        <i class="bx bx-heart"></i>&nbsp;42
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                                        <div class="course-item">
                                            <img src="assets/img/Mern-coding.jpg" class="img-fluid" alt="..." />
                                            <div class="course-content">
                                                <div class="d-flex justify-content-between align-items-center mb-3">
                                                    <h3><a href="MernFullstack">Mern Full Stack</a></h3>
                                                </div>

                                                <p>Beangate Academy is pleased to provide Mern Full Stack Development Course to students interested in
                                                    learning the skills needed to become a successful full stack developer. This course teaches students
                                                    the fundamentals of Mern full stack development, from web development to mobile development, and provides them
                                                    with the knowledge and experience they need to advance in their careers. <br />
                                                </p>
                                                <div class="trainer d-flex justify-content-between align-items-center">
                                                    <div class="trainer-profile d-flex align-items-center">
                                                        <img src="assets/img/trainers/trainer-3.jpg" class="img-fluid" alt="" />
                                                        <span>Mrs. Rajni</span>
                                                    </div>
                                                    <div class="trainer-rank d-flex align-items-center">
                                                        <i class="bx bx-user"></i>&nbsp;20
                                                        &nbsp;&nbsp;
                                                        <i class="bx bx-heart"></i>&nbsp;85
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </section>



                        <section id="courses">
                            <div class="container ">
                                <div class="row">

                                    <div class="col-md-12 col-sm-12">
                                        <div class="section-title ">
                                            <h2 class="animate__animated animate__bounceInRight">Training Experts <small class="animate__animated animate__bounceInLeft">Meet Our Professional Trainers</small></h2>
                                        </div>

                                        <div class="owl-carousel owl-theme owl-courses">
                                            <div class="col-md-4 col-sm-4">
                                                <div class="team-thumb">
                                                    <div class="team-image">
                                                        <img src="assets/images/Trainers/author-image3 - Copy.png" class="img-responsive" alt="" />
                                                    </div>
                                                    <div class="team-info">
                                                        <h3>Mr. Pankaj Sir</h3>
                                                        <span>Full Stack Trainer(JAVA)</span>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="col-md-4 col-sm-4">
                                                <div class="team-thumb">
                                                    <div class="team-image">
                                                        <img src="assets/images/Trainers/author-image8.png" class="img-responsive" alt="" />
                                                    </div>
                                                    <div class="team-info">
                                                        <h3>Mrs. Rajni Ma'am</h3>
                                                        <span>Full Stack Trainer(Mern Full Stack)</span>
                                                    </div>

                                                </div>
                                            </div>

                                           

                                            <div class="col-md-4 col-sm-4">
                                                <div class="team-thumb">
                                                    <div class="team-image">
                                                        <img src="assets/img/trainers/rajverma.webp" class="img-responsive" alt=""  />
                                                    </div>
                                                    <div class="team-info">
                                                        <h3>Raj Verma</h3>
                                                        <span>Python Trainer</span>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="col-md-4 col-sm-4">
                                                <div class="team-thumb">
                                                    <div class="team-image">
                                                        <img src="assets/images/Trainers/author-image1.png" class="img-responsive" alt="" />
                                                    </div>
                                                    <div class="team-info">
                                                        <h3>Nawaz Uddin</h3>
                                                        <span>Frontend Trainer(React & Angular)</span>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="col-md-4 col-sm-4">
                                                <div class="team-thumb">
                                                    <div class="team-image">
                                                        <img src="assets/images/Trainers/author-image2.png" class="img-responsive" alt="" />
                                                    </div>
                                                    <div class="team-info">
                                                        <h3>Sachin</h3>
                                                        <span>UI/UX Designing Teacher</span>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                        

                        <section id="counts" class="counts ">
                            <div class="container">

                                <div class="row counters">

                                    <div class="col-lg-3 col-6 text-center">
                                        <span data-purecounter-start="0" data-purecounter-end="250" data-purecounter-duration="1"
                                            class="purecounter"></span> 
                                        <p>Students</p>
                                    </div>

                                    <div class="col-lg-3 col-6 text-center">
                                        <span data-purecounter-start="0" data-purecounter-end="36" data-purecounter-duration="1"
                                            class="purecounter"></span>
                                        <p>Courses</p>
                                    </div>

                                    <div class="col-lg-3 col-6 text-center">
                                        <span data-purecounter-start="0" data-purecounter-end="2" data-purecounter-duration="1"
                                            class="purecounter"></span>
                                        <p>Academy</p>
                                    </div>

                                    <div class="col-lg-3 col-6 text-center">
                                        <span data-purecounter-start="0" data-purecounter-end="10" data-purecounter-duration="1"
                                            class="purecounter"></span>
                                        <p>Trainers</p>
                                    </div>


                                </div>

                            </div>
                        </section>

                        <section id="testimonial">
                <div class="container">
                    <div class="row">

                        <div class="col-md-12 col-sm-12">
                            <div class="section-title">
                                <h2>Placed  candidate  In  India's  top  Companies  <small>from around the world</small></h2>
                            </div>

                            <div class="owl-carousel owl-theme owl-client">
                                <div class="col-md-4 col-sm-4 ">
                                    <div class="item text-center ">
                                        <div class="tst-image1 text-center">
                                            <img src="assets/images/Students/student1.jpg" class="img-responsive "
                                                alt="" />
                                        </div>
                                        <div class="tst-author text-center">
                                            <h4>Ravleen</h4>
                                            <span>Position :</span>
                                            <span>JAVA Full Stack Developer</span> <br/>
                                            <span>At : BeanGate IT Solution</span>
                                        </div>
                                        {/* <p>  Excellent level of professionalism. I give Beangate Academy academy five star for having
                                            fantastic teaching techniques, keep up the good works and high professionalism.</p> */}
                                        <div class="tst-rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-4">
                                    <div class="item text-center ">
                                        <div class="tst-image1 text-center">
                                            <img src="assets/images/Students/student2.jpg" class="img-responsive"
                                                alt="" />
                                        </div>
                                        <div class="tst-author text-center">
                                            <h4>Priya</h4>
                                            <span>Position :</span>
                                            <span>Frot-End Web Developer</span> <br/>
                                            <span>At : BeanGate IT Solution</span>
                                            
                                        </div>
                                        {/* <p> I would recommend the Beangate Academy for online studies as you can do it
                                            on your own time and it
                                            is very convenient to study any time and anywhere that you are, Amazing
                                            institute to do studies.</p> */}
                                        <div class="tst-rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-4">
                                    <div class="item text-center ">
                                        <div class="tst-image1">
                                            <img src="assets/images/Students/student3.jpg" class="img-responsive"
                                                alt="" />
                                        </div>
                                        <div class="tst-author text-center">
                                            <h4>Khushboo</h4>
                                            <span>Position :</span>
                                            <span>Frot-End Web Developer</span> <br/>
                                            <span>At : BeanGate IT Solution</span>
                                        </div>
                                        {/* <p> I have learned many things from Beangate academy and I will still learn more
                                            things. now I know what is a technology I learned this from Beangate
                                            Academy
                                            thank you keep doing this.</p> */}
                                        <div class="tst-rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-4">
                                    <div class="item text-center ">
                                        <div class="tst-image1">
                                            <img src="assets/images/Students/student4.jpg" class="img-responsive"
                                                alt="" />
                                        </div>
                                        <div class="tst-author text-center">
                                            <h4>Satyam</h4>
                                            <span>Position :</span>
                                            <span>JAVA Full Stack Developer</span> <br/>
                                            <span>At : BeanGate IT Solution</span>
                                        </div>
                                        {/* <p> I've enrolled in 3 courses at the same time and I must say I'm absolutely
                                            100% convinced I made the right choice on how to do my certification in my
                                            fields I'm interested in.</p> */}
                                        <div class="tst-rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-4">
                                    <div class="item text-center ">
                                        <div class="tst-image1 ">
                                            <img src="assets/images/Students/student5.jpg" class="img-responsive"
                                                alt="" />
                                        </div>
                                        <div class="tst-author text-center">
                                            <h4>Ashwini</h4>
                                            <span>Position :</span>
                                            <span>JAVA Full Stack Developer</span> <br/>
                                            <span>At : BeanGate IT Solution</span>
                                            
                                        </div>
                                        {/* <p>I want to thank the Beangate Academy for their wonderful IT training courses
                                            most
                                            especially for the front-end design & development bundles which they offer
                                            to me.</p> */}
                                        <div class="tst-rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-4 col-sm-4">
                                    <div class="item text-center ">
                                        <div class="tst-image1">
                                            <img src="assets/images/Students/student6.jpg" class="img-responsive"
                                                alt="" />
                                        </div>
                                        <div class="tst-author text-center">
                                            <h4>Aman</h4>
                                            
                                            <span>Position :</span>
                                            <span>JAVA Full Stack Developer</span> <br/>
                                            <span>At : BeanGate IT Solution</span>
                                        </div>
                                        {/* <p> If my web design
                                            course provides the same value as other courses on the Beangate Academy
                                            platform,
                                            then it's a great distance learning option for all programming languages.
                                        </p> */}
                                        <div class="tst-rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4">
                                    <div class="item text-center ">
                                        <div class="tst-image1">
                                            <img src="assets/images/Students/student7.jpg" class="img-responsive"
                                                alt="" />
                                        </div>
                                        <div class="tst-author text-center">
                                            <h4>Swati</h4>
                                           
                                            <span>Position :</span>
                                            <span>PHP Full Stack Developer</span><br/>
                                            <span>At : BeanGate IT Solution</span>
                                        </div>
                                        {/* <p>Beangate Academy is a really friendly place to be, the staff are approachable
                                            and helpful. There are lots of opportunities. Thank you Beangate Academy
                                            for the
                                            great course!</p> */}
                                        <div class="tst-rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4">
                                    <div class="item text-center ">
                                        <div class="tst-image1">
                                            <img src="assets/images/Students/student8.jpg" class="img-responsive"
                                                alt="" />
                                        </div>
                                        <div class="tst-author text-center">
                                            <h4>Priya</h4>
                                            <span>Position :</span>
                                            <span>.NET Full Stack Developer</span> <br/>
                                            <span>At : BeanGate IT Solution</span>
                                        </div>
                                        {/* <p> The course is
                                            comprehensive and gives a great overview of web design and all the tools
                                            and considerations when designing and creating websites in Beangate
                                            Academy.</p> */}
                                        <div class="tst-rating">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

                    </main>



                </div>
                
    )
}
