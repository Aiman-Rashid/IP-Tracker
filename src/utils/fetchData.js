

import axios from "axios"
export const fetchGeoData = async (userInput, setIpData,setError) => {
  try {
    const response = await axios.get(`https://ipwho.is/${userInput}`); 
    if (!response.data.success) {
      setError(response.data.message || "Invalid IP address ");
      setIpData(null);
    } else {
      setIpData(response.data);
      setError(null); // Clear any previous errors
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    setError("An error occurred while fetching data");
    setIpData(null);
  }
};