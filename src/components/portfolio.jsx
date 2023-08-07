import React from 'react';
import code from './assets/code.jpg';
import circuit from './assets/circuit.jpg';

const projectsData = [
    {
        title: 'Stream Machine | CSS, JavaScript, HTML',
        deployedLink: '#',
        githubLink: 'https://github.com/zwcook801/Debug_Thugz',
        image: circuit
    },
    {
        title: 'Flexcellent | Handlebars, Express JS, MySQL, Sequelize',
        deployedLink: 'https://flexcellent-fitness.herokuapp.com/',
        gitHubLink: 'https://github.com/pbodybrooks/Flexcellent-Fitness-Tracker',
        image: code
    },
]

export default function Portfolio() {
    return(
        <div className='gallery'>
            {projectsData.map((app, index) => (
                <div className='gallery-item main-container' key={index}>
                    <div className='gallery-headers'>
                        <h3 className='gallery-titles'>{app.title}</h3>
                        <div className='gallery-links'>
                            <div style={{ padding: '5px' }}>
                                <a href={app.deployedLink} target='_blank' rel='noopener noreferrer'>
                                    Deployed app
                                </a>
                            </div>

                            <div style={{ padding: '5px' }}>
                                <a href={app.gitHubLink} target='_blank' rel='noopener noreferrer'>
                                    GitHub repo
                                </a>
                            </div>

                        </div>
                    </div>
                    <img src={app.image}
                        alt={app.title}
                        className={index === 0 ? 'horiseon-image' : 'gallery-images'}
                    />
                </div>
            ))}
        </div>
    );
}