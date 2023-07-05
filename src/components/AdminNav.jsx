import { Link } from "react-router-dom"

const AdminNav = () => {
    return (
        <nav className="gap-4 flex items-center justify-center m-4">
            <Link
                to="/admin/account"
                className="font-bold uppercase text-neutral-600 border rounded-md"
            >Perfil</Link>
            <Link
                to="/admin/change-password"
                className="font-bold uppercase text-neutral-600 border rounded-md gap-2"
            >Cambiar password</Link>
        </nav>
    )
}

export default AdminNav