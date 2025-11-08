import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactInfoSection = () => {
    return (
        <section className="contact-info-section py-5">
            <div className="container">
                <div className="row shadow-lg rounded-4 overflow-hidden contact-info-box">

                    {/* LEFT SIDE – Contact Details */}
                    <div className="col-md-6 p-5 bg-white">
                        <h2 className="fw-bold mb-4">Contact Information</h2>

                        <p className="mb-3">
                            <strong>📍 Location:</strong><br />
                            Tokyo, Japan
                        </p>

                        <p className="mb-3">
                            <strong>📞 Phone:</strong><br />
                            +81 74929 89794
                        </p>

                        <p className="mb-3">
                            <strong>📧 Email:</strong><br />
                            info@PetTales.site
                        </p>

                        <p className="text-muted mt-4">
                            We're here to support your pet parenting journey.  
                            Reach out anytime!
                        </p>
                    </div>

                    {/* RIGHT SIDE – Google Map Embed */}
                    <div className="col-md-6 p-0">
                        <iframe
                            title="Tokyo Location Map"
                            src="https://www.google.com/maps?q=Tokyo,+Japan&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: "0", minHeight: "350px" }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactInfoSection;
