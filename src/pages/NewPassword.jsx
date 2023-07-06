import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CustomAlert from "../components/CustomAlert";
import axiosClient from "../config/axios";


const NewPassword = () => {
    const [password, setPassword] = useState('')
    const [customAlert, setCustomAlert] = useState({})
    const [validToken, setValidToken] = useState(false)
    const [modifiedPassword, setModifiedPassword] = useState(false)

    const params = useParams()
    const {token} = params

    useEffect(()=> {
        const checkPassword = async () => {
            try {
                await axiosClient(`users/forgot-password/${token}`)
                setCustomAlert({
                    msg: 'Coloca tu nueva contraseña'
                })
                setValidToken(true)
            } catch (e) {
                setCustomAlert({
                    msg: 'Hubo un error con el enlace', 
                    error: true
                })
            }
        }
        checkPassword()
    }, [])

    const {msg} = customAlert

    const handleSubmit = async e => {
        e.preventDefault()
        if (password.length < 6){
            setCustomAlert({
                msg: 'La contraseña es demasiado corta',
                error: true
            })
            return
        }
        try {
            const url = `users/forgot-password/${token}`
            const data = await axiosClient(url, {password})
            setModifiedPassword(true)
            setCustomAlert({
                msg: data.msg,
                error:false
            })
        } catch (e) {
            setCustomAlert({
                msg: e.response.data.msg,
                error: true
            })
        }
    }

    return (
        <>
            <div>
                <h1 className='text-teal-600 font-black text-6xl'>Restablece tu password y no pierdas el acceso a
                    <span className="text-black"> tus Medicinas</span>
                </h1>
            </div>
            <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-teal-50'>
                {msg && <CustomAlert
                    alrt={customAlert}
                />} 

                {validToken && (
                    <>
                        <form onSubmit={handleSubmit}>
                            <div className='my-5'>
                                <label className='uppercase text-neutral-600 block text-xl font-bold'>Nueva contraseña</label>
                                <input 
                                    type="password"
                                    placeholder="Introduce tu nueva contraseña"
                                    className="border w-full p-3 mt-3 bg-neutral-50 rounded-xl"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <input 
                                type="submit"
                                value='Cambiar contraseña'
                                className="bg-teal-600 hover:bg-teal-800 text-white py-3 px-10 rounded-xl font-bold mt-5 hover:cursor-pointer md:w-auto"
                            />
                        </form>

                        {modifiedPassword && <nav lassName="mt-10 lg:flex lg:justify-between ">
                            <Link className="block text-center my-5 text-neutral-500">
                                Iniciar sesión
                            </Link>    
                        </nav>}
                    </>
                )}
            </div>
        </>
    )
}

export default NewPassword