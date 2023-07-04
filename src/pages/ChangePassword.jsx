import { useState } from "react"
import CustomAlert from "../components/CustomAlert"
import useAuth from "../hooks/useAuth"
import AdminNav from "../components/AdminNav"

const ChangePassword = () => {

    const [customAlert, setCustomAlert] = useState({})
    const [password, setPassword] = useState({
        new_pwd: '',
        old_pwd: ''
    })

    const {savePassword} = useAuth()
    const {msg} = customAlert

    const handleSubmit = async e => {
        e.preventDefault()
        if(Object.values(password).some(field => field === '')){
            setCustomAlert({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }
        if(password.old_pwd.length < 6){
            setCustomAlert({
                msg: 'La contraseña nueva debe tener 6 caracteres o más',
                error: true
            })
            return
        }
        const response = await savePassword(password)
        setCustomAlert(response)
    }

    return (
        <>
            <AdminNav />
            <h2 className='font-black text-3xl text-center mt-10'>Cambio de contraseña</h2>
            <p className='text-xl mt-5 mb-10 text-center'>Modifica tu<span className='text-teal-600 font-bold'> contraseña</span></p>
            <div>
                <div className='flex justify-center'>
                    <div className="w-full md:w-1/2 bg-teal-50 shadow rounded-lg p-5">
                        {msg && <CustomAlert 
                            alrt={customAlert}
                        />}
                        <form onSubmit={handleSubmit}>
                            <div className='my-3'>
                                <label className='uppercase font-bold text-neutral-600'>Contraseña actual</label>
                                <input 
                                    type="password"
                                    className="border bg-neutral-50 w-full p-2 mt-5 rounded-lg"
                                    name="old_pwd"
                                    placeholder="Escribe tu contraseña actual"
                                    onChange={e => setPassword({...password, [e.target.name]: e.target.value})}
                                />
                            </div>
                            <div className='my-3'>
                                <label className='uppercase font-bold text-neutral-600'>Contraseña nueva</label>
                                <input 
                                    type="password"
                                    className="border bg-neutral-50 w-full p-2 mt-5 rounded-lg"
                                    name="new_pwd"
                                    placeholder="Escribe tu nueva contraseña"
                                    onChange={e => setPassword({...password, [e.target.name]: e.target.value})}
                                />
                            </div>
                            <input 
                                type="submit"
                                value='Actualizar cambios'
                                className="bg-teal-600 hover:bg-teal-800 text-white py-3 px-10 rounded-xl font-bold mt-5 hover:cursor-pointer md:w-auto"
                            />
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ChangePassword