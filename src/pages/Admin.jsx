
import useMyLocation from "../hooks/useMyLocation";
import testData from '../helpers/testData.js'
import LocationCard from "../components/LocationCard";
const Admin = () => {
    //const {locations} = useMyLocation()
    const data = testData
    return (
        <div className='flex flex-col '>
            {data.map((location, index) => (
                <LocationCard key={index} name={location.name} icon={location.icon} />
            ))}
        </div>
    )
}

export default Admin
