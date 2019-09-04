const constants = {
  meta: {
    name: 'Destiny Clan Warfare',
    shortName: 'Clan Warfare',
    title: 'Destiny Clan Warfare - Band together, Guardians',
    description:
      'Wage war against other clans in Destiny 2 and battle your way to the top of the Destiny 2 clan leaderboard',
    handle: '@destinyclanwar',
    themeColor: '#404040',
    trackingId: 'UA-109161360-1'
  },
  blank: '-',
  format: {
    date: 'YYYY-MM-DD',
    humanReadable: 'MMM DD HH:mm\xa0z',
    humanReadableDate: 'MMM DD',
    humanReadableTime: 'HH:mm z',
    machineReadable: 'YYYY-MM-DDTHH:mm:ssZ',
    url: 'YYYY-MM-DD',
    timeIs: '[https://time.is/]HHmm_DD_MMM_YYYY_in_UTC'
  },
  divisions: [
    { key: 'large', name: 'Company', size: '61+ members' },
    { key: 'medium', name: 'Platoon', size: '31-60 members' },
    { key: 'small', name: 'Squad', size: '1-30 members' }
  ],
  result: {
    win: 'win',
    loss: 'loss',
    winnersMedal: 'The Best of the Best'
  },
  modifiers: {
    tbc: ['Modifier TBC', 'Multiplier TBC'],
    notApplicable: ['No Modifier', 'No Multiplier']
  },
  tense: {
    current: 'Current',
    past: 'Past',
    future: 'Future',
    previous: 'Previous'
  },
  relativeDate: {
    updated: 'Updated',
    current: 'Ends',
    currentStart: 'Start',
    currentEnd: 'End',
    past: 'Ended',
    future: 'Starts'
  },
  kicker: {
    current: 'Current event',
    past: 'Past event',
    future: 'Upcoming event',
    previous: 'Previous event',
    next: 'Next event',
    sponsor: 'Sponsored by'
  },
  server: {
    apiUrl: {
      protocol: 'https://',
      subdomains: ['destinyclanwarfareapi'],
      domain: '.azurewebsites.net/',
      path: 'api/'
    },
    proxyUrl: '/api/'
  },
  bungie: {
    baseUrl: 'https://www.bungie.net/',
    proxyUrl: 'https://bungie.destinyclanwarfare.com/',
    disabledStatusCodes: [5, 1618],
    avatarPath: 'img/profile/avatars/',
    defaultAvatarIcon: 'default_avatar.gif',
    platformDefault: -1
  },
  prefix: {
    clan: 'Clan',
    profile: 'Member',
    medal: 'Medal',
    modifier: 'Modifier',
    event: 'Event',
    hash: '#',
    positive: '+',
    multiply: 'x',
    percent: '%',
    most: 'most',
    highest: 'highest',
    relative: 'in',
    enroll: 'enroll',
    tbc: 'TBC',
    notApplicable: 'N/A'
  },
  enrollment: {
    existing: 'Clan already exists',
    closed: 'Not accepting new clans at this time.',
    optOut: 'This clan has opted out of DestinyClanWarfare'
  },
  social: {
    patreon: 'https://www.patreon.com/destinyclanwarfare',
    paypal: 'https://www.paypal.me/destinyclanwarfare',
    twitter: 'https://twitter.com/destinyclanwar'
  },
  patreon: {
    donor: { name: 'Signing up for Duty', id: '2983215' },
    insider: { name: 'Inside Edge', id: '2228028' },
    modifierCreator: { name: 'Shape the Battlefield', id: '2200985' },
    eventCreator: {
      name: 'Command the Warfare',
      description: 'Pick all the modifiers and create your own modifier',
      id: '2409387'
    }
  },
  statsGamesThreshold: 15,
  emptyTotals: {
    path: null,
    rank: false,
    games: -1,
    wins: -1,
    kills: -1,
    assists: -1,
    deaths: -1,
    kd: -1,
    kda: -1,
    bonuses: null,
    ppg: -1,
    score: -1
  },
  clans: {
    pixelPub: [
      '2050502',
      '2698396',
      '2910406',
      '2929325',
      '2942063',
      '2947073',
      '2947089',
      '2952790',
      '2952807',
      '2960373',
      '2964793',
      '2967555',
      '2972025',
      '2974722',
      '2980246',
      '2983234',
      '2987458',
      '2993682',
      '2996615',
      '3000459',
      '3004720',
      '3009653',
      '3011087',
      '3015331',
      '3025439',
      '3030504',
      '3047146',
      '3051873',
      '3059252',
      '3150406',
      '3170641',
      '3173776',
      '3175878',
      '3175927',
      '3176466',
      '3176487',
      '3176524',
      '3176607',
      '3176635',
      '2965282',
      '2969280',
      '2972034',
      '2974641',
      '2976380',
      '2983121',
      '2987483',
      '2993710',
      '2996391',
      '2997873',
      '3002173',
      '3004713',
      '3009125',
      '3012051',
      '3015346',
      '3023255',
      '3029196',
      '3034013',
      '3047148',
      '3051877',
      '3063319',
      '3112057',
      '3144374',
      '3149148',
      '3165204',
      '3172611',
      '3175893',
      '3175955',
      '3176667',
      '3176690',
      '3176723',
      '3176747',
      '3176786',
      '2595877',
      '2595944',
      '2810613',
      '2891598',
      '2904541',
      '2909553',
      '2909749',
      '2929300',
      '2940346',
      '2942112',
      '2946133',
      '2947110',
      '2947456',
      '2951287',
      '2951450',
      '2956666',
      '2958993',
      '2960381',
      '2963688',
      '2967536',
      '2970669',
      '2974100',
      '2976039',
      '2983176',
      '2993093',
      '2994858',
      '2997890',
      '3002196',
      '3006085',
      '3010581',
      '3013857',
      '3016783',
      '3059254',
      '3132353',
      '3137975',
      '3140068',
      '3139877',
      '3139942',
      '3171059',
      '3175828',
      '3175861',
      '3176000',
      '3176887',
      '3176900',
      '3177101',
      '3177110',
      '3177123',
      '2958012',
      '3002162',
      '2954228',
      '2959103',
      '2970652',
      '2987510',
      '3002656',
      '3011069',
      '3029217',
      '3059259',
      '3136660',
      '3140929',
      '3176351',
      '3176367',
      '3176381',
      '3176410',
      '3176455'
    ]
  }
}

module.exports = constants
