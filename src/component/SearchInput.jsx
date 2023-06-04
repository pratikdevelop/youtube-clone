// import React from 'react
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import MicIcon from '@mui/icons-material/Mic';
const SearchInput = () => {
  return (
    <div className='flex items-center jusstify-start'>
    <Paper
      component="form"
    //   className='rounded-full'
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 500, borderRadius:"25px" }}
    >
    
      <InputBase
        sx={{ ml: 1, flex: 1, color:'GrayText'}}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      
    </Paper>
    <MicIcon  sx={{fontSize:'2rem', marginLeft:"10px"}}/>
    </div>
  )
  }

export default SearchInput