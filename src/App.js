import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Routes} from "react-router-dom";
import Footer from './components/Navigation/Footer/footer';
import Header from './components/Navigation/Header/header';
import HomePage from './components/PageContent/Homepage';
import ContactPage from './components/PageContent/Contactpage';
import FAQPage from './components/PageContent/FAQpage';
import ServicePage from './components/PageContent/Servicepage';
import AboutPage from './components/PageContent/Aboutpage';

function App() {
  return (
    <div className="App">
     <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' exact element={<HomePage/>}/>
          <Route path='/Contact' element={<ContactPage/>}/>
          <Route path='/faq' element={<FAQPage/>}/>
          <Route path='/services' element={<ServicePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
        </Routes>
        <Footer/>
      </Router>
     </>
    </div>
  );
}

export default App;
