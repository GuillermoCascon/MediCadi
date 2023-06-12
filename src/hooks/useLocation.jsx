import { useContext } from "react";
import LocationContext from "../context/LocationsProvider"

const useLocation = () => {
    return useContext(LocationContext)
}

export default useLocation