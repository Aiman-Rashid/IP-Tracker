

import axios from "axios"
export const fetchGeoData = async (userInput, setIpData,setError) => {
  try {
    const response = await axios.get(`http://ip-api.com/json/${userInput}`); // ✅ Use `https`
    if (response.data.status === "fail") {
      setError(response.data.message || "Invalid IP address or domain");
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