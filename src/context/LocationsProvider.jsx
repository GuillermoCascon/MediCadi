import { createContext, useState, useEffect } from "react"
import axiosClient from "../config/axios"
import useAuth from "../hooks/useAuth"

const LocationContext = createContext()

export const LocationProvider = ({ children }) => {
    
    const [locations, setLocations] = useState([])
    const [location, setLocation]= useState({})
    const {auth} = useAuth()

    useEffect(() => {
        const getLocations = async () => {
            try {
                const token = localStorage.getItem('token')
                if(!token) return
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const {data} = await axiosClient('/locations', config)
                setLocations(data)
            } catch (error) {
                console.log(error)
            }
        }
        getLocations()
    }, [auth, locations])

    const saveLocation = async (location) => {
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        if (location.id){
            try {
                const {data} = await axiosClient.put(`/locations/${location.id}`, location, config)
                const locationsUpdated = locations.map(locationState => locationState._id === data._id ? data : locationState)
                setLocations(locationsUpdated)
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const { data } = await axiosClient('/locations', location, config)
                const { createdAt, updatedAt, __v, ...locationStored } = data
                setLocations([locationStored], ...locations)
            } catch (error) {
                console.log(error);
            }
        }
    }

    const setLocationEdition = (location) => {
        setLocation(location)
    }

    const deleteLocation = async id => {
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        const askCosnfirm = confirm('¿Está seguro que desea eliminar esta localización?')
        if (askCosnfirm){
            try {
                const {data} = await axiosClient.delete(`/locations/${id}`, config)
                const locationsUpdated = locations.filter(locationState => locationState._id !== id)
                setLocations(locationsUpdated)
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <LocationContext.Provider
            value={{
                locations,
                saveLocation,
                location,
                setLocationEdition,
                deleteLocation
            }}
        >
            {children}
        </LocationContext.Provider>
    )
}

export default LocationContext