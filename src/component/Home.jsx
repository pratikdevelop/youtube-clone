import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Slider } from './Slider'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`https://youtube.googleapis.com/youtube/v3/videos`, {
      params: {
        key: 'AIzaSyCSfzyntk7JDXzUJm8x4SDduj0YNHQ9rhg',
        part: 'snippet',
        chart: 'mostPopular'
      }
    }).then((response) => {
      if (response.data.items && response.data.items?.length > 0) {
        setVideos(response.data.items);
        setLoading(false);
        console.log(videos);
      }
    })
  }, [])

  return (
    <div className='flex flex-col w-full'>

      <div className='col-span-2 flex  items-start space-x-2 p-3 w-full overflow-x-auto'>
        {
          Slider.map((slider) => {
            return <>
              <span className=' px-3 py-0.8 text-base bg-gray-300 rounded-full'>
                {slider.name}
              </span>
            </>
          })
        }
      </div>
      <div className="grid grid-cols-4 gap-5 p-6">
        {
          loading ?

            <div className=' col-span-4 text-center text-4xl font-bold'>loading ....</div>
            :
            videos.map((video, index) => {
              return  <Card  key={index} sx={{ maxWidth: 345 }}>
                 <CardMedia
                    alt="green iguana"
                    height="140"
                   >
                   <iframe  src={`https://www.youtube.com/embed/${video.id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                   </CardMedia>

                  <CardContent>
                    <Typography gutterBottom  className = "font-bold" fontWeight={900} variant="h6" component="div">
                      {video.snippet.title ? video.snippet.title.slice(0,50): ''}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {video.snippet.description ? video.snippet.description.slice(0,100) : ''}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">{new Date(video.snippet.publishedAt).toLocaleString()}</Button>
                  </CardActions>
                </Card>
            
            })

        }
             </div>
    </div>
  )
}

export default Home