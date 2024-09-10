import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import Buttons from './button';
import Dropdown from './dropdown';

const drawerWidth = 350;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    right: 0,
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: 0,
    right: 0,
});

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));

export default function RightDrawer({ open, handleDrawerClose }) {
    const [selectedOption, setSelectedOption] = React.useState('');
    const options = ['Option 1', 'Option 2', 'Option 3'];

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
    };

    return (
        <Box sx={{ display: 'flex', minHeight: '80vh', }}>
            <Drawer
                variant="permanent"
                open={open}
                anchor="right"
                className="right-drawer !h-[75vh] mx-[10px] my-[10px]"
            >
                {open ? (
                    <div style={{}}>
                        <div className='flex justify-between items-center bg-[#F3F6FC] py-[14px] px-[10px]'>
                            <div>
                                <span className="text-[#005399] font-medium text-[16px]">Lane Upload</span>
                            </div>
                            <div>
                                <Buttons
                                    variant="text"
                                    text="CANCEL"
                                    className="!p-0 !px-0 !bg-transparent !text-[12px]  !font-bold"
                                    onClick={handleDrawerClose} />
                                <Buttons
                                    text="UPLOAD"
                                    disabled={true}
                                    className=" !text-[12px] !font-bold !text-[#616161] !px-[10px] !py-[5px] !ml-[14px]"
                                />
                            </div>
                        </div>

                        <div>
                            <div className='py-[12px] px-[14px]'>
                                <Dropdown
                                    required={true}
                                    label="MODE"
                                    id="exampleDropdown"
                                    htmlFor="exampleDropdown"
                                    name="exampleDropdown"
                                    options={options}
                                    value={selectedOption}
                                    onChange={handleChange}
                                />

                                <Dropdown
                                    required={true}
                                    label="EVENT TYPE"
                                    id="exampleDropdown"
                                    htmlFor="exampleDropdown"
                                    name="exampleDropdown"
                                    options={options}
                                    value={selectedOption}
                                    onChange={handleChange}
                                />

                                <Dropdown
                                    required={true}
                                    label="DELIVERY TYPE"
                                    id="exampleDropdown"
                                    htmlFor="exampleDropdown"
                                    name="exampleDropdown"
                                    options={options}
                                    value={selectedOption}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                ) : null}
            </Drawer>
        </Box>
    );
}
