import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import getIcon from '../../helpers/getIcon';

const LocationModal = ({ isOpen, closeModal, ...data }) => {
    const [name, setName] = useState(data?.name ?? '');
    const [icon, setIcon] = useState(data?.icon ?? '');

    const options = [
        { value: 'Ambulance', label: 'Ambulancia' },
        { value: 'Briefcase', label: 'Maletin' },
        { value: 'Clinic', label: 'Centro de salud' },
        { value: 'Hospital', label: 'Hospital' },
        { value: 'Storage', label: 'Armario' }
    ]

    // useEffect(() => {
    //     if (data) {
    //         setEditMode(true);
    //         setIcon(data.icon);
    //     }
    // }, []);

    useEffect(() => {
        Modal.setAppElement("body");
    }, []);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleIconChange = (e) => {

        setIcon(e.target.value);
        console.log(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        closeModal();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} className='fixed inset-0 flex items-center justify-center'>
            <div className='p-6 rounded-lg shadow-xl  bg-white'>
                <h2 className='text-2xl font-bold mb-4'>{data.nombre === '' ? 'Edita la localización' : 'Añade una localización'}</h2>
                <form >
                    <label>
                        Nombre:
                        <input type="text" value={name} onChange={handleNameChange} className='border border-gray-300 rounded-md p-2 w-full' />
                    </label>
                    <div className='mt-10'>
                        <label >
                            Icono:
                            <select value={icon} onChange={handleIconChange} className='border border-gray-300 rounded-md p-2 w-full'>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}

                            </select>

                        </label>
                    </div>


                </form>
                <div className='mt-5 h-10 w-full flex justify-center '>
                    {getIcon(icon)}
                </div>
                <div className="flex justify-between mt-6">
                    <button
                        onClick={handleSubmit}
                        className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md mr-2"
                    >
                        Guardar
                    </button>
                    <button
                        type="button"
                        onClick={closeModal}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-md"
                    >
                        Cancelar
                    </button>
                </div>
            </div>

        </Modal>
    );
};

export default LocationModal