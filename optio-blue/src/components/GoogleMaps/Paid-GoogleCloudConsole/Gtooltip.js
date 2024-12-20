// Dependencies
import React from 'react';

// MUI Components
import { Typography, Link, Box } from '@mui/material';

// Hooks
import useIsMobile from '../../../hooks/useIsMobile';

// Components
import Glink from './Glink';

const Gtooltip = ({ place }) => {
    const isMobile = useIsMobile();

    return (
        <Box
            display="flex"
            flexDirection={isMobile ? "column" : "row"}
            justifyContent="space-evenly"
            alignItems="center"
            gap={isMobile ? 2 : 0} // Add gap between elements on mobile
        >
            {place.photos && place.photos.length > 0 && (
                <img
                    src={place.photos[0].getUrl({ maxWidth: 400, maxHeight: 300 })}
                    alt={place.name}
                    style={{
                        width: isMobile ? '100%' : '35%',
                        height: 'auto',
                        borderRadius: '8px',
                        marginBottom: isMobile ? '16px' : '0' // Add margin on mobile
                    }}
                />
            )}
            <Box>
                <Typography variant="h6">{place.name}</Typography>
                <Glink location={place.formatted_address} />
                <br />
                <Link href={`tel:${place.formatted_phone_number}`} variant="body1">
                    {place.formatted_phone_number}
                </Link>
            </Box>
        </Box>
    );
};

export default Gtooltip;