import React from 'react'
import {Link} from "react-router-dom";
import "./Button.css";
// import { Button } from '@material-ui/core';
// import { TwitterIcon } from '@mui/icons-material';
function Button() {
  return (
      <Link to="button">
          <button className='btn'>CONNECT</button>
      </Link>
    // <div>Button</div>
    // <Button variant="contained" endIcon={<TwitterIcon/>} >CONNECT</Button>
  )
}

export default Button