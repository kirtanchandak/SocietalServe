import "./App.css";
import env from "react-dotenv";

function App() {
  return (
    <div className="App">
      <h1>{env.APPWRITE_ENDPOINT}</h1>
    </div>
  );
}

export default App;
