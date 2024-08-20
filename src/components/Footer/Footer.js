import React from 'react'
import { Box, Typography } from '@mui/material';

export default function Footer() {
    return (
        <Box sx={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#D6EFD8', padding: '40px', marginTop: 'auto' ,zIndex: '999'}}>
            <Typography variant="body2" align="center" color="textSecondary">
                © {new Date().getFullYear()} Wealth Health. All rights reserved.
            </Typography>
        </Box>
    )
}
