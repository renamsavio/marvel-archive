import React from 'react'
import { connect } from 'react-redux';
import { executeSomething, getLink, goToPage } from '../../actions';
import { Access } from '../../components/Access/Access';
import {func } from 'prop-types'
import {compose,setPropTypes, withHandlers, lifecycle} from 'recompose'

const enhanced = compose(
  connect(
  ({router}) => ({router}),
  {
    executeSomething,
    getLink,
    goToPage
  }),
  setPropTypes({
    onMousOver: func,
    executeSomething: func,
    getLink: func,
    onButtonClick: func,
    goToPage: func
  }),
  withHandlers({
    onMousOver: ({executeSomething})  => () => executeSomething(),
    onButtonClick: ({getLink, goToPage})  => () => {
      //getLink()
      goToPage('/catalog')
    }
  }),
  lifecycle({
    async componentDidMount() {
      //await this.props.getLink()
    }
  })
)

export const AccessContainer = enhanced(({onMousOver, onButtonClick}) => {
  return <Access onMousOver={onMousOver} onButtonClick={onButtonClick}/>
});