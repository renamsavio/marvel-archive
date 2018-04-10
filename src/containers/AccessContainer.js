import React from 'react'
import { connect } from 'react-redux';
import { executeSomething, getLink } from '../actions';
import { Access } from '../components/Access/Access';
import {func} from 'prop-types'
import {compose,setPropTypes, withHandlers, lifecycle} from 'recompose'

const enhanced = compose(
  connect(null,{
    executeSomething,
    getLink
  }),
  setPropTypes({
    onMousOver: func,
    executeSomething: func,
    getLink: func,
    onButtonClick: func
  }),
  withHandlers({
    onMousOver: ({executeSomething})  => () => executeSomething(),
    onButtonClick: ({getLink})  => () => getLink()
  }),
  lifecycle({
    async componentDidMount() {
      //await this.props.getLink()
    }
  })
)

const AccessContainer = enhanced(({onMousOver, onButtonClick}) => {
  return <Access onMousOver={onMousOver} onButtonClick={onButtonClick}/>
});

export default AccessContainer