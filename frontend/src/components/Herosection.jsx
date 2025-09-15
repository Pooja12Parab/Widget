import Hi from "../assets/hi_img.jpg";
import "../components/Herosection.css";

const HeroSection = () => {
  return (
    <div className="introduction">
      <div className="intro">
        <h2>
          Hi, I'm Pooja{" "}
          <span>
            <img src={Hi} alt="Waving Hand" style={{ width: 50, height: 50 }} />
          </span>
        </h2>

        <p>
          Hey there! I’m Pooja, a <b>MERN Stack Developer</b> who loves turning
          ideas into interactive web applications. From designing sleek front-end
          interfaces with <b>React</b> to crafting powerful back-end APIs with{" "}
          <b>Node, Express,</b> and <b>MongoDB</b> — I enjoy the entire journey
          of building projects that make an impact.
        </p>
      </div>

      <div className="intro-img">

       
      </div>
    </div>
  );
};

export default HeroSection;
