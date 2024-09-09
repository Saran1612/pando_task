import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DiamondIcon from '@mui/icons-material/Diamond';

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className='!bg-[#234357]'>
                <Toolbar>
                    <div>
                        <DiamondIcon />
                    </div>

                    <div class="vertical-line"></div>

                    <Typography className='text-3xl font-bold' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        KWE - Procure
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
