'use client';

import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function FormElements() {
    const [openModal, setOpenModal] = useState();
    const emailInputRef = useRef(null)
    const props = { openModal, setOpenModal, emailInputRef };
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        // Fazendo a requisição GET usando o Axios quando o componente é montado
       const api = 'http://localhost:8687/api/rec/categoria/'+1
     
        axios.get(api)
            .then(response => {
                console.log(response.data)
                setItems(response.data);
                setError(null);
            })
            .catch(error => {
                setError(error.message);
            });
    }, []);



    return (
        <>
            <div class="p-4 sm:ml-64">
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">

                    <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                        <ul class="flex flex-wrap mb-6">
                            <li class="mr-2">
                                <Link to="/Categorias" class="inline-block p-4 text-green-600 border-b-2 border-green-600 rounded-t-lg active dark:text-green-500 dark:border-green-500">Receitas</Link>
                            </li>
                            <li class="mr-2">
                                <Link to="/Categorias/Despesas" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Despesas</Link>
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
                                        <button type="button" class="w-full focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">Red</button>
                                        </div>

                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>



                        {error && (
                    <p className="text-red-600 mb-4">Erro ao buscar os itens: {error}</p>
                )}
                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-green-700 uppercase bg-green-100 dark:bg-green-700 dark:text-green-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Nome
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Descrição
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            <span class="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {items.map(item => (
                            <tr key={item.idCat}> 
                                <td>{item.nomeCat}</td>
                                <td>{item.descCat}</td>
                                <td class="px-6 py-4 text-right">
                                            <a class="font-medium text-green-600 dark:text-green-500 hover:underline" data-dial-toggle="speed-dial-menu-top-right" aria-controls="speed-dial-menu-top-right" aria-expanded="false" onClick={() => props.setOpenModal('initial-focus')}>Edit</a>
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
                                                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Editar Categoria</h3>
                                                        <div>
                                                            <div className="mb-2 block">
                                                                <Label htmlFor="email" value="Nome" />
                                                            </div>
                                                            <TextInput id="nomeEdit" ref={props.emailInputRef} value={item.nomeCat} required />
                                                        </div>
                                                        <div>
                                                            <div className="mb-2 block">
                                                                <Label htmlFor="password" value="Descrição" />
                                                            </div>
                                                            <TextInput id="descEdit" type="text" value={item.descCat} required />
                                                            <TextInput id="idEdit" type="hidden" value={item.descCat} required />
                                                        </div>
                                                            
                                                        <div className="w-full">
                                                            <button type="button" class="w-full focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">Atualizar</button>
                                                        </div>

                                                    </div>
                                                </Modal.Body>
                                            </Modal>
                                        </td>
                                   
                            </tr>
                     
                     ))}    
                                    
                                </tbody>
                            </table>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}