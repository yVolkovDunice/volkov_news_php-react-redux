import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

import PostCard from '../../components/PostCard/PostCard';
import { getPosts } from '../../redux/actions';

import './styles.css';

function Main() {
  const dispatch = useDispatch();
  const { posts, error, isLoading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <div className="posts">
        {isLoading
          ? (
            <CircularProgress className="spinner" />
          ) : (
            <>
              {error && <Alert severity="error">{error}</Alert>}
              {!posts.length && <Alert severity="info">Oops!!! no news yet.</Alert>}
              {!error && posts.map((post) => (
                <PostCard
                  post={post}
                  key={post.id}
                />
              ))}
            </>
          )}
      </div>
    </div>
  );
}
export default Main;
