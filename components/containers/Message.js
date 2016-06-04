import { connect } from 'react-redux'
import { MessageDetails } from '../ui'
import { Component } from 'react'

//
//  TODO: Improve location with find by id
//

const mapStateToProps = (state, props) =>
    ({
        message: state.messages.filter(m=>m.id==props.routeParams.id)[0]
    })


module.exports = connect(mapStateToProps)(MessageDetails)