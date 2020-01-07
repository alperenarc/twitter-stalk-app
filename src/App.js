import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {login} from './actions/login'

function App() {
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div>
      {isLogged ? <h3>Valuable Informatio I Shouldn't see</h3> : ''}
      <button onClick={() => dispatch(login())}>Login</button>
    </div>
  );
}

export default App;
