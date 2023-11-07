
import axios from "axios";

// Picture of the day 
export const apod = async(req, res) => {
        try {
          // Use axios to make an HTTP GET request to the API endpoint
          const response = await axios.get(process.env.APOD_API); // Replace with the actual API URL
      
          // Extract the data from the response
          const data = response.data;
      
          // Send the data as the response
               res.status(200).json(data);
           
        } catch (error) {
          console.error(error);
          res.status(500).json({ success :false ,error: 'Error fetching data from the API' });
        }
    
  };