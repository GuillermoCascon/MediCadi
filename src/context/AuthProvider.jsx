import { useState, useEffect, createContext } from "react";
import axiosClient from "../config/axios";

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true)
    const [auth, setAuth] = useState({})

    useEffect(()=>{
        
        const autenticateUser = async () => {
            const token = localStorage.getItem('token')
            if(!token){
                setLoading(false)
                return
            }
            const config = {
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const {data} = await axiosClient('/users/account', config)
                setAuth(data)
            } catch (error) {
                console.log(error)
                setAuth({})
            }
            setLoading(false)
        }
        autenticateUser()
        
    }, [])

    const closeSession = () => {
        localStorage.removeItem('token')
        setAuth({})
    }

    const updateAccount = async data => {
        const token = localStorage.getItem('token')
        if(!token){
            setLoading(false)
            return
        }
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const url = `/users/account/${data._id}`
            await axiosClient.put(url, data, config)
            return {
                msg: 'Acutalizado correctamente',
                error: false
            }
        } catch (error) {
            return{
                msg: error.response.data.msg,
                error:true
            }
        }
    }

    const savePassword = async data => {
        const token = localStorage.getItem('token')
        if(!token){
            setLoading(false)
            return
        }
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const url = '/users/update-password'
            const { datos } = await axiosClient.put(url, data, config)
            console.log(datos)
        } catch (error) {
            return{
                msg: error.response.data.msg,
                error:true
            }
        }
    }

    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth, 
                loading,
                closeSession,
                updateAccount, 
                savePassword
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext