import React from "react";
import logo from "../../assets/react.svg"
import { Link } from "react-router-dom";

const Footer = () => {
    const Scroll = () => {
        window.scrollTo(0, 0);
    }
    return (
        <footer className="bg-body-tertiary pt-5">
            <div className="container">
                <div className="row">
                    {/* Logo + Description */}
                    <div className="col-md-3">
                        <div className="footerLogo">
                            <img src={logo} alt="Hakata Kitaro Sushi Logo" className="pb-3" height={100} />
                            <p>
                                PetTalesJapan shares simple, helpful tips for dog and cat lovers in Japan. We aim to make pet care easier, happier, and more enjoyable for every owner.
                            </p>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className="col-md-3 px-md-5">
                        <h4 className="py-3">Useful Links</h4>
                        <p>
                            <a href="#" className="text-decoration-none text-black">
                                Home
                            </a>
                        </p>
                        <p>
                            <a href="#" className="text-decoration-none text-black">
                                About
                            </a>
                        </p>
                        <p>
                            <a href="#" className="text-decoration-none text-black">
                                Blog
                            </a>
                        </p>
                        <p>
                            <a href="#" className="text-decoration-none text-black">
                                Contact
                            </a>
                        </p>
                    </div>

                    {/* Opening Hours */}
                    <div className="col-md-3">
                        <h4 className="py-3">Contact Us</h4>
                        <p>Tokyo, japan</p>
                        <p>+81 74929 89794</p>
                        <p>info@PetTales.site</p>
                    </div>

                    <div className="col-md-3 text-center">
                        <h4 className="py-3">Legal Policy</h4>
                        <p>
                            <Link
                                to="/privacy"
                                className="text-decoration-none text-black px-2"
                                onClick={Scroll}
                            >
                                Privacy Policy
                            </Link>
                        </p>
                        <p>
                            <Link
                                to="/disclaimer"
                                className="text-decoration-none text-black px-2"
                                onClick={Scroll}
                            >
                                Disclaimer
                            </Link>
                        </p>
                        <p>
                            <Link
                                to="/terms&conditions"
                                className="text-decoration-none text-black px-2"
                                onClick={Scroll}
                            >
                                Terms & Conditions
                            </Link>
                        </p>

                    </div>

                </div>


                {/* Bottom Row */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center py-3">
                            <p className="mb-0">
                                © PetTales. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


    );
};

export default Footer;