import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
 

function Header(props) {

  return (
    <Nav>
      <h1>Eamonn Kelly</h1>
      <Nav.Item >
        <Nav.Link href="/"><h4 className="link">Projects</h4></Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link href="/about"><h4 className="link">About</h4></Nav.Link>
      </Nav.Item>
    </Nav>
  );
}


export default Header;