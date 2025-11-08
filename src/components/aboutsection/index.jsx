import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/style.css";
import aboutImg from "../../assets/images/blog3.webp"; // change image path as needed

const AboutSection = () => {
    return (
        <section className="about-page py-5">
            <div className="container mt-5">
                <div className="row align-items-center">

                    {/* Image Section */}
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="about-image-box">
                            <img src={aboutImg} alt="About PetTalesJapan" className="img-fluid rounded-4 shadow" />
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="col-md-6">
                        <div className="about-text-box">
                            <h2 className="mb-3">About PetTalesJapan</h2>
                            <p>
                                PetTalesJapan is crafted for dog and cat lovers across Japan.  
                                We focus on simple, helpful, and practical pet-care tips that fit perfectly  
                                into the Japanese lifestyle—small apartments, busy routines,  
                                and city-friendly living.
                            </p>

                            <p>
                                From breed guides and training advice to health tips and Japanese pet culture,  
                                our goal is to make your journey as a pet owner easier, happier,  
                                and more enjoyable every day.
                            </p>

                            <p className="fw-bold text-end mt-3 signature">— Team PetTalesJapan</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
