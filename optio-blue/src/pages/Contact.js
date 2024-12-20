// Dependencies
import React, { useEffect } from 'react';

// MUI Components
import { Box, Container, Paper, Typography, Link } from '@mui/material';

// Constants
import HoursOfOperation from '../constants/HoursOfOperation';
import ContactDetails from '../constants/ContactDetails';

// Components
import ContactForm from '../components/ContactForm';

// Utils
import { logPageView, logTiming } from '../utils/Ganalytics';

// Hooks
import useIsMobile from '../hooks/useIsMobile';

const Contact = () => {
    const isMobile = useIsMobile();

    // Google Analytics
    useEffect(() => {
        logPageView();
        const startTime = performance.now();
        setTimeout(() => {
            const endTime = performance.now();
            const duration = endTime - startTime;
            logTiming('User Engagement', 'Time on Contact Page', duration, 'Contact Page');
        }, 1000);
    }, []);

    return (
        <>
            <Container>
                {/* Header */}
                <Typography variant="h4" sx={{ padding: 2, marginTop: 2, marginBottom: 2, textAlign: 'center' }}>
                    Contact Us!
                </Typography>

                {/* Contact Details */}
                <Paper elevation={3} sx={{ padding: 3, marginBottom: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="h4" sx={{ textDecoration: 'underline' }}>Allenhurst Cleaners</Typography>
                    <Typography variant={isMobile ? 'body1' : 'h4'}>Address: {ContactDetails.address}</Typography>
                    <Typography variant={isMobile ? 'body1' : 'h4'}>Phone: <Link href={`tel:${ContactDetails.phone}`}>{ContactDetails.phone}</Link></Typography>
                    <Typography variant={isMobile ? 'body1' : 'h4'}>Email: <Link href={`mailto:${ContactDetails.email}`}>{ContactDetails.email}</Link></Typography>
                </Paper>

                {/* Hours of Operation */}
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                    Hours of Operation:
                </Typography>
                {HoursOfOperation.map((day, index) => (
                    <Box key={index} sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: 2, padding: 1 }}>
                        <Typography sx={{ flex: 1, textAlign: 'left', fontSize: '1.2rem' }}>
                            {day.day}
                        </Typography>
                        <Typography sx={{ flex: 1, textAlign: 'right', fontSize: '1.2rem' }}>
                            {day.hours}
                        </Typography>
                    </Box>
                ))}

                {/* Contact Form */}
                <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                    <ContactForm />
                </Paper>
            </Container>
        </>
    );
};

export default Contact;