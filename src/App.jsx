import './App.css'
import HeaderSection from '@/Components/HeaderSectionFolder/HeaderSection';
import Info from '@/Components/infoFolder/info';
import Map from '@/Components/MapFolder/Map';
import Loader from "@/Components/Loader";
import { useEffect, useState } from 'react';
import { fetchGeoData } from "@/utils/fetchData";

function App() {

  const [ipData, setIpData] = useState();

  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://ipwho.is/")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "fail") {
          setError(data.message);
          setIpData(null);
        } else {
          setIpData(data);
          setError(null);
        }
      });
  }, []);
  
  useEffect(() => {
    console.log(ipData);  // ✅ Log only when ipData updates
  }, [ipData]);
  
  const handleSearch = (userInput) => {
    console.log("Fetching data for:", userInput); // 🔍 Debugging log
    fetchGeoData(userInput, setIpData,setError);
  };
  return (
    
    < div className="app-container">
    <div className="uppersection" >
       <HeaderSection onSearch={handleSearch}/>
       
        <Info ipData={ipData} />
    </div>
    <main>
    <section className='map-container'>
      {ipData ? (
       <Map key={ipData?.ip} latitude={ipData?.latitude} longitude={ipData?.longitude} />
      ) : (
        error ?  (<div className="error-message">{error}</div>) :(<Loader/>)
       
      )}
    </section>
    </main>
    <footer className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Aiman Rashid</a>.
    </footer>
    </div>
  )
}

export default App;


