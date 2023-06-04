import React from 'react'
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Videos = (props) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={props.data.video.snippet.thumbnails.default.url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.data.video.snippet.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.data.video.snippet.description ? props.data.video.snippet.description.slice(0, 100) : ''}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{new Date(props.data.video.snippet.publishedAt).toLocaleString()}</Button>
        </CardActions>
      </Card>
    </>
  )
}

export default Videos