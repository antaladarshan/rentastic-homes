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

const GALLERY = [
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZKk6PKXFvq9vAxl4k3od7RM85tBG_hjh-Aya87inic3AH789jmquHtRgvwpFUSwDZXproavwVVelh_QqczgBATyOhrRqGIswPffMwW0yFjwHGRx7Spfhp-uPKNcm0m_KvEFMWi9y7dm8Qo8Nv5QDE8frDUrQLygcJeCqNH1VfONXzS1GxFuog1BAxp80182lERkxpH5JHo25Nxea-3T2U1fghGQHvHd-GMzmw0MJRohf39HZ603RfFRihyXXN9KIkI5bA4XGvtW-k", alt: "Premium bedroom" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMfLZ75EVdTYWgPSIrXQk7abrLJfieO5RdKn7Nb1KFQ1vvduwYYh0_uQSFMua3nUYt2wq6hCJXBkwThCu-qtowi2nV-CVIORXmBWMoJk_hXfAWzyoSywwafczu_HEBe0gZUguUxAOM_btJ7-ggvpV_v-_H13XdeEmP-hMwx354O2XC7qNQDXBnFEqHr5PVhTjTYFG9s-mF2Uq_MW4rUltB4OhzZe469fPJa1Xs4-4fbty8OTAlzZQFNnwrUrdr0kv21C4ClfxQKN4y", alt: "Co-living lounge" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIdlLjcTKLHNWLGq_ibel4c9cVhFdrOuIGTpGu8mBnYm_VsusZL1WktNE08UtktIT9X1nob9izQExvox2TjMij8FldTCDxBbCmm3q_k5KvCqEgCKbWfJFmJjbp55eexaWkfcap82oyNrgz9ryVXe3eLs7DHZDZqW3nZoE4M09JElNem2GnGVlnY6svthLq-aW-aeFD_bjyy8nmypcX6Hq7Hy4NaatZzmGRf_mHcO1ClUqYC7TJp0sFy1_fYobCwk0WWyuoUNRaPZ6h", alt: "Modern kitchen" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJB7lkDie9YUQPn95VrDEbxHF2K-Oc2J6-57Szr_oSL8CXPbH3hOM0S3wWuyDzosPOpvw5GOT4WhAJjLJzOGMWqp5v7QTJ71UsG1IH5AX2248pI0gr-zK8EiQoWqb039KxbPAqQaSfY3XvmHFhjR_AFf47vC8-T3C80hDIcJeBZCFmS8sI18id2FqscNdkKFPmWYzS4ZnvPioVJ0FWeawLPcupEaBl6oSO5L6TaIT3YnCy7YGzWnzOX1-BWgvJ9rtj0KYdO8fMOVtP", alt: "Study area" },
  { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXxralYpZrElnWEe11jnS6Z9cDmt0ZWaLQPSlG0JMBZWxnjkIPDFzNp3705TMVfjtzWMIozO9j7miQv7WaoMsO4G6Av6--uBqV78ibsYas1dVxi1YBY1zXXr_OYH9nAycaD_t3zSc62D5lFePm-X_KSYFX8nyUJabNj2ixHGrqvLY9Z8wsNyL8tVUEsdsgkEsVnPdf3IDQuYiGpe2VmFIbBzoh-KJf4QolgjO-fXrKltL3kEF-g9FTnKeGKQeUa28yeIQr5Oo7bY8V", alt: "Building exterior" },
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
    sharingTypes:   ["Single Sharing", "Double Sharing", "Triple Sharing"],
    gallery:        GALLERY,
    trustStats:     TRUST_STATS,
    gender:         "girls",
    about: [
      "Welcome to Ansh Rentastic Girls PG — where premium living meets the warmth of a true home. Designed exclusively for female students and young professionals, our residency offers a sanctuary of safety, comfort, and community.",
      "Experience seamless living with fully furnished rooms, high-speed connectivity, and dedicated study zones. Our commitment extends beyond amenities — we provide a secure, supportive environment where you can thrive academically and personally.",
    ],
    rooms: [
      { id: "single", name: "Single Sharing Room", description: "A private sanctuary designed for comfort, focus, and ultimate peace of mind.", price: 18000, remaining: 3, imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSyfHtGDtj_XuvboFmgs3miT3B-f9jdETHZ-WP37ZlMzW1t-HxYNokh2uBjrL07dmILxT6SU6yydQbGlYxQB0-UyB4O4CDtrwm9npcDGoqKueY-EMDPKwHoKHaI7ssK_qvKTmAZUPgUaYm0DgCMUnKp2LeUSO5dUbDlP3cR9aDCrIeRsZitj4DUe7XU_EYNDzVEcAtfvI7KsajpdxGNj9ybrTtMuRDXSm_7Jtsa1r8f-S7PcC3S34RcPT_9zYE3wRlZazlRyGj-kxH", imageAlt: "Single sharing room" },
      { id: "double", name: "Double Sharing Room", description: "The perfect balance of social connection and personal space.", price: 14500, imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvODB4f6Xni9vvEUWv-294yMYwYgJ8BaIncdt3poilfM4L259951jYyTfqtb7aoY8VnF-pbTqeAh_cP5e-tjXlW4B6EINwl7KrT6i57ILCdFSeNk4fznQ_vAvCbzXoWck6UyAM2KjlWHL9VQ9F3ELMi7JWI6WNk2sgC_k868PhZZDQhVXBvA22SVIuC1mJb8BzmzhRYiHIqZEdz58GCecrVtXVjuFpur-xYzBqIyKWQuW5ZsoxXfYzWuAAQRn-L750D-5EhVj0Kd8k", imageAlt: "Double sharing room" },
    ],
    roomAmenities:     ROOM_AMENITIES,
    propertyAmenities: PROPERTY_AMENITIES,
    policies:          POLICIES,
    whatsappNumber:    "918282823372",
  },
  {
    slug:           "rentastic-girls-satellite",
    name:           "Rentastic Girls Satellite",
    address:        "Satellite, Ahmedabad, Gujarat",
    sharingTypes:   ["Single Sharing", "Double Sharing"],
    gallery:        GALLERY,
    trustStats:     TRUST_STATS,
    gender:         "girls",
    about: [
      "Rentastic Girls Satellite is our premium Satellite-area residence, purpose-built for female students and working professionals seeking a safe, stylish, and fully managed living experience.",
      "With thoughtfully designed rooms, communal study zones, and 24/7 security, you'll have everything you need to focus on what matters most.",
    ],
    rooms: [
      { id: "single", name: "Single Sharing Room", description: "Your own private space — fully furnished with everything you need.", price: 17000, remaining: 2, imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSyfHtGDtj_XuvboFmgs3miT3B-f9jdETHZ-WP37ZlMzW1t-HxYNokh2uBjrL07dmILxT6SU6yydQbGlYxQB0-UyB4O4CDtrwm9npcDGoqKueY-EMDPKwHoKHaI7ssK_qvKTmAZUPgUaYm0DgCMUnKp2LeUSO5dUbDlP3cR9aDCrIeRsZitj4DUe7XU_EYNDzVEcAtfvI7KsajpdxGNj9ybrTtMuRDXSm_7Jtsa1r8f-S7PcC3S34RcPT_9zYE3wRlZazlRyGj-kxH", imageAlt: "Single room at Satellite" },
      { id: "double", name: "Double Sharing Room", description: "Spacious twin-sharing room with individual study areas and ample storage.", price: 13500, imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvODB4f6Xni9vvEUWv-294yMYwYgJ8BaIncdt3poilfM4L259951jYyTfqtb7aoY8VnF-pbTqeAh_cP5e-tjXlW4B6EINwl7KrT6i57ILCdFSeNk4fznQ_vAvCbzXoWck6UyAM2KjlWHL9VQ9F3ELMi7JWI6WNk2sgC_k868PhZZDQhVXBvA22SVIuC1mJb8BzmzhRYiHIqZEdz58GCecrVtXVjuFpur-xYzBqIyKWQuW5ZsoxXfYzWuAAQRn-L750D-5EhVj0Kd8k", imageAlt: "Double sharing room at Satellite" },
    ],
    roomAmenities:     ROOM_AMENITIES,
    propertyAmenities: PROPERTY_AMENITIES,
    policies:          POLICIES,
    whatsappNumber:    "918511671066",
  },
  {
    slug:           "gurukul-road",
    name:           "Rentastic Homes Gurukul Road",
    address:        "Gurukul, Ahmedabad, Gujarat",
    sharingTypes:   ["Single Sharing", "Double Sharing", "Triple Sharing"],
    gallery:        GALLERY,
    trustStats:     TRUST_STATS,
    gender:         "boys",
    about: [
      "Rentastic Homes Gurukul Road is our premium co-living residence in one of Ahmedabad's most vibrant educational corridors. Purpose-built for male students and working professionals who want a managed, comfortable, and connected lifestyle.",
      "With spacious rooms, a dedicated study zone, 24/7 security, and nutritious daily meals — everything is in place so you can check in and focus on what matters.",
    ],
    rooms: [
      { id: "single", name: "Single Sharing Room", description: "Maximum privacy, fully furnished — your own sanctuary.", price: 17000, remaining: 2, imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSyfHtGDtj_XuvboFmgs3miT3B-f9jdETHZ-WP37ZlMzW1t-HxYNokh2uBjrL07dmILxT6SU6yydQbGlYxQB0-UyB4O4CDtrwm9npcDGoqKueY-EMDPKwHoKHaI7ssK_qvKTmAZUPgUaYm0DgCMUnKp2LeUSO5dUbDlP3cR9aDCrIeRsZitj4DUe7XU_EYNDzVEcAtfvI7KsajpdxGNj9ybrTtMuRDXSm_7Jtsa1r8f-S7PcC3S34RcPT_9zYE3wRlZazlRyGj-kxH", imageAlt: "Single sharing room" },
      { id: "double", name: "Double Sharing Room", description: "Great value, great company — designed for productivity.", price: 13500, imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvODB4f6Xni9vvEUWv-294yMYwYgJ8BaIncdt3poilfM4L259951jYyTfqtb7aoY8VnF-pbTqeAh_cP5e-tjXlW4B6EINwl7KrT6i57ILCdFSeNk4fznQ_vAvCbzXoWck6UyAM2KjlWHL9VQ9F3ELMi7JWI6WNk2sgC_k868PhZZDQhVXBvA22SVIuC1mJb8BzmzhRYiHIqZEdz58GCecrVtXVjuFpur-xYzBqIyKWQuW5ZsoxXfYzWuAAQRn-L750D-5EhVj0Kd8k", imageAlt: "Double sharing room" },
      { id: "triple", name: "Triple Sharing Room", description: "Affordable with all amenities — ideal for budget-conscious students.", price: 11000, imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZKk6PKXFvq9vAxl4k3od7RM85tBG_hjh-Aya87inic3AH789jmquHtRgvwpFUSwDZXproavwVVelh_QqczgBATyOhrRqGIswPffMwW0yFjwHGRx7Spfhp-uPKNcm0m_KvEFMWi9y7dm8Qo8Nv5QDE8frDUrQLygcJeCqNH1VfONXzS1GxFuog1BAxp80182lERkxpH5JHo25Nxea-3T2U1fghGQHvHd-GMzmw0MJRohf39HZ603RfFRihyXXN9KIkI5bA4XGvtW-k", imageAlt: "Triple sharing room" },
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
    sharingTypes:   ["Single Sharing", "Double Sharing", "Triple Sharing"],
    gallery:        GALLERY,
    trustStats:     TRUST_STATS,
    gender:         "boys",
    about: [
      "Rentastic Ansh Boys PG is built for male students and young professionals who want a focused, comfortable, and well-managed living environment. Fully furnished, always maintained.",
      "From dedicated study zones to a fully-equipped gym and nutritious daily meals — everything is designed so you can check in and leave your worries behind.",
    ],
    rooms: [
      { id: "single", name: "Single Sharing Room", description: "Maximum privacy for maximum focus. Your own fully furnished room.", price: 16000, remaining: 2, imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSyfHtGDtj_XuvboFmgs3miT3B-f9jdETHZ-WP37ZlMzW1t-HxYNokh2uBjrL07dmILxT6SU6yydQbGlYxQB0-UyB4O4CDtrwm9npcDGoqKueY-EMDPKwHoKHaI7ssK_qvKTmAZUPgUaYm0DgCMUnKp2LeUSO5dUbDlP3cR9aDCrIeRsZitj4DUe7XU_EYNDzVEcAtfvI7KsajpdxGNj9ybrTtMuRDXSm_7Jtsa1r8f-S7PcC3S34RcPT_9zYE3wRlZazlRyGj-kxH", imageAlt: "Single sharing room" },
      { id: "double", name: "Double Sharing Room", description: "Great value, great company. Designed for productivity and community.", price: 12500, imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvODB4f6Xni9vvEUWv-294yMYwYgJ8BaIncdt3poilfM4L259951jYyTfqtb7aoY8VnF-pbTqeAh_cP5e-tjXlW4B6EINwl7KrT6i57ILCdFSeNk4fznQ_vAvCbzXoWck6UyAM2KjlWHL9VQ9F3ELMi7JWI6WNk2sgC_k868PhZZDQhVXBvA22SVIuC1mJb8BzmzhRYiHIqZEdz58GCecrVtXVjuFpur-xYzBqIyKWQuW5ZsoxXfYzWuAAQRn-L750D-5EhVj0Kd8k", imageAlt: "Double sharing room" },
      { id: "triple", name: "Triple Sharing Room", description: "Affordable option with all amenities — ideal for budget-conscious students.", price: 10000, imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZKk6PKXFvq9vAxl4k3od7RM85tBG_hjh-Aya87inic3AH789jmquHtRgvwpFUSwDZXproavwVVelh_QqczgBATyOhrRqGIswPffMwW0yFjwHGRx7Spfhp-uPKNcm0m_KvEFMWi9y7dm8Qo8Nv5QDE8frDUrQLygcJeCqNH1VfONXzS1GxFuog1BAxp80182lERkxpH5JHo25Nxea-3T2U1fghGQHvHd-GMzmw0MJRohf39HZ603RfFRihyXXN9KIkI5bA4XGvtW-k", imageAlt: "Triple sharing room" },
    ],
    roomAmenities:     ROOM_AMENITIES,
    propertyAmenities: PROPERTY_AMENITIES,
    policies:          POLICIES,
    whatsappNumber:    "918282823372",
  },
];
