import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <>
                <footer class="bg-white shadow dark:bg-gray-900">
                    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                        <div class="ml-60 sm:flex sm:items-center sm:justify-between">
                            <a href="/" class="flex items-center mb-4 sm:mb-0">
                                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CTRL F</span>
                            </a>
                            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                                <li>
                                    <Link to="/SobreNos" class="mr-4 hover:underline md:mr-6">Sobre nós</Link>
                                </li>
                                <li>
                                    <a href="#" class="mr-4 hover:underline md:mr-6">Política de pivacidade</a>
                                </li>
                                <li>
                                    <Link to="/Contato" class="hover:underline">Contato</Link>
                                </li>
                            </ul>
                        </div>
                        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 CTRLF™. All Rights Reserved.</span>
                    </div>
                </footer>


            </>
        )
    }
}
