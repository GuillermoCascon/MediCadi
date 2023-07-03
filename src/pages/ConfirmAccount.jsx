import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CustomAlert from "../components/CustomAlert";
import axiosClient from "../config/axios";
const ConfirmAccount = () => {
    const [accountConfirmed, setAccountConfirmed] = useState(false)
    const [loading, setLoading] = useState(true)
    const [cstmAlert, setCstmAlert] = useState({})
    const params = useParams()
    const { id } = params

    useEffect(() => {
        const confirmAccount = async () => {
            try {
                const url = `/users/confirm/${id}`;
                const { data } = await axiosClient(url)
                setAccountConfirmed(true)
                setCstmAlert({
                    msg: data.msg,
                    error: false
                })
            } catch (e) {
                setCstmAlert({
                    msg: e.response.data.msg,
                    error: true
                })
            }
            setLoading(false)
        }
        confirmAccount()
    }, [])


    return (
        <>
            <div>
                <h1 className="text-teal-600 font-black text-6xl">
                    Confirma tu cuenta y comienza a administrar tus
                    <span className="text-black"> Medicinas</span>
                </h1>    
            </div>

            <div>
                {!loading && <CustomAlert alrt={cstmAlert} />}
                {accountConfirmed && 
                    <Link className="block text-center my-5 text-neutral-600" to='/'>
                        Inicia sesión
                    </Link>
                }
            </div>

        </>
    )
}

export default ConfirmAccount