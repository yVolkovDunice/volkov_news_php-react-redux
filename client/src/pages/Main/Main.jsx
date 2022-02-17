import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

import PostCard from '../../components/PostCard/PostCard';
import { getPosts } from '../../redux/actions';

import './styles.css';

function Main() {
  const dispatch = useDispatch();
  const { news, error, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <div className="posts">
        {loading && <CircularProgress className="spinner" />}
        {!loading && !error && news.map((post) => (
          <PostCard
            post={post}
            key={post.id}
          />
        ))}
        {!news.length && !loading && <Alert severity="info">Oops!!! no news yet.</Alert>}
        {error && !loading && <Alert severity="error">{error}</Alert>}
      </div>
    </div>
  );
}
export default Main;
