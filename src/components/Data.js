import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper"
// import Data1 from './Data1'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


function Data() {
    const classes = useStyles();
    const [get, setGet] = useState([])
    console.log(get)
      useEffect(() => {
    axios.get('https://luvfinder.luvinu.io/api/getmemeMarket/DOGE-JPY')
    .then(res => {
        console.log(res.data.result[0].maindata)
        setGet(res.data.result[0].maindata)
    })
    .catch(err => {
        console.log(err)
    })
  },[])
  return (

    <>
    <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
<StyledTableCell>Platform</StyledTableCell>
<StyledTableCell>Last Trade Price</StyledTableCell>
<StyledTableCell>Bid Percentage</StyledTableCell>
              <StyledTableCell align="right">Volume</StyledTableCell>
                          </TableRow>
          </TableHead>
          <TableBody>
            {get
              .map((res) => {
                return (
                  <StyledTableRow key={res.id}>
                    <StyledTableCell>{res.id}</StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {res.name}
                    </StyledTableCell>
                    <StyledTableCell>{res.last_trade_price}</StyledTableCell>
                    <StyledTableCell>{res.bid_percentage}</StyledTableCell>
                    <StyledTableCell align="right">
                      {res.volume}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    {/* <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Platform</th>
              <th>Last Trade Price</th>
              <th>Bid Percentage</th>
              <th>Volume</th> 
            </tr>
          </thead>
          <tbody> */}
     {/* <button onClick={getd}>get</button> */}
     {/* { get && 
       get.map((data1) =>
         <Data1 key = {data1.id} 
         data1={data1}/> */}
          {/* //  <tr>
          //  <td>{res.id}</td>
          //   <td>{res.name}</td>
          //  <td>{res.last_trade_price}</td> 
          //  <td>{res.bid_percentage}</td>
          //  <td>{res.volume}</td>
          //  </tr>
          )
     }
      </tbody>
      </table> */}
    </>
  )
}

export default Data