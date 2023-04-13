import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if name is entered
    if (!name) {
      setNameError(true);
      return;
    } else {
      setNameError(false);
    }

    // Check if email is entered and valid
    if (!email) {
      setEmailError(true);
      setEmailErrorMessage('Please enter your email address');
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address');
      return;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    // Send email using a backend API or service
    console.log('Sending email...');
  };

  return (
    <section className="container mt-3">
      <h1 className="text-center fw-bold mb-3">Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className={`form-control ${nameError ? 'is-invalid' : ''}`} id="name" value={name} onChange={(event) => setName(event.target.value)} />
          {nameError && <div className="invalid-feedback">Name is required</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className={`form-control ${emailError ? 'is-invalid' : ''}`} id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          {emailError && <div className="invalid-feedback">{emailErrorMessage}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="5" value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-dark">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
