import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/homePage';
import ErrorPage from './page/errorPage';
import Contact from './page/contact';
import Connexion from './page/login';
import SignUp from './page/sign';

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

function AppRoutes() {
  return (

    <Router>

      <header><Navbar /></header>

      <main>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Connexion />} />

          <Route path="/signup" element={<SignUp />} />

          <Route path="*" element={<ErrorPage />} />



        </Routes>
      </main>

      <footer><Footer /></footer>

    </Router>

  )
}

export default AppRoutes;
