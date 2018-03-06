import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { storiesOf } from '@storybook/react'
import { ModifierList } from './Modifier'

const api = require('../../utils/api-helper').api
const constants = require('../../utils/constants')
const camelcaseKeys = require(`camelcase-keys`)
const casingOptions = { deep: true }

class Loader extends Component {
  constructor (props) {
    super(props)

    this.state = {
      modifiers: []
    }
  }

  componentDidMount () {
    api(`Component/GetAllModifiers`)
      .then(({ data }) => {
        this.setState({ modifiers: camelcaseKeys(data, casingOptions) })
      })
  }

  render () {
    return this.props.children(this.state.modifiers)
  }
}

Loader.propTypes = {
  children: PropTypes.func
}

storiesOf('Modifiers', module)
  .addDecorator(story => (
    <div className="text-center" style={{ margin: '120px 100px' }}>
      {story()}
    </div>
  ))
  .add('All', () => (
    <Loader type={constants.prefix.clan} url="Component/GetAllClanMedals">
      {modifiers => <ModifierList modifiers={modifiers} />}
    </Loader>
  ))
