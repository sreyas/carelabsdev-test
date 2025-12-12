"use client";
import React from "react";

const blogs = [
  {
    id: 1,
    title: "How to Grow Your Business with SEO",
    excerpt: "Learn proven SEO strategies that actually work in 2025...",
    image: "https://www.reliablesoft.net/wp-content/uploads/2013/02/seo.jpg",
  },
  {
    id: 2,
    title: "Why React is Still the Best Frontend Framework",
    excerpt: "React continues to dominate frontend development...",
    image: "https://www.jotform.com/blog/wp-content/uploads/2017/01/react-js.png",
  },
  {
    id: 3,
    title: "Top 10 Tips for Improving User Experience",
    excerpt: "Small UI changes can drastically improve your UX...",
    image: ".jpg/images/blog3",
  },
];

const Page = () => {
  return (
   <div className="w-full px-5 py-10">
    <h1 className="text-3xl font-bold mb-8 text-center mt-20">
      All Blogs
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
     {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>

              <button className="text-blue-600 font-medium">
                Read More →
              </button>
            </div>
          </div>
        ))}
    </div>

   </div>
  );
};

export default Page;
