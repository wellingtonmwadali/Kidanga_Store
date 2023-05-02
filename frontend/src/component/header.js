import React from 'react'
import { connect } from 'react-redux'

export const header = (props) => {
  return (
    <div>header</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(header)