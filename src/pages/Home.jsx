import "../scss/home.scss";
import AppHeader from "../components/Navbar";
import AppShowcase from "../components/Showcase";
import AppAbout from "../components/About";
import AppPortfolioCard from "../components/PortfolioCard";
import AppContact from "../components/Contact";
import AppFooter from "../components/Footer";

function App() {
  return (
    <div className="App">
      <header id="home">
        <AppHeader />
      </header>
      <main>
        <AppShowcase />
        <AppAbout />
        <AppPortfolioCard />
        <AppContact />
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
