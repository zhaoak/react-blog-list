import React from 'react';
import './Main.css';
import BlogCard from '../BlogCard/BlogCard';
import { getBlogs } from '../../services/client.js';
import { useState, useEffect } from 'react';
import useBlogs from '../../hooks/useBlogs.js';

export default function Main() {
  // using hook, fetch and store data from supabase
  const posts = useBlogs();
  console.log(posts);
  return (
    <div className="honk">
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          title={post.title}
          subtitle={post.subtitle}
          text={post.text}
          image={post.image}
        />
      ))}
      ;
    </div>
  );
}
