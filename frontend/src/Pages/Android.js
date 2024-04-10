import React from 'react'

export default function Android() {

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
                                <h2>Android <strong class="yellow">Programming</strong></h2>
                            </div>
                        </div>
                        <div class="container-fluid px-5">

                            <div class="course">
                                <div class="btn" onClick={abc}>Course Description</div>
                                <span class="course_span">|</span>
                                <div class="btn" onClick={xyz}>Syllabus</div>
                            </div>

                            <hr/>

                                <div class="container-fluid mt-5">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="course_left">
                                                <div id="course_page">
                                                    <div class="course ">
                                                        <h3>Course Description</h3>
                                                    </div>
                                                    <div class="slideimg text-center">
                                                        <img src="assets/img/Courses/android-2.png" alt=""/>
                                                    </div>
                                                    <p>Smart phones plays a vital role in our daily life. Now wonder why we call android phones smart?
                                                        Well they are smart because they are compel according to our needs and are embedded with the smart
                                                        applications and developed according to the taste of user.</p>
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
                                                                            <h5>1. Core Java </h5>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; The Genesis of Java </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; OOPs Concepts </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Overview of Java </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Data Types variables & arrays </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Operators, Classes & Methods </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Interfaces & Abstract classes </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Overloading & Overriding </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Packages & Privileges </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Collection APIs </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Exception Handling Multithreaded programming </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; I/O Applets & Other topics</p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; String Handling </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Java.util package complete coverage</p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; More I/O, Networking </p>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li class="justify-content-between d-flex">
                                                                    <ul>
                                                                        <li>
                                                                            <h5>2. Introduction of Android</h5>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; An Open Platform for Mobile Development</p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Android SDK Features </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Introduction of Development Framework </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Android Application Architecture </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Android Libraries </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Advanced Android Libraries </p>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li class="justify-content-between d-flex">
                                                                    <ul>
                                                                        <li>
                                                                            <h5>3. Getting Started </h5>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; What You Need to Begin </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Downloading and Installing the Android SDK & IDE </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Creating Your First Android Activity </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Types of Android Applications</p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Developing for Mobile Devices </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Hardware-Imposed Design Considerations </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Considering the Users’ Environment </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Android Development Tools </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; The Android Emulator </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; The Android Debug Bridge (ADB) </p>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li class="justify-content-between d-flex">
                                                                    <ul>
                                                                        <li>
                                                                            <h5>4. Creating Applications and Activities </h5>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; What Makes an Android Application? </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Introducing the Application Manifest</p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using the Manifest Editor </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; The Android Application Life Cycle</p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Understanding Application Priority and Process States </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Externalizing Resources </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Creating Resources </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using Resources </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Creating an Activity </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; The Activity Life Cycle </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Android Activity Classes </p>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li class="justify-content-between d-flex">
                                                                    <ul>
                                                                        <li>
                                                                            <h5>5. Creating User Interfaces </h5>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Fundamental Android UI Design </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Introducing Views </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Creating Activity User Interfaces with Views </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; The Android Widget Toolbox </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Introducing Layouts </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using Layouts </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Creating New Views </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Modifying Existing Views </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Creating Compound Controls </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Creating Custom Widgets and Controls </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using Custom Controls </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Creating and Using Menus </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Introducing the Android Menu System </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Defining an Activity Menu </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Dynamically Updating Menu Items </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Handling Menu Selections </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Submenus and Context Menus </p>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li class="justify-content-between d-flex">
                                                                    <ul>
                                                                        <li>
                                                                            <h5>6. Intents, Broadcast Receivers, Adapters, and the Internet </h5>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Introduction of Intents </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using Intents to Launch Activities </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using Intent Filters to Service Implicit Intents</p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using Intent Filters for Plug-ins and Extensibility </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using Intents to Broadcast Events </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Introducing Adapters </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Introducing Some Android-Supplied Adapters </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using Adapters for Data Binding </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using Internet Resources </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Connecting to an Internet Resource </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Leveraging Internet Resources </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Introducing Dialogs </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Introducing the Dialog Class </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using Activities as Dialogs </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Creating a n Earthquake Viewer </p>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li class="justify-content-between d-flex">
                                                                    <ul>
                                                                        <li>
                                                                            <h5>7. Data Storage, Retrieval, and Sharing </h5>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Saving and Loading Files </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Including Static Files as Resources </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; File Management Tools </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Databases in Android </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Introducing SQLite </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Cursors and Content Values </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Working with Android Databases </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using Content Providers </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Native Android Content Providers </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Creating a New Content Provider </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Creating and Using an Earthquake Content Provider </p>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li class="justify-content-between d-flex">
                                                                    <ul>
                                                                        <li>
                                                                            <h5>8. Geocoding, and Location-Based Services </h5>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using Location-Based Services </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Setting up the Emulator with Test Providers </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Updating Locations in Emulator Location Providers </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Create an Application to Manage Test Location Providers </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Selecting a Location Provider </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Finding the Available Providers </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Finding Providers Based on Requirement Criteria </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Finding Your Location </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; “Where Am I?�? Example </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Tracking Movement </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Updating Your Location in “Where Am I? </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using Proximity Alerts </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using the Geocoder </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Reverse Geocoding </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Fosrward Geocoding </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Creating Map -Based Activities </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Creating a Map-Based Activity </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Configuring and Using Map Views </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using the Map Controller </p>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li class="justify-content-between d-flex">
                                                                    <ul>
                                                                        <li>
                                                                            <h5>9. Working in the Background </h5>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Creating and Controlling Services </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Binding Activities to Services </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using Background Worker Threads </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Creating New Threads </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Synchronizing Threads for GUI Operations </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Moving the Earthquake Service to a Background Thread </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Let’s Make a Toast </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Customizing Toasts </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using Toasts in Worker Threads </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using Alarms </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using Alarms to Update Earthquakes </p>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li class="justify-content-between d-flex">
                                                                    <ul>
                                                                        <li>
                                                                            <h5>10. Peer-to-Peer Communication </h5>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Introducing Android Instant Messaging </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using the GTalk Service </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Binding to the GTalk Service </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Making a GTalk Connection and Starting an IM Session </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Introducing Presence and the Contact Roster </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Managing Chat Sessions </p>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li class="justify-content-between d-flex">
                                                                    <ul>
                                                                        <li>
                                                                            <h5>11. Accessing Android Hardware </h5>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using the Media APIs </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Playing Media Resources </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Recording Multimedia </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using the Camera </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Controlling Camera Settings </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using the Camera Preview </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Taking a Picture </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using the Camera Preview </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Introducing the Sensor Manager </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using the Accelerometer and Compass </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Detecting Acceleration Changes </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Creating a Speedometer </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Determining Your Orientation </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Creating a Compass and Artificial Horizon </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Android Telephony </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Making Phone Calls </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Monitoring Phone State and Phone Activity </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Monitoring Data Connectivity and Activity </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Accessing Phone Properties and Status </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Controlling the Phone </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using Bluetooth </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Introducing the Bluetooth Service </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Controlling the Local Bluetooth Device </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Discovering and Bonding with Bluetooth Devices </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Managing Bluetooth Connections </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Communication with Bluetooth </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using a Bluetooth Headset </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Managing Net work and Wi-Fi Connections </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Controlling Device Vibration </p>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li class="justify-content-between d-flex">
                                                                    <ul>
                                                                        <li>
                                                                            <h5>12. Advanced Android Development </h5>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using AID L to Support IP C for Services </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Implementing an AIDL Interface </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using Internet Services </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Building Rich User Interfaces </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Working with Animations </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Using Themes to Skin Your Applications </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Advanced Canvas Drawing </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658; Introducing Surface View </p>
                                                                        </li>
                                                                        <li>
                                                                            <p> &#8658;Creating Interactive Controls </p>
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
