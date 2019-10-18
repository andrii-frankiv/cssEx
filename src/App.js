import React  from 'react';
import { connect } from 'react-redux'

import './App.css';
import Components from './components'
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
          <Components.UserList> </Components.UserList>
        </div>
      </div>
    );
  }
}


export default connect(
  props => ({...props}),
  dispatch => ({ getData: () => dispatch(fetchEntities)})
)(App)