import { useState, useEffect } from "react";
import {Button, Alert, Breadcrumb} from 'react-bootstrap'

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
  useEffect(() => {getProjectsData()});

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return projects.map((project) => (
      <div>
        <h1>{project.name}</h1>
        <img src={project.image} alt="game" />
        <div className="link-buttons">
        <Button className="button m-2" size="sm" as="a" href={project.git} variant="primary">
          GitHub
        </Button>
     
        <Button className="button" size="sm" as="a" href={project.live} variant="success">
          Live Site
        </Button>
        </div>
    
      </div>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;