import { List, ListItem, styled } from '@mui/material';
import React from 'react'
import { Accordions } from './accordion';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

export const Collapses = ({ handleDrawerOpen, handleDrawerClose }) => {
    return (
        <>
            <DrawerHeader className='!px-[1rem] bg-[#EBF1FA] !flex !justify-between !items-center drawer_header'>
                <div className='!cursor-default text-[#0076DD] font-medium'>AIR 009</div>
                <div onClick={handleDrawerClose} className='!cursor-pointer text-[#6D8EB4] font-medium '>COLLAPSE</div>
            </DrawerHeader>
            <List className='flex justify-center items-center bg-[#EBF1FA]'>
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <Accordions />
                </ListItem>
            </List>
        </>
    )
}
