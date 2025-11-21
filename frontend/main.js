import React from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18";

const App = () => {
  return (
    <div style={{ fontFamily: "Arial", padding: "2rem" }}>
      <h1>TopCal Roofing Portal</h1>
      <p>Your portal is live and ready to connect to the backend!</p>
      <p>
        API test: <a href="https://YOUR_RENDER_BACKEND_URL/" target="_blank">Backend status</a>
      </p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
