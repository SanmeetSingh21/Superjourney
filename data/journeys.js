export const journeys = [
  {
    id: 1,
    style: 'culture',
    badge: 'Trending',
    badgeColor: 'orange',
    title: 'Perfect Japan Itinerary',
    titleItalic: 'Japan',
    route: 'Tokyo → Osaka',
    days: 9,
    nights: 7,
    rating: 4.9,
    desc: 'Mt. Fuji at dawn. Kyoto\'s golden temples. Hiroshima\'s silence. Osaka\'s skyline.',
    dep: 'TYO',
    arr: 'OSA',
    nights2: 7,
    star: 4,
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1600&q=80',
    routeNodes: ['Tokyo', 'Osaka', 'Fuji', 'Kyoto', 'Nara', 'Hiroshima'],
    weather: {
      location: 'Japan',
      condition: 'Variable',
      temp: '14 - 22°C',
      insight: 'Expect brisk mornings and comfortable afternoons.'
    },
    bookings: [
      { id: 'b1', name: 'Skyhop Bus Tour', icon: 'bus', bookUrl: 'https://www.viator.com/tours/Tokyo/Hop-On-Hop-Off-Tokyo-Bus-by-Skyhop-Bus/d334-366941P494?pid=P00061055&uid=U00182019&mcid=58086&currency=INR' },
      { id: 'b2', name: 'Shinjuku Granbell Hotel', icon: 'bed', bookUrl: 'https://www.expedia.com/Tokyo-Hotels-Shinjuku-Granbell-Hotel.h7737490.Hotel-Information?chkin=2026-08-19&chkout=2026-08-21&x_pwa=1&rfrr=HSR&pwa_ts=1767879281070&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=3593&destination=Tokyo%2C+Tokyo+Prefecture%2C+Japan&destType=MARKET&neighborhoodId=6155217&selected=7737490&latLong=35.681143%2C139.767208&sort=RECOMMENDED&userIntent=&searchId=76073537-eb70-49a1-9964-360036b42bfc&clickref=1100lCfrp8rv&affcid=US.DIRECT.PHG.1100l371341.1100l68075&ref_id=1100lCfrp8rv&my_ad=AFF.US.DIRECT.PHG.1100l371341.1100l68075&afflid=1100lCfrp8rv&affdtl=PHG.1100lCfrp8rv.PZUL1aFprW' },
      { id: 'b3', name: 'JR Pass (7 Days)', icon: 'train', bookUrl: 'https://www.getyourguide.com/tokyo-l193/?partner_id=1LW0J7F&currency=USD&travel_agent=1&cmp=share_to_earn' },
      { id: 'b4', name: 'Osaka Food Tour', icon: 'food', bookUrl: 'https://www.expedia.com/Osaka-Hotels-ART-HOTEL-Osaka-Bay-Tower.h21078021.Hotel-Information?chkin=2026-08-19&chkout=2026-08-21&x_pwa=1&rfrr=HSR&pwa_ts=1767879383657&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=2697&destination=Osaka%2C+Osaka+Prefecture%2C+Japan&destType=MARKET&neighborhoodId=179226&selected=21078021&latLong=34.693738%2C135.502165&sort=RECOMMENDED&userIntent=&searchId=3959513a-a45c-4171-8dc7-bfe347e5c44b&clickref=1110l3QzJTGX&affcid=US.DIRECT.PHG.1100l371341.1100l68075&ref_id=1110l3QzJTGX&my_ad=AFF.US.DIRECT.PHG.1100l371341.1100l68075&afflid=1110l3QzJTGX&affdtl=PHG.1110l3QzJTGX.PZN9WFAKF6' },
      { id: 'b5', name: 'Mt. Fuji Excursion', icon: 'bus', bookUrl: 'https://www.getyourguide.com/kyoto-l96826/kyoto-historical-nara-kyoto-bus-tour-t689294/?partner_id=1LW0J7F&currency=USD&travel_agent=1&cmp=share_to_earn' },
      { id: 'b6', name: 'Arashiyama Bamboo Grove', icon: 'ticket', bookUrl: 'https://www.viator.com/tours/Hiroshima/Hiroshima-Miyajima-Private-Custom-Tour-with-Local-Guide/d4661-383992P8?pid=P00061055&uid=U00182019&mcid=58086&currency=INR' },
    ],
    itineraryDays: [
      {
        day: 1,
        title: 'Arrival & Shibuya Scramble',
        details: 'Settle in and dive headfirst into the neon-lit chaos of Tokyo. A walk across the iconic crossing before ramen in Shinjuku.'
      },
      {
        day: 2,
        title: 'Asakusa to Akihabara',
        details: 'From the quiet incense of Senso-ji Temple to the electric streets of Anime central.'
      },
      {
        day: 3,
        title: 'Bullet Train to Kyoto',
        details: 'Ride the Shinkansen down to the ancient capital. Check into the ryokan.'
      },
      {
        day: 4,
        title: 'Golden Pavilion & Gion',
        details: 'Experience Kinkaku-ji and an evening walk hoping to catch a glimpse of a geisha.'
      },
      {
        day: 5,
        title: 'Nara Deer Park Half-Day Trip',
        details: 'Feed the sacred bowing deer and stand beneath the massive Daibutsu Buddha.'
      },
      {
        day: 6,
        title: 'Osaka Street Food Hustle',
        details: 'Dotonbori awaits. Try takoyaki, okonomiyaki, and take a photo with the Glico Man.'
      },
      {
        day: 7,
        title: 'Hiroshima & Miyajima Island',
        details: 'Reflect at the Peace Park before taking a ferry to the floating torii gate.'
      },
      {
        day: 8,
        title: 'Osaka Castle & Umeda Sky Building',
        details: 'Soak in the history and end the day with a panoramic view of the Kansai region.'
      },
      {
        day: 9,
        title: 'Final Bow & Departure',
        details: 'Last minute souvenir shopping before heading to Kansai International Airport.'
      }
    ]
  },
  {
    id: 2,
    style: 'relaxation',
    badge: 'Popular',
    badgeColor: 'green',
    title: 'Bali Adventure',
    titleItalic: 'Adventure',
    titlePrefix: 'Bali',
    route: 'Ubud → Seminyak',
    days: 5,
    nights: 4,
    rating: 4.8,
    desc: 'Rice terraces, sacred temples, and sunset beaches.',
    dep: 'DPS',
    arr: 'DPS',
    nights2: 4,
    star: 4,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&q=80',
    routeNodes: ['Ubud', 'Seminyak', 'Tegalalang'],
    weather: {
      location: 'Bali',
      condition: 'Variable',
      temp: '31 - 32°C',
      insight: 'Tropical climate. Pack light and expect occasional afternoon showers.'
    },
    bookings: [
      { id: 'b1', name: 'Onda Beach Boutique Hotel', icon: 'bed', bookUrl:'https://www.expedia.com/' },
      { id: 'b2', name: 'Sacred Monkey Forest', icon: 'ticket', bookUrl:'https://www.viator.com/bali-monkey-forest' }
    ],
    itineraryDays: [
      {
        day: 1,
        title: 'Ubud Arrival',
        details: 'Settle in and visit the local markets.'
      },
      {
        day: 2,
        title: 'Tegalalang & Swing',
        details: 'Walk the steep ridges of the ancient rice terraces and swing over the jungle.'
      },
      {
        day: 3,
        title: 'Monkey Forest & Waterfall',
        details: 'Get close to wildlife and cool off beneath the Tegenungan falls.'
      },
      {
        day: 4,
        title: 'Travel to Seminyak',
        details: 'Leave the jungle for the coast. Beach clubs and sunset drinks.'
      },
      {
        day: 5,
        title: 'Departure',
        details: 'Morning surf session before flight.'
      }
    ]
  },
  {
    id: 3,
    style: 'adventure',
    badge: 'Trending',
    badgeColor: 'orange',
    title: 'Swiss Alps Tour',
    titleItalic: 'Tour',
    titlePrefix: 'Swiss Alps',
    route: 'Zurich → Zermatt',
    days: 5,
    nights: 7,
    rating: 4.9,
    desc: 'Alpine peaks, crystal lakes, and mountain trains.',
    dep: 'ZRH',
    arr: 'ZRM',
    nights2: 7,
    star: 4,
    difficulty: 'Hard',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1600&q=80',
    routeNodes: ['Zurich', 'Interlaken', 'Zermatt'],
    weather: {
      location: 'Swiss Alps',
      condition: 'Snow',
      temp: '-2 - 5°C',
      insight: 'Sub-zero temperatures expected at peak altitude.'
    },
    bookings: [
      { id: 'b1', name: 'Glacier Express', icon: 'train', bookUrl:'https://www.expedia.com/' }
    ],
    itineraryDays: [
      {
        day: 1,
        title: 'Zurich to Interlaken',
        details: 'Arrive in Zurich and take the picturesque train into the heart of the mountains.'
      }
    ]
  },
  {
    id: 4,
    style: 'adventure',
    badge: 'Popular',
    badgeColor: 'green',
    title: 'Iceland Ring Road',
    titleItalic: 'Ring Road',
    titlePrefix: 'Iceland',
    route: 'Reykjavik Loop',
    days: 10,
    nights: 9,
    rating: 4.9,
    desc: 'Waterfalls, glaciers, and volcanic landscapes.',
    dep: 'KEF',
    arr: 'KEF',
    nights2: 9,
    star: 4,
    difficulty: 'Hard',
    image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=1600&q=80',
    routeNodes: ['Reykjavik', 'Vik', 'Akureyri'],
    weather: {
      location: 'Iceland',
      condition: 'Windy',
      temp: '5 - 12°C',
      insight: 'Extreme wind gusts on the south coast.'
    },
    bookings: [
      { id: 'b1', name: 'Blue Lagoon Entry', icon: 'ticket', bookUrl:'https://www.expedia.com/' }
    ],
    itineraryDays: [
      {
        day: 1,
        title: 'Golden Circle',
        details: 'Geysers, waterfalls, and tectonic plates.'
      }
    ]
  },
  {
    id: 5,
    style: 'luxury',
    badge: 'Trending',
    badgeColor: 'orange',
    title: 'Santorini Escape',
    titleItalic: 'Escape',
    titlePrefix: 'Santorini',
    route: 'Oia & Fira',
    days: 4,
    nights: 3,
    rating: 4.7,
    desc: 'Whitewashed villages and caldera sunsets.',
    dep: 'JTR',
    arr: 'JTR',
    nights2: 3,
    star: 4,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1600&q=80',
    routeNodes: ['Oia', 'Fira', 'Red Beach'],
    weather: {
      location: 'Santorini',
      condition: 'Sunny',
      temp: '26 - 33°C',
      insight: 'Perfect Mediterranean summer weather.'
    },
    bookings: [
      { id: 'b1', name: 'Catamaran Sunset Cruise', icon: 'ticket', bookUrl:'https://www.expedia.com/' }
    ],
    itineraryDays: [
      {
        day: 1,
        title: 'Caldera Views',
        details: 'Check into the cliffside suite.'
      }
    ]
  },
]
