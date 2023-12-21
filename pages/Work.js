
import React from 'react';

const workExperiences = [
  {
    company: 'Muggle-Works(Internship)',
    jobTitle: 'Jr Frontend developer',
    dates: 'June 2023 - Present',
    description: 'I collaborated with a team of skilled developers on various web development projects, leveraging my expertise in HTML, CSS, and JavaScript. Throughout the software design and development process, my focus remained dedicated to understanding and fulfilling client needs. I actively contributed to implementing responsive design principles, ensuring optimal user interfaces for a seamless user experience.',
  },
  {
    company: 'Personal Project',
    jobTitle: 'Tic-Tac-Toe Game',
    dates: '',
    description: 'Tic-tac-toe is an instance of an m,n,k-game, where two players alternate taking turns on an m×n board until one of them gets k in a row. The game is developed using react',
  },
];

function Work() {
  return (
    <section className="flex flex-col m-10  items-center lg:pl-[320px]" id='1'>
      <h2 className='mb-2'>Work</h2>
      <div className="space-y-4 max-w-[1000px] ">
        {workExperiences.map((experience, index) => (
          <div
            key={index}
            className="bg-primary-blue p-4 shadow rounded "
          >
            <h3>{experience.company}</h3>
            <p>{experience.jobTitle}</p>
            <p>{experience.dates}</p>
            <p>{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work;
