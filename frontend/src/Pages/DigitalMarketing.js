import React from 'react'

export default function DigitalMarketing() {

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
                                <h2>Digital Marketing <strong class="yellow">Programming</strong></h2>
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
                                                    <img src="assets/img/Courses/social-media-marketing.png" alt="" />

                                                </div>
                                                <p>Now a days we all are using the social networking to talk to various random people and now it's
                                                    becoming a platfom of awareness. Awareness of brands, business, market. with the help of Digital
                                                    Marketing we can aware people about what we are dealing with and the brands which we and the
                                                    companies are selling.</p>

                                            </div>
                                            <div id="syllabus_page">
                                                <div class="course">
                                                    <h3>Syllabus</h3>
                                                </div>
                                                <ul>
                                                    <li><b> Basics of Digital Marketing </b></li>
                                                    <li>
                                                        <ul class="course-list">
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>1. SEO Topics </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p> &#8658; What is SEO </p>
                                                                    </li>
                                                                    <li>
                                                                        <p> &#8658; Need of SEO </p>
                                                                    </li>
                                                                    <li>
                                                                        <p> &#8658; Search Engines </p>
                                                                    </li>
                                                                    <li>
                                                                        <p> &#8658; How search engines work </p>
                                                                    </li>
                                                                    <li>
                                                                        <p> &#8658; Major functions of a search engine </p>
                                                                    </li>
                                                                    <li>
                                                                        <p> &#8658; Web Traffic </p>
                                                                    </li>
                                                                    <li>
                                                                        <p> &#8658; Different types of keywords </p>
                                                                    </li>
                                                                    <li>
                                                                        <p> &#8658; Google trends & insights </p>
                                                                    </li>
                                                                    <li>
                                                                        <p> &#8658; Steps in SEO </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>2. Search Engine Optimization Techniques </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p> &#8658; Black Hat SEO </p>
                                                                    </li>
                                                                    <li>
                                                                        <p> &#8658; White Hat SEO </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>3. On Page Optimization</h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Site Analysis </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Analysis of Similar websites </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Meta Tags </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Creating Sitemaps </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Creating Robots file </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Optimize SEO Content </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Canonical Implementation </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Keyword Research </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Keyword Density </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Internal linking </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Meta tags creation </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Basic HTML knowledge </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Hyperlink Optimization </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; In depth site Analysis </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Link Validation </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Meta Description Tags Optimization </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Meta Keywords Tags Optimization </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Navigation & Design Optimization </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Text Modification Optimization </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Title Tag Optimization </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Broken Links Checking </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Internal Link Structuring </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Google webmasters too </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Quick indexing techniques </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Search Engine Submission </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Online PR </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Case Study of White Hat SEO </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Case Study of Black Hat SEO </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Case Study of Grey Hat SEO </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Google Sandbox Effect </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Image Optimization </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Optimization of Keyword </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Bold, Italic effect to main keywords </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Canonicalization </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Competition Analysis </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; CSS Validation </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Html Validation </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Google Base Feeds </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; H Tags Optimization (Eg: H1, H2, H3) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; HTML Code Clean Up & Optimization </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Image Optimization </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; URL Rewrite </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; W3C Validation </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Local Search Engine Optimization </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>4. Site Back-links count </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Optimization for Multiple Browsers </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Google, Yahoo & Bing Site Map Creation </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Google Webmaster Tools account setup & monitoring </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Website Spell Check </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Check Search Engine Road Blocks </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>5. Off Page Optimization </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Page Rank</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Page Rank Increment </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Backlinks </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Type of Backlinks </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Link Building </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Quality Link Building </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Type of Link Building </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Google Friendly Link Building </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Articles Submission </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Blog Marketing </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Blog Commenting </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Web 2.0 Submission </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Yahoo Question Answer Participation </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Directory Submission </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Search engine submission </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; XML Site maps submission </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Customer Review Submission </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Press Release Submission </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Document Submission </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Regional Directories Submissions </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; CSS Gallery Submission </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Press Release </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Photo Sharing </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Paid Submission </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Face Book Twitter Marketing </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; HTML Sitemap for users </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Press Releases </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Forums Posting </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Social Bookmarking </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Classifieds Submission </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Google Maps </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Business Local Listing </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; XML Site Map Creation & Submission </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Blog Writing </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Article Writing </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Video Submission </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; RSS Feeds Submission </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Link Building </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Knowledge of Freelancer,odesk,guru e.t.c </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Deep Directory Submission </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Blog Posting </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Business Listing </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>6. SEO Tools </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Keyword Density Analyzer Tool</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Google tool </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; yahoo/Bing Tool </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Rich Snippet Text Tool </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Link Popularity Tools </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; search Engine Tools </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Site Tools </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Comparison Tool </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>7. Video Marketing </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Introduction Youtube </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; How to Create and Managing an Account </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; How to Get audience </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Social Sharing & Comments </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; How to Optimize Submissions </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>8. SOCIAL MEDIA MARKETING </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Introduction to Social Media </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Benefits of Social Media Marketing </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Social Media Sites </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Facebook Account Creation </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Facebook Page Creation </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Business Promotion with Linkedin </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Google Plus </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>9. PPC(Pay Per Click) </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; What is PPC (Pay Per Click) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Understand benefits &scope of PPC </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Direct campaigns v/s branding campaigns </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Keyword planner and keyword research </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Understanding broad, exact and phrase keyword </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; d group structure and budget setting </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Bidding, language, and targeted location on settings </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Ad delivery and Ad rotation</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Types of targeting </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Advertiment reporting and analysis </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>10. Micro Blogging </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; What is Blogging </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Promotion of Blogs </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Submission of Blogs </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Creation of Blogs (blogspot, wordpress, TypePad) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Weekly Postings on Blogs </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Commenting on Blogs 3 </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>11. Online Advertisements </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Introduction Online Advertisements </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Online Advertisements Types </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Banner Advertisements </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Rich Media Advertisements </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Textual Advertisements </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Video Advertisements </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Image Advertisements </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>12. Google Analytics </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Google Analytics </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Importance of Google Analytics </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Fundamentals of Google Analytics </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; How to Track Landing Pages </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; How to Track Location </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; User Tracking </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Tracking Conversions </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Monitoring Website Performance </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Monitoring Visitors Behavior </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Setting up Goals and Funnels </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Other Analytics Platforms </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>13. SEO </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Introduction to SEO </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Keyword Research </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Schema Markups </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Off page SEO </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Link building </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Social Seo </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Quora </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; YouTube </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; slideshare etc </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Local Seo </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Updates </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; google my business </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; bing local pages </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; local listings </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>14. SMM </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Introduction </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Importance </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Types of accounts </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Social platforms intro </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Type of social platforms and their uniqueness </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>15. Email Marketing </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Introduction </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Tips to maximize email marketing </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Know your audience </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Craft your message </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Choose the right format </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; HTML emails g. Email tracking </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>16. Mobile SEO </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Latest Mobile devices </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Latest Operating version systems </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Responsive Design </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; User Friendly </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Mobile Friendly </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Similar URLs as to your Desktops </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Avoid common mistakes </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Configure for other devices </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>17. SEM </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Google Adwords/Pay par click </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Create campaign </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Bidding strategies </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Types of adds </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Settings </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Add groups </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Manage multiple account </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Remarketing </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Conversion tracking </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Conversion optimize </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Link Google analytics and Adwords </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Payment method and settings </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Google Adwords certification </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Facebook Advertising </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; LinkedIn Advertising </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; You Tube Advertising </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>15. Email Marketing </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Google Analytics </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>15. Email Marketing </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Google Analytics </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>15. Email Marketing </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Google Analytics </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>15. Email Marketing </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Google Analytics </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; </p>
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
