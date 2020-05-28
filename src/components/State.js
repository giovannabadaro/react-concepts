import React, {useState, useEffect} from 'react'
import api from '../services/api'

export default function State() {
  const [projects, setProjects] = useState([]);
 /*  let count = 1;  */

  async function  handdleButton() {
    /* setProjects([...projects, `${count}`]); */

    const response = await api.post('projects', {
      title: "gigi",
      owner: "gigigi"
    })

    const project = response.data;

    setProjects([...projects, project]);
  }

  useEffect(()=>{
    api.get('projects').then(response => {
      setProjects(response.data)
    })
  },[])

  return(
    <>
      <ul>
        {projects.map(project => 
          <li key={project.id}>
            {project.title}
          </li>)}
      </ul>
      <button onClick={handdleButton}>Adicionar</button>
    </>
  );
}