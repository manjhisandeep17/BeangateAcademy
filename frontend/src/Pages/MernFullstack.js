import React from 'react'

export default function MernFullstack() {
    return (
        <div>

            <div>

                <div class="container">
                    <h1 class="center">Mern full Stack</h1><br /><br /><br />
                    <div class="row ">
                        <div class="col-sm-4 d-flex flext-column  justify-content-center kl fullborder animate__animated animate__bounceInLeft">

                            <div className='bull '>
                                <div className=''><h1 className='text-center '>Front-end</h1></div>
                                <img src='assets/img/html.png' className='img-1 ' />
                                <img src='assets/img/css.png' className='img-2' />
                                <img src='assets/img/java-script.png' className='img-3' />
                                <img src='assets/img/bootstrap.png' className='img-4' />

                                <ul class=" text-center "><br />

                                    <li className=''> HTML</li>
                                    <li className=' '>CSS</li>
                                    <li className=''>Java Script</li>
                                    <li className=''>Bootstrap</li>

                                </ul>
                            </div>



                        </div>

                        <div class="col-sm-4"></div>
                        <div class="col-sm-4 d-flex flext-column  justify-content-center kl fullborder animate__animated animate__bounceInRight">

                            <div className='bull '>
                                <h1 className='text-center '>Backend</h1>
                                <img src='assets/img/nodejs.png' className='img-node ' />
                                <img src='assets/img/expressjs.png' className='img-express' />
                                
                                <ul class=" text-center "><br />

                                    <li>Node Js</li>
                                    <li>Express Js</li>

                                </ul>
                            </div>



                        </div>



                    </div>
                </div>

                <div className='container mb-5'>
                    <div className='row'>
                        <div className='col-md-4'>

                        </div>
                        <div className='col-md-4'>
                            <div className="plusfive">
                                <h1 class="one">+5
                                </h1>
                                <h2 className='center'>
                                    LIVE PROJECT
                                </h2>
                            </div>
                        </div>
                        <div className='col-md-4'>

                        </div>
                    </div>
                </div>

                <div className='container mt-5 pt-5' >
                    <div className='row'>

                        <div class="col-sm-4 d-flex flext-column  justify-content-center kl fullborder animate__animated animate__bounceInLeft">

                            <div className='bull '>
                                <h1 className='text-center '>Database</h1>
                                <img src='assets/img/mongodb.png' className='img-1 ' />
                                
                                <ul class=" text-center "><br />

                                    <li>MongoDb</li>
                                  
                                </ul>
                            </div>



                        </div>

                        <div class="col-sm-4"></div>


                        <div class="col-sm-4 d-flex flext-column  justify-content-center kl fullborder animate__animated animate__bounceInRight">

                            <div className='bull '>
                                <h1 className='text-center '>Framework</h1>
                                <img src='assets/img/react.png' className='img-1 ' />
                                {/* <img src='assets/img/expressjs.png' className='img-2' /> */}
                                <img src='assets/img/expressjs.png' className='img-express2' />


                                <ul class=" text-center "><br />

                                    <li>React</li>
                                    <li>Express Js</li>


                                </ul>
                            </div>



                        </div>
                    </div>
                </div>



                <div className='container mb-5 pb-5 mt-5 pt-5'>
                    <div className='row'>
                        <div class="col-sm-3 d-flex flext-column  justify-content-center kl">

                        </div>


                        <div class="col-sm-6 d-flex flext-column  justify-content-center kl fullborder">

                            <div className='bull '>
                                <h1 className='text-center '>Management Tools</h1>
                                <img src='assets/img/git.png' className='img-1 ' />
                                <img src='assets/img/github.png' className='img-2' />

                                <ul class=" text-center "><br />

                                    <li>Git</li>
                                    <li>Github</li>
                                </ul>
                            </div>



                        </div>

                        <div class="col-sm-3">

                        </div>
                    </div>
                </div>


            </div>
            )

        </div>
    )
}
