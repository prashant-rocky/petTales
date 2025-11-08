import React from "react";
import "../../assets/style.css";

const BlogCard = ({ image, title, body, url, id }) => {
    return (
        <div className="col-md-4 mb-4" key={id}>
            <div className="blogCard shadow-sm">
                
                <div className="blogImgBox">
                    <img src={image} alt="blog" className="img-fluid" />
                </div>

                <div className="blogContentBox p-3">
                    <a href={url} className="blogTitle">{title}</a>
                    <p className="blogBody">{body}</p>
                    <a href={url}>
                        <button className="blogBtn">Read More</button>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default BlogCard;
