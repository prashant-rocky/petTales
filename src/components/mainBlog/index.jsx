import React from "react";
import "../../assets/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BlogData } from "../../utils/data";
import MainBlogCard from "../mainblogCard";

const MainBlog = () => {
  return (
    <section className="blogs text-center py-5">
      <div className="container">
        <h2>Latest Blogs</h2>
        <p>Our latest blogs bring you simple, helpful, and friendly tips for caring for dogs and cats in Japan. From training and health advice to lifestyle guides, each article is designed to make pet ownership easier and more enjoyable.</p>
        <div className="row py-4">
          {BlogData.map((blog, index) => (
            <MainBlogCard
              key={index}
              image={blog.image}
              title={blog.title}
              url={blog.url}
              body={blog.body}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainBlog;
