// Navbar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faMap, faBed, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import PuckllanaIcon from '../assets/puckllana_icono.svg';


const Navbar = () => {
  const navigate = useNavigate();

  const Pagina = (pagina) => {
    navigate(`/${pagina}`);
  };

  return (
    <div className="navbar fixed z-20">
        <div className="navbar-item hover:cursor-pointer" onClick={() => Pagina('')}>
          <img src={PuckllanaIcon} alt="Puckllana Icono" className=' h-10' />
        </div>

      <div className="navbar-item active hover:cursor-pointer" onClick={() => Pagina('food')}>
        <FontAwesomeIcon icon={faUtensils} size="1x" style={{ color: 'white' }} />
      </div>
      <div className="navbar-item">
        <FontAwesomeIcon icon={faMap} size="1x" style={{ color: 'white' }} />
      </div>
      <div className="navbar-item hover:cursor-pointer" onClick={() => Pagina('alojamiento')}>
        <FontAwesomeIcon icon={faBed} size="1x" style={{ color: 'white' }} />
      </div>
      <div className="navbar-item">
        <FontAwesomeIcon icon={faBars} size="1x" style={{ color: 'white' }} />
      </div>
    </div>
  );
};

export default Navbar;
