import React, { PureComponent } from 'react'
import { prefetch } from 'react-static'
import PropTypes from 'prop-types'
import MemberCurrent from '../../components/member/Current'
import Loading from '../../components/loading/Loading'
import NotFound from '../../components/not-found/NotFound'

const urlBuilder = require('../../utils/url-builder')

class MemberCurrentContainer extends PureComponent {
  constructor (props) {
    super(props)

    const { location: { state } } = this.props

    this.state = {
      clan: state ? state.clan : null,
      member: state ? state.member : null,
      notFound: false
    }
  }

  componentDidMount () {
    var { member } = this.state

    if (!member) {
      const { match } = this.props
      const clanId = match.params.clan
      const memberId = match.params.member.replace(/#.+$/, '')

      prefetch(urlBuilder.currentEventUrl(clanId))
        .then(({ clan, members }) => {
          member = members.find(({ id }) => id === memberId)

          this.setState({
            clan,
            member,
            notFound: typeof member === 'undefined'
          })
        })
    }
  }

  render () {
    const { member, notFound } = this.state

    if (notFound) {
      return (
        <NotFound />
      )
    }

    if (!member) {
      return (
        <Loading />
      )
    }

    return (
      <MemberCurrent {...this.state} />
    )
  }
}

MemberCurrentContainer.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object
}

export default MemberCurrentContainer
