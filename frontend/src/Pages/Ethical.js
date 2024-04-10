import React from 'react'

export default function Ethical() {

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
                                <h2>Ethical Hacking <strong class="yellow">Programming</strong></h2>
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
                                                    <img src="assets/img/Courses/ethical.png" alt="" />

                                                </div>
                                                <p>1. Access in depth, hand on training for web designing and angular JS
                                                    Programming.
                                                    2.Learn from experts who are having the company experience.
                                                    3.We also provide you the knowledge how to make your project live.
                                                    4.with us you can become a full fledged Angular JS engineer.</p>

                                            </div>
                                            <div id="syllabus_page">
                                                <div class="course">
                                                    <h3>Syllabus</h3>
                                                </div>
                                                <ul>
                                                    <li><b> Basics of Android</b></li>
                                                    <li>
                                                        <ul class="course-list">
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5> 1. OUTLINE OF ETHICAL HACKING </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Types of Hacking </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Advantages of Hacking </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Disadvantages of Hacking </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Why we do Hacking </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5> 2. TYPES OF HACKERS </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; White Hat Hackers </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Black Hat Hackers </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Grey Hat Hackers </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Miscellaneous Hackers </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5> 3. FAMOUS ETHICAL HACKERS </h5>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>4. NOMENCLATURE USED IN ETHICAL HACKING </h5>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5> 5. TOOLS ASIST WITH ETHICAL HACKING </h5>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5> 6. ABILITIES FOR ETHICAL HACKING </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Basic Skills </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Courses & Certifications</p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5> 7. PROCEDURE OF ETHICAL HACKING </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Ethical Hacking </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5> 8. ETHICAL HACKING ?EXAMINE </h5>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5> 9. ETHICAL HACKING - IMPRESSION </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Information of Domain Name </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Finding IP Address </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Finding Hosting Company </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; IP Address Ranges </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; History of the Website </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5> 10. THUMBPRINTS IN ETHICAL HACKING </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Basic Steps </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Port Examine </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Cleaning of ping </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; DNS count </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5> 11. SNIFFING IN ETHICAL HACKING </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Types of Sniffing </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Hardware Protocol Evaluator </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Rules </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5> 12. SNIFFING TOOLS IN ETHICAL HACKING </h5>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5> 13. ARP POISONING.ETHICAL HACKING </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; What is ARP Spoofing? </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; What is MITM? </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; ARP Poisoning � Practice </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5> 14. DNS POISONING IN ETHICAL HACKING </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; DNS Poisoning ? Practice </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Weaponry against DNS Poisoning </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5> 15. USING OF ETHICAL HACKING </h5>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5> 16. ENUMERATION IN ETHICAL HACKING </h5>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5> 17. METASPLOIT OF ETHICAL HACKING </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Job of Metasploit </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Charges of Metasploit </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5> 18. TROJAN ATTACKS IN ETHICAL HACKING </h5>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5> 19. TCP/IP SKYJACKING IN ETHICAL HACKING </h5>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5> 20. EMAIL SKYJACKING IN ETHICAL HACKING </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Email Spoofing </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Social Skyjacking </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Virus Insertion in a User System </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5> 21. PASSWORD HACKING IN ETHICAL HACKING </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Dictionary Attack </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Hybrid Dictionary Attack </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Brute-Force Attack </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Rainbow Tables </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5> 22. WIRELESS HACKING IN ETHICAL HACKING </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Kismet </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; NetStumbler </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Wired Equivalent Privacy </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Wireless DoS Attacks </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5> 23. SOCIAL HANDLING IN ETHICAL HACKING </h5>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5> 24. DDOS ATTACKS IN ETHICAL HACKING </h5>
                                                                    </li>
                                                                    <li> &#8658; What are Botnets? </li>
                                                                    <li> &#8658; Types of DDoS Attacks </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5> 25. CROSS-SITE SCRIPTING.IN ETHICAL HACKING </h5>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5> 26. SQL INJECTION IN ETHICAL HACKING </h5>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5> 27. PEN TESTING IN ETHICAL HACKING </h5>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                               
                            <div class="col-lg-6 course_right mt-5 ">
                                <div class="card">
                                    <div class="card-header text-center">
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
                                        <div class="all-courses text-center mt-4"> <a
                                            href="assets/register page/register page/rf.html"
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
