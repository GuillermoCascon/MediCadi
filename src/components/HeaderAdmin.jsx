import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const HeaderAdmin = () => {
    const {closeSession} = useAuth()
    return (
        <header className='py-10 bg-teal-600'>
            <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center'>
                <h1 className='font-bold text-2xl text-center text-teal-200'>
                    MEDI<span className='text-white'>CADI</span>
                </h1>
                <nav className='flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0'>
                    <Link
                        to='/admin'
                        className=''>
                        Centros
                    </Link>
                    <Link
                        to='/admin/account'
                        className=''>
                        Perfil
                    </Link>
                    <button
                        type='button'
                        className=''
                        onClick={closeSession}
                    >
                        Cerrar sesión
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default HeaderAdmin