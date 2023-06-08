import { Link } from "react-router-dom";
import { useState } from "react";
import HeaderIndex from "../components/HeaderIndex";
import axiosClient from "../config/axios";
import CustomAlert from "../components/CustomAlert";

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatedPwd, setRepeatedPwd] = useState('')

    const [customAlert, setCustomAlert] = useState({})

    const handleSubmit = async e => {
        e.preventDefault()
        if ([name, email, password, repeatedPwd].includes('')) {
            setCustomAlert({
                msg: 'No puede haber campos vacíos',
                error: true
            })
        }
        if (password.length < 6) {
            setCustomAlert({
                msg: 'La contraseña debe contener al menos 6 caracteres',
                error: true
            })
        }
        if (password !== repeatedPwd) {
            setCustomAlert({
                msg: 'Las contraseñas no coinciden',
                error: true
            })
        }

        setCustomAlert({})

        try {
            await axiosClient.post('/users/register', { nombre, email, password })
            setCustomAlert({
                msg: 'Cuenta creada correctamente, por favor, revise su email',
                error: true
            })
        } catch (error) {
            setCustomAlert({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const { msg } = customAlert
    return (
        <>
            <HeaderIndex />

            <div className="lg:grid grid-cols-2 xl:grid-cols-3 items-center xl:gap-10 ">

                <h2 className="text-teal-600 font-black text-xl text-center xl:text-right">
                    Regístrate y gestiona tus <span className="text-black">Medicinas</span>
                </h2>

                <div className="mt-5 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white xl:col-span-2">
                    {msg && <CustomAlert
                        alrt={customAlert}
                    />}
                    <form onSubmit={handleSubmit}>
                        <div className="my-5">
                            <label className="uppercase text-gray-600 block text-xl font-bold">Nombre</label>
                            <input
                                className="border w-full p-3 mt-3 bg-gray-100 rounded-xl"
                                type="text"
                                placeholder="Introduce tu nombre"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
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
                                className="border w-full p-3 mt-3 bg-gray-100 rounded-xl "
                                type="password"
                                placeholder="Introduce tu contraseña"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="my-5">
                            <label className="uppercase text-gray-600 block text-xl font-bold">Repite contraseña</label>
                            <input
                                className="border w-full p-3 mt-3 bg-gray-100 rounded-xl "
                                type="password"
                                placeholder="Repite tu contraseña"
                                value={repeatedPwd}
                                onChange={e => setRepeatedPwd(e.target.value)}
                            />
                        </div>

                        <input
                            type="submit"
                            className="bg-teal-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-teal-800 lg:w-auto"
                            value="Registrarse"
                        />

                        <nav className="mt-10 lg:flex lg:justify-evenly ">
                            <Link
                                className="block text-center my-5 text-teal-800 underline"
                                to="/"
                            >¿Ya tienes cuenta? Inicia sesión</Link>
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

export default Register