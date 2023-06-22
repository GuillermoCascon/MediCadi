import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer"
const ProtectedRoute = () => {
    const { auth, loading } = useAuth()
    if (loading) return 'Cargando...'
    return (
        <>
            <NavigationMenu />
            {auth?._id?(
                <main className="container mx-auto h-auto bg-teal-50">
                    <Outlet />
                </main>
            ): <Navigate to='/' />}
            <Footer />
        </>
    )
}

export default ProtectedRoute