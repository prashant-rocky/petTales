import React from "react";
import food from '../../assets/images/food.png'

const AboutSlider = () => {
    return (
        <section className="slider">
            <div className="container py-md-5">
                <div className="row">
                    <div className="col-md-6 py-5 mt-md-3">
                        <h1 className="">About Us</h1>
                        <p>Our website is built for pet lovers in Japan who want simple, helpful, and trustworthy guidance. We share easy tips, product picks, and everyday advice shaped for small homes, city living, and the unique needs of pets in Japan.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={food} alt="error" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSlider;