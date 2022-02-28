import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

import PostCard from '../../components/PostCard/PostCard';
import { getPosts } from '../../redux/actions';

import './styles.css';

function Main() {
  const dispatch = useDispatch();
  const {
    posts,
    error,
    isLoading,
    filterType,
    searchData,
  } = useSelector((state) => state.posts);

  let filtratedPosts = [];

  const toLowerCaseReplaceAll = ((str) => str.toLowerCase().replaceAll('ё', 'е'));

  const makeFiltrated = (() => {
    if (searchData) {
      filtratedPosts = posts.filter((post) => (toLowerCaseReplaceAll(`${post[filterType]}`) === `${searchData}`));
    } else {
      filtratedPosts = posts;
    }
  });

  if (!!searchData && filterType === 'all') {
    filtratedPosts = posts.filter((post) => (
      Object.values(post).some((item) => toLowerCaseReplaceAll(`${item}`).includes(`${searchData}`))));
  } else {
    makeFiltrated();
  }

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
              {!error && !filtratedPosts?.length && <Alert severity="info">Oops!!! no news yet.</Alert>}
              {!error && filtratedPosts?.map((post) => (
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
