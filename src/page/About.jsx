import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Go to Home</Link>
      <br />
      <Link to="/contacts">Go to contacts</Link>
    </div>
  );
};

export default About;
