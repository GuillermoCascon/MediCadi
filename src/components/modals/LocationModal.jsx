import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import Ambulance from '../../imgs/Ambulance';
import Briefcase from '../../imgs/Briefcase';
import Clinic from '../../imgs/Clinic';
import Hospital from '../../imgs/Hospital';
import Storage from '../../imgs/Storage';

const LocationModal = ({ isOpen, closeModal, ...data }) => {
    const [name, setName] = useState(data?.name ?? '');
    const [icon, setIcon] = useState(data?.icon ?? '');
    const [selectedIcon, setSelectedIcon] = useState(data?.icon ? data.icon : null);

    useEffect(() => {
        Modal.setAppElement("body");
        
    }, []);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };


    const handleClick = (index) => {
        if (index !== selectedIcon) {
        setIcon(index);
        setSelectedIcon(index);
    }
    
    };

    const renderList = () => {
        const items = [
            { id: 'Ambulance', component: <Ambulance /> },
            { id: 'Briefcase', component: <Briefcase /> },
            { id: 'Clinic', component: <Clinic /> },
            { id: 'Hospital', component: <Hospital /> },
            { id: 'Storage', component: <Storage /> }
        ];

        return items.map((item) => (
            <li className={`h-10 w-10 m-2 border rounded-lg p-0.5 ${item.id === selectedIcon ? 'border-teal-600 border-2' : 'border-gray-300'}`} 
                key={item.id} 
                onClick={() => handleClick(item.id)}>
                {item.component}
            </li>
        ));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        closeModal();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} className='fixed inset-0 w-auto flex items-center justify-center'>
            <div className='p-6  rounded-lg shadow-xl  bg-white'>
                <h2 className='text-2xl font-bold mb-4'>{data.nombre === '' ? 'Edita la localización' : 'Añade una localización'}</h2>
                <form >
                    <label>
                        Nombre:
                        <input type="text" value={name} onChange={handleNameChange} className='border border-gray-300 rounded-md shadow-sm p-2 w-full' />
                    </label>
                    <div className='mt-2'>
                        <label >
                            Icono:
                            <ul className='flex items-center justify-around border border-gray-300 rounded-lg shadow-sm bg-neutral-100 '>
                                {renderList()}
                            </ul>
                        </label>
                    </div>
                </form>

                
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