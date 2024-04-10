import React from 'react'

export default function DataScience() {

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
                                <h2>Data Science <strong class="yellow">Programming</strong></h2>
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
                                                    <img src="assets/img/Courses/data science.webp" alt="" />

                                                </div>
                                                <p>Candidates from various quantitative backgrounds, like Engineering, Finance, Math, Statistics,
                                                    Economics, Business Management and have some knowledge analysis on the data , understanding on
                                                    business problems etc.</p>
                                            </div>
                                            <div id="syllabus_page">
                                                <div class="course">
                                                    <h3>Syllabus</h3>
                                                </div>
                                                <ul>
                                                    <li><b> Basics of Data Science</b></li>
                                                    <li>
                                                        <ul class="course-list">
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>1. Introduction </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; What Data Science? </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Common Terms in Analytics </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Analytics vs. Data warehousing, OLAP, MIS Reporting </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Relevance in industry and need of the hour </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Types of problems and business objectives in various industries </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; How leading companies are harnessing the power of analytics? </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Critical success drivers </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Overview of analytics tools & their popularity </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Analytics Methodology & problem solving framework </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; List of steps in Analytics projects </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Identify the most appropriate solution design for the given problem statement
                                                                        </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Project plan for Analytics project & key milestones based on effort estimates
                                                                        </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Build Resource plan for analytics project </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Why Python for data science? </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>2. Core Python </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Overview of Python- Starting with Python </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Introduction to installation of Python </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Introduction to Python Editors & IDE's(Canopy, pycharm, Jupyter, Rodeo,
                                                                            Ipython etc…) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Python Syntax </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Variables & Data Types </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Operators </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Conditional Statements </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Working With Numbers & Strings </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Collections API </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; LISTS </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; TUPLES </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; DICTIONARY </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Date and Time </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Function & Modules </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; File handling </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Exception Handling </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; OOPS Concepts in python </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Regular Expression </p>
                                                                    </li>
                                                                </ul>
                                                            </li>

                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>3. Python Libraries for Data Science </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Numpy </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Scify </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; pandas </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; scikitlearn </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; statmodels </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; nltk </p>
                                                                    </li>

                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>4. Python Modules for Access, Import/Export Data </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Importing Data from various sources (Csv, txt, excel, access etc.) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Database Input (Connecting to database) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Viewing Data objects - subsetting, methods </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Exporting Data to various formats </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Important python modules: Pandas, beautiful soup </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>5. Data Manipulation, Cleansing and Munging </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Cleansing Data with Python </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Data Manipulation steps (Sorting, filtering, duplicates, merging, appending,
                                                                            subsetting, derived variables, sampling, Data type conversions, renaming, formatting
                                                                            etc.) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Data manipulation tools (Operators, Functions, Packages, control structures,
                                                                            Loops, arrays etc.) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Python Built-in Functions (Text, numeric, date, utility functions) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Python User Defined Functions </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; stripping out extraneous information </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Normalizing data </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Formatting data </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Important Python modules for data manipulation (Pandas, Numpy, re, math,
                                                                            string, datetime etc.) </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>6. Data Analysis and Visualization </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Introduction exploratory data analysis </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Descriptive statistics, Frequency Tables and summarization </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Univariate Analysis (Distribution of data & Graphical Analysis) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Bivariate Analysis(Cross Tabs, Distributions & Relationships, Graphical
                                                                            Analysis) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Creating Graphs- Bar/pie/line chart/histogram/ boxplot/ scatter/ density
                                                                            etc.) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Important Packages for Exploratory Analysis(NumPy Arrays, Matplotlib,
                                                                            seaborn, Pandas and scipy.stats etc.) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Data visualization with tableau </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>7. Statistics </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Basic Statistics - Measures of Central Tendencies and Variance </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Building blocks - Probability Distributions - Normal distribution - Central
                                                                            Limit Theorem </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Inferential Statistics -Sampling - Concept of Hypothesis Testing </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Statistical Methods - Z/t-tests( One sample, independent, paired), Anova,
                                                                            Correlations and Chi-square </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Important modules for statistical methods: Numpy, Scipy, Pandas </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>8. Predictive Modeling </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Concept of model in analytics and how it is used? </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Common terminology used in analytics & modeling process </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Popular modeling algorithms </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Types of Business problems - Mapping of Techniques </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Different Phases of Predictive Modeling </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>9. Data Exploration for Modeling </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Need for structured exploratory data </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; EDA framework for exploring the data and identifying any problems with the
                                                                            data (Data Audit Report) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Identify missing data </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Identify outliers data </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Visualize the data trends and patterns </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>10. Data Preparation </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Need of Data preparation </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Consolidation/Aggregation - Outlier treatment - Flat Liners - Missing values-
                                                                            Dummy creation - Variable Reduction </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Variable Reduction Techniques - Factor & PCA Analysis </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>11. Solving Segmentation Problems </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Introduction to Segmentation </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Types of Segmentation (Subjective Vs Objective, Heuristic Vs. Statistical)
                                                                        </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Heuristic Segmentation Techniques (Value Based, RFM Segmentation and Life
                                                                            Stage Segmentation) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Behavioral Segmentation Techniques (K-Means Cluster Analysis) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Cluster evaluation and profiling - Identify cluster characteristics </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Interpretation of results - Implementation on new data </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>12. Linear Regression </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Introduction - Applications </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Assumptions of Linear Regression </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Building Linear Regression Model </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Understanding standard metrics (Variable significance, R-square/Adjusted
                                                                            R-square, Global hypothesis ,etc) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Assess the overall effectiveness of the model </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Validation of Models (Re running Vs. Scoring) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Standard Business Outputs (Decile Analysis, Error distribution (histogram),
                                                                            Model equation, drivers etc.) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Interpretation of Results - Business Validation - Implementation on new data
                                                                        </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>13. Logistic Regression </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Introduction - Applications </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Linear Regression Vs. Logistic Regression Vs. Generalized Linear Models </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Building Logistic Regression Model (Binary Logistic Model) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Understanding standard model metrics (Concordance, Variable significance,
                                                                            Hosmer Lemeshov Test, Gini, KS, Misclassification, ROC Curve etc) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Validation of Logistic Regression Models (Re running Vs. Scoring) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Standard Business Outputs (Decile Analysis, ROC Curve, Probability Cut-offs,
                                                                            Lift charts, Model equation, Drivers or variable importance, etc) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Interpretation of Results - Business Validation - Implementation on new data
                                                                        </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>14. Time Series Forecasting </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Introduction - Applications </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Time Series Components( Trend, Seasonality, Cyclicity and Level) and
                                                                            Decomposition </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Classification of Techniques(Pattern based - Pattern less) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Basic Techniques - Averages, Smoothening, etc </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Advanced Techniques - AR Models, ARIMA, etc </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Understanding Forecasting Accuracy - MAPE, MAD, MSE, etc </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>15. Project work </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Applying different algorithms to solve the business problems and bench mark
                                                                            the results </p>
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
