import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Smurfs} from '../components/Smurfs';
import {getSmurfs} from '../actions/index';
import{SmurfForm} from '../components/SmurfForm'

export default class SmurfsView extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    if(this.props.fetching) {
      return <h1>fetching your smurfs</h1>
    }
    return (
      <div>
        <SmurfForm />
        <Smurfs smurfs = {this.props.smurfs} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfsReducer.smurfs,
  fetchingSmurfs: state.smurfsReducer.fetchingSmurfs,
  addingSmurf:state.smurfsReducer.addingSmurf,
  error: state.smurfsReducer.error,
})

export default connect(mapStateToProps, {
  getSmurfs,})(SmurfsView)