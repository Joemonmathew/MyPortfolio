
import React from 'react';

const workExperiences = [
  {
    company: 'Lumos-Studio(Internship)',
    jobTitle: 'Jr Frontend developer',
    dates: 'June 2023 - Present',
    description: 'Description of the work experience at Company A.and wjat klasnbdcs kdsbvjbks.a DSBBAS CHDCCBSJA BJDCBHACDABJCC BDDJCHCBWAC HJBCWHCB WHCC WHJC WHC WC ewkfnfoew jkcn  ',
  },
  {
    company: 'Personal Project',
    jobTitle: 'Tic-Tac-Toe Game',
    dates: '',
    description: 'Description of the work experience at Company B.',
  },
];

function Work() {
  return (
    <section className="flex flex-col m-10  items-center" id='1'>
      <h2 className='mb-2'>Work</h2>
      <div className="space-y-4 max-w-[1000px]">
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
