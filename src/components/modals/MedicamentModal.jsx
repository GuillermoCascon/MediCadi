import { useState, useEffect } from "react";
import Modal from "react-modal";
import CustomAlert from "../CustomAlert";
import useMedicaments from "../../hooks/useMedicaments";
import useMyLocation from "../../hooks/useMyLocation";

const MedicamentModal = ({ isOpen, closeModal, ...data }) => {
    const [name, setName] = useState(data?.name ?? '')
    const [cuantity, setCuantity] = useState(data?.cuantity ?? 1)
    const [caducity, setCaducity] = useState(data?.caducity ?? new Date())
    const [location, setLocation] = useState(data?.location ?? null)

    const [cstmAlert, setCstmAlert] = useState({})

    const { saveMedicament, medicament } = useMedicaments()
    const { locations } = useMyLocation()

    useEffect(() => {
        Modal.setAppElement('body')
    }, [medicament])

    const { msg } = cstmAlert

    const handleSubmit = e => {
        e.preventDefault()
        if([name, cuantity, caducity, location].includes('')){
            setCstmAlert({
                msg:'Todos los campos son obligatorios',
                error:true
            })
            setTimeout(()=>{
                setCstmAlert({})
            }, 3000)
            return
        }
        saveMedicament({name, caducity, cuantity, location})
        setCstmAlert({
            msg:'Guardado correctamente',
            error:false
        })
        setTimeout(()=>{
            setCstmAlert({})
            setName('')
            setCaducity(null)
            setCuantity(0)
            setLocation(null)
            closeModal()
        }, 3000)
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} className='fixed inset-0 w-auto flex items-center justify-center'>
            <div className='p-6 rounded-lg shadow-xl bg-white'>
                <h2 className='text-2xl font-bold mb-4'>
                    {data.nombre === '' ? 'Edita el medicamento' : 'Añade un medicamento'}
                </h2>
                {msg && <CustomAlert
                    alrt={cstmAlert}
                />}
                <form>
                    <label className='mt-2'>
                        Nombre:
                        <input type='text' value={name} onChange={e => setName(e.target.value)} className='border border-gray-300 rounded-md shadow-sm p-2 w-full' />
                    </label>
                    <label className='mt-2'>
                        Cantidad:
                        <input type='number' value={cuantity} onChange={e => setCuantity(e.target.value)} className='border border-gray-300 rounded-md shadow-sm p-2 w-full' />
                    </label>
                    <label className='mt-2'>
                        Caducidad:
                        <input type='date' value={caducity} onChange={e => setCaducity(e.target.value)} className='border border-gray-300 rounded-md shadow-sm p-2 w-full' />
                    </label>
                    {location?._id ?
                        <label>
                            Localizacion:
                            <select onChange={e => setLocation(e.target.value)}>
                                {locations.map(location => (
                                    <option key={location.objectId} value={location.objectId}>
                                        {location.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                        :
                        <p className='text-neutral-600'>El medicamento se guardará en
                            <span className='text-teal-600'>{location}</span>
                        </p>
                    }
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
    )
}

export default MedicamentModal