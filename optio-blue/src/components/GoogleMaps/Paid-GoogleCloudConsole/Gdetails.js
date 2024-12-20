// Dependencies
import React from 'react';

// MUI Components
import { CircularProgress, Typography, Link, Box, useMediaQuery, useTheme } from '@mui/material';

// Hooks
import usePlaceDetails from '../../../hooks/usePlaceDetails';

// Components
import Glink from './Glink';

const Gdetails = ({ map, placeId }) => {
    const { place, status, error } = usePlaceDetails(map, placeId);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
        return <Box display="flex" justifyContent="center" alignItems="center" height="100%"><CircularProgress /></Box>;
    }

    if (error) {
        return <Typography color="error">Error loading place details: {error}</Typography>;
    }

    return (
        <Box
            className='gdetails'
            p={2}
            // border={1}
            // borderColor="grey.300"
            // borderRadius={2}
            display="flex"
            flexDirection={isMobile ? 'column' : 'row'}
            justifyContent={isMobile ? 'space-evenly' : 'space-evenly'}
            alignItems={isMobile ? 'center' : 'center'}
        >
            {place.photos && place.photos.length > 0 && (
                <Box mb={2} mr={isMobile ? 0 : 2}>
                    <img
                        src={place.photos[0].getUrl({ maxWidth: 400, maxHeight: 300 })}
                        alt={place.name}
                        style={{ width: isMobile ? '100%' : '100%', height: 'auto', borderRadius: '8px' }}
                    />
                </Box>
            )}
            <Box textAlign={isMobile ? 'left' : 'left'}>
                <Typography variant="h4">{place.name}</Typography>
                <br />
                <Typography variant="body1">Address: <Glink location={place.formatted_address} /></Typography>
                <Typography variant="body1">Phone: <Link href={`tel:${place.formatted_phone_number}`}>{place.formatted_phone_number}</Link></Typography>
                <Typography variant="body1">Email: <Link href="mailto:allenhurstcleaners@gmail.com">allenhurstcleaners@gmail.com</Link></Typography>
                <br />
                <Typography variant="body1" gutterBottom>
                    Hours of Operation:
                </Typography>
                <ul>
                    {place.opening_hours.weekday_text.map((day, index) => (
                        <li key={index}>{day}</li>
                    ))}
                </ul>
            </Box>
        </Box>
    );
};

export default Gdetails;