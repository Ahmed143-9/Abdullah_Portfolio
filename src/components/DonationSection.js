const DonationSection = () => {
  return (
    <section id="donation" className="donation-section" style={{
      padding: '80px 40px',
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center',
      backgroundColor: '#f8f8f8'
    }}>
      <div className="donation-content" style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '36px',
          color: '#C41E3A',
          marginBottom: '30px',
          fontWeight: '700'
        }}>DONATION</h2>
        
        <div className="donation-info" style={{
          textAlign: 'left',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <div className="donation-detail" style={{
            marginBottom: '20px',
            padding: '15px',
            backgroundColor: '#f9f9f9',
            borderRadius: '4px'
          }}>
            <strong style={{color: '#333', display: 'block', marginBottom: '5px'}}>Account Number:</strong>
            <span style={{color: '#666'}}>1056897430001</span>
          </div>
          
          <div className="donation-detail" style={{
            marginBottom: '20px',
            padding: '15px',
            backgroundColor: '#f9f9f9',
            borderRadius: '4px'
          }}>
            <strong style={{color: '#333', display: 'block', marginBottom: '5px'}}>Account Name:</strong>
            <span style={{color: '#666'}}>KAZI ABDULLAH AL MAMUN</span>
          </div>
          
          <div className="donation-detail" style={{
            marginBottom: '20px',
            padding: '15px',
            backgroundColor: '#f9f9f9',
            borderRadius: '4px'
          }}>
            <strong style={{color: '#333', display: 'block', marginBottom: '5px'}}>Bank Name:</strong>
            <span style={{color: '#666'}}>BRAC Bank PLC</span>
          </div>
          
          <div className="donation-detail" style={{
            marginBottom: '20px',
            padding: '15px',
            backgroundColor: '#f9f9f9',
            borderRadius: '4px'
          }}>
            <strong style={{color: '#333', display: 'block', marginBottom: '5px'}}>Branch Name:</strong>
            <span style={{color: '#666'}}>MIRPUR BRANCH</span>
          </div>
          
          <div className="donation-detail" style={{
            marginBottom: '20px',
            padding: '15px',
            backgroundColor: '#f9f9f9',
            borderRadius: '4px'
          }}>
            <strong style={{color: '#333', display: 'block', marginBottom: '5px'}}>Routing Number:</strong>
            <span style={{color: '#666'}}>060262983</span>
          </div>
          
          <div className="donation-detail" style={{
            marginBottom: '20px',
            padding: '15px',
            backgroundColor: '#f9f9f9',
            borderRadius: '4px'
          }}>
            <strong style={{color: '#333', display: 'block', marginBottom: '5px'}}>SWIFT Code:</strong>
            <span style={{color: '#666'}}>BRAKBDDH</span>
          </div>
        </div>
        
        <div style={{
          marginTop: '30px',
          padding: '20px',
          backgroundColor: '#C41E3A',
          color: 'white',
          borderRadius: '4px'
        }}>
          <p style={{margin: 0, fontSize: '18px', fontWeight: '500'}}>
            Your generous donation helps support our mission and activities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;