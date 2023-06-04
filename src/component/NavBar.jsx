import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "react-toastify/dist/ReactToastify.css";
import { auth } from '../firebase';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import SearchInput from "./SearchInput";
import VideoCallIcon from '@mui/icons-material/VideoCall';

import Tooltip from '@mui/material/Tooltip';
const NavBar = () => {
  const token = localStorage.getItem('token');
  const nav = useNavigate();
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('token');
    nav('/signin')

  }
  return (
    <>
      <Stack p={3}
        direction='row'
        alignItems="center"
        sx={{ position: "sticky", background: "#fff", top: 0, justifyContent: 'space-between', padding: ' 0 12px !important' , borderBottom: '2px solid gray'}}>

        <div className="flex items-center space-x-5">
          <NavLink to="/">
            <MenuIcon className="text-dark" fontSize="large" />
          </NavLink>
          <NavLink className="flex items-center " to="/">
            <YouTubeIcon sx={{ fontSize: '3rem', color: 'red' }} />
            <span className="heading">YouTube <sup className="font-normal text-base">IN</sup></span>
          </NavLink>
        </div>
        <SearchInput />
        <Stack p={3}
        direction='row'
        alignItems="center"
        spacing='10px'
>
<Tooltip title="Create">
          <VideoCallIcon  sx={{ fontSize: '2.5rem', color: 'gray' }}/>
          </Tooltip>
          <NotificationsNoneIcon sx={{ fontSize: '2.5rem', color: 'gray' }} />
          <Avatar
            sx={{ width: 30, height: 30, fontSize:'1.5rem', backgroundColor: "green", color: 'white' }}
            alt="Remy Sharp"
            src="/broken-image.jpg"
          >
            B
          </Avatar>

        </Stack>
      </Stack>

    </>
  );
};

export default NavBar;
