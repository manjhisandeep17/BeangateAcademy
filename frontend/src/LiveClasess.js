import React from 'react'
import "./LiveClass.css"

export default function LiveClasess() {
  return (
    <div>
        
        <div className="container-fluid p-3" id="livclass-cf">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-4 col-sm-12 p-2">
                        {/* Notification */}
                        <div className="col">
                            <div className="col livecls-togle">
                                <h4>Daily Live Class</h4>
                                <p>Class 3-4 | 3:00 - 4:00 PM</p>
                            </div>
                        </div>
                        
                        {/*Live class */}
                        <div className="col liveclass-frame">
                        <iframe src="https://www.youtube.com/embed/u1-NY1nn6tM?si=uFp3so3EPl_aWoi-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <div className="class-title mx-auto px-3">
                                <h5>Sub- CPP</h5>
                                <h4>Topic- Lorem ipsum dolor sit amet.</h4>
                                <div className="d-flex">
                                    <div className="col-8 ">
                                       <i class="fa-solid fa-user display-6"></i>
                                       <span className='px-4'>Teacher Name</span>

                                    </div>
                                    <div className="col-4 text-right ">
                                        <button className='btn mx-2'>
                                            <i class="fa-regular fa-circle-down"></i>
                                            <span className='px-2'>Download Here </span>
                                        </button>
                                        <button className='btn mx-2'>
                                        <a href='Profile'> <i class="fa-solid fa-share"> </i></a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* connect */}
                        <div className="row">
                           <div className="col py-5">
                                <p className='p-2'>
                                   <span>Start On:12:00 PM</span>  |  <span>Watching:154</span>
                                </p>
                                <p className='p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores neque facere alias architecto, magni, quia placeat, incidunt veniam recusandae soluta omnis velit dolorem error repellat molestiae quos vero eveniet dolor suscipit. Repudiandae possimus voluptatem asperiores delectus amet, quas sapiente enim eligendi, iure, quisquam quasi illum.</p>
                           </div>
                        </div>
                    {/* <hr /> */}

                    </div>

                    {/* secation 2nd */}
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="col-lg-12">
                            <div className="col mx-auto" id="sec2-lv-top">
                                <h3>Attachment</h3>
                            </div>
                            <hr />
                            <div className="row" id="sec2-lv-wrap">
                                <div className="col-3 text-center" id="sec2-ic">
                                    <i class="fa-solid fa-pen"></i>
                                </div>
                                <div className="col-9">
                                    <span><b>Lecture PPT</b></span>
                                </div>
                            </div>
                            <div className="row" id="sec2-lv-wrap">
                                <div className="col-3 text-center" id="sec2-ic">
                                <i class="fa-solid fa-laptop-file"></i>
                                </div>
                                <div className="col-9">
                                    <span><b>Homework</b></span>
                                </div>
                            </div>
                            <div className="row" id="sec2-lv-wrap">
                                <div className="col-3 text-center" id="sec2-ic">
                                <i class="fa-regular fa-file-lines"></i>
                                </div>
                                <div className="col-9">
                                    <span><b>Live Test</b></span>
                                </div>
                            </div>
                            <div className="row" id="sec2-lv-wrap">
                                <div className="col-3 text-center" id="sec2-ic">
                                <i class="fa-solid fa-question"></i>
                                </div>
                                <div className="col-9">
                                    <span><b>Doubts</b></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            
                        </div>
                    </div>
                </div>  

                {/* similar class */}
                <hr />
                    <div className="col">
                        <div className="col">
                            <h3 className='py-5'>Our Other Classes</h3>
                            <p>
                            <i class="fa-solid fa-check"></i>
                            <span className='px-2'>Best for deep diving in a subject</span></p>
                            <p>
                            <i class="fa-solid fa-check"></i>
                            <span className='px-2'>Learn a subject from your favourite educator</span></p>
                        </div>
                        <div className="row py-5" id="other-live-cls">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="col">
                                    <iframe src="https://www.youtube.com/embed/u1-NY1nn6tM?si=uFp3so3EPl_aWoi-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <p className='other-live-cls-p'>
                                        Sub:Subject Name
                                    </p>
                                    <p className="other-live-cls-p">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, 
                                    </p>
                                    <p className="other-live-cls-p">Time:12:00 PM</p>

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="col">
                                    <iframe src="https://www.youtube.com/embed/u1-NY1nn6tM?si=uFp3so3EPl_aWoi-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <p className='other-live-cls-p'>
                                        Sub:Subject Name
                                    </p>
                                    <p className="other-live-cls-p">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, 
                                    </p>
                                    <p className="other-live-cls-p">Time:12:00 PM</p>

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="col">
                                    <iframe src="https://www.youtube.com/embed/u1-NY1nn6tM?si=uFp3so3EPl_aWoi-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <p className='other-live-cls-p'>
                                        Sub:Subject Name
                                    </p>
                                    <p className="other-live-cls-p">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, 
                                    </p>
                                    <p className="other-live-cls-p">Time:12:00 PM</p>

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="col">
                                    <iframe src="https://www.youtube.com/embed/u1-NY1nn6tM?si=uFp3so3EPl_aWoi-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <p className='other-live-cls-p'>
                                        Sub:Subject Name
                                    </p>
                                    <p className="other-live-cls-p">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, 
                                    </p>
                                    <p className="other-live-cls-p">Time:12:00 PM</p>

                                </div>
                            </div>
                        </div>
                    </div>
                <hr />
            </div>
        </div>
    </div>
  )
}
