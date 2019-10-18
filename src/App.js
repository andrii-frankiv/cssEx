import React  from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './App.css';
import {User, UserList} from './components'
import { fetchEntities } from './modules/redux/entities/actions'


export class App extends React.Component() {

  componentDidMount() {
    this.props.getData()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          'header text'
        </header>

        <div className='container'>
          <UserList { ...this.props}>{' - '}</UserList>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  getData: PropTypes.func
}

export default connect(
  props => ({...props}),
  dispatch => ({ getData: () => dispatch(fetchEntities)})
)(App)