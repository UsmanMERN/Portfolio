import {
  RiHome3Line,
  RiUserLine,
  RiCodeSSlashLine,
  RiBriefcaseLine,
  RiFolderLine,
  RiContactsLine,
} from "react-icons/ri";

const headerData = [
  {
    link: "home",
    icon: <RiHome3Line className="icon" />,
    text: "Home",
  },
  {
    link: "about",
    icon: <RiUserLine className="icon" />,
    text: "About",
  },
  {
    link: "skills",
    icon: <RiCodeSSlashLine className="icon" />,
    text: "Skills",
  },
  {
    link: "services",
    icon: <RiBriefcaseLine className="icon" />,
    text: "Services",
  },
  {
    link: "portfolio",
    icon: <RiFolderLine className="icon" />,
    text: "Portfolio",
  },
  {
    link: "contact",
    icon: <RiContactsLine className="icon" />,
    text: "Contact",
  },
];

export default headerData;
