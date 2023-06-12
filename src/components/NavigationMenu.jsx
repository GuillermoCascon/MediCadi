import React, { useState } from 'react';
import useAuth from '../hooks/useAuth'
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
    const { closeSession } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="flex flex-col items-start p-6 bg-teal-600 text-white">
            <div className="flex items-center justify-between w-full mb-4">
                <h1 className='font-bold text-2xl text-center text-teal-200 ml-5'>
                    MEDI<span className='text-white'>CADI</span>
                </h1>
                {isMobile ? (
                    <button className="" onClick={toggleMenu}>
                        {isMenuOpen ? (

                            //<img src={close} alt='cerrar menu' className='h-10 w-10 mr-5'/>
                            <svg viewBox="0 0 24 24" className='h-10 w-10 mr-5' fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g id="Edit / Close_Circle">
                                        <path id="Vector" d="M9 9L11.9999 11.9999M11.9999 11.9999L14.9999 14.9999M11.9999 11.9999L9 14.9999M11.9999 11.9999L14.9999 9M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                </g>
                            </svg>
                        ) : (

                            //<img src={menuhamburger} alt='abrir menu' className='h-10 w-10 mr-5' />
                            <svg viewBox="0 0 20 20" className='h-10 w-10 mr-5' xmlns="http://www.w3.org/2000/svg" fill="none">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path fill="#ffffff" fillRule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"></path>
                                </g>
                            </svg>
                        )}
                    </button>
                ) : (
                    <nav className='flex items-center flex-row gap-4 lg:mt-0 text-white mr-5 font-bold'>
                        <Link to='/admin'>
                            Localizaciones
                        </Link>
                        <Link to='/admin/medicaments' >
                            Medicamentos
                        </Link>
                        <Link to='/admin/account' >
                            Perfil
                        </Link>
                        <button type='button' onClick={closeSession}>
                            Cerrar sesión
                        </button>
                    </nav>
                )}

            </div>
            {isMenuOpen && isMobile && (
                <div className="w-full flex flex-col items-center font-bold">
                    <Link to='/admin' className='mt-2'>
                        Localizaciones
                    </Link>
                    <Link to='/admin/medicaments' className='mt-2'>
                        Medicamentos
                    </Link>
                    <Link to='/admin/account' className='mt-2'>
                        Perfil
                    </Link>
                    <button type='button' className='mt-2' onClick={closeSession}>
                        Cerrar sesión
                    </button>
                </div>
            )}
        </header>
    );
};

export default NavigationMenu;
