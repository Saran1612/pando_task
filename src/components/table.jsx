import React from "react";
import FireTruckIcon from "@mui/icons-material/FireTruck";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Checkbox from "@mui/material/Checkbox";
import ViewWeekOutlinedIcon from '@mui/icons-material/ViewWeekOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import DirectionsBoatOutlinedIcon from '@mui/icons-material/DirectionsBoatOutlined';

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
  sticky: {
    position: "sticky",
    left: 0,
    background: "white",
    width:300,
    minWidth: 300,
    maxWidth: 800,
  },
  container: {
    width:"100%",
    minWidth: 500,
    overflowX: 'auto', // Allows for horizontal scrolling
  },
});

function createData(name, mtype, ctype, dtype, budget, ship, travelRoute,icons) {
  return {
    name,
    mtype,
    ctype,
    dtype,
    budget,
    ship,
    travelRoute,
    icons
  };
}

const rows = [
  createData(
    "LTA001",
    "Port to Port",
    "Per Container | 3 Container",
    "FCL | 20 Standard Dry",
    "$3,500 | $3,410",
    "2",
    "Lithuania - Las Vegas",
    <div className="w-[35px] h-[35px] rounded-[50%] bg-[#FDF3DA] flex justify-center items-center mr-[10px]">
        <LocalShippingOutlinedIcon className="text-[#422500]"/>
    </div>
  ),

  createData(
    "SHNY78",
    "Port to Port",
    "Per Container | 3 Container",
    "FCL | 20 Standard Dry",
    "$3,500 | $3,410",
    "2",
    "Lithuania - Las Vegas",
    <div className="w-[35px] h-[35px] rounded-[50%] bg-[#D7EFFD] flex justify-center items-center mr-[10px]">
        <FlightOutlinedIcon className="text-[#164367]"/>
    </div>
  ),

  createData(
    "HKTY01",
    "Port to Port",
    "Per Container | 3 Container",
    "FCL | 20 Standard Dry",
    "$3,500 | $3,410",
    "2",
    "Lithuania - Las Vegas",
    <div className="w-[35px] h-[35px] rounded-[50%] bg-[#E2F6F8] flex justify-center items-center mr-[10px]">
        <DirectionsBoatOutlinedIcon className="text-[#0F6C6F]"/>
    </div>
  ),
];

export default function CollapseTable() {
  const classes = useStyles();

  return (
    <>
      <TableContainer className={classes.container}>
        <Table
          className={`${classes.table} table-container`}
          aria-label="simple table"
          style={{ tableLayout: "fixed",overflow:"scroll" }}
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.sticky}>
                <div className="flex justify-start items-end">
                  <Checkbox {...label} sx={{ padding: "0 10px 0 0" }} />
                  <span className="text-[12px]">
                    LANE NAME | SOURCE - DESTINATION
                  </span>
                </div>
              </TableCell>
              
              <TableCell align="left">
                <div className="outer-content-wrap-head">MOVEMENT TYPE</div>
              </TableCell>

              <TableCell align="left">
                <div className="outer-content-wrap-head">
                  <span className="text-[12px]">CONTRACT TYPE |</span>
                  <span className="text-[12px]">CONTRACT PARAMETER</span>
                </div>
              </TableCell>

              <TableCell align="left">
                <div className="outer-content-wrap-head">
                  DELIVERY TYPE | THU
                </div>
              </TableCell>
              <TableCell align="left">
                <div className="outer-content-wrap-head">
                    <span className="text-[12px]">BUDGET TYPE |</span>
                    <span className="text-[12px]">CEILING PRICE</span>
                </div>
              </TableCell>
              <TableCell align="left">
                <div className="outer-content-wrap-head !flex !flex-row !justify-between !items-end">
                    <span className="text-[12px]">SHIPMENT COUNT</span> 
                    <ViewWeekOutlinedIcon className="" />
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
                console.log(row,"check ind row")
                // let Iconss = row.icons;
                return(
              <TableRow key={row.name}>
                <TableCell
                  className={`${classes.sticky} table-horizontal-head`}
                >
                  <div className="outer-content-wrap ">
                      
                        {/* <Iconss/> */}{row.icons}
                      
                    <div className="inner-content-wrap flex flex-col">
                      <span className="route-head-info">{row.name}</span>
                      <div>{row.travelRoute}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="flex fixed-gap">
                  <div className="outer-content-wrap">
                    <span className="inner-content-wrap">{row.mtype}</span>
                  </div>
                </TableCell>
                <TableCell className="flex fixed-gap">
                  <div className="outer-content-wrap">
                    <span className="inner-content-wrap">{row.ctype}</span>
                  </div>
                </TableCell>
                <TableCell className="flex fixed-gap">
                  <div className="outer-content-wrap">
                    <span className="inner-content-wrap">{row.dtype}</span>
                  </div>
                </TableCell>
                <TableCell className="flex fixed-gap">
                  <div className="outer-content-wrap">
                    <span className="inner-content-wrap">{row.budget}</span>
                  </div>
                </TableCell>
                <TableCell className="flex fixed-gap">
                  <div className="outer-content-wrap">
                    <span className="inner-content-wrap">{row.ship}</span>
                  </div>
                </TableCell>
              </TableRow>
                )
})}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
