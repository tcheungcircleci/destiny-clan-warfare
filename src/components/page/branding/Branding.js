import React, { Fragment } from 'react'
import PageContainer from '../../page-container/PageContainer'
import Card from '../../card/Card'
import { Lockup } from '../../lockup/Lockup'
import { Grid, GridItem } from '../../grid/Grid'
import TextAlign from '../../text-align/TextAlign'
import { SwatchList } from '../../swatch/Swatch'
import Prose from '../../prose/Prose'
import List from '../../list/List'
import SmartLink from '../../smart-link/SmartLink'

const constants = require('../../../utils/constants')
const meta = {
  title: 'Branding',
  description: `Branding guidelines for ${constants.meta.name}`,
  robots: 'noindex,nofollow'
}
const logos = [
  { name: 'Combined - small', value: 'Logo_Small' },
  { name: 'Combined - medium', value: 'Logo_Medium' },
  { name: 'Combined - large', value: 'Logo_Large' },
  { name: 'Icon', value: 'Logo_Icon' },
  { name: 'Lockup', value: 'Logo_Lockup' }
]
const extensions = ['png', 'psd', 'svg']

function PageBranding() {
  return (
    <PageContainer meta={meta}>
      <Lockup primary center element="h1" kicker="Branding" />
      <Card>
        <Lockup center element="h2" heading="Logos" />
        <Grid reverse bottomed stacked>
          {logos.map((logo, index) => {
            return (
              <Fragment key={index}>
                {index > 0 && (
                  <GridItem>
                    <hr />
                  </GridItem>
                )}
                <GridItem
                  sizes={[
                    'tablet-two-thirds',
                    'tablet-landscape-three-quarters'
                  ]}
                >
                  <TextAlign center>
                    <img
                      src={`/images/branding/${logo.value}.${extensions[0]}`}
                      alt=""
                    />
                  </TextAlign>
                </GridItem>
                <GridItem
                  sizes={['tablet-one-third', 'tablet-landscape-one-quarter']}
                >
                  <Prose>
                    <h3>{logo.name}</h3>
                    <List inline commaSeparated>
                      {extensions.map((extension, index) => {
                        return (
                          <li key={index}>
                            <SmartLink
                              href={`/images/branding/${
                                logo.value
                              }.${extension}`}
                              eventLabel="branding"
                              title={`Download ${extension.toUpperCase()}`}
                              target="_blank"
                            >
                              {extension.toUpperCase()}
                            </SmartLink>
                          </li>
                        )
                      })}
                    </List>
                  </Prose>
                </GridItem>
              </Fragment>
            )
          })}
        </Grid>
      </Card>
      <Card center>
        <Lockup center element="h2" heading="Colours" />
        <SwatchList />
      </Card>
    </PageContainer>
  )
}

export default PageBranding