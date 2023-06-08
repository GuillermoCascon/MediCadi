import { Outlet, Navigate } from "react-router-dom";
import HeaderAdmin from "../components/HeaderAdmin";
import Footer from '../components/Footer'
import useAuth from "../hooks/useAuth";

const Admin = () => {

    const {auth, loading} = useAuth()
    if(loading) return 'Cargando...'

    return (
        <>
            <HeaderAdmin />
            {auth?._id ?(
                <main className="container mx-auto mt-10">
                    <Outlet />
                </main>
            ): <Navigate to='/'/>}
            <Footer />
        </>
    )
}

export default Admin
