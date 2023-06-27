import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import CloseSVG from '../imgs/CloseSVG'
import HamburguerMenuSVG from '../imgs/HamburguerMenuSVG';
const NavigationMenu = ({closeSession}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="flex flex-col items-start p-6 bg-teal-600 text-white">
            <div className="flex items-center justify-between w-full ">
                <h1 className='font-bold text-2xl text-center text-teal-200 ml-5'>
                    MEDI<span className='text-white'>CADI</span>
                </h1>
                {isMobile ? (
                    <button className='h-10 w-10 mr-5' onClick={toggleMenu}>
                        {isMenuOpen ? <CloseSVG /> : <HamburguerMenuSVG />}
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
