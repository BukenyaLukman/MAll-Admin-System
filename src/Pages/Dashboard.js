import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeFragment from "../Fragments/HomeFragment";
import {
    HomeRounded, 
    Phonelink, 
    ShoppingCart, 
    Settings, 
    PowerOff, 
    Category,
    PowerSettingsNew
} from '@material-ui/icons'
import logo1 from "../media/logo1.png"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            <img src={logo1} height="50px" style={{ marginRight:"16px"}} width="80"/><Typography variant="h4" display="inline">
                My Mall Admin
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
              <ListItem button>
                <ListItemIcon>
                    <HomeRounded />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
          </List>
          <List>
              <ListItem button>
                <ListItemIcon>
                    <Category />
                </ListItemIcon>
                <ListItemText primary="Categories" />
              </ListItem>
          </List>
          <List>
              <ListItem button>
                <ListItemIcon>
                    <Phonelink />
                </ListItemIcon>
                <ListItemText primary="Products" />
              </ListItem>
          </List>
          <List>
              <ListItem button>
                <ListItemIcon>
                    <ShoppingCart />
                </ListItemIcon>
                <ListItemText primary="Orders" />
              </ListItem>
          </List>
          <List>
              <ListItem button>
                <ListItemIcon>
                    <Settings />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
          </List>
          <Divider />
          <List>
              <ListItem button>
                <ListItemIcon>
                    <PowerSettingsNew />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar/>
         <HomeFragment/>  
      </main>
    </div>
  );
}
