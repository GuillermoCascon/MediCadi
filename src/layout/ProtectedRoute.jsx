import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import HeaderAdmin from "../components/HeaderAdmin";
import Footer from "../components/Footer"
const ProtectedRoute = () => {
    const { auth, loading } = useAuth()
    if (loading) return 'Cargando...'
    return (
        <>
            <HeaderAdmin />
            {auth?._id?(
                <main className="container mx-auto mt-10">
                    <Outlet />
                </main>
            ): <Navigate to='/' />}
            <Footer />
        </>
    )
}

export default ProtectedRoute