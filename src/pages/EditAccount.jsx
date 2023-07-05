import useAuth from "../hooks/useAuth";
import AdminNav from "../components/AdminNav";
import { useState, useEffect } from "react";
import CustomAlert from "../components/CustomAlert";

const EditAccount = () => {

    const { auth, updateAccount } = useAuth()
    const [ account, setAccount ] = useState({})
    const [customAlert, setCustomAlert] = useState({})

    useEffect(() => {
        setAccount(auth)
    }, [auth])

    const handleSubmit = async e => {
        e.preventDefault()
        const { name, email } = account
        if([name, email].includes('')){
            setCustomAlert({
                msg: 'Nombre y email son obligatorios',
                error: true
            })
            return
        }
        const response = await updateAccount(account)
        setCustomAlert(response)
    }

    const { msg } = customAlert

    return (
        <>
            <AdminNav />

            <h2 className="font-black text-3xl text-center mt-10">Tu perfil</h2>
            <p className='text-xl mt-5 mb-10 text-center'>Modifica tu
                <span className='text-teal-600 font-bold'> perfil </span>
                aquí
            </p>
            <div className="flex justify-center">
                <div className="w-full md:w-1/2 bg-teal-100 shadow rounded-lg p-5">
                    {msg && <CustomAlert
                        alrt={customAlert}
                    />}

                    <form onSubmit={handleSubmit}>

                        <div className="my-3">
                            <label className=" uppercase font-bold text-neutral-600">Nombre</label>
                            <input
                                type="text"
                                className="border bg-teal-50 w-full p-2 mt-5 rounded-lg"
                                name="name"
                                value={account.name || ''}
                                onChange={e => setAccount({
                                    ...account,
                                    [e.target.name]: e.target.value
                                })}
                            />
                        </div>

                        <div className="my-3">
                            <label className=" uppercase font-bold text-neutral-600">Nombre</label>
                            <input
                                type="email"
                                className="border bg-teal-50 w-full p-2 mt-5 rounded-lg"
                                name="email"
                                value={account.email || ''}
                                onChange={e => setAccount({
                                    ...account,
                                    [e.target.email]: e.target.value
                                })}
                            />
                        </div>

                        <input
                            type="submit"
                            value='Guardar cambios'
                            className="bg-teal-600 hover:bg-teal-800 text-white py-3 px-10 rounded-xl font-bold mt-5 hover:cursor-pointer md:w-auto"
                        />
                    </form>
                </div>
            </div>

        </>
    )
}

export default EditAccount