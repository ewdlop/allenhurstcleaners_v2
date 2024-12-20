// Dependencies
import React from 'react'

// MUI Components
import { Link } from '@mui/material';

const Glink = ({ location }) => {
    const googleMapsUrl = `https://www.google.com/maps/place/${location}`;
    return (
        <>
            <Link href={googleMapsUrl} target="_blank" rel="noopener" >
                {location}
            </Link>
        </>
    );
}

export default Glink;