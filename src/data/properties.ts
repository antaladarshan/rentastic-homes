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
  coords?:            { lat: number; lng: number };
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
  { src: "/properties/satellite/room-05.jpg",        alt: "Shared room with study desk, Satellite Girls PG" },
  { src: "/properties/satellite/room-04.jpg",        alt: "Shared room with foldable study table, Satellite Girls PG" },
  { src: "/properties/satellite/balcony-01.jpg",     alt: "Balcony with open city view, Satellite Girls PG" },
  { src: "/properties/satellite/common-01.jpg",      alt: "Common living area with TV and treadmill, Satellite Girls PG" },
  { src: "/properties/satellite/room-03.jpg",        alt: "Room with wardrobe and AC, Satellite Girls PG" },
  { src: "/properties/satellite/room-06.jpg",        alt: "Room with storage cabinet, Satellite Girls PG" },
  { src: "/properties/satellite/room-02.jpg",        alt: "AC room, Satellite Girls PG" },
  { src: "/properties/satellite/room-01.jpg",        alt: "Shared room with single beds, Satellite Girls PG" },
  { src: "/properties/satellite/kitchen-01.jpg",     alt: "Shared kitchen, Satellite Girls PG" },
  { src: "/properties/satellite/bedding-detail.jpg", alt: "Rentastic Homes branded bedding, Satellite Girls PG" },
  { src: "/properties/satellite/security-01.jpg",    alt: "Entry door with electronic security lock, Satellite Girls PG" },
  { src: "/properties/satellite/washroom-01.jpg",    alt: "Attached washroom, Satellite Girls PG" },
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
  { src: "/properties/ansh-boys/entrance-branded.jpg", alt: "Rentastic Homes branded entrance, Ansh Boys PG" },
  { src: "/properties/ansh-boys/room-wide-01.jpg",     alt: "Spacious shared room with wardrobe and ceiling fan, Ansh Boys PG" },
  { src: "/properties/ansh-boys/lifestyle-study.jpg",  alt: "Resident studying on laptop in his room, Ansh Boys PG" },
  { src: "/properties/ansh-boys/room-ac-01.jpg",       alt: "Bright AC room with two beds, Ansh Boys PG" },
  { src: "/properties/ansh-boys/room-ac-02.jpg",       alt: "AC room with study-friendly layout, Ansh Boys PG" },
  { src: "/properties/ansh-boys/room-wardrobe.jpg",    alt: "Room with large wardrobe and storage, Ansh Boys PG" },
  { src: "/properties/ansh-boys/room-wide-02.jpg",     alt: "Spacious room with wardrobe and wall clock, Ansh Boys PG" },
  { src: "/properties/ansh-boys/room-ac-03.jpg",       alt: "AC room with wardrobe, Ansh Boys PG" },
  { src: "/properties/ansh-boys/room-single.jpg",      alt: "Single sharing room with wardrobe and mirror, Ansh Boys PG" },
  { src: "/properties/ansh-boys/room-window.jpg",      alt: "Bright room with large window, Ansh Boys PG" },
  { src: "/properties/ansh-boys/bedding-detail.jpg",   alt: "Rentastic Homes branded bedding, Ansh Boys PG" },
  { src: "/properties/ansh-boys/water-dispenser.jpg",  alt: "Drinking water dispenser, Ansh Boys PG" },
  { src: "/properties/ansh-boys/washroom-01.jpg",      alt: "Attached washroom with hot water geyser, Ansh Boys PG" },
  { src: "/properties/ansh-boys/laundry.jpg",          alt: "In-house laundry, Ansh Boys PG" },
];

const GALLERY_GURUKUL = [
  { src: "/properties/gurukul-road/common-lounge-01.jpg", alt: "Common lounge with sofa and hangout zone, Gurukul Road PG" },
  { src: "/properties/gurukul-road/room-ac-01.jpg",       alt: "Bright AC room with wardrobe, Gurukul Road PG" },
  { src: "/properties/gurukul-road/study-desk.jpg",       alt: "Resident studying at the in-room study desk, Gurukul Road PG" },
  { src: "/properties/gurukul-road/meals-kitchen.jpg",    alt: "Fresh meals prepared in-house, Gurukul Road PG" },
  { src: "/properties/gurukul-road/recreation-01.jpg",    alt: "Recreation zone with carrom, chess and bean bags, Gurukul Road PG" },
  { src: "/properties/gurukul-road/room-02.jpg",          alt: "Shared room with motivational decor, Gurukul Road PG" },
  { src: "/properties/gurukul-road/common-lounge-02.jpg", alt: "Lounge seating area, Gurukul Road PG" },
  { src: "/properties/gurukul-road/room-triple.jpg",      alt: "Triple sharing room, Gurukul Road PG" },
  { src: "/properties/gurukul-road/dining-01.jpg",        alt: "Dining area with meal menu, Gurukul Road PG" },
  { src: "/properties/gurukul-road/room-art.jpg",         alt: "Room with framed art and wardrobe, Gurukul Road PG" },
  { src: "/properties/gurukul-road/room-single.jpg",      alt: "Single sharing room, Gurukul Road PG" },
  { src: "/properties/gurukul-road/bedding-detail.jpg",   alt: "Rentastic Homes branded bedding, Gurukul Road PG" },
  { src: "/properties/gurukul-road/washroom-01.jpg",      alt: "Clean attached washroom, Gurukul Road PG" },
  { src: "/properties/gurukul-road/security-cctv.jpg",    alt: "CCTV surveillance and AC, Gurukul Road PG" },
  { src: "/properties/gurukul-road/exterior-sign.jpg",    alt: "Rentastic Homes Gurukul Road building entrance" },
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
    coords:         { lat: 23.0358, lng: 72.5649 },
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
    coords:         { lat: 23.0219, lng: 72.5068 },
    sharingTypes:   ["3 Sharing", "4 Sharing", "4 Sharing (Balcony)"],
    gallery:        GALLERY_SATELLITE,
    trustStats:     TRUST_STATS,
    gender:         "girls",
    about: [
      "Rentastic Girls Satellite is our premium Satellite-area residence, purpose-built for female students and working professionals seeking a safe, stylish, and fully managed living experience.",
      "With thoughtfully designed rooms, communal study zones, and 24/7 security, you'll have everything you need to focus on what matters most.",
    ],
    rooms: [
      { id: "3-sharing", name: "3 Sharing Room", description: "Comfortable shared room with AC, ample storage, and a cosy feel.", price: 12500, remaining: 2, imageSrc: "/properties/satellite/room-05.jpg", imageAlt: "3-sharing room, Satellite Girls PG" },
      { id: "4-sharing", name: "4 Sharing Room", description: "Great value — spacious room with AC, wardrobe for each resident.", price: 11000, imageSrc: "/properties/satellite/room-01.jpg", imageAlt: "4-sharing room, Satellite Girls PG" },
      { id: "4-sharing-balcony", name: "4 Sharing Room (Balcony)", description: "Same as 4 sharing but with an exclusive balcony and a stunning city view.", price: 11500, imageSrc: "/properties/satellite/balcony-01.jpg", imageAlt: "4-sharing room with balcony and city view, Satellite Girls PG" },
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
    coords:         { lat: 23.0558, lng: 72.5413 },
    sharingTypes:   ["Single Sharing", "Double Sharing", "Triple Sharing"],
    gallery:        GALLERY_GURUKUL,
    trustStats:     TRUST_STATS,
    gender:         "boys",
    about: [
      "Rentastic Homes Gurukul Road is our premium co-living residence in one of Ahmedabad's most vibrant educational corridors. Purpose-built for male students and working professionals who want a managed, comfortable, and connected lifestyle.",
      "With spacious rooms, a dedicated study zone, 24/7 security, and nutritious daily meals — everything is in place so you can check in and focus on what matters.",
    ],
    rooms: [
      { id: "single", name: "Single Sharing Room", description: "Maximum privacy, fully furnished — your own sanctuary.", price: 17000, remaining: 2, imageSrc: "/properties/gurukul-road/room-single.jpg", imageAlt: "Single sharing room, Gurukul Road PG" },
      { id: "double", name: "Double Sharing Room", description: "Great value, great company — designed for productivity.", price: 13500, imageSrc: "/properties/gurukul-road/room-ac-01.jpg", imageAlt: "Double sharing room, Gurukul Road PG" },
      { id: "triple", name: "Triple Sharing Room", description: "Affordable with all amenities — ideal for budget-conscious students.", price: 11000, imageSrc: "/properties/gurukul-road/room-triple.jpg", imageAlt: "Triple sharing room, Gurukul Road PG" },
    ],
    roomAmenities:     ROOM_AMENITIES,
    propertyAmenities: PROPERTY_AMENITIES,
    policies:          POLICIES,
    whatsappNumber:    "917070848475",
  },
  {
    slug:           "rentastic-ansh-boys-pg",
    name:           "Rentastic Ansh Boys PG",
    address:        "Navrangpura, Ahmedabad, Gujarat",
    mapLink:        "https://maps.app.goo.gl/pM9WXJDypDDUZHx58",
    coords:         { lat: 23.0358, lng: 72.5649 },
    sharingTypes:   ["Single Sharing", "Double Sharing", "Triple Sharing"],
    gallery:        GALLERY_ANSH_BOYS,
    trustStats:     TRUST_STATS,
    gender:         "boys",
    about: [
      "Rentastic Ansh Boys PG is built for male students and young professionals who want a focused, comfortable, and well-managed living environment. Fully furnished, always maintained.",
      "From dedicated study zones to a fully-equipped gym and nutritious daily meals — everything is designed so you can check in and leave your worries behind.",
    ],
    rooms: [
      { id: "single", name: "Single Sharing Room", description: "Maximum privacy for maximum focus. Your own fully furnished room.", price: 16000, remaining: 2, imageSrc: "/properties/ansh-boys/room-single.jpg", imageAlt: "Single sharing room, Ansh Boys PG" },
      { id: "double", name: "Double Sharing Room", description: "Great value, great company. Designed for productivity and community.", price: 12500, imageSrc: "/properties/ansh-boys/room-ac-01.jpg", imageAlt: "Double sharing room, Ansh Boys PG" },
      { id: "triple", name: "Triple Sharing Room", description: "Affordable option with all amenities — ideal for budget-conscious students.", price: 10000, imageSrc: "/properties/ansh-boys/room-triple.jpg", imageAlt: "Triple sharing room, Ansh Boys PG" },
    ],
    roomAmenities:     ROOM_AMENITIES,
    propertyAmenities: PROPERTY_AMENITIES,
    policies:          POLICIES,
    whatsappNumber:    "918282823372",
  },
];
