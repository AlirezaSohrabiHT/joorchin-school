import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/Logo.svg"
import search from "../../assets/Search.svg"
// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useNavigate } from "react-router-dom";


const pages = ['دوره‌ها', 'مدرسین', 'چرا جورچین؟' , 'وبلاگ' , 'ارتباط با ما'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Header = (props) => {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    const handleNavigation = (page) => {
      switch (page) {
        case "دوره‌ها":
          navigate("/Course");
          break;
        case "مدرسین":
          navigate("/Teachers");
          break;
        case "چرا جورچین؟":
          navigate("/WhyJoorchin");
          break;
        case "وبلاگ":
          navigate("/Blog");
          break;
        case "ارتباط با ما":
          navigate("/Contactus");
          break;
        default:
          // Handle default case or do nothing
      }
    };
    return (
        <div className={styles.back}>
        <AppBar position="static" className={`container ${styles.container}`}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img onClick={()=>navigate("/")} className={styles.logo} src={logo} href="logo"></img>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem    key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
              
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleNavigation(page)}
                  sx={{ my: 2, ml: 1, color: 'white', display: 'block' , fontSize: '20px', fontFamily: 'Kaghaz-bold' }}
                >
                  {page}
                </Button>
              ))}
              
            </Box>
          <div className={styles.search_container}>
            <input placeholder="دنبال چی می‌گردی ؟" />
          </div>
          <img className={styles.search_img} src={search} href="search"></img>
          </Toolbar>
        </Container>
      </AppBar>
      </div>
    )
}

export default Header;