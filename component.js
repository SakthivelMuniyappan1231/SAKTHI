import React, { Component } from 'react'
import { connect } from 'react-redux'

export class component extends Component {
  render() {
    return (
      <div>component</div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(component)