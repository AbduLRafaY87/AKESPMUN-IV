import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AnnouncementBanner from "./components/AnnouncementBanner";

import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import TeamPage from "./pages/team/TeamPage";
import CommitteesPage from "./pages/committees/CommitteesPage";
import RegistrationsPage from "./pages/registrations/RegistrationsPage";
import ContactPage from "./pages/contact/ContactPage";
import NotFoundPage from "./components/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <AnnouncementBanner />
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/committees" element={<CommitteesPage />} />
            <Route path="/registrations" element={<RegistrationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;