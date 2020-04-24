import React from 'react';

import img_profile from '../../images/DeilsonMartins-Perfil.jpg';

import {skills, skills_web, skills_ia} from './skills';

import {Wrapper, Skills} from './styles';

export default function AboutPage() {
    return (
        <Wrapper>
            <h2 >SOBRE MIM</h2>
            <img src={img_profile} alt="Minha foto"/>
            <p ><i>Deilson Martins, 22 anos. <br/> Louco por ciência, apaixonado pelo universo!</i></p>
            
            <p>
                <p>
                    Olá, meu nome é Deilson Martins dos Santos, moro em Angra dos Reis,
                    e atualmente sou estudante do último ano de Engenharia Elétrica no CEFET-RJ,
                    além de ser apaixonado por ciência e tecnologia. 
                </p>
        
                <p>
                    Tenho me dedicado em estudar desenvolvimento de software, Deep Learning e Date Science.
                </p>
                
                <p>
                    No meu tempo livre, amo ler sobre desenvolvimento pessoal, assistir documentários,
                    e admirar a natureza.
                </p>
            </p>
        
            <Skills>
                <h3 >Habilidades Gerais</h3>
                {skills.map((skill, i) => (
                    <li key={i}>
                        <a>{skill}</a>
                    </li>
                ))}
                <h3 >Habilidades Web</h3>
                {skills_web.map((skill, i) => (
                    <li key={i}>
                        <a>{skill}</a>
                    </li>
                ))}
                
                <h3 class="h2">Habilidades IA</h3>
                {skills_ia.map((skill, i) => (
                    <li key={i}>
                        <a>{skill}</a>
                    </li>
                ))}
            </Skills>
        </Wrapper>

    )
}

