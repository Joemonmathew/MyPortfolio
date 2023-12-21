import React from 'react';

const MainPage = () => {
  return (
    <section className='flex flex-col m-0 h-screen justify-center items-center bg-cover bg-center' style={{ backgroundImage: 'url("/images/black_bg.jpg")' }} >
      <div className='max-w-[1000px] flex flex-col items-center space-y-4 lg:pl-[320px]'>
        <h1>Hello, </h1>
        <h1>I'm Joemon Mathew</h1>
        <h3 className='text-center'>Frontend Developer </h3>
        <a
          href='/docs/Joemon_mathew.pdf'  // Replace with the actual path to your CV file
          download='Joemon_mathew.pdf'  // Set the desired name for the downloaded file
          className='bg-primary-blue text-white px-4 py-2 rounded-md mt-4 mx-auto my-auto hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300'
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default MainPage;
