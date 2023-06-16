import React from 'react'
import getIcon from '../helpers/getIcon.js'
import EditSVG from '../imgs/EditSVG';
import DeleteSVG from '../imgs/DeleteSVG';
//import LocationModal from './modals/LocationModal.jsx';
const LocationCard = ({ name, icon }) => {
  const iconSvg = getIcon(icon);

  return (
    <div className='flex flex-row justify-between rounded-md bg-neutral-200 m-4 p-4 shadow-md'>
      <div className='flex flex-row gap-4'>
        <div className='h-20 w-20'>{iconSvg}</div>
        <div className='font-bold text-xl text-neutral-700'>{name}</div>
      </div>

      <div className='flex flex-row mt-auto gap-2'>
        <button className='h-6 w-6'>
          <EditSVG />
        </button>
        <button className='h-6 w-6'>
          <DeleteSVG />
        </button>
      </div>
    </div>
  );
};

export default LocationCard