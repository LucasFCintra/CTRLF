'use client';

import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function FormElements() {
    const [openModal, setOpenModal] = useState();
    const emailInputRef = useRef(null)
    const props = { openModal, setOpenModal, emailInputRef };

    return (
        <>
            <div class="p-4 sm:ml-64">
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                        <ul class="flex flex-wrap mb-6">
                            <li class="mr-2">
                                <Link to="/Categorias" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Receitas</Link>
                            </li>
                            <li class="mr-2">
                                <Link to="/Categorias/Despesas" class="inline-block p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active dark:text-red-500 dark:border-red-500">Despesas</Link>
                            </li>
                        </ul>

                        <div className='fixed top-24 right-12 group'>
                            <Button type="button" data-dial-toggle="speed-dial-menu-top-right" aria-controls="speed-dial-menu-top-right" aria-expanded="false" class="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800" onClick={() => props.setOpenModal('initial-focus')}>
                                <svg class="w-5 h-5 transition-transform group-hover:rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </Button>
                            <Modal
                                show={props.openModal === 'initial-focus'}
                                size="md"
                                popup
                                onClose={() => props.setOpenModal(undefined)}
                                initialFocus={props.emailInputRef}
                            >
                                <Modal.Header />
                                <Modal.Body>
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="email" value="Your email" />
                                            </div>
                                            <TextInput id="email" ref={props.emailInputRef} placeholder="name@company.com" required />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="password" value="Your password" />
                                            </div>
                                            <TextInput id="password" type="password" required />
                                        </div>

                                        <div className="w-full">
                                            <button type="button" class="w-full focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800">Red</button>
                                        </div>

                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>

                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-red-700 uppercase bg-red-100 dark:bg-red-700 dark:text-red-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Product name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Color
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Category
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Price
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            <span class="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Apple MacBook Pro 17"
                                        </th>
                                        <td class="px-6 py-4">
                                            Silver
                                        </td>
                                        <td class="px-6 py-4">
                                            Laptop
                                        </td>
                                        <td class="px-6 py-4">
                                            $2999
                                        </td>
                                        <td class="px-6 py-4 text-right">
                                            <a class="font-medium text-red-600 dark:text-red-500 hover:underline" data-dial-toggle="speed-dial-menu-top-right" aria-controls="speed-dial-menu-top-right" aria-expanded="false" onClick={() => props.setOpenModal('initial-focus')}>Edit</a>
                                            <Modal
                                                show={props.openModal === 'initial-focus'}
                                                size="md"
                                                popup
                                                onClose={() => props.setOpenModal(undefined)}
                                                initialFocus={props.emailInputRef}
                                            >
                                                <Modal.Header />
                                                <Modal.Body>
                                                    <div className="space-y-6">
                                                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                                                        <div>
                                                            <div className="mb-2 block">
                                                                <Label htmlFor="email" value="Your email" />
                                                            </div>
                                                            <TextInput id="email" ref={props.emailInputRef} placeholder="name@company.com" required />
                                                        </div>
                                                        <div>
                                                            <div className="mb-2 block">
                                                                <Label htmlFor="password" value="Your password" />
                                                            </div>
                                                            <TextInput id="password" type="password" required />
                                                        </div>

                                                        <div className="w-full">
                                                            <button type="button" class="w-full focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">Red</button>
                                                        </div>

                                                    </div>
                                                </Modal.Body>
                                            </Modal>
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>

                    </div>




                </div>
            </div>

        </>
    )
}

