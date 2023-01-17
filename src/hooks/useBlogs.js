import React from 'react';
import { useState, useEffect } from 'react';
import { getBlogs } from '../services/client.js';

export default function useBlogs() {
  // create state variable to store state
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // fetch from supabase
      const response = await getBlogs();
      // set state
      setPosts(response);
    };
    fetchData();
  }, []);
  return posts;
}
