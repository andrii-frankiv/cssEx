import React from 'react'
import PropTypes from 'prop-types'




export function UserList(props) {
  console.info(' List Item View props ', Object.keys(props));
  const { data = [] } = props;
  debugger
  return (
    <div>
      {data}
    </div>
  )
}

UserList.propTypes = {
  data: PropTypes.array
}


export function User(props) {
  console.info(' Item View props ', Object.keys(props))

  return (
    <React.Fragment>
      <code>{props.data || 'check props.data'}</code>
    </React.Fragment>
  )
}

User.propTypes = {
  data: PropTypes.object
}

export default {
  UserList, User
}