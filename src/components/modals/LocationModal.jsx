import { useState, useEffect } from 'react'
import Modal from 'react-modal'

const LocationModal = ({ isOpen, closeModal, ...data }) => {
    const [name, setName] = useState(data?.name || "");
    const [icon, setIcon] = useState(data?.icon || "");
    

    useEffect(() => {
        if (data) {
            setName(data.name);
            setIcon(data.icon);
            
        }
    }, [data]);

    useEffect(() => {
        Modal.setAppElement("body"); // Define el elemento raíz de la aplicación
    }, []);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleIconChange = (e) => {
        setIcon(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        closeModal();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} className='fixed inset-0 flex items-center justify-center'>
            <div className='p-6 rounded-lg shadow-xl'>
                <h2 className='text-2xl font-bold mb-4'>{data.nombre===''?'Edita la localización':'Añade una localización'}</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nombre:
                        <input type="text" value={name} onChange={handleNameChange} className='border border-gray-300 rounded-md p-2 w-full' />
                    </label>
                    <label>
                        Icono:
                        <select value={icon} onChange={handleIconChange} className='border border-gray-300 rounded-md p-2 w-full'>
                            <option value="">Seleccionar</option>
                            <option value="icono1">Icono 1</option>
                            <option value="icono2">Icono 2</option>
                            <option value="icono3">Icono 3</option>

                        </select>
                    </label>
                    <div className="flex justify-between mt-6">
                        <button
                            type="submit"
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
                </form>
            </div>

        </Modal>
    );
};

export default LocationModal