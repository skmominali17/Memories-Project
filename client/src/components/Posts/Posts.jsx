import React from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@mui/material';
import useStyles from "../../styles"

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  return (
    !posts.length ? <CircularProgress /> : (
      <Grid container alignItems="stretch" spacing={3} className={classes.mainContainer}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
