import {Outlet} from 'react-router-dom';
const AuthLayout = () =>{
    return(
        <>
            <main className='container mx-auto p-5 items-center bg-teal-100 min-h-screen  min-w-full'>
                <Outlet />
            </main>
        </>
    )
}

export default AuthLayout