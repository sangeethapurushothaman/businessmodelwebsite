import { BrowserRouter, Routes, Route } from "react-router-dom";
import Singlepage from "./pages/Singlepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LegalPage from "./pages/LegalPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Singlepage />} />
       <Route path="/legalpage" element={<LegalPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;