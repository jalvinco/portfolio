import por1 from "../assets/photos/portrait/1.jpg";
import land1 from "../assets/photos/landscape/1.jpg";
import travel1 from "../assets/photos/travel/1.jpg";
import travel2 from "../assets/photos/travel/2.jpg";

export type Photo = {
  id: number;
  title: string;
  category: "Street" | "Travel" | "Portrait" | "Landscape";
  image: string;
  location: string;
};

export const gallery: Photo[] = [
  {
    id: 1,
    title: "Street Moment",
    category: "Portrait",
    image: por1,
    location: "Manila",
  },

  {
    id: 2,
    title: "City Crossing",
    category: "Landscape",
    image: land1,
    location: "Makati",
  },

  {
    id: 3,
    title: "Urban Life",
    category: "Street",
    image: travel1,
    location: "Manila",
  },

  {
    id: 4,
    title: "Evening Streets",
    category: "Street",
    image: travel2,
    location: "Manila",
  },
];