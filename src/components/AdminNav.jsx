import { Link } from "react-router-dom"

const AdminNav = () => {
    return (
        <nav className="gap-4 flex">
            <Link
                to="/admin/account"
                className="font-bold uppercase text-neutral-600"
            >Perfil</Link>
            <Link
                to="/admin/change-password"
                className="font-bold uppercase text-neutral-600"
            >Cambiar password</Link>
        </nav>
    )
}

export default AdminNav