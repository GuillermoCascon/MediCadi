import { createContext, useState, useEffect } from "react"
import axiosClient from "../config/axios"
import useAuth from "../hooks/useAuth"

const MedicamentContext = createContext()

export const MediciamentsProvider = ({ children }) => {
    const [medicaments, setMedicaments] = useState([])
    const [medicament, setMedicament] = useState({})
    const { auth } = useAuth()

    const getConfig = () => {
        const token = localStorage.getItem('token')
        if (!token) return
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        return config
    }
    useEffect(() => {
        const config = getConfig()
        const getMedicaments = async () => {
            try {
                const { data } = await axiosClient('/medicaments', config)
                setMedicament(data);
            } catch (error) {
                console.log(error)
            }
        }
        getMedicaments()
    }, [auth, medicaments])

    const savaMedicament = async (medicament) => {
        const config = getConfig()
        //Check wether is an update of medicament or a creation of some
        if(medicament.id){
            try {
                const {data} = await axiosClient.put(`/medicaments/${medicament.id}`, medicament, config)
                const medicamentsUpdated = medicaments.map(medicamentState => medicamentState._id === data._id ? data : medicamentState)
                setMedicaments(medicamentsUpdated)
            } catch (error) {
                console.log(error.response.data.msg);
            }
        } else {
            try {
                const {data} = await axiosClient('/medicaments', medicament, config)
                const {createdAt, updatedAt, __v, ...medicamentStored} = data
                setMedicamenst([medicamentStored], ...medicaments)
            } catch (error) {
                console.log(error.response.data.msg);
            }
        }
    }

    const setEditionMode = (medicament) =>{
        setMedicament(medicament)
    }

    const deleteMedicament = async id => {
        const config = getConfig()
        try {
            const {data} = await axiosClient.delete(`/medicaments/${id}`, config)
            const medicamentsUpdated = medicaments.filter(medicamentState => medicamentState._id !== id)
            setMedicaments(medicamentsUpdated)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <MedicamentContext.Provider
            value={{
                medicament,
                medicaments,
                savaMedicament,
                setEditionMode,
                deleteMedicament
            }}
        >
            {children}    
        </MedicamentContext.Provider>
    )

}

export default MedicamentContext