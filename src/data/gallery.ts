export type Photo = {
  id: number;
  title: string;
  category: "Street" | "Travel" | "Portrait" | "Landscape";
  image: string;
  location: string;
};

export const gallery: Photo[] = [
  // Portrait
  {
    id: 1,
    title: "Quiet Expression",
    category: "Portrait",
    image: "https://photos.jayalvin.co/assets/photos/portrait/1.jpg",
    location: "Tokyo, Japan",
  },
  {
    id: 2,
    title: "Between Moments",
    category: "Portrait",
    image: "https://photos.jayalvin.co/assets/photos/portrait/2.jpg",
    location: "Tokyo, Japan",
  },
  {
    id: 3,
    title: "A Passing Glance",
    category: "Portrait",
    image: "https://photos.jayalvin.co/assets/photos/portrait/3.jpg",
    location: "Tokyo, Japan",
  },
  {
    id: 4,
    title: "After the Rain",
    category: "Portrait",
    image: "https://photos.jayalvin.co/assets/photos/portrait/4.jpg",
    location: "Tokyo, Japan",
  },
  {
    id: 5,
    title: "Soft Light",
    category: "Portrait",
    image: "https://photos.jayalvin.co/assets/photos/portrait/5.jpg",
    location: "Tokyo, Japan",
  },

  // Landscape
  {
    id: 6,
    title: "City Horizon",
    category: "Landscape",
    image: "https://photos.jayalvin.co/assets/photos/landscape/1.jpg",
    location: "Tokyo, Japan",
  },
  {
    id: 7,
    title: "Concrete and Light",
    category: "Landscape",
    image: "https://photos.jayalvin.co/assets/photos/landscape/2.jpg",
    location: "Tokyo, Japan",
  },
  {
    id: 8,
    title: "Beyond the Streets",
    category: "Landscape",
    image: "https://photos.jayalvin.co/assets/photos/landscape/3.jpg",
    location: "Tokyo, Japan",
  },
  {
    id: 9,
    title: "Neon Reach",
    category: "Landscape",
    image: "https://photos.jayalvin.co/assets/photos/landscape/4.jpg",
    location: "Tokyo, Japan",
  },
  {
    id: 10,
    title: "Dawn Lines",
    category: "Landscape",
    image: "https://photos.jayalvin.co/assets/photos/landscape/5.jpg",
    location: "Tokyo, Japan",
  },

  // Travel
  {
    id: 11,
    title: "Wandering Tokyo",
    category: "Travel",
    image: "https://photos.jayalvin.co/assets/photos/travel/1.jpg",
    location: "Tokyo, Japan",
  },
  {
    id: 12,
    title: "Night Passage",
    category: "Travel",
    image: "https://photos.jayalvin.co/assets/photos/travel/2.jpg",
    location: "Tokyo, Japan",
  },
  {
    id: 13,
    title: "A Day in Motion",
    category: "Travel",
    image: "https://photos.jayalvin.co/assets/photos/travel/3.jpg",
    location: "Tokyo, Japan",
  },
  {
    id: 14,
    title: "Golden Hour Drift",
    category: "Travel",
    image: "https://photos.jayalvin.co/assets/photos/travel/4.jpg",
    location: "Tokyo, Japan",
  },
  {
    id: 15,
    title: "Crossroads Echo",
    category: "Travel",
    image: "https://photos.jayalvin.co/assets/photos/travel/5.jpg",
    location: "Tokyo, Japan",
  },

  // Street
  {
    id: 16,
    title: "Sidewalk Rhythm",
    category: "Street",
    image: "https://photos.jayalvin.co/assets/photos/street/1.jpg",
    location: "Tokyo, Japan",
  },
  {
    id: 17,
    title: "Lantern Walk",
    category: "Street",
    image: "https://photos.jayalvin.co/assets/photos/street/2.jpg",
    location: "Tokyo, Japan",
  },
  {
    id: 18,
    title: "Moving Through Tokyo",
    category: "Street",
    image: "https://photos.jayalvin.co/assets/photos/street/3.jpg",
    location: "Tokyo, Japan",
  },
  {
    id: 19,
    title: "Glass and Shadows",
    category: "Street",
    image: "https://photos.jayalvin.co/assets/photos/street/4.jpg",
    location: "Tokyo, Japan",
  },
  {
    id: 20,
    title: "Corner Stories",
    category: "Street",
    image: "https://photos.jayalvin.co/assets/photos/street/5.jpg",
    location: "Tokyo, Japan",
  },
];