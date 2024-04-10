import React from 'react'

export default function MachineLearning() {


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
                                <h2>Machine Learning <strong class="yellow">Programming</strong></h2>
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
                                                    <img src="assets/img/Courses/machinelearning1.png" alt="" />

                                                </div>
                                                <p>Who should do this course?
                                                    Candidates from various quantitative backgrounds, like Engineering, Finance, Math, Statistics,
                                                    Economics, Business Management and have some knowledge on the data analysis, understanding on
                                                    business problems etc. To make your analysis more clear and sharpen your knowledge in machine
                                                    learning enroll yourself with us and be a smart programmer..!!

                                                </p>
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
                                                                        <h5>1. Machine Learning </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Introduction to Machine Learning & Predictive Modeling </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Types of Business problems - Mapping of Techniques - Regression vs.
                                                                            classification vs. segmentation vs. Forecasting </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Major Classes of Learning Algorithms -Supervised vs Unsupervised Learning
                                                                        </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Different Phases of Predictive Modeling (Data Pre-processing, Sampling, Model
                                                                            Building, Validation) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Overfitting (Bias-Variance Trade off) & Performance Metrics </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Feature engineering & dimension reduction </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Concept of optimization & cost function </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Overview of gradient descent algorithm </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Overview of Cross validation(Bootstrapping, K-Fold validation etc) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Model performance metrics (R-square, Adjusted R-squre, RMSE, MAPE, AUC, ROC
                                                                            curve, recall, precision, sensitivity, specificity, confusion metrics ) </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>2. Unsupervised Learning: Segmentation </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; What is segmentation & Role of ML in Segmentation? </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Concept of Distance and related math background </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; K-Means Clustering </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Expectation Maximization </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Hierarchical Clustering </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Spectral Clustering (DBSCAN) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Principle component Analysis (PCA) </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>3. Decision Tree </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Decision Trees - Introduction - Applications </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Types of Decision Tree Algorithms </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Construction of Decision Trees through Simplified Examples; Choosing the
                                                                            "Best" attribute at each Non-Leaf node; Entropy; Information Gain, Gini Index, Chi
                                                                            Square, Regression Trees </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Generalizing Decision Trees; Information Content and Gain Ratio; Dealing with
                                                                            Numerical Variables; other Measures of Randomness </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Pruning a Decision Tree; Cost as a consideration; Unwrapping Trees as Rules
                                                                        </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Decision Trees - Validation </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Overfitting - Best Practices to avoid</p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>4. Ensemble Learning (Supervised) </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Concept of Ensembling </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Manual Ensembling Vs. Automated Ensembling </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Methods of Ensembling (Stacking, Mixture of Experts) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Bagging (Logic, Practical Applications) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Random forest (Logic, Practical Applications) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Boosting (Logic, Practical Applications)
                                                                        </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Ada Boost
                                                                        </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Gradient Boosting Machines (GBM)
                                                                        </p>
                                                                    </li>
                                                                    <li>
                                                                        <p> &#8658;XGBoost
                                                                        </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>5. Artificial Neural Networks </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Motivation for Neural Networks and Its Applications </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Perceptron and Single Layer Neural Network, and Hand Calculations </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Learning In a Multi Layered Neural Net: Back Propagation and Conjugant
                                                                            Gradient Techniques </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Neural Networks for Regression </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Neural Networks for Classification </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Interpretation of Outputs and Fine tune the models with hyper parameters </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Validating ANN models </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>6. Support Vector Machines </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Motivation for Support Vector Machine & Applications </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Support Vector Regression </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Support vector classifier (Linear & Non-Linear)</p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Mathematical Intuition (Kernel Methods Revisited, Quadratic Optimization and
                                                                            Soft Constraints) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Interpretation of Outputs and Fine tune the models with hyper parameters </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Validating SVM models </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>7. K-Nearest Neighbors Algorithm (KNN)</h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; What is KNN & Applications? </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; KNN for missing treatment </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; KNN For solving regression problems </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; KNN for solving classification problems </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Validating KNN model </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Model fine tuning with hyper parameters </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>8. Naïve Bayes </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Concept of Conditional Probability </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Bayes Theorem and Its Applications </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Naïve Bayes for classification </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Applications of Naïve Bayes in Classifications </p>
                                                                    </li>

                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>9. Data Mining </h5>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Taming big text, Unstructured vs. Semi-structured Data; Fundamentals of
                                                                            information retrieval, Properties of words; Creating Term-Document (TxD);Matrices;
                                                                            Similarity measures, Low-level processes (Sentence Splitting; Tokenization;
                                                                            Part-of-Speech Tagging; Stemming; Chunking) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Finding patterns in text: text mining, text as a graph </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Natural Language processing (NLP) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Text Analytics – Sentiment Analysis using Python </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Text Analytics – Word cloud analysis using Python </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Text Analytics - Segmentation using K-Means/Hierarchical Clustering </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Text Analytics - Classification (Spam/Not spam) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Applications of Social Media Analytics </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Metrics(Measures Actions) in social media analytics </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Examples & Actionable Insights using Social Media Analytics </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Important python modules for Machine Learning (SciKit Learn, stats models,
                                                                            scipy, nltk etc) </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>&#8658; Fine tuning the models using Hyper parameters, grid search, piping etc. </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li class="justify-content-between d-flex">
                                                                <ul>
                                                                    <li>
                                                                        <h5>10. Project work</h5>
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
