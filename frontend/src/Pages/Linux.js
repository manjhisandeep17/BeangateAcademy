import React from 'react'

export default function Linux() {

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
                                <h2>Linux <strong class="yellow">Programming</strong></h2>
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
                                                    <img src="assets/img/Courses/linux.png" alt="" />
                                                </div>
                                                <p>1. Access in depth, hand on training for web designing and linux Programming.
                                                    2.Learn from experts who are having the company experience.
                                                    3.To improve the vision of developement with our independent platform under the guidance of our
                                                    experience trainers and makes your concepts more strong.
                                                    4.We also provide you the knowledge how to make your project live.
                                                    5.with us you can become a full fledged linux JS engineer.
                                                </p>
                                            </div>
                                            <div id="syllabus_page">
                                                <div class="course">
                                                    <h3>Syllabus</h3>
                                                </div>
                                                <ul>
                                                    <li><b> Basics of linux </b></li>
                                                    <li>
                                                        <ul class="course-list">
                                                            <li class="justify-content-between d-flex"></li>
                                                        </ul>
                                                        <ul>
                                                            <li>
                                                                <h5>1. HISTORY AND STANDARDS </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; A Brief History of Linux </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; The GNU Project </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; The Linux Kernel </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>2. FUNDAMENTAL CONCEPTS </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; The Core Operating System: The Kernel </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; The Shell </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Users and Groups </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Single Directory Hierarchy, Directories, Links, and Files </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; File I/O Model </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Programs </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Processes </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Memory Mappings </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Static and Shared Libraries </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Interprocess Communication and Synchronization </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Signals </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Threads </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Process Groups and Shell Job Control </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Sessions, Controlling Terminals, and Controlling Processes </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Pseudoterminals </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Date and Time </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Client-Server Architecture </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Realtime </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; The /procFile System </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>3. SYSTEM PROGRAMMING CONCEPTS </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; System Calls </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Library Functions </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; The Standard C Library; The GNU C Library (glibc) </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Handling Errors from System Calls and Library Functions </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Notes on the Example Programs in This Book </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Portability Issues </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>4. FILE I/O: THE UNIVERSAL I/O MODEL </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; File I/O </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Database Input (Connecting to database) </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Universality of I/O </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Opening a File </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Reading from a File </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Writing to a File </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Closing a File </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Changing the File Offset </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Operations Outside the Universal I/O Model </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>5. FILE I/O </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Atomicity and Race Conditions</p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; File Control Operations </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Open File Status Flags </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Relationship Between File Descriptors and Open Files </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Duplicating File Descriptors </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; File I/O at a Specified Offset </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Scatter-Gather I/O </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Truncating a File </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Nonblocking I/O </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; I/O on Large Files </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; The /dev/fd Directory </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Creating Temporary Files </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>6. PROCESSES </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Processes and Programs </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Process ID and Parent Process ID </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Memory Layout of a Process </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Virtual Memory Management </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; The Stack and Stack Frames </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Command-Line Arguments (argc, argv) </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Environment List </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Performing a Nonlocal Goto </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>7. MEMORY ALLOCATION </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Allocating Memory on the Heap </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Allocating Memory on the Stack</p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>8. USERS AND GROUPS </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; The Password File</p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; The Shadow Password File </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; The Group File </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Retrieving User and Group Information </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Password Encryption and User Authentication </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>9. PROCESS CREDENTIALS </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Real User ID and Real Group ID</p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Effective User ID and Effective Group ID </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Set-User-ID and Set-Group-ID Programs </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Saved Set-User-ID and Saved Set-Group-ID </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; File-System User ID and File-System Group ID </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Supplementary Group IDs </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>10. SYSTEM LIMITS AND OPTIONS </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; System Limits</p>
                                                            </li>
                                                            <li>
                                                                <p> &#8658;Retrieving System Limits (and Options) at Run Time </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Retrieving File-Related Limits (and Options) at Run Time </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Indeterminate Limits </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; System Options </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <h5>11. SYSTEM AND PROCESS INFORMATION </h5>
                                                    </li>
                                                    <li>
                                                        <p>&#8658; The /proc File System</p>
                                                    </li>
                                                    <li>
                                                        <p>&#8658; System Identification </p>
                                                    </li>
                                                    <li>
                                                        <h5>12. LINUX SYSTEM </h5>
                                                    </li>
                                                    <li>
                                                        <h5>13. FILE I/O BUFFERING </h5>
                                                    </li>
                                                    <li>
                                                        <p>&#8658; Kernel Buffering of File I/O: The Buffer Cache</p>
                                                    </li>
                                                    <li>
                                                        <p>&#8658; Buffering in the stdio Library </p>
                                                    </li>
                                                    <li>
                                                        <p>&#8658; Controlling Kernel Buffering of File I/O</p>
                                                    </li>
                                                    <li>
                                                        <p>&#8658; Summary of I/O Buffering </p>
                                                    </li>
                                                    <li>
                                                        <p>&#8658; Giving the Kernel Hints About I/O Patterns: posix_fadvise()</p>
                                                    </li>
                                                    <li>
                                                        <p>&#8658; Bypassing the Buffer Cache: Direct I/O </p>
                                                    </li>
                                                    <li>
                                                        <p>&#8658; Mixing Library Functions and System Calls for File I/O </p>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>14. FILE SYSTEMS </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Device Special Files (Devices) </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Disks and Partitions </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; File Systems </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; I-nodes </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; The Virtual File System (VFS) </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Journaling File Systems </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Single Directory Hierarchy and Mount Points </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Mounting and Unmounting File Systems </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Advanced Mount Features </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; A Virtual Memory File System </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Obtaining Information About a File System </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>15. FILE ATTRIBUTES </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Retrieving File Information</p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; File Timestamps </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; File Ownership </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; File Permissions </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; I-node Flags </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>16. DIRECTORIES AND LINKS </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Directories and (Hard) Links</p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Symbolic (Soft) Links </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Creating and Removing (Hard) Links </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Changing the Name of a File </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Working with Symbolic Links </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Creating and Removing Directories </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Removing a File or Directory </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Reading Directories </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; File Tree Walking </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; The Current Working Directory of a Process </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Operating Relative to a Directory File Descriptor </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Changing the Root Directory of a Process </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Resolving a Pathname </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Parsing Pathname Strings </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>17. SIGNALS: FUNDAMENTAL CONCEPTS </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Concepts </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Signal Types and Default Actions </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Changing Signal Dispositions </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Introduction to Signal Handlers </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Sending Signals </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Checking for the Existence of a Process </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Other Ways of Sending Signals </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Displaying Signal Descriptions </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Signal Sets </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; The Signal Mask (Blocking Signal Delivery) </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Pending Signals </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Signals Are Not Queued </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Changing Signal Dispositions </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Waiting for a Signal </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>18. PROCESS CREATION </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Fork(), exit(), wait(), and execve() </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Creating a New Process </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; The vfork() System Call </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Race Conditions After fork() </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Avoiding Race Conditions by Synchronizing with Signals </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>19. PROCESS TERMINATION </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Terminating a Process </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Details of Process Termination </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Exit Handlers </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Interactions Between fork(), stdio Buffers, and _exit() </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>20. PROGRAM EXECUTION</h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Executing a New Program </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; The exec() Library Functions </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Interpreter Scripts </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; File Descriptors and exec() </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Signals and exec() </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Executing a Shell Command </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Implementing </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>21. PROCESS GROUPS, SESSIONS, AND JOB CONTROL </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Gropus & Sessions </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Process Groups </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Sessions </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Controlling Terminals and Controlling Processes </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Foreground and Background Process Groups </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; The SIGHUP Signal </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Job Control </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>22. DAEMONS </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Daemons </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Creating a Daemon </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Guidelines for Writing Daemons </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Using SIGHUP to Reinitialize a Daemon </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Logging Messages and Errors Using syslog </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>23. LOGIN ACCOUNTING </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; The utmp and wtmp Files </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; The utmpx API </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; The utmpx Structure </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Retrieving Information from the utmp and wtmp Files </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Retrieving the Login Name </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Updating the utmp and wtmp Files for a Login Session </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; The lastlog File </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>24. FUNDAMENTALS OF SHARED LIBRARIES </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Object Libraries </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Static Libraries </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Overview of Shared Libraries </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Creating and Using Shared Libraries—A First Pass </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Useful Tools for Working with Shared Libraries </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Shared Library Versions and Naming Conventions </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Installing Shared Libraries </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Compatible Versus Incompatible Libraries </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Upgrading Shared Libraries </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Specifying Library Search Directories in an Object File </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Finding Shared Libraries at Run Time </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Run-Time Symbol Resolution </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Using a Static Library Instead of a Shared Library </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>25. PIPES AND FIFOS </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Pipelining </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Creating and Using Pipes </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Pipes As a Method of Process Synchronization </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Using Pipes to Connect Filters </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Talking to a Shell Command via a Pipe </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Pipes and stdio Buffering </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; FIFOs </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; A Client-Server Application Using FIFOs </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Nonblocking I/O </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Semantics of read() and write() on Pipes and FIFOs </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>26. MEMORY MAPPINGS </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Mapping </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Creating a Mapping </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Unmapping a Mapped Region </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; File Mappings </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Synchronizing a Mapped Region </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Additional mmap() Flags </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Anonymous Mappings </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Remapping a Mapped Region </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; The MAP_NORESERVE Flag and Swap Space Overcommitting </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; The MAP_FIXED Flag </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Nonlinear Mappings </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>27. VIRTUAL MEMORY OPERATIONS </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Changing Memory Protection </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Memory Locking </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Determining Memory Residence </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Advising Future Memory Usage Patterns </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>28. FILE LOCKING </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Locking </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; File Locking with flock() </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Record Locking with fcntl() </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Mandatory Locking </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; The /proc/locks File </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Running Just One Instance of a Program </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Older Locking Techniques </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>29. SOCKETS: INTRODUCTION </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Socket </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Creating a Socket </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Binding a Socket to an Address </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Generic Socket Address Structures </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Stream Sockets </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Datagram Sockets </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>30. TERMINALS </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Terminal attributes </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Retrieving and Modifying Terminal Attributes </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; The stty Command </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Terminal Special Characters </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Terminal Flags </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Terminal I/O Modes </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Terminal Line Speed (Bit Rate) </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Terminal Line Control </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Terminal Window Size </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Terminal Identification </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>31. ALTERNATIVE I/O MODELS </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; I/O</p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; I/O Multiplexing</p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Signal-Driven I/O</p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; The epoll API </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Waiting on Signals and File Descriptors </p>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="justify-content-between d-flex">
                                                        <ul>
                                                            <li>
                                                                <h5>32. PSEUDO TERMINALS </h5>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Other Terminals </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; UNIX 98 Pseudoterminals </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Opening a Pseudoterminal Master </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Connecting Two Processes with a Pseudoterminal </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Pseudoterminal I/O </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Implementing </p>
                                                            </li>
                                                            <li>
                                                                <p>&#8658; Terminal Attributes and Window Size </p>
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



        </div >
    )
}
