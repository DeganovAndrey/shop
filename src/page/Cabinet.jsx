import { Link } from "react-router-dom";

const Cabinet = () => {
  return (
    <div>
      <h1>Cabinet</h1>
      <Link to="/">Go to Home</Link>
      <br />
      <Link to="/contacts">Go to contacts</Link>
    </div>
  );
};

export default Cabinet;
