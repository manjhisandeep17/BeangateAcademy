import React, { Component } from 'react'
import "./Register.css"

export default class Register1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: " ",
            dateOfBirth: "",
            email: "",
            mobile: "",
            gender: "",
            qualificaation: "",
            adress: "",
            country: "",
            state: "",
            town: "",
            pinCode: "",
            branch: "",
            course: "",
            profile: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    valid() {
        const {
            name,
            dateOfBirth,
            email,
            mobile,
            gender,
            qualificaation,
            adress,
            country,
            state,
            town,
            pinCode,
            branch,
            course,
            profile,
            password } = this.state;
        console.log(email, password);
        fetch("http://localhost:3000/register", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                name,
                dateOfBirth,
                email,
                mobile,
                gender,
                qualificaation,
                adress,
                country,
                state,
                town,
                pinCode,
                branch,
                course,
                profile,
                password
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
                if (data.status === "ok") {
                    alert('signup success')
                    window.location.href = "/";

                }
                else {
                    this.setState({ passError: "Wrong password or Wrong Email Id " })

                }
            });

    }


    //========================================================================
    handleSubmit(e) {
        e.preventDefault();
        if (this.valid()) {
            alert("form submitted")
        }

    }
    render() {
        return (
            <body style={{ backgroundColor: "#dffcfc" }} className='bodyregistermaintop'>
                <div class="registermain " >
                    <header style={{ color: "#5fcf80;" }}>Registration</header>

                    <form onSubmit={this.handleSubmit}>
                        <div className="form first">
                            <div className="details personal">
                                <span className="title">Personal Details</span>

                                <div className="fields">
                                    <div className="input-field">
                                        <label>Full Name</label>
                                        <input
                                            type="text"
                                            placeHolder="Enter your name"
                                            onChange={(e) => { this.setState({ name: e.target.value }) }}
                                            required
                                        />
                                    </div>

                                    <div className="input-field">
                                        <label for="DOB">Date of Birth</label>
                                        <input
                                            type="date" name="DOB"
                                            placeHolder="Enter birth date"
                                            onChange={(e) => { this.setState({ dateOfBirth: e.target.value }) }}
                                            required
                                        />
                                    </div>

                                    <div className="input-field">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            placeHolder="Enter your email"
                                            onChange={(e) => { this.setState({ email: e.target.value }) }}
                                            required
                                        />
                                    </div>

                                    <div className="input-field">
                                        <label>Mobile Number</label>
                                        <input
                                            type="number" pattern="[0-9]{10}" maxLength={13} minLength={10}
                                            placeHolder="Enter mobile number"
                                            onChange={(e) => { this.setState({ mobile: e.target.value }) }}
                                            required
                                        />
                                    </div>

                                    <div className="input-field">
                                        <label>Gender</label>
                                        <select required onChange={(e) => { this.setState({ gender: e.target.value }) }}>
                                            <option disabled selected>
                                                Select gender
                                            </option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Others</option>
                                        </select>
                                    </div>

                                    <div className="input-field">
                                        <label>Qualificaation</label>
                                        <input
                                            type="text"
                                            onChange={(e) => { this.setState({ qualificaation: e.target.value }) }}
                                            placeHolder="ex: B.tech"
                                            required
                                        />
                                    </div>

                                    <div className="input-field ">
                                        <label>Address</label>
                                        <textarea
                                            type="text"
                                            onChange={(e) => { this.setState({ adress: e.target.value }) }}

                                            placeHolder="Enter Your Address"
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="input-field">
                                        <label>Country</label>
                                        <input type="text"

                                            onChange={(e) => this.setState({ country: e.target.value })}
                                            required />
                                    </div>

                                    <div className="input-field">
                                        <label>State</label>
                                        {/* <input type="text"
                                            onChange={(e) => this.setState({ state: e.target.value })}

                                            required /> */}
                                        
                                        <select

                                            onChange={(e) => this.setState({ state: e.target.value })}
                                            required>
                                            <option disabled selected>
                                                Select{" "}
                                        </option>

                                        <option>Html Css</option>
                                        <option>Java Script</option>
                                        <option>C & C++</option>
                                        <option>Java</option>
                                        <option>Paython</option>
                                        <option>Angular</option>
                                        <option>Android</option>
                                        <option>My Sql</option>
                                        <option>My Sql Server</option>
                                        <option>Oracel</option>
                                        <option>Networking</option>
                                        <option>Data Science</option>
                                        <option>Digital Marketing</option>
                                        <option>Ethical Hacking</option>
                                        <option>Linux</option>
                                        <option>Machine Learning</option>
                                        <option>Full Stack Devloper</option>
                                        <option>Node JS </option>
                                        <option>React JS</option>
                                        <option>Mean Stack Devloper</option>
                                        </select>
                                    </div>

                                    <div className="input-field">
                                        <label>City/town</label>
                                        <input type="text"
                                            onChange={(e) => { this.setState({ email: e.target.value }) }}
                                            required />
                                    </div>

                                    <div className="input-field">
                                        <label>Pin Code</label>
                                        <input
                                            type="number"
                                            placeHolder="Enter Your Pincode"
                                            onChange={(e) => this.setState({ pinCode: e.target.value })}

                                            required
                                        />
                                    </div>

                                    <div className="input-field">
                                        <label>Branch</label>
                                        <select

                                            onChange={(e) => this.setState({ branch: e.target.value })}
                                            required >
                                            <option disabled selected>
                                                Select Branch
                                            </option>
                                            <option>Piplani</option>
                                            <option>Jawahar Chowk</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="details ID">
                                <span className="title">Course Details</span>

                                <div className="fields">
                                    <div className="input-field">
                                        <label>Your course's</label>
                                        <select

                                            onChange={(e) => this.setState({ course: e.target.value })}
                                            required>
                                            <option disabled selected>
                                                Select{" "}
                                            </option>

                                            <option>Html Css</option>
                                            <option>Java Script</option>
                                            <option>C & C++</option>
                                            <option>Java</option>
                                            <option>Paython</option>
                                            <option>Angular</option>
                                            <option>Android</option>
                                            <option>My Sql</option>
                                            <option>My Sql Server</option>
                                            <option>Oracel</option>
                                            <option>Networking</option>
                                            <option>Data Science</option>
                                            <option>Digital Marketing</option>
                                            <option>Ethical Hacking</option>
                                            <option>Linux</option>
                                            <option>Machine Learning</option>
                                            <option>Full Stack Devloper</option>
                                            <option>Node JS </option>
                                            <option>React JS</option>
                                            <option>Mean Stack Devloper</option>
                                        </select>
                                    </div>
                                    <div className="input-field">
                                        <label>Profile</label>
                                        <input
                                            type="file"
                                            onChange={(e) => this.setState({ profile: e.target.value })}

                                            className="form-control"
                                            placeHolder="Enter Your Pincode"
                                            required
                                        />
                                    </div>
                                    <button className="nextBtn" type="submit">
                                        <span className="btnText">Submit</span>
                                        <i className="uil uil-navigator"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>



                <script src="rg.js"></script>
            </body>
        )
    }
}
