import './Card.css';
import Profile from "./Profile/Profile";
import Contact from "./Contact/Contact";
import Bio from "./Bio/Bio";
import Socials from "./Socials/Socials";

const Card = () => {
  return (
    <div className="card--container">
      <Profile />
      <Contact />
      <Bio title="Title 1" text="lorem lorem lorem lorem" />
      <Bio title="Title 2" text="lorem lorem lorem lorem" />
      <Socials />
    </div>
  )
}

export default Card;
