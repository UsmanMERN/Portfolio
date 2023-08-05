import eatingOut from "../assets/images/eatingOut.png";
import trendBlend from "../assets/images/trend-blend.png";
import fileLinker from "../assets/images/fileLinker.png";
import eventsLab from "../assets/images/eventsLab.png";

const buttonsData = [
  {
    id: 1,
    label: "MERN",
    filter: "mern",
  },
  {
    id: 2,
    label: "Firebase",
    filter: "firebase",
  },
  {
    id: 3,
    label: "All",
    filter: "all",
  },
];
const projectsData = [
  {
    id: 1,
    title: "trend Blend",
    description: "E-commerce website",
    type: "mern",
    image: trendBlend, // Replace with actual image URL
    livePreview: "https://trendblend.netlify.app/", // Replace with actual live preview URL
    githubLink: "https://github.com/Usman8531/ecommerce-mern",
    email: "usman@gmail.com",
    password: "Pa$$w0rd!",
  },
  {
    id: 4,
    title: "Eating Out",
    description: "Restaurant website",
    type: "firebase",
    image: eatingOut, // Replace with actual image URL
    livePreview: "https://eatingout.surge.sh/", // Replace with actual live preview URL
    githubLink: "https://github.com/Usman8531/Restaurants_With_Firebase",
    email: "Use my Now Google ",
    password: "!",
  },
  {
    id: 3,
    title: "File Linker",
    description: "Upload your document here ",
    type: "firebase",
    image: fileLinker, // Replace with actual image URL
    livePreview: "https://file-linker.vercel.app/", // Replace with actual live preview URL
    githubLink: "https://github.com/SaimManzoor49/FileLinker",
    email: "No admin role",
    password: "!",
  },
  {
    id: 2,
    title: "EventsLab",
    description: "Events Updates",
    type: "firebase",
    image: eventsLab, // Replace with actual image URL
    livePreview: "https://file-linker.vercel.app/", // Replace with actual live preview URL
    githubLink: "https://github.com/Usman8531/EventsPlanner",
    email: "usman@gmail.com",
    password: "123456",
  },
];

export { buttonsData, projectsData };
