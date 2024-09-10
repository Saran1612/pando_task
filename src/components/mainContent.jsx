import React, { useState } from 'react';
import Buttons from './button';
import CustomizedMenus from './menus';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import RightDrawer from './rightDrawer';
import { SearchBar } from './searchbar';
import { Grid } from '@mui/material';
import Dropdown from './dropdown';

const menuItems = [
    {
        label: 'Edit',
        icon: <EditIcon />,
    },
    {
        label: 'Duplicate',
        icon: <FileCopyIcon />,
    },
    {
        label: 'Archive',
        icon: <ArchiveIcon />,
    },
];

export const MainContent = () => {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            <div className="p-[20px] bg-[#fff] my-[10px]" style={{ flexGrow: 1 }}>
                <div className="flex justify-between items-center mb-[8px]">
                    <div>
                        <span className="text-[#005399] font-medium">LANE DETAILS</span>
                    </div>
                    <div className="flex justify-center items-center">
                        <Buttons
                            variant="text"
                            text="DELETE"
                            className="!bg-transparent !text-[12px] !px-[12px] !font-bold !text-[#A3A3A3]"
                        />

                        <Buttons
                            text="EDIT"
                            className="!bg-[#E0E0E0] !shadow-none hover:!shadow-none !text-[12px] !font-bold !text-[#616161] !px-[10px] !py-[5px] !mx-[14px]"
                        />

                        <CustomizedMenus buttonText="ASSOCIATE" menuItems={menuItems} bg="E0E0E0" />
                    </div>
                </div>

                <div className="border-dashed">
                    <div>
                        <span className="text-[14px] font-medium text-[#1FCD93] pl-[11px]">
                            Lane Creation
                        </span>
                    </div>
                    <div className="flex justify-start items-center">
                        <Buttons
                            text="BULK UPLOAD"
                            onClick={handleDrawerOpen}  // Open drawer on button click
                            variant="text"
                            className="!text-[12px] !font-semibold !text-[#0076DD]"
                        />
                        <Buttons
                            text="CONTRACT FETCH"
                            variant="text"
                            className="!text-[12px] !font-semibold !text-[#0076DD]"
                        />
                        <Buttons
                            text="ADD LANE"
                            variant="text"
                            className="!text-[12px] !font-semibold !text-[#0076DD]"
                        />
                    </div>
                </div>

                <div className='mt-[15px]'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <div>
                                <SearchBar />
                            </div>
                        </Grid>

                        <Grid item xs={12} md={8}>
                            <div className='bg-[#F8F8F8] h-full flex justify-start items-center'>
                                <div className='ml-[16px]'>
                                    <CustomizedMenus buttonText="Movement Type:" menuItems={menuItems} bg="fff" />
                                </div>

                                <div className='ml-[16px]'>
                                    <CustomizedMenus buttonText="Contract Type:" menuItems={menuItems} bg="fff" />
                                </div>

                                <div className='ml-[16px]'>
                                    <CustomizedMenus buttonText="THU 3 Selected" menuItems={menuItems} bg="fff" />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>

            {/* Right Drawer */}
            <RightDrawer open={open} handleDrawerClose={handleDrawerClose} />
        </div >
    );
};
