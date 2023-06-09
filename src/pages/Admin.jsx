import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Admin = () => {

    const {auth, loading} = useAuth()
    if(loading) return 'Cargando...'

    return (
        <>
            {auth?._id ?(
                <main className="container mx-auto mt-10">
                    <Outlet />
                </main>
            ): <Navigate to='/'/>}

        </>
    )
}

export default Admin
