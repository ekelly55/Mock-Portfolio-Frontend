import { useState, useEffect } from "react";
import { Button, Alert, Card, Breadcrumb } from 'react-bootstrap'

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  const getProjectsData = async () => {

    //make api call and get response
    const response = await fetch(props.URL + "projects");

    // turn response into javascript object
    const data = await response.json();

    // set the projects state to the data
    setProjects(data);

  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => { getProjectsData() });

  // define a function that will return the JSX needed once we get the data

  return (
    
    <div className="container">
      <div className="row">

        {projects ? projects.map((project) => {
          return (
            
            <div className="col-4">

          <Card className="bg-dark text-white ">
            <Card.Img className="w-50" src={project.image} alt="game" />
            <Card.ImgOverlay>
              <Card.Title>{project.name}</Card.Title>
              <Card.Text>
                Describe game here.
              </Card.Text>
            </Card.ImgOverlay>
            <Card.Footer>

            </Card.Footer>
          </Card>
          <div className="link-buttons">
            <Button className="button m-2" size="sm" as="a" href={project.git} variant="primary">
              GitHub
            </Button>

            <Button className="button" size="sm" as="a" href={project.live} variant="success">
              Live Site
            </Button>
          </div>

        </div>
        )
      }) : <h1>Loading...</h1>}
      
      
      </div>
      </div>
      
      )
}
export default Projects;