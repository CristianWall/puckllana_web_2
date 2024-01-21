import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { auth } from '../firebase';
import PuckllanaIcon from '../assets/puckllana_icono.svg';
import './home.css'; 
import iglesia from '../assets/iglesia_puck.png'
import portal from '../assets/portal_logo.png'
import usuario from '../assets/usuario.png'
import Navbar from './navbar';


const Home = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log('Cierre de sesión exitoso');
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
    }
  };
  return (
    <div className="home-container flex relative ">


      <Navbar/>


      <div className='stack-container' style={{ height: '650px' }}>

        <div className='stack-item'>
          <img src={iglesia} alt="" className=' h-full w-full object-cover' />
        </div>

        <div className='stack-item degradado' >
        </div>
        <div className='stack-item flex p-12 place-content-between '>
          <img src={PuckllanaIcon} alt="Puckllana Icono" className=' h-20' />

          <div className=' text-white flex h-24  items-center '>

            <div style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              backgroundImage: `url(${usuario})`,
              backgroundSize: 'cover', // Ajustar el tamaño de la imagen de fondo
              backgroundPosition: 'center',
              marginInline: '20px'
            }}>



            </div>

            <div className=' text-xl'>
              <div>
                Bienvenido,
              </div>
              <div>
                Cristian
              </div>
            </div>
          </div>

        </div>


        <div className=' absolute w-full h-full flex flex-col items-center justify-end text-white' >
          <div style={{ fontSize: '170px', fontWeight: '700' }}>
            JULI
          </div>
          <div style={{ fontSize: '32px', fontWeight: '700' }}>
            PUNO - PERU
          </div>
        </div>

      </div>

      <div className='stack-container flex justify-center ' style={{ height: '300px' }}>
        <div className=' text-white text-center stack-item  ' style={{ paddingInline: '300px', paddingTop: '50px', fontWeight: '200', fontSize: '32px' }}>
          La Roma de América, es una ciudad que te ofrece historia, arte, naturaleza y cultura. Descubre sus iglesias coloniales, su lago Titicaca, su complejo arqueológico y sus tradiciones. Juli, una ciudad que te hará vivir una aventura inolvidable.
        </div>
      </div>

      <div className=' my-10  ' style={{ height: '500px', paddingInline: '140px' }}>
        <div className='' style={{ color: '#22BF93', fontSize: '96px', fontWeight: '700' }}>
          Juli,
        </div>
        <div className='pr-56' style={{ color: '#FFFFFF', fontSize: '96px', fontWeight: '700' }}>
          un lugar para descansar
        </div>
      </div>

      < div className=' flex flex-row  items-center'>
        <img src={portal} alt="" style={{ height: '290px', marginInline: '180px' }} />
        <div className=' inline-block'>
          <div style={{ color: '#FFFFFF', fontSize: '48px', fontWeight: '600' }}>
            Descubre los enigmas que envuelven a Juli, desde el enigmático{' '}
          </div>
          <div className='pr-56' style={{ color: '#22BF93', fontSize: '48px', fontWeight: '600' }}>
            Portal Amaru Muru
          </div>
        </div>


      </div>





    </ div>
  );
};

export default Home;

