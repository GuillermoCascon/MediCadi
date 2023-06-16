import useMyLocation from "../hooks/useMyLocation";
import LocationCard from "../components/LocationCard";
import LocationModal from "../components/modals/LocationModal";
import { useState } from "react";
//import testData from '../helpers/testData.js'

const Admin = () => {
    const {locations} = useMyLocation()
    const data = locations
    // const data = testData()
    const [modalOpen, setModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);
  
    const handleOpenModal = (data) => {
      setModalData(data);
      setModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalOpen(false);
      setModalData(null);
    };

    return (
        <div className="flex flex-col justify-center items-center w-auto p-10">
            {data.length < 1 ? (
                <div className='text-xl text-justify'>
                    <p>No se han encotrado localizaciones, comience creando una para gestionarla, así como sus medicamentos.</p>
                </div>
            ) : (
                <div className='flex flex-col w-full'>
                    {data.map((location, index) => (
                        <LocationCard key={index} name={location.name} icon={location.icon} />
                    ))}
                </div>
            )}

            <div className="flex justify-center items-center font-bold text-4xl text-teal-600 rounded-full bg-neutral-200 h-10 w-10 shadow-md mt-10">
                <button onClick={handleOpenModal}>+</button>
                
            </div>
            <LocationModal isOpen={modalOpen} closeModal={handleCloseModal} data={modalData} />
        </div>
    )
}

export default Admin
