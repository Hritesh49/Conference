import React, { useState } from 'react';
import { AppBar, Toolbar, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery } from '@mui/material';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:1024px)');

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/important-dates", label: "Important Dates" },
    { href: "/committees", label: "Committees" },
    { href: "/call-for-papers", label: "Call for Papers" },
    { href: "/special-sessions", label: "Call for Special Sessions/Tutorials" },
    { href: "/registration", label: "Registration" },
    { href: "/authors", label: "Authors" },
    { href: "/sponsorship", label: "Sponsorship" },
    { href: "/speakers", label: "Speakers" },
    { href: "/venue", label: "Venue/Travel" },
    { href: "/fellowship", label: "Awards/Grants" },
    { href: "/contact", label: "Contact" },
  ];

  const drawer = (
    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
      <Box
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        style={{ width: 400, }}
      >
        <IconButton onClick={toggleDrawer(false)} style={{ marginLeft: 'auto', display: 'block', color: 'black' }}>
          <CloseIcon />
        </IconButton>
        <List>
          {navLinks.map((link, index) => (
            <ListItem component="a" href={link.href} key={index}>
              <ListItemText sx={{ fontSize: '14px' }} primary={link.label} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );

  return (
    <AppBar position="static" style={{ backgroundColor: '#fff', boxShadow: 'none', width: '100%' }}>
      <Toolbar style={{ justifyContent: 'center', flexDirection: 'column', width: '100%' }}>
        <Box style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '100%', margin: "16px 0px" }}>
          <img src="/1.png" alt="INDISCON 2024" style={{ height: '60px' }} />
          <img src="/2.png" alt="IEEE India Council" style={{ height: '60px' }} />
          <img src="/3.webp" alt="IEEE Chandigarh Subsection" style={{ height: '60px' }} />
          <img src="/4.png" alt="PEC" style={{ height: '60px' }} />
          <img src="/5.png" alt="PEC" style={{ height: '60px' }} />
        </Box>
        {isMobile ? (
          <>
            <IconButton edge="start" color="black" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            {drawer}
          </>
        ) : (
          <Box style={{ width: '100%', boxShadow: '0px 0px 4px #e2e2e2', zIndex: '10', padding: '12px 0px', margin: '10px 0px' }}>
            <Toolbar style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
              {navLinks.map((link, index) => (
                <a key={index} href={link.href} underline="none" style={{ color: '#333', fontWeight: '600', fontSize: '10px', padding: '0px 20px' }}>{link.label}</a>
              ))}
            </Toolbar>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;


