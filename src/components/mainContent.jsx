// import React from 'react';
// import Buttons from './button';
// import CustomizedMenus from './menus';
// import EditIcon from '@mui/icons-material/Edit';
// import ArchiveIcon from '@mui/icons-material/Archive';
// import FileCopyIcon from '@mui/icons-material/FileCopy';
// import RightDrawer from './rightDrawer';
// import { Button } from '@mui/material';

// const menuItems = [
//     {
//         label: 'Edit',
//         icon: <EditIcon />,
//         onClick: () => alert('Edit clicked'),
//     },
//     {
//         label: 'Duplicate',
//         icon: <FileCopyIcon />,
//         onClick: () => alert('Duplicate clicked'),
//         divider: true,
//     },
//     {
//         label: 'Archive',
//         icon: <ArchiveIcon />,
//         onClick: () => alert('Archive clicked'),
//     },
// ];

// export const MainContent = () => {
//     // const [state, setState] = React.useState({
//     //     right: false,
//     // });

//     // const toggleDrawer = (anchor, open) => (event) => {
//     //     if (
//     //         event.type === 'keydown' &&
//     //         (event.key === 'Tab' || event.key === 'Shift')
//     //     ) {
//     //         return;
//     //     }

//     //     setState({ ...state, [anchor]: open });
//     // };


//     const [open, setOpen] = React.useState(false);

//     const handleDrawerOpen = () => {
//         setOpen(true);
//     };

//     const handleDrawerClose = () => {
//         setOpen(false);
//     };


//     return (
//         <div style={{ display: 'flex' }}>
//             {/* Main Content */}
//             <div
//                 className="p-[20px] bg-[#fff] my-[10px]"

//             >
//                 <div className="flex justify-between items-center mb-[8px]">
//                     <div>
//                         <span className="text-[#005399] font-medium">LANE DETAILS</span>
//                     </div>
//                     <div className="flex justify-center items-center">
//                         <Buttons
//                             variant="text"
//                             text="DELETE"
//                             className="!bg-transparent !text-[12px] !px-[12px] !font-bold !text-[#A3A3A3]"
//                         />

//                         <Buttons
//                             text="EDIT"
//                             disabled={true}
//                             className="!text-[12px] !font-bold !text-[#616161] !px-[10px] !py-[5px] !mx-[14px]"
//                         />

//                         <CustomizedMenus buttonText="ASSOCIATE" menuItems={menuItems} bg="E0E0E0" />
//                     </div>
//                 </div>

//                 <div className="border-dashed">
//                     <div>
//                         <span className="text-[14px] font-medium text-[#1FCD93] pl-[11px]">
//                             Lane Creation
//                         </span>
//                     </div>
//                     <div className="flex justify-start items-center">
//                         <Buttons
//                             text="BULK UPLOAD"
//                             // onClick={toggleDrawer('right', true)}
//                             onClick={handleDrawerOpen}
//                             variant="text"
//                             className="!text-[12px] !font-semibold !text-[#0076DD]"
//                         />
//                         <Buttons
//                             text="CONTRACT FETCH"
//                             variant="text"
//                             className="!text-[12px] !font-semibold !text-[#0076DD]"
//                         />
//                         <Buttons
//                             text="ADD LANE"
//                             variant="text"
//                             className="!text-[12px] !font-semibold !text-[#0076DD]"
//                         />
//                     </div>
//                 </div>

//                 {/* Any other content goes here */}
//                 <p>This is the main content area. It will squeeze when the drawer is open.</p>
//             </div>

//             {/* Drawer */}
//             {/* <RightDrawer toggleDrawer={toggleDrawer} state={state} /> */}
//             <RightDrawer handleDrawerOpen={handleDrawerOpen} />
//         </div>
//     );
// };


import React, { useState } from 'react';
import Buttons from './button';
import CustomizedMenus from './menus';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import RightDrawer from './rightDrawer';

const menuItems = [
    {
        label: 'Edit',
        icon: <EditIcon />,
        onClick: () => alert('Edit clicked'),
    },
    {
        label: 'Duplicate',
        icon: <FileCopyIcon />,
        onClick: () => alert('Duplicate clicked'),
        divider: true,
    },
    {
        label: 'Archive',
        icon: <ArchiveIcon />,
        onClick: () => alert('Archive clicked'),
    },
];

export const MainContent = () => {
    // Manage the drawer state here
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            {/* Main Content */}
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
                            disabled={true}
                            className="!text-[12px] !font-bold !text-[#616161] !px-[10px] !py-[5px] !mx-[14px]"
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
            </div>

            {/* Drawer */}
            <RightDrawer open={open} handleDrawerClose={handleDrawerClose} />
        </div>
    );
};
