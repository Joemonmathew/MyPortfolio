// // components/Work.js

// import React from 'react';

// const workExperiences = [
//   {
//     company: 'Company A',
//     jobTitle: 'Job Title 1',
//     dates: 'January 2019 - December 2020',
//     description: 'Description of the work experience at Company A.',
//   },
//   {
//     company: 'Company B',
//     jobTitle: 'Job Title 2',
//     dates: 'March 2021 - Present',
//     description: 'Description of the work experience at Company B.',
//   },
//   // Add more work experiences as needed
// ];

// function Work() {
//   return (
//     <section>
//       <h2>Work</h2>
//       <div className="work-experiences bg-white pl-4">
//         {workExperiences.map((experience, index) => (
//           <div key={index} className="work-experience-card">
//             <h3>{experience.company}</h3>
//             <p>{experience.jobTitle}</p>
//             <p>{experience.dates}</p>
//             <p>{experience.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Work;


// Work.js

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
  // Add more work experiences as needed
];

function Work() {
  return (
    <section className="flex flex-col m-10  items-center" id='1'>
      <h2>Work</h2>
      <div className="space-y-4 max-w-[800px]">
        {workExperiences.map((experience, index) => (
          <div
            key={index}
            className="bg-[#081f2e] p-4 shadow rounded "
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
