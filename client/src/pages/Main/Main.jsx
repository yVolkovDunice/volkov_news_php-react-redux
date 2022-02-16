import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PostCard from '../../components/PostCard/PostCard';
import { getPosts } from '../../redux/actions';

import './styles.css';

function Main() {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.posts.news);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <div className="posts">
        {news.length && news.map((post) => (
          <PostCard
            post={post}
            key={post.id}
          />
        ))}
      </div>
    </div>
  );
}
export default Main;
