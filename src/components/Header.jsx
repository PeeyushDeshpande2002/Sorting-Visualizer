import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#5dd7ff', color: '#ff3366' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Algo<span style={{ color: 'red' }}>Visuals</span>
        </Typography>
        <Button color="inherit">Get In Touch</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
