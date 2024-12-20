// Dependencies
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// MUI Components
import { Button, Box } from '@mui/material';

const NavMenu = ({ onClick }) => {
    return (
        <>
            <Box>
                <Button color="inherit" component={RouterLink} to="/" onClick={onClick} >Home</Button>
                <Button color="inherit" component={RouterLink} to="/about" onClick={onClick}>About</Button>
                <Button color="inherit" component={RouterLink} to="/services" onClick={onClick}>Services</Button>
                <Button color="inherit" component={RouterLink} to="/contact" onClick={onClick}>Contact</Button>
                {process.env.NODE_ENV === 'development' && (
                    <>
                        {/* <Button color="inherit" component={RouterLink} to="/reviews" onClick={onClick}>Reviews</Button>
                        <Button color="inherit" component={RouterLink} to="/sandbox" onClick={onClick}>Sandbox</Button> */}
                    </>
                )}
            </Box>
        </>
    );
};

export default NavMenu;