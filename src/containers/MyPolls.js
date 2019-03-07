import React from 'react'
import { Link } from 'react-router-dom';

import { connect } from 'react-redux'

const MyPolls = (props) => {
  return (
    <div>
      <Link to="#">Create a New Poll</Link>
      <p>This will be where your polls will be displayed</p>
    </div>
  )
}

function mapStateToProps(state){
  const { currentUser } = state.auth
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(MyPolls);