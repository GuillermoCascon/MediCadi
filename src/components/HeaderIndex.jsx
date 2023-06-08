import logo from '../imgs/logo.png'


const HeaderIndex = () => {
    return (
        <div className="h-32 gap-3 flex justify-center align-middle items-center bg-teal-100">
            <img className="block" src={logo} alt="Logo" style={{ height: "4rem" }} />
            <h1 className="p-2 text-teal-600 font-black text-5xl">MEDI<span className="text-black">CADI</span></h1>
        </div>
    )
}

export default HeaderIndex