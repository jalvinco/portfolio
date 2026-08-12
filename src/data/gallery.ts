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

  // Landscape
  {
    id: 4,
    title: "City Horizon",
    category: "Landscape",
    image: "https://photos.jayalvin.co/assets/photos/landscape/1.jpg",
    location: "Tokyo, Japan",
  },
  {
    id: 5,
    title: "Concrete and Light",
    category: "Landscape",
    image: "https://photos.jayalvin.co/assets/photos/landscape/2.jpg",
    location: "Tokyo, Japan",
  },
  {
    id: 6,
    title: "Beyond the Streets",
    category: "Landscape",
    image: "https://photos.jayalvin.co/assets/photos/landscape/3.jpg",
    location: "Tokyo, Japan",
  },

  // Travel
  {
    id: 7,
    title: "Wandering Tokyo",
    category: "Travel",
    image: "https://photos.jayalvin.co/assets/photos/travel/1.jpg",
    location: "Tokyo, Japan",
  },
  {
    id: 8,
    title: "Night Passage",
    category: "Travel",
    image: "https://photos.jayalvin.co/assets/photos/travel/2.jpg",
    location: "Tokyo, Japan",
  },
  {
    id: 9,
    title: "A Day in Motion",
    category: "Travel",
    image: "https://photos.jayalvin.co/assets/photos/travel/3.jpg",
    location: "Tokyo, Japan",
  },
];