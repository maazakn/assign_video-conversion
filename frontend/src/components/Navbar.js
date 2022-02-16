import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link,useHistory} from 'react-router-dom';
import {handleLogout } from "../actions/LoginAction"
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

   
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize:'15px',
  
    color:'white',
    textAlign:'left',
    paddingLeft:'7px'
  },
  logout:{
    color:'white',
  },

}));

export default function Navbar() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory()

const logout= ()=>{
  dispatch(handleLogout(history))
}
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" className={classes.title}>
        <Link className={classes.title} to='/city'>Home</Link>
         <Link className={classes.title} to='/file'>Upload File</Link>
       

          </Typography>
          <Link className={classes.logout}  onClick={() => logout()} color="inherit" >Logout</Link>
        
        </Toolbar>
      </AppBar>
    </div>
  );
}