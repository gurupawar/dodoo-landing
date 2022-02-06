import "./css/App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyDodoo from "./components/WhyDodoo";
import Services from "./components/Services";
import HowtoOrder from "./components/HowtoOrder";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WhyDodoo />
      <Services />
      <HowtoOrder />
    </div>
  );
}

export default App;
