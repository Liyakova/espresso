import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.webp';
import './App.css';
import Drinks from './Drinks';
import Deserts from './Deserts';
import Contacts from './Contactc';
import AboutUs from './AboutUs';

function App() {
  return (
    <Router>
        <div className="socialMediaAndLogo">
          <img src={logo} alt="logo" className='logoPic'/>
        </div>

        <nav>
          <Link className='link' to="/">О нас</Link>
          <Link className='link' to="/drinks">Кофе</Link>
          <Link className='link' to="/food">Десерты</Link>
          <Link className='link' to="/contacts">Контакты</Link>
        </nav>

        <Routes>
          <Route path="/" element={<AboutUs />}/>
          <Route path="/drinks" element={<Drinks />}/>
          <Route path="/food" element={<Deserts />}/>
          <Route path="/contacts" element={<Contacts />}/>
        </Routes>

        <div className="socialMediaAndLogo">
          <img src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?t=st=1657030158~exp=1657030758~hmac=9ba80ead28487719678389c91485d088ea18e743cc194fea13f6dbd7f7acd083&w=1060" width="40px" alt="social"/>
          <img src="https://mhcenter.ru/wp-content/uploads/2020/01/whatsapp-png-whatsapp-logo-transparent-512.png" width="40px" alt="social"/>
          <img src="https://i.pinimg.com/originals/1b/76/01/1b7601e035a83c13c208b4ec905ee6d9.png" width="40px" alt="social"/>
          <img src="https://mmhairlondon.com/wp-content/uploads/2021/08/tiktok-logo.png" width="40px" alt="social"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/512px-Telegram_2019_Logo.svg.png" width="40px" alt="social"/>
      </div>
  </Router>
  )
}

export default App;
