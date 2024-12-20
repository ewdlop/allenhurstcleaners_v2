// Dependencies
import React, { useEffect } from 'react';

// MUI Components
import { Container, Paper, Typography, Grid2, Box } from '@mui/material';

// Components
import Tile from '../components/Tile';

// Contstants
import AboutTileDetails from '../constants/AboutTileDetails';

// Utils
import { logPageView, logTiming } from '../utils/Ganalytics';

const About = () => {
    useEffect(() => {
        logPageView();
        const startTime = performance.now();
        setTimeout(() => {
            const endTime = performance.now();
            const duration = endTime - startTime;
            logTiming('User Engagement', 'Time on About Page', duration, 'About Page');
        }, 1000);
    }, []);

    return (
        <>
            <Container>
                <>
                    {/* Header */}
                    <Typography variant="h4" sx={{ padding: 2, marginTop: 2, marginBottom: 2, textAlign: 'center' }}>
                        Who We Are:
                    </Typography>
                    <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
                            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                Located in the heart of Allenhurst, NJ, Allenhurst Dry Cleaners has been a cornerstone of the community for over 40 years. What began as a simple storefront for basic dry cleaning has evolved into a comprehensive multi-service production plant.
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
                            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                Our commitment to excellence is reflected in our use of all organic solvents, ensuring a deep and thorough cleaning that revitalizes both old and new fabrics, textiles, and clothing. We pride ourselves on our rich history and our dedication to providing top-notch services to our valued customers.
                            </Typography>
                        </Box>
                    </Paper>
                </>

                {/* What We Do: Section */}
                <>
                    <Typography variant="h4" sx={{ padding: 2, marginTop: 2, marginBottom: 2, textAlign: 'center' }}>
                        What We Do:
                    </Typography>
                    <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
                            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                At Allenhurst Dry Cleaners, we specialize in a variety of services tailored to meet your needs:
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
                            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                Laundry Services for Men’s Button-Down Shirts: We offer specialized laundry services exclusively for men’s button-down shirts. Each shirt is machine washed using high-quality detergents that effectively remove stains and odors while preserving the fabric’s integrity. After washing, the shirts are machine pressed to achieve a crisp and polished appearance. Our typical turnaround time for this service is two to three days, ensuring your shirts are ready when you need them.
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
                            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                Tailoring Services: Our expert tailoring services cater to a wide range of clothing and textile materials. Whether you need hemming, letting out or lengthening, adjusting side seams, sleeves, tapering, waist adjustments, cuffs or removal of cuffs, or even adding bra cups, our skilled tailors can handle it all. We ensure that your garments fit perfectly and look their best.
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
                            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                Packaging and Protection: Every order is meticulously packaged in travel-safe blue plastic wrap to protect your clothes from the elements when leaving the store. This packaging also guards against dust buildup and potential moth damage in closets, keeping your garments in pristine condition. Additionally, the bags help maintain the pressing of clothes during travel. For those looking to declutter, we offer hanger recycling services as well.
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
                            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                Specialty Services: We also provide specialized cleaning services for leather, fur, and bridal garments. Our leather cleaning process uses natural or synthetic substances to remove dirt and grime, while our fur cleaning service conditions the leather and frees the fur of dust particles, enhancing its longevity and sheen. Our bridal gown preservation service employs special cleaning and packaging techniques to ensure your wedding dress remains a cherished keepsake. For the most up-to-date details on these services and their turnaround times, please inquire in-store.
                            </Typography>
                        </Box>
                    </Paper>
                </>

                {/* What Can We Provide: Section */}
                <>
                    <Typography variant="h4" sx={{ padding: 2, marginTop: 2, marginBottom: 2, textAlign: 'center' }}>
                        What Can We Provide:
                    </Typography>
                    <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                        <Grid2 container spacing={2} display={'flex'} justifyContent={'center'} alignContent={'center'}>
                            {AboutTileDetails.map((tile, index) => (
                                <Grid2 item key={index} xs={6} sm={4} md={3} lg={3} xl={3}>
                                    <Tile
                                        frontText={tile.frontText}
                                        backText={tile.backText}
                                        backgroundImage={tile.backgroundImage}
                                        reverse={index % 2 === 1} // Apply reverse class to every other tile
                                    />
                                </Grid2>
                            ))}
                        </Grid2>
                    </Paper>
                </>

            </Container>
        </>
    );
};

export default About;