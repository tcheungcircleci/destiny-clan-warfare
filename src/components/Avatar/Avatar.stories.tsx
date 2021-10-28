import React from 'react'
import Avatar from '@components/Avatar'

export default {
  title: 'Components/Avatar',
  component: Avatar
}

const Template = args => <Avatar {...args} />

export const source = Template.bind({})

source.args = {
  src: 'https://example.com/image.jpg'
}
source.parameters = {
  chromatic: { disable: true }
}

export const empty = Template.bind({})

export const member = Template.bind({})

member.args = {
  src: 'https://www.bungie.net/img/profile/avatars/cc13.jpg'
}

export const clan = Template.bind({})

clan.args = {
  id: '1486166',
  fill: '#5be7de',
  background: {
    fill: '#5be7de',
    src: 'https://www.bungie.net/common/destiny2_content/icons/cb_decal_square_53468fe0799b424f995509d03be6bfa8.png'
  },
  foreground: {
    fill: '#f0f0f0',
    src: 'https://www.bungie.net/common/destiny2_content/icons/cb_decal_square_c0ecd484a44c9aa934f9fb67e1ac1108.png'
  }
}