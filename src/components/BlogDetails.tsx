"use client";

import React from "react";
import Image from "next/image";

const BlogDetails = () => {
  // Content Sections
  const contentSections = [
    {
      title: "Introduction",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    },
    {
      title: "Lorem Ipsum is simply",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    },
    {
      title: "Lorem Ipsum is simply",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    },
    {
      title: "Lorem Ipsum is simply",
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    },
    {
      title: "Lorem Ipsum is simply",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
    },
  ];

  return (
    <div className="faq-detail-sec blogs-innerhome blogs-detail-sec">
    <div className="faq-d1">
      <img src="/img/faq-d1.png" alt="" />
    </div>
    <div className="faq-d2">
      <img src="/img/faq-d2.png" alt="" />
    </div>
    <div className="container-1220">
        <div className="row blgs-row1">
                <div className="heading-text heading-blog-detail">
                    <span className="feb-text">13 FEB 2025</span>
                    <h2 className="heading-h2">What is the Luck Box project?</h2>
              </div>
              <div className="blogs-banner-img">
                <img src="/img/blgs-bannerimg.png" alt="" />
              </div>
          </div>
          <div className="row-introduction">
            <div className="heading-content">
              <h3>Introduction</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </p>
            </div>
            <div className="heading-content">
              <h3>Lorem Ipsum is simply</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </p>
            </div>
            <div className="heading-content">
              <h3>Lorem Ipsum is simply</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </p>
            </div>
            <div className="heading-content">
              <h3>Lorem Ipsum is simply</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
            </div>
            <div className="heading-content">
              <h3>Lorem Ipsum is simply</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </p>
            </div>
          </div>
          <div className="social-icons">
            <div className="share-blog">
                <h4 className="fa-40 sat-bold white cap">Share this blog</h4>
            </div>
            <div className="icons">
                <a href="https://www.facebook.com/"><img src="/img/x-img (3).png" alt="" /></a>
                <a href="#"><img src="/img/x-img (2).png" alt="" /></a>
                <a href="https://x.com"><img src="/img/x-img (1).png" alt="" /></a>
            </div>
        </div>

    </div>
  </div>
  );
};

export default BlogDetails;
