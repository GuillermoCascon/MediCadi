import { useContext } from "react";
import LocationContext from "../context/LocationsProvider"

const useMyLocation = () => {
    return useContext(LocationContext)
}

export default useMyLocation