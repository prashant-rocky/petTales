import React from "react";
import food from "../../assets/images/food.png";

const BlogBanner = () => {
    return (
        <section className="slider contact-banner-section py-5">
            <div className="container py-md-5">
                <div className="row">
                    <div className="col-md-6 mt-md-3">

                        <h1 className="">Our Blog</h1>

                        <p>
                            Explore helpful tips, heartfelt stories, and simple guides for raising happy 
                            dogs and cats in Japan. From daily care and training to pet culture and lifestyle, 
                            we bring you everything you need to make pet parenting easier and more joyful.
                        </p>
                    </div>

                    <div className="col-md-6">
                        <img src={food} alt="pets" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogBanner;
