import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Login from './components/login'
import logout from './actions/logout'

function App() {
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div>
      {
        isLogged ?
          <button onClick={() => dispatch(logout())}>Logout</button>
          : <Login />
      }

    </div>
  );
}

export default App;

