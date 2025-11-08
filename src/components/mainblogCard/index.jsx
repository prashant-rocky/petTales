import React from "react";
import { Link } from "react-router-dom";
import "../../assets/style.css"

const MainBlogCard = ({ image, title, url, body }) => {
    return (
        <div className="col-md-12">
            <div className="main-blog-card shadow">
                <div className="imgBox" style={{ backgroundImage: `url(${image})` }}></div>

                <div className="contentBox">
                    <h3>{title}</h3>
                    <p>{body}</p>

                    <Link to={url} className="readMoreBtn">
                        Read More →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MainBlogCard;
