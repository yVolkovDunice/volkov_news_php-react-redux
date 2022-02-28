import React, { memo } from 'react';
import { shape, string } from 'prop-types';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import image from '../../assets/images/default.jpeg';

import './styles.css';

function PostCard({ post }) {
  const { head, text } = post;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="default"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { head }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { text }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit post</Button>
      </CardActions>
    </Card>
  );
}

PostCard.propTypes = {
  post: shape({
    head: string,
    text: string,
  }).isRequired,
};

export default memo(PostCard);
