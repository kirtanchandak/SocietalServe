import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Meetup from "./components/Meetup";
import Upcoming from "./components/Upcoming";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container overflow-hidden flex-grow">
      <Navbar />
      <Hero />
      <Meetup />
      <Upcoming />
      <Footer />
    </div>
  );
}

export default App;
