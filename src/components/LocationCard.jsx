import getIcon from '../helpers/getIcon.js'
import EditSVG from '../imgs/EditSVG';
import DeleteSVG from '../imgs/DeleteSVG';
import { useState, useEffect } from 'react';
//import LocationModal from './modals/LocationModal.jsx';

const LocationCard = ({ location }) => {
  const iconSvg = getIcon(icon);
  const { name, icon } = location
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalData(null);
  };

  useEffect(() => {
    setModalData(location)
  }, [location])

  return (
    <div className='flex flex-row justify-between rounded-md bg-neutral-200 m-4 p-4 shadow-md'>
      <div className='flex flex-row gap-4'>
        <div className='h-20 w-20'>{iconSvg}</div>
        <div className='font-bold text-xl text-neutral-700'>{name}</div>
      </div>

      <div className='flex flex-row mt-auto gap-2'>
        <button className='h-6 w-6' onClick={handleOpenModal}>
          <EditSVG />
        </button>
        <button className='h-6 w-6' >
          <DeleteSVG />
        </button>
        <LocationModal isOpen={modalOpen} closeModal={handleCloseModal} data={modalData} />
      </div>
    </div>
  );
};

export default LocationCard