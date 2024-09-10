import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';


export const SearchBar = () => {
    return (
        <div className='w-full'>
            <FormControl fullWidth sx={{}} variant="standard">
                < Input
                    id="standard-adornment-amount"
                    placeholder="Search source, destination"
                    className='!w-full !border-none !p-[10px] bg-[#F8F8F8] search-bar text-[#A9A9A9]'
                    startAdornment={
                        < InputAdornment position="start" >
                            <SearchIcon className='!text-[#A9A9A9]' />
                        </InputAdornment >
                    }
                />
            </FormControl >
        </div >
    )
}
