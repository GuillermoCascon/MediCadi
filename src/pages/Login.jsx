import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import CustomAlert from '../components/CustomAlert'
import axiosClient from "../config/axios";
import HeaderIndex from "../components/HeaderIndex";
const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [customAlert, setCustomAlert] = useState({})

    const { setAuth } = useAuth()
    const navigate = useNavigate()

    const { msg } = customAlert

    const handleSubmit = async e => {
        e.preventDefault()
        if ([email, password].includes('')) {
            setCustomAlert({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
        }
        try {
            const { data } = await axiosClient.post('/users/', { email, password })
            localStorage.setItem('token', data.token)
            setAuth(data)
            navigate('/admin')
        } catch (error) {
            setCustomAlert({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    return (
        <>

            <HeaderIndex />
            <div className="lg:grid grid-cols-2 xl:grid-cols-3 items-center xl:gap-10 ">

                <h2 className="text-teal-600 font-black text-xl text-center xl:text-right">
                    Inicia sesión y gestiona tus <span className="text-black">Medicinas</span>
                </h2>

                <div className="mt-5 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white xl:col-span-2">
                    {msg && <CustomAlert
                        alrt={customAlert}
                    />}
                    <form onSubmit={handleSubmit}>


                        <div className="my-5">
                            <label className="uppercase text-gray-600 block text-xl font-bold">Email</label>
                            <input
                                className="border w-full p-3 mt-3 bg-gray-100 rounded-xl"
                                type="email"
                                placeholder="Introduce tu email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="my-5">
                            <label className="uppercase text-gray-600 block text-xl font-bold">Contraseña</label>
                            <input
                                className="border w-full p-3 mt-3 bg-gray-100 rounded-xl"
                                type="password"
                                placeholder="Introduce tu contraseña"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                      
                        <input
                            type="submit"
                            className="bg-teal-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-teal-800 lg:w-auto"
                            value="Iniciar sesión"
                        />

                        <nav className="mt-10 lg:flex lg:justify-evenly ">
                            <Link
                                className="block text-center my-5 text-teal-800 underline"
                                to="/register"
                            >¿No tienes cuenta? Regístrate</Link>
                            <Link
                                className="block text-center my-5 text-teal-800 underline"
                                to="/forgot-password"
                            >He olvidado mi contreseña</Link>
                        </nav>

                    </form>
                </div>

            </div>
        </>
    )
}

export default Login