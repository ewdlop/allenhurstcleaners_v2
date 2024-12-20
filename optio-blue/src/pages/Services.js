// Dependencies
import React, { useState, useEffect } from 'react';

// Hooks
import useIsMobile from '../hooks/useIsMobile';

// MUI Components
import { Container, Paper, Typography, Button, Switch, FormControlLabel, Box, Toolbar, Tab, Tabs } from '@mui/material';

// Constants
import ServiceDetails from '../constants/ServiceDetails';

// Utils
import { logPageView, logTiming, logEvent } from '../utils/Ganalytics';

const Services = () => {
    const [isListView, setIsListView] = useState(false);
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
    const isMobile = useIsMobile();

    const handleViewChange = () => {
        setIsListView(!isListView);
        logEvent('Services', 'Change View', isListView ? 'Grid View' : 'List View');
    };

    const handleNext = () => {
        setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % ServiceDetails.length);
        logEvent('Services', 'Next Service', `Service Index: ${currentServiceIndex + 1}`);
    };

    const handlePrev = () => {
        setCurrentServiceIndex((prevIndex) => (prevIndex - 1 + ServiceDetails.length) % ServiceDetails.length);
        logEvent('Services', 'Previous Service', `Service Index: ${currentServiceIndex - 1}`);
    };

    const handleTabChange = (event, newValue) => {
        event.preventDefault();
        setCurrentServiceIndex(newValue);
        logEvent('Services', 'Change Tab', `Tab Index: ${newValue}`);
    };

    useEffect(() => {
        // Set initial service index
        setCurrentServiceIndex(0);
        // Google Analytics
        logPageView();
        const startTime = performance.now();
        setTimeout(() => {
            const endTime = performance.now();
            const duration = endTime - startTime;
            logTiming('User Engagement', 'Time on Services Page', duration, 'Services Page');
        }, 1000);
    }, []);

    return (
        <Container>
            {/* Header */}
            <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginBottom: 2 }}>
                <Typography variant="h4" sx={{ padding: 2, marginTop: 2, marginBottom: 2, textAlign: 'center' }}>
                    Services
                </Typography>
                <FormControlLabel
                    control={<Switch checked={isListView} onChange={handleViewChange} />}
                    label={isListView ? 'List View' : 'Panel View'}
                />
            </Box>

            {/* List View */}
            {isListView ? (
                ServiceDetails.map((service, index) => (
                    // Display service details, skipping the first one
                    index !== 0 ? (
                        <Paper key={index} elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                            <Typography variant="h5">{service.title}</Typography>
                            <Typography>{service.description}</Typography>
                        </Paper>
                    ) : null
                ))
            ) : (
                // Panel View
                <Paper elevation={3} sx={{ padding: 4, marginBottom: 4, textAlign: 'center' }}>
                    {/* Toolbar of Tabs */}
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Tabs
                            value={currentServiceIndex}
                            onChange={handleTabChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="service tabs"
                        >
                            {ServiceDetails.map((service, index) => (
                                <Tab key={index} label={service.title} />
                            ))}
                        </Tabs>
                    </Toolbar>

                    {/* Content */}
                    <Box sx={{
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                        padding: 2, marginTop: 2, minHeight: isMobile ? '600px' : '700px'
                    }}>
                        <>
                            {/* <Typography variant="h6">{ServiceDetails[currentServiceIndex].title}</Typography> */}
                            <Typography variant={isMobile ? 'h6' : 'h4'}>{ServiceDetails[currentServiceIndex].description}</Typography>
                        </>
                    </Box>

                    {/* Navgiation Buttons */}
                    <Box display="flex" justifyContent="space-between" sx={{ marginTop: 4 }}>
                        <Button variant="contained" onClick={handlePrev}>
                            &lt; Prev
                        </Button>
                        <Button variant="contained" onClick={handleNext}>
                            Next &gt;
                        </Button>
                    </Box>
                </Paper>
            )}
        </Container>
    );
};

export default Services;