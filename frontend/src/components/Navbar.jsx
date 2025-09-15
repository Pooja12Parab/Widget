import "./Navbar.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="NavName">
          <h1>Pooja Parab</h1>
        </div>

        <div className="NavInfo">
          <ul className="NavList">
            <li><FaGithub className="icon"/>Github</li>
            <li><FaLinkedin className="icon" />linked in</li>
            <li><MdContactPhone className="icon" />contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
