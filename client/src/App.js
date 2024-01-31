import React, { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  const fetchMessage = async () => {
    try {
      const response = await axios.get(`https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/`, { withCredentials: true });
      console.log("Response:", response);
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
