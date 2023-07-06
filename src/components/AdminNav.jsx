import { Link } from "react-router-dom"

const AdminNav = () => {
    return (
        <nav className="gap-4 flex items-center justify-center m-4">
            <Link
                to="/admin/account"
                className="font-bold uppercase text-neutral-600 bg-teal-100 border border-teal-600 rounded-md p-1"
            >Perfil</Link>
            <Link
                to="/admin/change-password"
                className="font-bold uppercase text-neutral-600 bg-teal-100 border border-teal-600 rounded-md p-1"
            >Cambiar contraseña</Link>
        </nav>
    )
}

export default AdminNav