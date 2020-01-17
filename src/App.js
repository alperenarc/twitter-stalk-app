import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Login from './components/login'
import logout from './components/actions/logout'
import { useHistory } from 'react-router-dom'
import Main from './components/main'
import Inspect from './components/inspect'
import {PeopleAlt,Person,Search,Home,ArrowBack} from '@material-ui/icons'
import {Hidden,AppBar,Toolbar,Typography,
  Button,IconButton,BottomNavigation,
  BottomNavigationAction,makeStyles} from '@material-ui/core'
import asd from './components/firebase'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),

  },
  title: {
    flexGrow: 1,
    cursor: 'pointer'
  },
  appBar:{
    backgroundColor:'#EEEEEE',
    color:'#6D6D6D'
  }
}));



function App() {

  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles();
  return (
    <div>
      {
        isLogged ?
          <div>
            <Hidden smDown>
              <AppBar className={classes.appBar} position="static">
                <Toolbar>
                  <IconButton edge="start" onClick={() => history.push("/")} className={classes.menuButton} color="inherit" aria-label="menu">
                    <Home />
                  </IconButton>
                  <IconButton edge="start" onClick={() => history.push("/search")} className={classes.menuButton} color="inherit" aria-label="menu">
                    <Search />
                  </IconButton>
                  <IconButton edge="start" onClick={() => history.push("/inspect")} className={classes.menuButton} color="inherit" aria-label="menu">
                    <PeopleAlt />
                  </IconButton>
                  <IconButton edge="start" onClick={() => history.push("/profile")} className={classes.menuButton} color="inherit" aria-label="menu">
                    <Person />
                  </IconButton>
                  <Typography variant="h6" className={classes.title}>

                  </Typography>
                  <Button onClick={() => dispatch(logout())} color="inherit">Logout</Button>
                </Toolbar>
              </AppBar>

            </Hidden>
            <Hidden lgUp>
              <AppBar className={classes.appBar} position="static">
                <Toolbar>
                <IconButton edge="start" onClick={() => history.goBack()} className={classes.menuButton} color="inherit" aria-label="menu">
                    <ArrowBack />
                  </IconButton>
                  <Typography variant="h6" className={classes.title}>

                  </Typography>
                  <Button onClick={() => dispatch(logout())} color="inherit">Logout</Button>
                </Toolbar>
              </AppBar>

            </Hidden>
            
            <Hidden lgUp>
              <BottomNavigation style={{
                width: '100%',
                position: 'fixed',
                left: 0,
                bottom: 0,
                backgroundColor: '#EEEEEE'

              }}>
                <BottomNavigationAction onClick={() => history.push("/")} label="Main" icon={<Home />} />
                <BottomNavigationAction onClick={() => history.push("/search")} label="Search" icon={<Search />} />
                <BottomNavigationAction onClick={() => history.push("/inspect")} label="Inspect" icon={<PeopleAlt />} />
                <BottomNavigationAction onClick={() => history.push("/profile")} label="Profile" icon={<Person />} />
              </BottomNavigation>
            </Hidden>
          </div>
          : <Login />
      }
    </div>
  );
}
export default App;

