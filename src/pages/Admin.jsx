import useMyLocation from "../hooks/useMyLocation";
import testData from '../helpers/testData.js'
import LocationCard from "../components/LocationCard";
const Admin = () => {
    const {locations} = useMyLocation()
    const data = locations
    // const data = []
    return (
        <div className="flex flex-col justify-center items-center w-auto">
            {data.length < 1 ? (
                <div className='text-xl'>
                    <p>No se han encotrado localizaciones, comience creando una para gestionarla, así como sus medicamentos</p>
                </div>
            ) : (
                <div className='flex flex-col w-full'>
                    {data.map((location, index) => (
                        <LocationCard key={index} name={location.name} icon={location.icon} />
                    ))}
                </div>
            )}

            <div className="flex justify-center items-center font-bold text-4xl text-teal-600 rounded-full bg-neutral-200 h-10 w-10 shadow-md mt-10">
                <button>+</button>
                
            </div>
        </div>
    )
}

export default Admin
