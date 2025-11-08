import React from "react";
import { BlogData } from "../../utils/data";
import BlogCard from "../blogCard";
import '../../assets/style.css'

const Blog = () => {
    return(
        <section className="blog py-5">
            <div className="container text-center">
                 <h2 className="pt-5">All Blog</h2>
                 <p>Welcome to our collection of pet stories, tips, and guides made especially for dog and cat lovers in Japan. Here you’ll find easy-to-read advice, local insights, and helpful ideas to make everyday life with your pets happier and healthier.</p>
                 <div className="row">
                    {
                        BlogData.map(blog => {
                            return(

                                <BlogCard 
                                    id = {blog.id}
                                    image = {blog.image}
                                    title = {blog.title}
                                    body = {blog.body}
                                    url = {blog.url}
                                />
                            )
                        })
                    }
                 </div>
            </div>
        </section>
    )
}
export default Blog;