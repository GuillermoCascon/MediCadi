import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth'
import { useMediaQuery } from 'react-responsive';
import close from '../imgs/close.png'
import menuhamburger from '../imgs/menuhamburger.png'
const HeaderAdmin = () => {
    const { closeSession } = useAuth();
    const [showMenu, setShowMenu] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className='py-6 bg-teal-600'>
            <div className='container mx-auto flex lg:flex-row justify-between items-center'>
                <h1 className='font-bold text-2xl text-center text-teal-200 ml-5'>
                    MEDI<span className='text-white'>CADI</span>
                </h1>
                {isMobile ? (
                    <button
                        type='button'
                        className='md:hidden'
                        onClick={toggleMenu}
                    >
                        {showMenu ? (
                            <img src={close} alt='cerrar menu' className='h-10 w-10 mr-5'/>
                        ):(
                            <img src={menuhamburger} alt='abrir menu' className='h-10 w-10 mr-5'/>
                        )}
                    </button>
                ) : (
                    <nav className='flex items-center md:flex-row gap-4 lg:mt-0 text-white mr-5 font-bold'>
                        <Link to='/admin' className=''>
                            Localizaciones
                        </Link>
                        <Link to='/admin/medicaments' className=''>
                            Medicamentos
                        </Link>
                        <Link to='/admin/account' className=''>
                            Perfil
                        </Link>
                        <button type='button' className='' onClick={closeSession}>
                            Cerrar sesión
                        </button>
                    </nav>
                )}
                {isMobile && showMenu && (
                    <nav className='flex flex-col items-center lg:flex-row gap-4 mt-5  lg:mt-0 text-white font-bold'>
                        <Link to='/admin' className=''>
                            Localizaciones
                        </Link>
                        <Link to='/admin/medicaments' className=''>
                            Medicamentos
                        </Link>
                        <Link to='/admin/account' className=''>
                            Perfil
                        </Link>
                        <button type='button' className='' onClick={closeSession}>
                            Cerrar sesión
                        </button>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default HeaderAdmin;
