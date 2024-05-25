// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./componetes/Navbar";
import SwiperComponent from "./componetes/Swiper";
import ContentHeader from "./componetes/ContentHeader";
import CompanyDetails from "./componetes/CompanyDetails";
import SisterCompany from "./componetes/SisterCompany";
import ContactUs from "./componetes/ContactUs";
import Footer from "./componetes/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SwiperComponent />
      <ContentHeader />
      <CompanyDetails />
      <SisterCompany />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
