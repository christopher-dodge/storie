import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
{ /* import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search'; */ }

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function NavDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon>{ <HomeIcon /> } </ListItemIcon>
          <ListItemText> Home </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>{ <ImportContactsIcon /> } </ListItemIcon>
          <ListItemText> Stories </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>{ <AddIcon /> } </ListItemIcon>
          <ListItemText> Create </ListItemText>
        </ListItem>
        
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>{ <PersonIcon /> } </ListItemIcon>
          <ListItemText> Login </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>{ <ExitToAppIcon /> } </ListItemIcon>
          <ListItemText> Logout </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>{ <PersonAddIcon /> } </ListItemIcon>
          <ListItemText> Signup </ListItemText>
        </ListItem>
      </List>
      <Divider />
      {/* Search input field will go here - something like this:
      <div>
        <SearchIcon /> 
        <InputBase id="outlined-basic" placeholder="Search..." variant="outlined" />
      </div> */}
    </div>
  );

  return (
    <div>
      {[''].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor} {<MenuIcon />} </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}
