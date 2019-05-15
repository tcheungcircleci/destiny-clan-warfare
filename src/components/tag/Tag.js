import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import List from '../list/List'
import styles from './Tag.styl'

const baseClassName = 'tag'
const allowedTags = [
  { name: 'Beta Tester', shortName: 'Beta', tier: 3 },
  { name: 'Creator', tier: 1 },
  { name: 'Insider', tier: 2 },
  { name: 'Rockstar', tier: 3 }
]

const isAllowed = name => {
  return allowedTags.find(tag => tag.name.toLowerCase() === name.toLowerCase())
}

class Tag extends PureComponent {
  render() {
    const { name } = this.props

    if (!name) return null

    const allowed = isAllowed(name)

    if (!allowed) return null

    return (
      <div
        className={classNames(
          styles[baseClassName],
          allowed.tier && styles[`${baseClassName}--tier-${allowed.tier}`]
        )}
        data-label={allowed.shortName || allowed.name}
      />
    )
  }
}

Tag.propTypes = {
  name: PropTypes.string
}

class TagList extends PureComponent {
  render() {
    const { tags, className } = this.props

    if (!tags || tags.length < 1) return null

    const allowed = tags.filter(({ name }) => isAllowed(name))

    if (allowed.length < 1) return null

    return (
      <List
        inline
        className={classNames(styles[`${baseClassName}-list`], className)}
      >
        {allowed.map((tag, i) => (
          <li key={i}>
            <Tag {...tag} />
          </li>
        ))}
      </List>
    )
  }
}

TagList.propTypes = {
  tags: PropTypes.array,
  className: PropTypes.string
}

export { allowedTags, Tag, TagList }
