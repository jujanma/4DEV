import React from 'react'

const Mensaje = ({ children }) => {
    return (
        <div className="bg-sky-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md mt-2">
            {children}
        </div>
    )
}

export default Mensaje