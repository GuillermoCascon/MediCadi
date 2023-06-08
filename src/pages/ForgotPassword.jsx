import HeaderIndex from "../components/HeaderIndex";
import { Link } from "react-router-dom";
import React from 'react'

 const ForgotPassword = () => {
  return (
    <>
        <HeaderIndex />
        <div className="lg:grid grid-cols-2 xl:grid-cols-3 items-center xl:gap-10 ">

                <h2 className="text-teal-600 font-black text-xl text-center xl:text-right">
                    Recupera tu cuenta y gestiona <span className="text-black">Medicinas</span>
                </h2>

                <form className="mt-5 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white xl:col-span-2">
                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold">Email</label>
                        <input
                            className="border w-full p-3 mt-3 bg-gray-100 rounded-xl"
                            type="email"
                            placeholder="Introduce tu email"
                        />
                    </div>
                    
                    
                    <input
                        type="submit"
                        className="bg-teal-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-teal-800 lg:w-auto"
                        value="Enviar instrucciones"
                    />

                    <nav className="mt-10 lg:flex lg:justify-between ">
                        <Link
                            className="block text-center my-5 text-teal-800 underline"
                            to="/"
                        >Volver</Link>
                        
                    </nav>

                </form>
            </div>
    </>
  )
}

export default ForgotPassword
