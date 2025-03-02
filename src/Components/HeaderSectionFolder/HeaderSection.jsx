import './HeaderSection.css'
import { useState } from 'react'

const HeaderSection = ({ onSearch }) => {
  const [ipAddress, setIpAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (ipAddress.trim() !== '') {
      console.log("Searching for:", ipAddress); // 🔍 Debugging log
      onSearch(ipAddress);
    } else {
      console.log("❌ No IP entered");
    }
  };

  return (
    <header className="header-section">
    
      <h6 className="title">IP Address Tracker</h6>
     
      {/* ✅ Form submission handles Enter key & Button Click */}
      <form className="search-container" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="SearchBox" 
          id="SearchBox" 
          placeholder="Search for any IP address " 
          required 
          value={ipAddress} 
          onChange={(e) => setIpAddress(e.target.value)} 
        />
        
        {/* ✅ Button now submits form correctly */}
        <button type="submit" className="search-btn">
          <img 
            src="/assets/img/iconArrow.svg" 
            alt="Arrow Icon" 
            width="50" 
            height="50"
          />
        </button>
      </form>
        
    </header>
  );
};

export default HeaderSection;
