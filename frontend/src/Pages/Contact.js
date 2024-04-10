import React from 'react'

export default function Contact() {
    return (
        <div>



            <main id="main">


                <div class="breadcrumbs" data-aos="fade-in">
                    <div class="container">
                        <h2>Contact Us</h2>
                        <p>Thank you for your interest in Beangate Academy. We are always here to help with any questions you may have.
                            We look forward to hearing from you and helping you achieve your career goals.
                            You can contact us using the following methods below: </p>
                    </div>
                </div>



                <section id="contact" class="contact">
                    <div className='container-fluid mt-5 mb-5'>
                    <div data-aos="fade-up">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916.4551001647609!2d77.47035112915546!3d23.24962173125142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4203e513c28f%3A0x15442925d721f3ba!2sBeangate%20IT%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1674813476468!5m2!1sen!2sin"
                            style={{border:"0",  width: "100%", height: "70vh"}} allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    </div>

                    <div class="container" data-aos="fade-up">

                        <div class="row mt-5">

                            <div class="col-lg-4">
                                <div class="info">
                                    <div class="address">
                                        <i class="bi bi-geo-alt"></i>
                                        <h4>Location:</h4>
                                        <p> <a href="https://goo.gl/maps/uWWQKMXoCnnWkbWk9" target="_blank">MIG B-50 Sonagiri, Infront Of Piplani Petrol Pump, Bhopal, (M.P.), Pin- 462022</a>
                                        </p>
                                    </div>

                                    <div class="email">
                                        <i class="bi bi-envelope"></i>
                                        <h4>Email:</h4>
                                        <p> <a href="mailto:beangateitsolutions@gmail.com" target="_blank">beangateitsolutions@gmail.com</a></p>
                                    </div>

                                    <div class="phone">
                                        <i class="bi bi-phone"></i>
                                        <h4>Call:</h4>
                                        <p><a href="tel:+91-7471112020">+91-7471112020</a></p>
                                        <p><a href="tel:+91-9752740090">+91-9752740090</a></p>
                                    </div>

                                </div>

                            </div>

                            <div class="col-lg-8 mt-5 mt-lg-0">

                                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                                    <div class="row">
                                        <div class="col-md-6 form-group">
                                            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                                        </div>
                                        <div class="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                                        </div>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                                    </div>
                                    <div class="form-group mt-3">
                                        <textarea class="form-control" name="message" rows="5" placeholder="Message" required />
                                    </div>
                                    <div class="my-3">
                                        <div class="loading">Loading</div>
                                        <div class="error-message"></div>
                                        <div class="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div class="text-center"><button type="submit">Send Message</button></div>
                                </form>

                            </div>

                        </div>

                    </div>
                </section>

            </main>

        </div>
    )
}
