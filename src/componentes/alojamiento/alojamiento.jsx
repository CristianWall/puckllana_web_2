import React, { useState } from 'react'
import Navbar from '../navbar'

export default function Alojamiento() {

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
        <div className=' bg-black' style={{ height: '2000px ' }}>
            <Navbar />
            <div className=' pt-20 px-24  ' style={{ fontSize: '68px', fontWeight: '700', color: '#FFFFFF' }}>
                Donde Alojarse en Juli
            </div>
            <div className=' flex'>
                <div className='filter mx-10 flex flex-col' style={{ width: '350px', height: '600px', padding: '30px', backgroundColor: '#1F1F1F' }}>
                    <div className='filter_titulo pb-2'>
                        Tipo de Alojamiento
                    </div>
                    <div className='filter_subtitulo flex mb-2'>
                        <div
                            className='cuadro-filtro h-5 w-5'
                            style={estiloCuadro(0)}
                            onClick={() => handleClicCuadro(0)}
                        ></div>
                        Todo
                    </div>
                    <div className='filter_subtitulo flex mb-2'>
                        <div
                            className='cuadro-filtro h-5 w-5'
                            style={estiloCuadro(1)}
                            onClick={() => handleClicCuadro(1)}
                        ></div>
                        Hoteles
                    </div>
                    

                    <div className='filter_titulo pb-4 pt-2'>
                        Ofertas
                    </div>
                    <div className='filter_subtitulo flex mb-2'>

                        <div
                            className='cuadro-filtro h-5 w-5'
                            style={estiloCuadro(2)}
                            onClick={() => handleClicCuadro(2)}
                        ></div>
                        Baño Privado
                    </div>

                    <div className='filter_subtitulo flex mb-2 '>
                        <div
                            className='cuadro-filtro h-5 w-5'
                            style={estiloCuadro(3)}
                            onClick={() => handleClicCuadro(3)}
                        ></div>
                        Wifi
                    </div>

                    <div className='filter_subtitulo flex mb-2 '>
                        <div
                            className='cuadro-filtro h-5 w-5'
                            style={estiloCuadro(4)}
                            onClick={() => handleClicCuadro(4)}
                        ></div>
                        Parkinkg
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

                <div className=' mx-10 flex flex-col overflow-hidden' style={{ width:'300px', height:'320px',backgroundColor: '#1F1F1F', borderRadius:'20px'}}>

                </div>
            </div>
        </div>
    )
}
