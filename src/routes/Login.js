import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <>


                <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                    <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                        <h1 className="text-3xl font-semibold text-center text-blue-700 uppercase">
                            Entrar
                        </h1>
                        <form className="mt-6">
                            <div class="mb-6">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="meu@email.com" required />
                            </div>
                            <div class="mb-6">
                                <label for="senha" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                            </div>
                            <a
                                href="#"
                                className="text-xs text-blue-600 hover:underline"
                            >
                                Esqueceu sua senha?
                            </a>
                            <div className="mt-6">
                                <Link to="/">
                                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                        Entrar
                                    </button>
                                </Link>
                            </div>
                        </form>


                        <p className="mt-8 text-xs font-light text-center text-gray-700">
                            {" "}
                            Ainda não possui uma conta?{" "}
                            <Link
                                to="/Cadastro"
                                className="font-medium text-blue-600 hover:underline"
                            >
                                Cadastre-se
                            </Link>
                        </p>
                    </div>
                </div>



            </>
        )
    }
}
