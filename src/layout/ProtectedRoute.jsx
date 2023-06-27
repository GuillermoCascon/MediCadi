import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import NavigationMenu from "../components/NavigationMenu";
import Footer from "../components/Footer"
const ProtectedRoute = () => {
    const { auth, loading, closeSession } = useAuth()
    if (loading) return 'Cargando...'
    return (
        <div className="flex flex-col min-h-screen ">
            <NavigationMenu closeSession={closeSession}/>
            {auth?._id?(
                <main className="bg-teal-50 flex-grow">
                    <Outlet />
                </main>
            ): <Navigate to='/' />}
            <Footer />
        </div>
    )
}

export default ProtectedRoute