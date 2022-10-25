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

            <div className="col-5 m-3 p-3 card-background rounded">

              <Card className="bg-dark text-white h-100 bg-image hover-overlay">
                 
                <Card.Img className="w-100" src={project.image} alt="game" />
                <div className="mask">
                  <Card.Title>{project.name}</Card.Title>
                  <Card.Text>
                    Describe game here.
                  </Card.Text>
                </div>
               
                <Card.Footer>

              <div className="btn-group w-100 link-buttons" role="group">
                <Button className="button w-25" as="a" href={project.git} variant="primary">
                  GitHub
                </Button>

                <Button className="button w-25" as="a" href={project.live} variant="success">
                  Live Site
                </Button>
              </div>
                </Card.Footer>
              </Card>

            </div>
          )
        }) : <h1>Loading...</h1>}


      </div>
    </div>

  )
}
export default Projects;