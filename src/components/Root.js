import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../App'
import Profile from './profile'
import Main from './main'
import Search from './search'
import Inspect from './inspect'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={App} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/inspect" component={Inspect} />
    </Router>
  </Provider>
)
Root.propTypes = {
  store: PropTypes.object.isRequired
}
export default Root