// Dependencies
import React, { useState, useRef, useCallback, useEffect } from 'react';

// MUI Components
import { Typography, Box, Container, Paper } from '@mui/material'

// Components
import Gmap from '../components/GoogleMaps/Paid-GoogleCloudConsole/Gmap';
import Greviews from '../components/GoogleMaps/Paid-GoogleCloudConsole/Greviews'

// Utils
import { logPageView, logTiming, logEvent } from '../utils/Ganalytics';

const Reviews = () => {
    const [map, setMap] = useState(null);
    const mapRef = useRef(null);

    const handleMapLoad = useCallback((mapInstance) => {
        mapRef.current = mapInstance;
        setMap(mapInstance);
        logEvent('Reviews', 'Load Google Reviews', 'Reviews Page');
    }, []);

    useEffect(() => {
        logPageView();
        const startTime = performance.now();
        setTimeout(() => {
            const endTime = performance.now();
            const duration = endTime - startTime;
            logTiming('User Engagement', 'Time on Reviews Page', duration, 'Reviews Page');
        }, 1000);
    }, []);

    return (
        <>
            <Container>
                <Paper elevation={3} sx={{ padding: 2, marginBottom: 2, textAlign: 'center' }}>
                    <Typography variant="h4">
                        Recent Reviews
                    </Typography>
                </Paper>
                <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                    {map && (
                        <Box mt={2}>
                            <Greviews map={map} placeId={process.env.REACT_APP_GOOGLE_MAPS_PLACE_ID} />
                        </Box>
                    )}
                    <Box display={'none'}>
                        <Gmap id={"map-review"} onLoad={handleMapLoad} display={'none'} />
                    </Box>
                </Paper>
            </Container>
        </>
    );
}

export default Reviews
