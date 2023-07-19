import { useState } from 'react'
import EditSVG from '../imgs/EditSVG'
import DeleteSVG from '../imgs/DeleteSVG'
import getIcon from '../helpers/getIcon'
const MedicamentCard = ({ medicament, location }) => {
    const { name, caducity, cuantity } = medicament
    const { icon } = location


    return (
        <div className='flex flex-col m-4 p-4 bg-neutral-100 rounded-lg shadow-md'>
            <div className='flex flex-row '>
                <p className='font-bold text-xl'>{name}</p>
                <p className='text-neutral-700'>{caducity}</p>
            </div>
            <div>
                <p className='text-neutral-700'>{cuantity}</p>
            </div>
            <div className='flex flex-col'>
                <div className='h-5 w-5'>
                    {getIcon(icon)}
                </div>
                <div className='flex flex-row'>
                    <button>
                        <EditSVG />
                    </button>
                    <button>
                        <DeleteSVG />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default MedicamentCard