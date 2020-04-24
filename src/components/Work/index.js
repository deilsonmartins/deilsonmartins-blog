import React from 'react';

import {Wrapper} from './styles';

import Projects from './projects';

export default function WorkPage() {

    return (
           <Wrapper>
               <ul>
                {Projects.map((project, i) => (
                    <li key={i}>
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.link}>Visualizar Projeto</a>
                    </li>
                ))}
               </ul>
           </Wrapper>
    )
}


                      