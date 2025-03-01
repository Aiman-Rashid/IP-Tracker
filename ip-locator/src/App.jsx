import './App.css'
import HeaderSection from '@/Components/HeaderSectionFolder/HeaderSection';
import Info from '@/Components/infoFolder/info';
import Map from '@/Components/MapFolder/Map';
import Loader from "@/Components/Loader";
import { useEffect, useState } from 'react';
import { fetchGeoData } from "@/utils/fetchData";
import { Helmet } from "react-helmet";

function App() {

  const [ipData, setIpData] = useState();

  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("http://ip-api.com/json/")
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
    <>
    <Helmet>
    <title>IP Tracker - Find Your IP & Geolocation</title>
    <meta name="description" content="Use our IP Tracker to get detailed geolocation information about any IP address or domain. Find your location, ISP, and timezone quickly." />
    <meta property="og:title" content="IP Tracker" />
    <meta property="og:description" content="Find detailed information about any IP address or domain." />
    <meta property="og:image" content="/assets/img/ogImg.png" />
    <meta property="og:url" content={process.env.REACT_APP_PUBLIC_URL} />
    <link rel="canonical" href={process.env.REACT_APP_PUBLIC_URL} />
  </Helmet>
    < div className="app-container">
    <div className="uppersection" >
       <HeaderSection onSearch={handleSearch}/>
       
        <Info ipData={ipData} />
    </div>
    <main>
    <section className='map-container'>
      {ipData ? (
       <Map key={ipData?.query} latitude={ipData?.lat} longitude={ipData?.lon} />
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
    </>
  )
}

export default App;


