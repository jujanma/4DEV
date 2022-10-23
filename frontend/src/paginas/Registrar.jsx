import { useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta"
import axios from 'axios'

const Registrar = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repetirPassword, setRepetirPassword] = useState('');
    const [rol, setRol] = useState('');
    const [alerta, setAlerta] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        if([nombre, email, password, repetirPassword, rol].includes('')){
            setAlerta(true)
            return;
        }
        setAlerta(false)

       console.log("Creando usuario ") 
    }

      

    return (
        <>
            <h1 className="text-sky-600 font-black text-4xl  capitalize">Crea tu cuenta y administra tus {' '} <span className="text-slate-700">Productos</span></h1>

            {alerta && <Alerta><p>Todos los campos son obligatorios</p></Alerta>}

            <form 
                className="my-10 bg-slate-100 shadow rounded-lg p-10"
                onSubmit={handleSubmit}
            >
                <div className="my-5">
                    <label
                        className="uppercase text-gray-600 block txt-xl font-bold"
                        htmlFor="nombre"
                    >Nombre</label>
                    <input
                        id="nombre"
                        type="text"
                        placeholder="Tu nombre"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                        value={nombre}
                        onChange={e=> setNombre(e.target.value)}
                    />
                </div>

                <div className="my-5">
                    <label
                        className="uppercase text-gray-600 block txt-xl font-bold"
                        htmlFor="email"
                    >Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email de Registro"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                    />
                </div>

                <div className="my-5">
                    <label
                        className="uppercase text-gray-600 block txt-xl font-bold"
                        htmlFor="password"
                    >Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password de Registro"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                        value={password}
                        onChange={e=> setPassword(e.target.value)}
                    />
                </div>

                <div className="my-5">
                    <label
                        className="uppercase text-gray-600 block txt-xl font-bold"
                        htmlFor="password2"
                    >Repetir Password</label>
                    <input
                        id="password2"
                        type="password"
                        placeholder="Repetir tu Password"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                        value={repetirPassword}
                        onChange={e=> setRepetirPassword(e.target.value)}
                    />
                </div>

                <div className="my-5">
                    <label
                        className="uppercase text-gray-600 block txt-xl font-bold"
                        htmlFor="rol"
                    >Rol</label>
                    <input
                        id="rol"
                        type="text"
                        placeholder="usuario o vendedor"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                        value={rol}
                        onChange={e=> setRol(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    value="CREAR CUENTA"
                    className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
                />

            </form>

            <nav className="lg:flex lg:justify-between">
                <Link
                    className="block text-center my-5 text-slate-500 uppercase text-sm"
                    to="/"
                >¿Ya tienes una cuenta? Incia Sesión </Link>
            </nav>

        </>
    )
}

export default Registrar