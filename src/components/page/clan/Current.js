import React, { PureComponent } from 'react'
import { withRouteData } from 'react-static'
import PropTypes from 'prop-types'
import { firstBy } from 'thenby'
import PageContainer from '../../page-container/PageContainer'
import Card from '../../card/Card'
import Avatar from '../../avatar/Avatar'
import { Lockup } from '../../lockup/Lockup'
import Leaderboard from '../../leaderboard/Leaderboard'
import RelativeDate from '../../relative-date/RelativeDate'
import { StatList } from '../../stat/Stat'
import Notification from '../../notification/Notification'
import { PlatformList } from '../../platform/Platform'
import { Tab, TabContainer } from '../../tab/Tab'

const constants = require('../../../utils/constants')
const urlBuilder = require('../../../utils/url-builder')
const possessive = require('../../../utils/grammar').possessive

const leaderboardColumns = [
  'rank',
  'games',
  'wins',
  'kills',
  'assists',
  'deaths',
  'bonuses',
  'score'
]

const PageClanCurrent = class extends PureComponent {
  constructor(props) {
    super(props)

    const { clan, members, currentTotals, currentStats } = this.props
    const meta = {
      title: `${clan.name} | ${constants.kicker.current}`,
      description: `${possessive(clan.name)} clan standings in the current ${
        constants.meta.name
      } event`,
      schema: {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': `${process.env.SITE_URL}${urlBuilder.currentEventUrl()}`,
              name: constants.kicker.current
            }
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@id': `${process.env.SITE_URL}${urlBuilder.currentEventUrl(
                clan.id
              )}`,
              name: clan.name
            }
          }
        ]
      }
    }
    const leaderboard = members
      .map((member, i) => {
        const memberCurrentTotals =
          currentTotals[member.id] || constants.emptyTotals

        return {
          ...member,
          ...memberCurrentTotals
        }
      })
      .sort(
        firstBy('score', -1)
          .thenBy('games', -1)
          .thenBy('name')
      )

    this.state = {
      leaderboard,
      stats: currentStats,
      statsColumns: Object.keys(currentStats),
      meta
    }
  }

  render() {
    const { apiStatus, clan, statsGamesThreshold } = this.props
    const { leaderboard, stats, statsColumns, meta } = this.state
    const hasLeaderboard = leaderboard.length > 0
    const tooltip = `Play a minimum of ${statsGamesThreshold} games to be included.`

    return (
      <PageContainer meta={meta}>
        <Lockup
          primary
          center
          kicker={constants.kicker.current}
          kickerAttributes={{ href: urlBuilder.currentEventUrl() }}
        >
          <RelativeDate apiStatus={apiStatus} />
        </Lockup>
        <Card cutout={hasLeaderboard} center>
          <Avatar cutout outline {...clan.avatar} />
          <Lockup center reverse kicker={clan.motto} heading={clan.name} />
          <PlatformList platforms={clan.platforms} />
          {statsColumns.length > 0 ? (
            <StatList
              stats={stats}
              columns={statsColumns}
              top
              kicker="Top stats"
              tooltip={tooltip}
            />
          ) : (
            <Notification>
              Top stats for this event are being calculated. {tooltip}
            </Notification>
          )}
          {!hasLeaderboard && (
            <Notification>
              Leaderboard for this event is being calculated. Please check back
              later.
            </Notification>
          )}
        </Card>
        {hasLeaderboard && (
          <TabContainer cutout>
            <Tab id="current" name={constants.tense.current}>
              <Leaderboard
                data={leaderboard}
                columns={leaderboardColumns}
                search
                placeholder="Find clan member"
              />
            </Tab>
            <Tab name="Overall" href={clan.path} />
          </TabContainer>
        )}
      </PageContainer>
    )
  }
}

PageClanCurrent.propTypes = {
  apiStatus: PropTypes.object,
  clan: PropTypes.object,
  members: PropTypes.array,
  currentTotals: PropTypes.object,
  currentStats: PropTypes.object,
  statsGamesThreshold: PropTypes.number
}

export default withRouteData(PageClanCurrent)