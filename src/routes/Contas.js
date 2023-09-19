'use client';
import React, { Component } from 'react'


import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Contas() {
    const [openModal, setOpenModal] = useState();
    const [openModalPost, setOpenModalPost] = useState();
    const emailInputRefPost = useRef(null)
    const emailInputRef = useRef(null)
    const props = { openModal, setOpenModal, emailInputRef };
    const propsPost = { openModalPost, setOpenModalPost, emailInputRefPost };
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fazendo a requisição GET usando o Axios quando o componente é montado
        const api = 'http://localhost:8687/api/rec/categoria/' + 1

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
    const [inputNome, setInputNome] = useState('');
    const [inputDesc, setInputDesc] = useState('');

    async function updateData() {

        try {
            const data = {
                idCat: document.getElementById('idEdit').value,
                nomeCat: inputNome,//document.getElementById('nomeEdit').value,
                descCat: inputDesc, //document.getElementById('descEdit').value
            }
            const response = await axios.put(`http://localhost:8687/api/categoria`, data);
            console.log("Clicou: " + JSON.stringify(response))

            if (response.status == 200) {
                window.location.href = "/Categorias"


            }

            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function postData() {

        try {
            const data = {
                // idCat: document.getElementById('idEdit').value,
                nomeCat: inputNome,//document.getElementById('nomeEdit').value,
                descCat: inputDesc, //document.getElementById('descEdit').value
                ativoCat: 'A',
                fkUserCat: 1, //depois pegar esse valor do localStorage
                tipoCat: 'receita'
            }
            // console.log("Clicou: " + JSON.stringify(data))

            const response = await axios.post(`http://localhost:8687/api/categoria`, data);
            console.log('Teste' + JSON.stringify(response));

            if (response.status == 200) {
                window.location.href = "/Categorias"


            }

        } catch (error) {

            if (error == 'AxiosError: Request failed with status code 418') {
                alert('Erro ao inserir \n Categoria ja cadastrada ')

            }
            console.error('testeS ' + error);
        }
    }

    return (
        <><div class="p-4 sm:ml-64">
            <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <div class="grid grid-cols-4 gap-4 mb-4">
                    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex flex-col items-center justify-center h-48 rounded-3xl bg-white dark:bg-gray-900">
                            <p class="text-2xl text-blue-500 dark:text-white">
                                <svg class="w-10 h-10 text-blue-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 9h2m3 0h5M1 5h18M2 1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z" />
                                </svg>
                            </p>
                            <p class="text-2xl text-blue-500 dark:text-white">Nova conta</p>
                        </div>
                    </div>

                    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        <div className='flex justify-end px-4 pt-4 group'>
                            <Button type="button" data-dial-toggle="speed-dial-menu-top-right" aria-controls="speed-dial-menu-top-right" aria-expanded="false" class="flex items-center justify-center text-white bg-transparent rounded-full w-14 h-1 dark:bg-transparent pt-4" onClick={() => propsPost.setOpenModalPost('initial-focus')}>
                                <svg class="w-6 h-6 text-blue-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m13.835 7.578-.005.007-7.137 7.137 2.139 2.138 7.143-7.142-2.14-2.14Zm-10.696 3.59 2.139 2.14 7.138-7.137.007-.005-2.141-2.141-7.143 7.143Zm1.433 4.261L2 12.852.051 18.684a1 1 0 0 0 1.265 1.264L7.147 18l-2.575-2.571Zm14.249-14.25a4.03 4.03 0 0 0-5.693 0L11.7 2.611 17.389 8.3l1.432-1.432a4.029 4.029 0 0 0 0-5.689Z" />
                                </svg>
                            </Button>
                            <Modal
                                show={propsPost.openModalPost === 'initial-focus'}
                                size="md"
                                popup
                                onClose={() => propsPost.setOpenModalPost(undefined)}
                                initialFocus={propsPost.emailInputRefPost}
                            >
                                <Modal.Header />
                                <Modal.Body>
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Criar Categoria</h3>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label
                                                    value="Nome da Categoria"
                                                />
                                            </div>
                                            <TextInput
                                                addon="Nome"
                                                id="nomePost"
                                                placeholder='Nome da Categoria'
                                                type='text'
                                                value={inputNome} onChange={event => setInputNome(event.target.value)}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label
                                                    value="Descrição da Categoria"
                                                />
                                            </div>
                                            <TextInput
                                                addon="Descrição"
                                                id="descPost"
                                                placeholder='Descrição da Categoria'
                                                value={inputDesc} onChange={event => setInputDesc(event.target.value)}
                                            />
                                        </div>

                                        <div className="w-full">
                                            <button type="button" onClick={postData} class="w-full focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">Salvar</button>
                                        </div>

                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>

                        <div class="flex flex-col items-start pb-10 ml-5">
                            <div class='gird grid-rows-2'>
                                <ul role="list" class="space-y-5">
                                    <li class="flex space-x-3 items-center">
                                        <p class="text-2xl text-blue-500 dark:text-white">
                                            <svg class="w-7 h-7 text-blue-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.905 1.316 15.633 6M18 10h-5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h5m0-5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1m0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-3m-6.367-9L7.905 1.316 2.352 6h9.281Z" />
                                            </svg>
                                        </p>
                                        <h5 class="mb-1 pt-2 text-xl font-medium text-gray-900 dark:text-white">Carteira</h5>
                                    </li>
                                </ul>

                            </div>
                            <div className='grid grid-rows-2 mt-5'>
                                <div className='grid grid-cols-2'>
                                    <span class="text-l font-bold leading-tight text-gray-500 dark:text-gray-400">Saldo atual</span>
                                    <span class="ml-16 text-l font-bold leading-tight text-gray-500 dark:text-gray-400">R$ 00,00</span>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <span class="pt-3 text-l font-bold leading-tight text-gray-500 dark:text-gray-400">Saldo previsto</span>
                                    <span class="pt-3 ml-16 text-l font-bold leading-tight text-gray-500 dark:text-gray-400">R$ 00,00</span>
                                </div>

                            </div>

                        </div>
                    </div>


                    {/*<div class="flex flex-col h-48 rounded-3xl bg-white dark:bg-gray-900">
                        <div class="grid grid-rows-2 mb-4 ml-4">
                            <ul role="list" class="space-y-5 my-7">
                                <li class="flex space-x-3 items-center">
                                <img class="w-8 h-8 mb-3 rounded-full shadow-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="Bonnie image" />
                                    <p class="text-2xl text-gray-800 dark:text-white">
                                        <svg class="w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.905 1.316 15.633 6M18 10h-5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h5m0-5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1m0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-3m-6.367-9L7.905 1.316 2.352 6h9.281Z" />
                                        </svg>
                                    </p>
                                    <span class="pt-2 text-l font-bold leading-tight text-gray-500 dark:text-gray-400">Carteira</span>
                                    <span class="pt-2 text-l font-bold leading-tight text-gray-500 dark:text-gray-400">R$00,00</span>
                                </li>
                            </ul>

                            <div className='grid grid-rows-2'>
                                <span class="pt-2 text-l font-bold leading-tight text-gray-500 dark:text-gray-400">Saldo atual</span>
                                <span class="pt-2 text-l font-bold leading-tight text-gray-500 dark:text-gray-400">Saldo previsto</span>
                            </div>
                        </div>


                    </div>
                    */}
                    <div></div>
                    <div class="grid grid-rows-2 gap-4 mb-4">
                        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        </div>
                        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        </div>
                    </div>
                </div>
            </div>
        </div ></>
    )
}
