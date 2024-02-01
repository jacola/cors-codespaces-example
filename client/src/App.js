import React, { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  const fetchMessage = async () => {
    try {
      // We add withCredentials because the url is authenticated with GitHub. This sends the cookies along with the request.
      // `withCredentials` indicates whether or not cross-site Access-Control requests
      // should be made using credentials
      const response = await axios.get(`https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/`, { withCredentials: true });
      
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error fetching message:", error);
    }
  };

  return (
    <div>
      <button onClick={fetchMessage}>Fetch Message</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
