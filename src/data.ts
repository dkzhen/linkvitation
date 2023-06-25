const linkComingsoon = '/utils/comingsoon/index.html'
export const reviews = [
  {
    id: 1,
    image: {
      src: "https://househunter.vercel.app/review-1.png",
      alt: "Review Pic",
    },
    content: {
      title: "Best! I got the house I wanted through Hounter",
      subtitle:
        "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
    },
    reviewer: {
      picture: {
        src: "https://househunter.vercel.app/dianne-russell.png",
        alt: "Dianne Russell",
      },
      name: "Dianne Russell",
      profession: "Manager Director",
      rating: 4.6,
    },
  },
  {
    id: 2,
    image: {
      src: "https://househunter.vercel.app/review-1.png",
      alt: "Review Pic",
    },
    content: {
      title: "Best! I got the house I wanted through Hounter",
      subtitle:
        "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
    },
    reviewer: {
      picture: {
        src: "https://househunter.vercel.app/rheza.png",
        alt: "Rheza Ardi",
      },
      name: "Rheza Ardi",
      profession: "Software Developer",
      rating: 4.8,
    },
  },
  {
    id: 3,
    image: {
      src: "https://househunter.vercel.app/review-1.png",
      alt: "Review Pic",
    },
    content: {
      title: "Through the Hounter, I can get a house for my self",
      subtitle:
        "By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!",
    },
    reviewer: {
      picture: {
        src: "https://househunter.vercel.app/ronald-richards.png",
        alt: "Esther Howard",
      },
      name: "Esther Howard",
      profession: "Head of Marketing",
      rating: 4.5,
    },
  },
];

export const articles = [
  {
    id: 1,
    avatar: "https://househunter.vercel.app/ronald-richards.png",
    name: "Darlene Robertson",
    article_title: "12 Things to know before buying a house",
    time_stamp: "8 min read | 25 Apr 2021",
    type: "New",
  },
  {
    id: 2,
    avatar: "https://househunter.vercel.app/ronald-richards.png",
    name: "Darlene Robertson",
    article_title: "12 Things to know before buying a house",
    time_stamp: "8 min read | 25 Apr 2021",
    type: "New",
  },
  {
    id: 3,
    avatar: "https://househunter.vercel.app/ronald-richards.png",
    name: "Darlene Robertson",
    article_title: "12 Things to know before buying a house",
    time_stamp: "8 min read | 25 Apr 2021",
    type: "New",
  },
  {
    id: 4,
    avatar: "https://househunter.vercel.app/ronald-richards.png",
    name: "Darlene Robertson",
    article_title: "12 Things to know before buying a house",
    time_stamp: "8 min read | 25 Apr 2021",
    type: "New",
  },
  {
    id: 5,
    avatar: "https://househunter.vercel.app/ronald-richards.png",
    name: "Darlene Robertson",
    article_title: "12 Things to know before buying a house",
    time_stamp: "8 min read | 25 Apr 2021",
    type: "Popular",
  },
  {
    id: 6,
    avatar: "https://househunter.vercel.app/ronald-richards.png",
    name: "Darlene Robertson",
    article_title: "12 Things to know before buying a house",
    time_stamp: "8 min read | 25 Apr 2021",
    type: "Popular",
  },
  {
    id: 7,
    avatar: "https://househunter.vercel.app/ronald-richards.png",
    name: "Darlene Robertson",
    article_title: "12 Things to know before buying a house",
    time_stamp: "8 min read | 25 Apr 2021",
    type: "Most Read",
  },
  {
    id: 8,
    avatar: "https://househunter.vercel.app/ronald-richards.png",
    name: "Darlene Robertson",
    article_title: "12 Things to know before buying a house",
    time_stamp: "8 min read | 25 Apr 2021",
    type: "Most Read",
  },
  {
    id: 9,
    avatar: "https://househunter.vercel.app/ronald-richards.png",
    name: "Darlene Robertson",
    article_title: "12 Things to know before buying a house",
    time_stamp: "8 min read | 25 Apr 2021",
    type: "Tips & Tricks",
  },
  {
    id: 10,
    avatar: "https://househunter.vercel.app/ronald-richards.png",
    name: "Darlene Robertson",
    article_title: "12 Things to know before buying a house",
    time_stamp: "8 min read | 25 Apr 2021",
    type: "Tips & Tricks",
  },
];
export const featureCards = [
  {
    id: 1,
    image: {
      url: "wedding-standard.png",
      alt: "house-1",
    },
    name: "Standard Design ",
    price: 80000,
    demo:"https://linkvitation-wedding-v1.vercel.app/order-v1",
    owner: {
      name: "Rheza",
      address: "Denpasar, Indonesia",
      avatar: "rheza.png",
    },
    category: "House",
    preferences: "Standard",
  },
  {
    id: 2,
    image: {
      url: "wedding-premium.png",
      alt: "roselands-house",
    },
    name: "Coming Soon",
    price: 0,
    demo:linkComingsoon,
    owner: {
      name: "Dianne Russell",
      address: "Manchester, Kentucky",
      avatar: "dianne-russell.png",
    },
    category: "House",
    preferences: "Deluxe",
  },
  {
    id: 3,
    image: {
      url: "wedding-bestdeal.png",
      alt: "woodlandside",
    },
    name: "Coming Soon",
    price: 0,
    demo:linkComingsoon,
    owner: {
      name: "Robert Fox",
      address: "Dr. San Jose, South Dakota",
      avatar: "robert-fox.png",
    },
    category: "House",
    preferences: "Best Deals",
  },
  {
    id: 4,
    image: {
      url: "wedding-deluxe.png",
      alt: "theoldlighthouse",
    },
    name: "Coming Soon",
    price: 0,
    demo:linkComingsoon,
    owner: {
      name: "Ronald Richards",
      address: "Santa Ana, Illinois",
      avatar: "ronald-richards.png",
    },
    category: "House",
    preferences: "Premium",
  },
];
export const carouselHero = [
  {
    id: 1,
    image: [
      "https://househunter.vercel.app/rheza.png",
      "https://househunter.vercel.app/rheza.png",
    ],
    title: "1K+ People",
    subtitle: "Successfully Getting Home",
  },
  {
    id: 2,
    image: "https://househunter.vercel.app/rheza.png",
    title: "56 Houses",
    subtitle: "Sold Monthly",
  },
  {
    id: 3,
    image: "https://househunter.vercel.app/rheza.png",
    title: "4K+ People",
    subtitle: "People Looking for New Homes",
  },
];
