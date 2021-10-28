import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'

import { Element, SmartLink } from '@newhighsco/chipset'

import styles from './Lockup.module.scss'

interface LockupElementProps {
  href?: string
  className?: string
  id?: string
  as?: string | React.FC
}

const LockupElement: React.FC<LockupElementProps> = ({
  as = 'span',
  href,
  className,
  children,
  ...rest
}) => {
  if (!children) return null

  const commonAttributes = {
    className,
    ...rest
  }

  if (!href) {
    return (
      <Element as={as} {...commonAttributes}>
        {children}
      </Element>
    )
  }

  return (
    <Link href={href} passHref>
      <SmartLink {...commonAttributes}>
        <Element as={as}>{children}</Element>
      </SmartLink>
    </Link>
  )
}

interface LockupAttributesProps {
  as?: string | React.FC
  className?: string
  href?: string
}

export interface LockupProps extends Omit<LockupElementProps, 'href'> {
  heading?: string
  headingAttributes?: LockupAttributesProps
  kicker?: string
  kickerAttributes?: LockupAttributesProps
  highlight?: boolean
  align?: 'left' | 'right' | 'center'
  border?: boolean
  reverse?: boolean
}

const Lockup: React.FC<LockupProps> = ({
  heading,
  headingAttributes = {},
  kicker,
  kickerAttributes = {},
  highlight,
  align,
  border = true,
  reverse,
  className,
  id,
  as,
  children
}) => {
  const Kicker = () => {
    const { className, ...rest } = kickerAttributes

    return (
      <LockupElement
        as={heading ? 'span' : as}
        className={classNames(styles.kicker, className)}
        {...rest}
      >
        {kicker}
      </LockupElement>
    )
  }

  const Heading = () => {
    const { className, ...rest } = headingAttributes

    return (
      <LockupElement
        as={as || 'h1'}
        className={classNames(styles.heading, className)}
        {...rest}
      >
        {heading}
      </LockupElement>
    )
  }

  const Content = () => (
    <LockupElement className={styles.content}>{children}</LockupElement>
  )

  return (
    <span
      id={id}
      className={classNames(
        styles.root,
        highlight && styles.highlight,
        reverse && styles.reverse,
        align && styles[align],
        !border && styles.borderless,
        className
      )}
    >
      {reverse && <Heading />}
      <Kicker />
      {!reverse && <Heading />}
      <Content />
    </span>
  )
}

export default Lockup