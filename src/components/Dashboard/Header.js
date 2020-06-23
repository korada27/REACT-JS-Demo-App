import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import logo from '../../assets/images/logo.svg';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import Auth from '../Auth/Auth';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    imgresponsive:{
        height:100,
        width: 100
    }
}));

export default function ButtonAppBar(props) {
    const classes = useStyles();
    const [state, setState] = useState({
        isDrawerOpen: false
    });
    const toggleDrawer = (open) => (event) => {
        setState({ ...state, isDrawerOpen: open });
    };

    // const navigateComponent = (data) =>{
    //     console.log(data)
    // }
    const logout = (e) => {
        console.log("Logout Successfull clicked ");
        localStorage.clear();
        
        Auth.signout();
        props.dashboarddata.history.push("/");
        console.log("props",props.dashboarddata)
    }

    return (
        <>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                            // onClick={setDrawerOpen}
                            // onClick={toggleDrawer(true)}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Dashboard
                        </Typography>
                        {/* <Link to="/dashboard/about"> */}
                            {/* <Button color="inherit">About</Button> */}
                        {/* </Link> */}
                        <Link
                            to="/dashboard/about"
                            className="hoverLinkDisable">
                            <Button color="inherit">About</Button>
                        </Link>
                        <Button color="inherit" onClick={logout}>Logout</Button>
                        
                    </Toolbar>

                </AppBar>
                <Drawer open={state.isDrawerOpen} onClose={toggleDrawer(false)}>
                    <List style={{ width: 250 }} onClick={toggleDrawer(false)}>
                        
                        <div className="drawerimageresponsive">
                        <img src={logo} className={classes.imgresponsive} alt='react'/>
                        <h3>Welcome to React App</h3>
                        </div>
                        
                        <hr/>
                        {/* {["Home", "Our Services","News", "Contact Us", "About Us"].map(
                            (text, index) => (
                                <ListItem button key={text} onClick={navigateComponent(text)}>
                                    <ListItemText primary={text} />
                                </ListItem>
                            )
                        )} */}
                        <ListItem>
                            <ListItemText>Home</ListItemText>
                        </ListItem>
                        {/* <ListItem>
                            <ListItemText>About</ListItemText>
                        </ListItem> */}
                        <ListItem>
                            <Link to="/dashboard/about" className="listItemcolor">
                                <ListItemText color="inherit">About</ListItemText>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/dashboard/news" className="listItemcolor">
                                <ListItemText color="inherit">News</ListItemText>
                            </Link>
                        </ListItem>
                        {/* <ListItem>
                            <ListItemText>Contact</ListItemText>
                        </ListItem> */}
                         <ListItem>
                            <Link to="/dashboard/contact" className="listItemcolor">
                                <ListItemText color="inherit">Contact</ListItemText>
                            </Link>
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        </> 
    );
}
