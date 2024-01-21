import React, { useState } from 'react'
import Navbar from './navbar'
import './food_page.css';
import r_brisas from '../assets/restaurantes/r_brisas.png'
import f_icon_left from '../assets/flecha_icon.png'
import f_icon_right from '../assets/flecha_icon2.png'



export default function Food_page() {

    // Estado para manejar el estilo de cada cuadro
    const [cuadrosPintados, setCuadrosPintados] = useState(
        Array(10).fill(false) // Aquí asumí que hay 10 cuadros, ajusta según sea necesario
    );

    // Función para manejar el clic en un cuadro específico
    const handleClicCuadro = (index) => {
        const nuevosCuadrosPintados = [...cuadrosPintados];
        nuevosCuadrosPintados[index] = !nuevosCuadrosPintados[index];
        setCuadrosPintados(nuevosCuadrosPintados);
    };

    // Función para obtener el estilo de un cuadro específico
    const estiloCuadro = (index) => ({
        marginRight: '2px',
        backgroundColor: cuadrosPintados[index] ? '' : 'white',
        border: cuadrosPintados[index] ? '1px solid white' : '1px solid white',
        cursor: 'pointer',
    });


    return (
        <div className=' bg-black ' style={{ height: '2000px' }}>
            <Navbar />
            <div className=' pt-20 px-24  ' style={{ fontSize: '68px', fontWeight: '700', color: '#FFFFFF' }}>
                Donde comer en Juli
            </div>
            <div className=' flex'>
                
                <div className='filter mx-10 flex flex-col' style={{ width: '350px', height: '600px', padding: '30px', backgroundColor:'#1F1F1F' }}>
                    <div className='filter_titulo pb-2'>
                        Tipo
                    </div>
                    <div className='filter_subtitulo flex mb-2'>
                        <div
                            className='cuadro-filtro h-5 w-5'
                            style={estiloCuadro(0)}
                            onClick={() => handleClicCuadro(0)}
                        ></div>
                        Restaurante
                    </div>
                    <div className='filter_subtitulo flex mb-2'>
                        <div
                            className='cuadro-filtro h-5 w-5'
                            style={estiloCuadro(1)}
                            onClick={() => handleClicCuadro(1)}
                        ></div>
                        Bares
                    </div>

                    <div className='filter_titulo pb-4 pt-2'>
                        Comida
                    </div>
                    <div className='filter_subtitulo flex mb-2'>

                        <div
                            className='cuadro-filtro h-5 w-5'
                            style={estiloCuadro(2)}
                            onClick={() => handleClicCuadro(2)}
                        ></div>
                        Desayuno
                    </div>

                    <div className='filter_subtitulo flex mb-2 '>
                        <div
                            className='cuadro-filtro h-5 w-5'
                            style={estiloCuadro(3)}
                            onClick={() => handleClicCuadro(3)}
                        ></div>
                        Almuerzo
                    </div>

                    <div className='filter_subtitulo flex mb-2 '>
                        <div
                            className='cuadro-filtro h-5 w-5'
                            style={estiloCuadro(4)}
                            onClick={() => handleClicCuadro(4)}
                        ></div>
                        Cena
                    </div>

                    <div className='filter_titulo pb-4 pt-2'>
                        Calificacion
                    </div>

                    <div className='filter_subtitulo flex mb-2'>
                        <div
                            className='cuadro-filtro h-5 w-5'
                            style={estiloCuadro(5)}
                            onClick={() => handleClicCuadro(5)}
                        ></div>
                        0-1
                    </div>

                    <div className='filter_subtitulo flex mb-2 '>
                        <div
                            className='cuadro-filtro h-5 w-5'
                            style={estiloCuadro(6)}
                            onClick={() => handleClicCuadro(6)}
                        ></div>
                        2-3
                    </div>

                    <div className='filter_subtitulo flex mb-2 '>
                        <div
                            className='cuadro-filtro h-5 w-5'
                            style={estiloCuadro(7)}
                            onClick={() => handleClicCuadro(7)}
                        ></div>
                        4-5
                    </div>

                    <div className='filter_titulo pb-4 pt-2'>
                        Tipo Pago
                    </div>

                    <div className='filter_subtitulo flex mb-2'>
                    <div
                            className='cuadro-filtro h-5 w-5'
                            style={estiloCuadro(8)}
                            onClick={() => handleClicCuadro(8)}
                        ></div>
                        <div>
                            Con Tarjeta
                        </div>
                    </div>

                    <div className='filter_subtitulo flex mb-2 '>
                    <div
                            className='cuadro-filtro h-5 w-5'
                            style={estiloCuadro(9)}
                            onClick={() => handleClicCuadro(9)}
                        ></div>
                        Efectivo
                    </div>

                    <div className='filter_subtitulo flex mb-2 '>
                    <div
                            className='cuadro-filtro h-5 w-5'
                            style={estiloCuadro(10)}
                            onClick={() => handleClicCuadro(10)}
                        ></div>
                        Pago con QR
                    </div>


                </div>

                <div className=' filter w-full mr-10 flex flex-col' style={{ height: '1500px' }}>
                    <div className=' w-full rounded-xl flex overflow-hidden' style={{ backgroundColor: '#1F1F1F', height: '300px', marginBottom: '48px' }}>
                        <div className=' h-full relative' style={{ width: '400px' }}>
                            <img src={r_brisas} alt="" className=' h-full w-full object-cover absolute ' />

                            <div className=' absolute flex items-center h-full w-full place-content-between px-2'>
                                <img src={f_icon_left} alt="" className=' h-12' />
                                <img src={f_icon_right} alt="" className=' h-12' />
                            </div>

                        </div>

                        <div className=' h-full w-full flex flex-col place-content-between'>
                            <div className=' w-full place-content-between flex h-full py-4 px-4'>
                                <div className=' letra_delgada h-full place-content-between  flex flex-col  jus'>
                                    <div className=' letra_hechada'> Restaurante - Brisas  <br /> del lago</div>
                                    <div> Wifi, bebida, comidad, tv</div>
                                    <div>$$ Pago en efectivo</div>
                                    <div>Desayuno <br /> Almuerzo<br /> Cena</div>

                                </div>
                                <div className=' letra_delgada flex'>
                                    Estado: <div className=' text-red-600 px-3 '>  Cerrado ahora</div>

                                </div>
                            </div>
                            <div className=' letra_delgada py-5 self-end px-10 flex items-center '>
                                <div className=' pr-3'>
                                Calificacion: 
                                </div>
                                <div>
                                    <div className= ' mr-1' style={{height:'18px', width:'18px', background:'#22BF93', borderRadius:'50%'}} />
                                </div>
                                <div>
                                    <div className= ' mr-1' style={{height:'18px', width:'18px', background:'#D9D9D9', borderRadius:'50%'}} />
                                </div>
                                <div>
                                    <div className= ' mr-1' style={{height:'18px', width:'18px', background:'#D9D9D9', borderRadius:'50%'}} />
                                </div>
                                <div>
                                    <div className= ' mr-1' style={{height:'18px', width:'18px', background:'#D9D9D9', borderRadius:'50%'}} />
                                </div>
                                <div>
                                    <div className= ' mr-1' style={{height:'18px', width:'18px', background:'#D9D9D9', borderRadius:'50%'}} />
                                </div>
                                <div className=' ml-3'>
                                1/5 
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div >
    )
}
