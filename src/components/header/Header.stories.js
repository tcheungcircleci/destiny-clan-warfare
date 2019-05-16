import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from './Header'

storiesOf('Layout', module)
  .addParameters({ jest: 'Header' })
  .add('Header', () => <Header />)
