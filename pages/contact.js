import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isValidEmail, setIsValidEmail] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    // Basic email validation
    const emailInput = form.current['user_email'].value;
    if (!emailInput.includes('@')) {
      setIsValidEmail(false);
      return;
    }

    setIsValidEmail(true);

    emailjs.sendForm('service_w2wmhpa', 'template_bl2koog', form.current, 'SKSPPr7ILFGvj4zeH')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          form.current.reset(); // Reset the form after successful submission
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="flex flex-col m-10 items-center">
      <h2 className='mb-2'>Contact me</h2>
      <div className="space-y-4  max-w-[1000px] bg-primary-blue rounded-md">
        <div className='flex flex-row'>
          <div className='flex-1'>
            <p className='m-9 text-3xl'>I look forward to hearing from you! Feel free to drop me a message, and I'll get back to you as soon as possible.</p>
          </div>
          <form className='flex-1 m-2' ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label htmlFor="user_name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input type="text" name="user_name" id="user_name" className="w-full bg-primary-blue p-2 border rounded-md" required />
            </div>

            <div className="mb-4">
              <label htmlFor="user_email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" name="user_email" id="user_email" className={`w-full bg-primary-blue p-2 border rounded-md ${!isValidEmail ? 'border-red-500' : ''}`} required />
              {!isValidEmail && <p className="text-red-500 text-sm mt-1">Please enter a valid email address.</p>}
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea name="message" id="message" rows="4" className="w-full bg-primary-blue p-2 border rounded-md" required></textarea>
            </div>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
