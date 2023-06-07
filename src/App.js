import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Meetup from "./components/Meetup";

function App() {
  return (
    <div className="container overflow-hidden flex-grow">
      <Navbar />
      <Hero />
      <Meetup />
    </div>
  );
}

export default App;
