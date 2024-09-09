import { IconButton, List, ListItem, styled } from '@mui/material';
import React from 'react'



export const Expand = ({ handleDrawerOpen, handleDrawerClose }) => {
    return (
        <>
            <List className='flex justify-center items-center bg-[#EBF1FA]'>
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <div onClick={handleDrawerOpen} className="pb-[1.5rem] vertical-text text-[#6D8EB4] font-medium">EXPAND</div>
                    <div className="pb-[1.5rem] !cursor-default vertical-text text-[#0076DD] font-medium">SOURCING EVENT</div>
                </ListItem>
            </List>
        </>
    )
}
