"use client";

import React from "react";
import Image from "next/image";

const blogs = [
  { title: "What is BTC (Bitcoin) and how you can buy it?", imgSrc: "/img/blog-img.png" },
  { title: "What is BTC (Bitcoin) and how you can buy it?", imgSrc: "/img/blog-img.png" },
  { title: "What is BTC (Bitcoin) and how you can buy it?", imgSrc: "/img/blog-img.png" },
  { title: "What is BTC (Bitcoin) and how you can buy it?", imgSrc: "/img/blog-img.png" },
  { title: "What is BTC (Bitcoin) and how you can buy it?", imgSrc: "/img/blog-img.png" },
  { title: "What is BTC (Bitcoin) and how you can buy it?", imgSrc: "/img/blog-img.png" },
  { title: "What is BTC (Bitcoin) and how you can buy it?", imgSrc: "/img/blog-img.png" },
  { title: "What is BTC (Bitcoin) and how you can buy it?", imgSrc: "/img/blog-img.png" },
];

const BlogInner = () => {
  return (
    <div className="faq-detail-sec blogs-innerhome">
      {/* Background Images */}
      <div className="faq-d1">
        <Image src="/img/faq-d1.png" alt="Background" width={300} height={300} />
      </div>
      <div className="faq-d2">
        <Image src="/img/faq-d2.png" alt="Background" width={300} height={300} />
      </div>

      {/* Blog Content */}
      <div className="container-1470">
        <div className="row blgs-row1">
          <div className="heading-text ">
            <h2>All Blogs</h2>
          </div>
        </div>

        {/* Blog Rows */}
        <div className="row blogs-innerrow">
          {blogs.slice(0, 4).map((blog, index) => (
            <div className="blog-box" key={index}>
              <div className="blog-img">
                <Image src={blog.imgSrc} alt={blog.title} width={300} height={200} />
              </div>
              <div className="blog-content">
                <p>{blog.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row blogs-innerrow p-top">
          {blogs.slice(4, 8).map((blog, index) => (
            <div className="blog-box" key={index}>
              <div className="blog-img">
                <Image src={blog.imgSrc} alt={blog.title} width={300} height={200} />
              </div>
              <div className="blog-content">
                <p>{blog.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogInner;
