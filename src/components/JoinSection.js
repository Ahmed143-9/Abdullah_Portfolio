import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JoinSection = () => {
  const [email, setEmail] = useState('');
  const [zip, setZip] = useState('');
  const navigate = useNavigate();

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

      {/* Get Involved Section */}
      <div style={{ 
        marginTop: '60px', 
        textAlign: 'center',
        padding: '40px 20px',
        background: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <h3 style={{ 
          color: '#121010ff', 
          marginBottom: '15px',
          fontSize: '1.8rem'
        }}>
          Get More Involved with AV TECH
        </h3>
        <p style={{ 
          color: '#121111ff', 
          marginBottom: '25px',
          fontSize: '1.1rem',
          maxWidth: '600px',
          margin: '0 auto 25px',
          lineHeight: '1.6'
        }}>
          Looking for volunteer opportunities, partnerships, career options, 
          or training programs? Connect directly with our team via WhatsApp.
        </p>
        
        <button 
          onClick={() => navigate('/get-involved')} 
          style={{
            background: 'linear-gradient(135deg, #25D366, #128C7E)',
            color: 'white',
            border: 'none',
            padding: '15px 40px',
            borderRadius: '5px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            margin: '0 auto',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(37, 211, 102, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.507 14.307l-.009.075c-2.199-1.096-2.429-1.242-2.713-.816-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.293-.506.32-.578.878-1.634.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.576-.05-.997-.05-1.368.344-1.614 1.774-1.207 3.604.174 5.55 2.714 3.552 4.16 4.206 6.8 5.114.714.227 1.365.195 1.88.121.574-.091 1.754-.721 2.004-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"/>
              <path d="M20.52 3.449C17.943.864 14.233.03 10.87 1.644 5.743 3.97 3.244 9.25 4.347 14.538c.2.968.505 1.92.91 2.827L3.65 20.576a.5.5 0 00.604.604l3.211-1.606c.906.405 1.859.71 2.827.91 5.288 1.103 10.568-1.396 12.894-6.523 1.614-3.363.78-7.073-1.805-9.65zM12 20.852a8.895 8.895 0 01-4.03-.969l-.242-.121-2.503 1.251 1.251-2.503-.121-.242A8.895 8.895 0 113.148 12c0 1.537.404 3.037 1.173 4.358.135.23.174.505.104.767l-.654 2.312 2.312-.654c.262-.07.537-.03.767.104A8.9 8.9 0 0012 20.852z"/>
            </svg>
          </span>
          Get Involved Now
        </button>
        
        <p style={{ 
          marginTop: '20px', 
          color: '#100e0eff', 
          fontSize: '0.9rem',
          fontStyle: 'italic'
        }}>
          Fill out our form and connect directly with our team on WhatsApp
        </p>
      </div>
    </section>
  );
};

export default JoinSection;