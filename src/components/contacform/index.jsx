import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import contactImg from "../../assets/images/contact.jpg"; // change image path

const ContactForm = () => {
    return (
        <section className="contact-section py-5">
            <div className="container py-4">
                <div className="row align-items-center shadow-lg contact-box rounded-4 overflow-hidden">
                    
                    {/* Left Side - Image */}
                    <div className="col-md-6 pt-5">
                        <img 
                            src={contactImg} 
                            alt="Contact" 
                            className="img-fluid h-100 w-100 object-fit-cover"
                        />
                    </div>

                    {/* Right Side - Form */}
                    <div className="col-md-6 p-5 bg-white">
                        <h2 className="mb-3 fw-bold">Get in Touch</h2>
                        <p className="text-muted mb-4">
                            Have questions, feedback, or collaboration ideas? 
                            We would love to hear from you!
                        </p>

                        <form>
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input type="text" className="form-control rounded-3" placeholder="Enter your name" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email Address</label>
                                <input type="email" className="form-control rounded-3" placeholder="Enter your email" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea rows="4" className="form-control rounded-3" placeholder="Write your message"></textarea>
                            </div>

                            <button className="btn btn-primary w-100 py-2 rounded-5 contact-btn">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
