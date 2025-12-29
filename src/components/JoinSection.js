import { useState } from 'react';

const JoinSection = () => {
  const [email, setEmail] = useState('');
  const [zip, setZip] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for joining our movement!');
    setEmail('');
    setZip('');
  };

  return (
    <section className="join-section-2">
      <h2>Join Our Movement</h2>
      <form className="join-form" onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email *" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <input 
          type="text" 
          placeholder="Zip *" 
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          required 
        />
        <button type="submit" className="btn btn-submit">Submit</button>
      </form>
    </section>
  );
};

export default JoinSection;