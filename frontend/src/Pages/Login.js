import React from 'react'

export default function Login() {

    
    return (
        <div>


            <div class="container-fluid loginmain logmar " id="container-fluid-form ">
                <div class="container" id="container-form">

                    <div class="top-nav-button p-2 d-flex justify-content-end align-items-center">
                        <div class="row text-right d-flex justify-content-between border-radius-2" id="button">
                            <button type="button" class="btn text-white p-2 font-weight-normal" id="btn1" onclick="login();" active><a href='Login' className='text-white'>Login</a> </button>
                            <button type="button" class="btn p-2 text-white font-weight-normal" id="btn2" onclick="singup();"><a href='Register'>SingUp</a> </button>
                        </div>
                    </div>
                    <div class="wrap">
                        <div class="login-form p-3">
                            <div class="form-group" id="form-group-login">
                                <img src="LoginForm-1/IMG/logo.jpeg" alt="" width={"50px"} height={"50px"} />
                                <h4>Welcome to BeanGate</h4>
                            </div>

                            <div class="form-group" id="form-group-login">
                                <input type="gmail" placeholder="Yourmail@gmail.com" class="input-box" required />
                                <input type="password" placeholder="Your Password" class="input-box" id="password" required />
                            </div>
                            <div class="form-group" id="form-group-login">
                                <input type="checkbox" class="p-0 m-0" onclick="showpassword();" />
                                <span class="">Show Password</span>
                            </div>

                            <div class="form-group" id="form-group-login">
                                <button class="btn p-2 text-white">Submit</button>
                                <a href="#" class="p-2">Forget Password</a>
                            </div>

                            <div class="form-group d-flex justify-content-between m-auto" id="icon">
                                <a href="#"><i class="fa-brands fa-google"></i></a>
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#5fcf80" fill-opacity="1" d="M0,96L34.3,122.7C68.6,149,137,203,206,192C274.3,181,343,107,411,85.3C480,64,549,96,617,112C685.7,128,754,128,823,112C891.4,96,960,64,1029,64C1097.1,64,1166,96,1234,101.3C1302.9,107,1371,85,1406,74.7L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                    </svg>
                </div>
            </div>

        </div>
    )
}
