export interface Review {
  id: string;
  name: string;
  initials: string;
  rating: number;
  date: string;
  location: string;
  text: string;
}

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Keval Goswami",
    initials: "KG",
    rating: 5,
    date: "March 2025",
    location: "Ansh Girls PG, Navrangpura",
    text: "Best PG experience I've had. The rooms are spacious, food is home-cooked and genuinely tasty, and the staff actually cares. Security is tight — my parents were worried about me moving to Ahmedabad but they're fully at peace now.",
  },
  {
    id: "r2",
    name: "Priya Mehta",
    initials: "PM",
    rating: 5,
    date: "February 2025",
    location: "Girls Satellite PG",
    text: "Very happy with Rentastic Homes Satellite. The AC rooms are clean, Wi-Fi is fast enough for online classes, and housekeeping is regular. The location near Jodhpur is perfect for my college commute.",
  },
  {
    id: "r3",
    name: "Rohan Shah",
    initials: "RS",
    rating: 5,
    date: "January 2025",
    location: "Ansh Boys PG, Navrangpura",
    text: "I was sceptical about PGs after bad experiences elsewhere, but Rentastic completely changed my mind. The biometric entry and 24/7 guard make it feel genuinely secure. The gym is a bonus I didn't expect.",
  },
  {
    id: "r4",
    name: "Anjali Patel",
    initials: "AP",
    rating: 5,
    date: "December 2024",
    location: "Girls Satellite PG",
    text: "The management team is super responsive on WhatsApp. Any maintenance issue I raised was sorted within hours. Meals are consistent — roti, dal, sabzi, and they rotate the menu so it doesn't feel repetitive.",
  },
  {
    id: "r5",
    name: "Darshan Trivedi",
    initials: "DT",
    rating: 4,
    date: "November 2024",
    location: "Gurukul Road PG",
    text: "Good value for money at Gurukul. Double-sharing room is well sized. Small complaint was that hot water takes a minute to arrive, but otherwise no issues at all. Would recommend to friends.",
  },
  {
    id: "r6",
    name: "Nidhi Joshi",
    initials: "NJ",
    rating: 5,
    date: "October 2024",
    location: "Ansh Girls PG, Navrangpura",
    text: "Moving away from home is scary but Rentastic made it seamless. The common area is a great place to study or just unwind. I love how everything — rent, meals, Wi-Fi — is included in one amount. No surprise bills.",
  },
];

export const aggregateRating = {
  score: 4.8,
  count: 200,
};
