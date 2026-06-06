export interface RoomData {
  id:          string;
  name:        string;
  description: string;
  price:       number;
  remaining?:  number;
  imageSrc:    string;
  imageAlt:    string;
}

export interface PolicyItem {
  title:  string;
  points: string[];
}

export interface PropertyData {
  slug:               string;
  name:               string;
  address:            string;
  mapLink?:           string;
  sharingTypes:       string[];
  gallery:            { src: string; alt: string }[];
  trustStats:         { value: string; label: string; sub: string }[];
  about:              string[];
  rooms:              RoomData[];
  roomAmenities:      string[];
  propertyAmenities:  string[];
  policies:           PolicyItem[];
  whatsappNumber:     string;
  gender:             "girls" | "boys";
}

// ── Per-property gallery arrays ──────────────────────────────────────────────

const GALLERY_SATELLITE = [
  { src: "/properties/satellite/4-sharing-01.jpg",  alt: "AC room with curtains, Satellite" },
  { src: "/properties/satellite/3-sharing-01.jpg",  alt: "3-sharing room, Satellite" },
  { src: "/properties/satellite/kitchen-01.jpg",    alt: "Kitchen area, Satellite" },
  { src: "/properties/satellite/common-01.jpg",     alt: "Common area, Satellite" },
  { src: "/properties/satellite/balcony-01.jpg",    alt: "Balcony view, Satellite" },
  { src: "/properties/satellite/3-sharing-02.jpg",  alt: "3-sharing room interior, Satellite" },
  { src: "/properties/satellite/4-sharing-02.jpg",  alt: "4-sharing room, Satellite" },
  { src: "/properties/satellite/4-sharing-03.jpg",  alt: "4-sharing room view, Satellite" },
  { src: "/properties/satellite/4-sharing-04.jpg",  alt: "4-sharing room angle, Satellite" },
  { src: "/properties/satellite/common-02.jpg",     alt: "Common area 2, Satellite" },
  { src: "/properties/satellite/common-03.jpg",     alt: "Hall area, Satellite" },
  { src: "/properties/satellite/common-04.jpg",     alt: "Dining area, Satellite" },
];

const GALLERY_ANSH_GIRLS = [
  { src: "/properties/ansh/wp-04.jpg",  alt: "Resident in her room, Ansh Girls PG" },
  { src: "/properties/ansh/vc-05.jpg",  alt: "Common area, Ansh" },
  { src: "/properties/ansh/wp-02.jpg",  alt: "Room interior, Ansh" },
  { src: "/properties/ansh/vc-07.jpg",  alt: "Study zone, Ansh" },
  { src: "/properties/ansh/wp-05.jpg",  alt: "Resident relaxing, Ansh Girls PG" },
  { src: "/properties/ansh/wp-06.jpg",  alt: "Room, Ansh" },
  { src: "/properties/ansh/vc-01.jpg",  alt: "Common area lifestyle, Ansh" },
  { src: "/properties/ansh/vc-03.jpg",  alt: "Hangout space, Ansh" },
  { src: "/properties/ansh/vc-09.jpg",  alt: "Room, Ansh" },
  { src: "/properties/ansh/vc-11.jpg",  alt: "Common zone, Ansh" },
];

const GALLERY_ANSH_BOYS = [
  { src: "/properties/ansh/vc-05.jpg",  alt: "Common area, Ansh Boys PG" },
  { src: "/properties/ansh/wp-01.jpg",  alt: "Room with residents, Ansh Boys PG" },
  { src: "/properties/ansh/vc-01.jpg",  alt: "Lifestyle, Ansh" },
  { src: "/properties/ansh/wp-03.jpg",  alt: "Room interior, Ansh" },
  { src: "/properties/ansh/wp-09.jpg",  alt: "Room, Ansh" },
  { src: "/properties/ansh/wp-07.jpg",  alt: "Room angle, Ansh" },
  { src: "/properties/ansh/vc-02.jpg",  alt: "Common space, Ansh" },
  { src: "/properties/ansh/vc-08.jpg",  alt: "Study / work zone, Ansh" },
  { src: "/properties/ansh/vc-10.jpg",  alt: "Hangout area, Ansh" },
  { src: "/properties/ansh/vc-11.jpg",  alt: "Common zone, Ansh" },
];

const GALLERY_GURUKUL = [
  { src: "/properties/gurukul/lifestyle-05.jpg", alt: "Study zone, Gurukul" },
  { src: "/properties/gurukul/room-08.jpg",      alt: "Room overview, Gurukul" },
  { src: "/properties/gurukul/lifestyle-03.jpg", alt: "Common area, Gurukul" },
  { src: "/properties/gurukul/room-10.jpg",      alt: "Room, Gurukul" },
  { src: "/properties/gurukul/lifestyle-01.jpg", alt: "Hangout zone, Gurukul" },
  { src: "/properties/gurukul/room-01.jpg",      alt: "Room interior, Gurukul" },
  { src: "/properties/gurukul/room-02.jpg",      alt: "Room, Gurukul" },
  { src: "/properties/gurukul/room-06.jpg",      alt: "Sharing room, Gurukul" },
  { src: "/properties/gurukul/room-03.jpg",      alt: "Room angle, Gurukul" },
  { src: "/properties/gurukul/lifestyle-02.jpg", alt: "Lifestyle, Gurukul" },
  { src: "/properties/gurukul/lifestyle-04.jpg", alt: "Common area 2, Gurukul" },
  { src: "/properties/gurukul/room-11.jpg",      alt: "Room, Gurukul" },
];

const TRUST_STATS = [
  { value: "❤", label: "Students Feel Home",  sub: "Trusted community" },
  { value: "4.8/5", label: "Top Rated",        sub: "Google Reviews" },
  { value: "800+",  label: "Happy Residents",  sub: "And counting" },
];

const ROOM_AMENITIES = [
  "Spacious wardrobe & storage",
  "Premium comfy mattress",
  "Individual air conditioning",
  "24/7 Hot water supply",
  "Attached modern washroom",
  "Ergonomic study table & chair",
  "High-speed Wi-Fi access",
  "Regular housekeeping",
];

const PROPERTY_AMENITIES = [
  "24/7 CCTV surveillance",
  "Biometric entry system",
  "In-house gym",
  "Nutritious daily meals (3x)",
  "Laundry service (2x/week)",
  "Hangout & common zones",
  "Power backup",
  "Dedicated parking",
];

const POLICIES: PolicyItem[] = [
  {
    title: "Cancellation Policy",
    points: [
      "A resident can reserve a bed by paying a booking amount of ₹5,000.",
      "In case of cancellation by the resident, the booking amount is non-refundable.",
      "Management reserves the right to cancel bookings in case of policy violations.",
    ],
  },
  {
    title: "Refund Policy",
    points: [
      "Security deposit is fully refundable after a standard deduction check at checkout.",
      "Refunds are processed within 15 working days after the notice period ends.",
      "Damages beyond normal wear and tear will be deducted from the security deposit.",
    ],
  },
  {
    title: "House Rules",
    points: [
      "Visitors are allowed in common areas only during designated hours.",
      "Smoking and alcohol are strictly prohibited on the premises.",
      "Residents must maintain cleanliness and respect common spaces.",
    ],
  },
];

export const propertiesData: PropertyData[] = [
  {
    slug:           "ansh-rentastic-girls-pg",
    name:           "Ansh Rentastic Girls PG",
    address:        "Navrangpura, Ahmedabad, Gujarat",
    mapLink:        "https://maps.app.goo.gl/pM9WXJDypDDUZHx58",
    sharingTypes:   ["Single Sharing", "Double Sharing"],
    gallery:        GALLERY_ANSH_GIRLS,
    trustStats:     TRUST_STATS,
    gender:         "girls",
    about: [
      "Welcome to Ansh Rentastic Girls PG — where premium living meets the warmth of a true home. Designed exclusively for female students and young professionals, our residency offers a sanctuary of safety, comfort, and community.",
      "Experience seamless living with fully furnished rooms, high-speed connectivity, and dedicated study zones. Our commitment extends beyond amenities — we provide a secure, supportive environment where you can thrive academically and personally.",
    ],
    rooms: [
      { id: "single", name: "Single Sharing Room", description: "A private sanctuary designed for comfort, focus, and ultimate peace of mind.", price: 18000, remaining: 3, imageSrc: "/properties/ansh/wp-02.jpg", imageAlt: "Single sharing room, Ansh Girls PG" },
      { id: "double", name: "Double Sharing Room", description: "The perfect balance of social connection and personal space.", price: 14500, imageSrc: "/properties/ansh/wp-06.jpg", imageAlt: "Double sharing room, Ansh Girls PG" },
    ],
    roomAmenities:     ROOM_AMENITIES,
    propertyAmenities: PROPERTY_AMENITIES,
    policies:          POLICIES,
    whatsappNumber:    "918282823372",
  },
  {
    slug:           "rentastic-girls-satellite",
    name:           "Rentastic Girls Satellite",
    address:        "4th Floor, Aishwarya Apartment, opp. Star Bazaar, Satellite, Ahmedabad, Gujarat 380015",
    mapLink:        "https://maps.app.goo.gl/Phnw5GBsrmtMAYnT8",
    sharingTypes:   ["3 Sharing", "4 Sharing", "4 Sharing (Balcony)"],
    gallery:        GALLERY_SATELLITE,
    trustStats:     TRUST_STATS,
    gender:         "girls",
    about: [
      "Rentastic Girls Satellite is our premium Satellite-area residence, purpose-built for female students and working professionals seeking a safe, stylish, and fully managed living experience.",
      "With thoughtfully designed rooms, communal study zones, and 24/7 security, you'll have everything you need to focus on what matters most.",
    ],
    rooms: [
      { id: "3-sharing", name: "3 Sharing Room", description: "Comfortable shared room with AC, ample storage, and a cosy feel.", price: 12500, remaining: 2, imageSrc: "/properties/satellite/3-sharing-01.jpg", imageAlt: "3-sharing room, Satellite" },
      { id: "4-sharing", name: "4 Sharing Room", description: "Great value — spacious room with AC, wardrobe for each resident.", price: 11000, imageSrc: "/properties/satellite/4-sharing-01.jpg", imageAlt: "4-sharing room, Satellite" },
      { id: "4-sharing-balcony", name: "4 Sharing Room (Balcony)", description: "Same as 4 sharing but with an exclusive balcony and a stunning city view.", price: 11500, imageSrc: "/properties/satellite/balcony-01.jpg", imageAlt: "4-sharing room with balcony, Satellite" },
    ],
    roomAmenities:     ROOM_AMENITIES,
    propertyAmenities: PROPERTY_AMENITIES,
    policies:          POLICIES,
    whatsappNumber:    "918511671066",
  },
  {
    slug:           "gurukul-road",
    name:           "Rentastic Homes Gurukul Road",
    address:        "2nd Floor, Pushti Heights, Subhash Chowk, opp. Navneet House, Gurukul, Ahmedabad, Gujarat 380052",
    mapLink:        "https://maps.app.goo.gl/Th3TWRFNADi1Qziv6",
    sharingTypes:   ["Single Sharing", "Double Sharing", "Triple Sharing"],
    gallery:        GALLERY_GURUKUL,
    trustStats:     TRUST_STATS,
    gender:         "boys",
    about: [
      "Rentastic Homes Gurukul Road is our premium co-living residence in one of Ahmedabad's most vibrant educational corridors. Purpose-built for male students and working professionals who want a managed, comfortable, and connected lifestyle.",
      "With spacious rooms, a dedicated study zone, 24/7 security, and nutritious daily meals — everything is in place so you can check in and focus on what matters.",
    ],
    rooms: [
      { id: "single", name: "Single Sharing Room", description: "Maximum privacy, fully furnished — your own sanctuary.", price: 17000, remaining: 2, imageSrc: "/properties/gurukul/room-01.jpg", imageAlt: "Single sharing room, Gurukul" },
      { id: "double", name: "Double Sharing Room", description: "Great value, great company — designed for productivity.", price: 13500, imageSrc: "/properties/gurukul/room-08.jpg", imageAlt: "Double sharing room, Gurukul" },
      { id: "triple", name: "Triple Sharing Room", description: "Affordable with all amenities — ideal for budget-conscious students.", price: 11000, imageSrc: "/properties/gurukul/room-06.jpg", imageAlt: "Triple sharing room, Gurukul" },
    ],
    roomAmenities:     ROOM_AMENITIES,
    propertyAmenities: PROPERTY_AMENITIES,
    policies:          POLICIES,
    whatsappNumber:    "917359678751",
  },
  {
    slug:           "rentastic-ansh-boys-pg",
    name:           "Rentastic Ansh Boys PG",
    address:        "Navrangpura, Ahmedabad, Gujarat",
    mapLink:        "https://maps.app.goo.gl/pM9WXJDypDDUZHx58",
    sharingTypes:   ["Single Sharing", "Double Sharing", "Triple Sharing"],
    gallery:        GALLERY_ANSH_BOYS,
    trustStats:     TRUST_STATS,
    gender:         "boys",
    about: [
      "Rentastic Ansh Boys PG is built for male students and young professionals who want a focused, comfortable, and well-managed living environment. Fully furnished, always maintained.",
      "From dedicated study zones to a fully-equipped gym and nutritious daily meals — everything is designed so you can check in and leave your worries behind.",
    ],
    rooms: [
      { id: "single", name: "Single Sharing Room", description: "Maximum privacy for maximum focus. Your own fully furnished room.", price: 16000, remaining: 2, imageSrc: "/properties/ansh/wp-01.jpg", imageAlt: "Single sharing room, Ansh Boys PG" },
      { id: "double", name: "Double Sharing Room", description: "Great value, great company. Designed for productivity and community.", price: 12500, imageSrc: "/properties/ansh/wp-03.jpg", imageAlt: "Double sharing room, Ansh Boys PG" },
      { id: "triple", name: "Triple Sharing Room", description: "Affordable option with all amenities — ideal for budget-conscious students.", price: 10000, imageSrc: "/properties/ansh/wp-07.jpg", imageAlt: "Triple sharing room, Ansh Boys PG" },
    ],
    roomAmenities:     ROOM_AMENITIES,
    propertyAmenities: PROPERTY_AMENITIES,
    policies:          POLICIES,
    whatsappNumber:    "918282823372",
  },
];
