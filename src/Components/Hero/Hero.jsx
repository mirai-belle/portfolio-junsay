import "../../Global.css";
import Avatar from "../../Assets/profile.png";
import "./Hero.css";
import Pill from "../Pill/Pill";

function Hero({
  name = "Myrr Junsay",
  role = "Student Developer",
  description = "I'm a Computer Science student slash wannabee student developer who loves (loves?!) and prefers backend work but is exploring full stack development. Always learning, always building. Woah.",
  email = "mbelle.junsay@gmail.com",
  mobile = "+ 63 928 086 7008",
  linkedin = "https://linkedin.com/in/myrrheabellejunsay",
  github = "https://github.com/mirai-belle",
  resume = "https://resume.com",
}) {

  return (
    <div className="hero">
      <div className="image">
        <div className="avatar">
          <img src={Avatar} alt="Avatar" />
        </div>
        <a href={resume} target="_blank" rel="noreferrer">
        <Pill content="View Résumé" color="invert" />
        </a>
      </div>

      <div className="hero-content">
        <div className="role">
          <Pill content={role} />
        </div>
        <div className="description">
          <h1>Hi, I'm {name}</h1>
          <span>{description}</span>
        </div>
        <div className="links">
          <a target="_blank" rel="noreferrer" href={`mailto:${email}`}><Pill content={email} /></a>
          <a target="_blank" rel="noreferrer" href={`tel:${mobile}`}><Pill content={mobile} /></a>
          <a target="_blank" rel="noreferrer" href={linkedin}><Pill content="LinkedIn" /></a>
          <a target="_blank" rel="noreferrer" href={github}><Pill content="GitHub" /></a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
