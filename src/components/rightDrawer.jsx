// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import Buttons from './button';

// export default function RightDrawer({ toggleDrawer, state }) {
//     const list = (anchor) => (
//         <Box
//             sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
//             role="presentation"
//             onClick={toggleDrawer(anchor, false)}
//         // onKeyDown={toggleDrawer(anchor, false)}
//         >
// <div className='flex justify-between items-center bg-[#F3F6FC] px-[14px] py-[10px]'>
//     <div>
//         <span className="text-[#005399] font-medium text-[16px]">Lane Upload</span>
//     </div>
//     <div>
//         <Buttons
//             variant="text"
//             text="CANCEL"
//             className="!p-0 !px-0 !bg-transparent !text-[12px]  !font-bold"
//             onClick={toggleDrawer('right', false)} />
//         <Buttons
//             text="UPLOAD"
//             disabled={true}
//             className=" !text-[12px] !font-bold !text-[#616161] !px-[10px] !py-[5px] !mx-[14px]"
//         />

//     </div>

// </div>
//         </Box>
//     );

//     return (
//         <>
//             <Drawer
//                 anchor="right"
//                 open={state.right}
//                 onClose={toggleDrawer('right', false)}
//                 BackdropProps={{ invisible: true }} // Remove backdrop
//             >
//                 {list('right')}
//             </Drawer>
//         </>
//     );
// }
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
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
    right: 0,  // Align the drawer to the right when opened
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: 0,  // Set width to 0 to make it disappear
    right: 0,  // Keep it aligned to the right
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

    // Handle change event for the dropdown
    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);

        // // Example validation
        // if (value === 'None') {
        //     setError('Please select a valid option.');
        // } else {
        //     setError('');
        // }
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
