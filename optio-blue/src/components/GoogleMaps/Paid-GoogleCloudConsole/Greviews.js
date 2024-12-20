// Dependencies
import React from 'react';

// MUI Components
import { CircularProgress, Typography, Box, useMediaQuery, useTheme, Card, CardContent, CardHeader, Avatar, Button } from '@mui/material';

// Hooks
import usePlaceDetails from '../../../hooks/usePlaceDetails';

// Utils
import { logEvent } from '../../../utils/Ganalytics';

const Greviews = ({ map, placeId }) => {
    const { place, status, error } = usePlaceDetails(map, placeId);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const googleReviewUrl = place ? `https://search.google.com/local/writereview?placeid=${place.place_id}` : '';

    if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
        return <Box display="flex" justifyContent="center" alignItems="center" height="100%"><CircularProgress /></Box>;
    }

    if (error) {
        return <Typography color="error">Error loading place details: {error}</Typography>;
    }

    return (
        <>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                {place.rating && (
                    <Typography variant="h6" gutterBottom>
                        Rating: {place.rating} ({place.user_ratings_total} reviews)
                    </Typography>
                )}
                <Button
                    variant="contained"
                    color="primary"
                    href={googleReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => logEvent('Reviews', 'Click', 'Write a Review')}
                // OnClick event to log the event to Google Analytics
                >
                    Write a Review
                </Button>
            </Box>
            {place.reviews && place.reviews.length > 0 && (
                <Box>
                    {place.reviews.slice(0, 15).map((review, index) => (
                        <Card key={index} variant="outlined" sx={{ marginBottom: 2 }}>
                            <Box display="flex" flexDirection={index % 2 === 0 ? 'row' : 'row-reverse'} alignItems="center">
                                <CardHeader
                                    avatar={
                                        <Avatar
                                            src={review.profile_photo_url}
                                            alt={review.author_name}
                                            sx={index % 2 !== 0 ? { marginLeft: 2 } : {}}
                                        />
                                    }
                                    title={review.author_name}
                                    subheader={isMobile ? new Date(review.time * 1000).toLocaleDateString() : new Date(review.time * 1000).toLocaleDateString() + ` - ${review.rating} Stars`}
                                    sx={{
                                        flex: '0 0 auto',
                                        display: 'flex',
                                        flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                                        alignItems: 'center',
                                        justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end'
                                    }}
                                />
                            </Box>
                            <CardContent sx={{ width: '100%' }}>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {review.text}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            )}
        </>
    );
};

export default Greviews;
