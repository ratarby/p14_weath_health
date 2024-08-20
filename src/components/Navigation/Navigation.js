import React from 'react'
import { AppBar, Toolbar, Typography, Box, Button, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/PersonAdd';
import ViewListIcon from '@mui/icons-material/ViewList';
import logo from '../../assets/logo.png';


export default function Navigation() {
    const navigate = useNavigate();
    const isMobile = useMediaQuery('(max-width: 600px)');

    return (
        <AppBar
            position="static"
            sx={{
                height: '80px',
            }}
        >
            <Toolbar>
                <Box
                    onClick={() =>  isMobile ? navigate('/') :             navigate('/')}
                    sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                >
                    <img src={logo} alt="logo" style={{ height: '80px', marginRight: '8px', marginLeft: '-15px' }} />
                    <Typography
                        color="secondary"
                        variant={isMobile ? 'body2' : 'h6'}
                        sx={{ fontWeight: 'bold' }}
                    >
                        Wealth <br />
                        Health
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        alignItems: isMobile ? 'start' : 'center',
                    }}
                >
                    <Button color="secondary" onClick={() => navigate('/')}>
                        <AddIcon sx={{ marginRight: '5px' }} />
                        <Typography color="secondary" variant={isMobile ? 'caption' : 'h6'} style={{ textTransform: 'capitalize' }}>
                            new employee
                        </Typography>
                    </Button>
                    <Button color="secondary" onClick={() => navigate('/employeelist')}>
                        <ViewListIcon sx={{ marginRight: '5px' }} />
                        <Typography color="secondary" variant={isMobile ? 'caption' : 'h6' } style={{ textTransform: 'capitalize' }}> 
                            list
                        </Typography>
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}



