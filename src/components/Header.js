import { Link } from "react-router-dom";

function Header(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    padding: "8px",
    width: "100%",
    margin: "auto",
  };

  return (
    <header className="header">
      <h1>My Portfolio Page</h1>
      <nav className = "nav" style={navStyle}>
        <Link to="/">
          <div>PROJECTS</div>
        </Link>
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;