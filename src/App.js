import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Login from './components/login'
import logout from './components/actions/logout'
import { BrowserRouter as NavLink } from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import PersonIcon from '@material-ui/icons/Person'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import Hidden from '@material-ui/core/Hidden'

function redirectToAction(value){
  return(
    <div>
      {
      value == 'profile' ? alert('Profile') :alert('hata')
    }
    </div>
  )
}
function App() {
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div>
      {
        isLogged ?
          <div>
            <NavLink
              to="/profile"
              style={{ color: 'red', cursor: 'pointer' }}>
              FAQs
            </NavLink>
            <button onClick={() => dispatch(logout())}>Logout</button>

            <Hidden lgUp>
              <BottomNavigation style={{
                width: '100%',
                position: 'fixed',
                left: 0,
                bottom: 0,
                backgroundColor: '#EEEEEE'

              }}>
                <BottomNavigationAction onClick={()=>redirectToAction('main')} label="Main" icon={<HomeIcon />} />
                <BottomNavigationAction onClick={()=>redirectToAction('search')} label="Search" icon={<SearchIcon />} />
                <BottomNavigationAction onClick={()=>redirectToAction('inspect')} label="Inspect" icon={<PeopleAltIcon />} />
                <BottomNavigationAction onClick={()=>redirectToAction('profile')} label="Profile" icon={<PersonIcon />} />
              </BottomNavigation>
            </Hidden>










          </div>
          : <Login />
      }

    </div>
  );
}

export default App;

