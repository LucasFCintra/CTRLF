'use client';

import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

/*
const userLoggedIn = localStorage.getItem('userLoggedIn');
const userId = localStorage.getItem('userLoggedID');

console.log(userLoggedIn +' | '+ userId)
if(userLoggedIn == false && userId != undefined){
    window.location.href='/login'
}*/

export default function FormElements() {
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
                idCat: document.getElementsByClassName('idCat').value,
                nomeCat: inputNome,//document.getElementById('nomeEdit').value,
                descCat: inputDesc, //document.getElementById('descEdit').value
            }
            const response = await axios.put(`http://localhost:8687/api/categoria`, data);
            console.log("Clicou: " + JSON.stringify(response))

            if(response.status == 200 ){
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
                ativoCat:'A',
                fkUserCat:1, //depois pegar esse valor do localStorage
                tipoCat:'receita'
            }
            // console.log("Clicou: " + JSON.stringify(data))

            const response = await axios.post(`http://localhost:8687/api/categoria`, data);
            console.log('Teste'+JSON.stringify(response));
 
            if(response.status == 200 ){
                window.location.href = "/Categorias"
                
            
            }

        } catch (error) { 

            if(error == 'AxiosError: Request failed with status code 418') {
                alert('Erro ao inserir \n Categoria ja cadastrada ')

            }
            console.error('testeS '+error);
        }
    }
    return (
        <>
            <div class="p-4 sm:ml-64">
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">

                    <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                        <ul class="flex flex-wrap mb-6">
                            <li class="mr-2">
                                <Link to="/Categorias" class="inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500">Categorias</Link>
                            </li>
                        </ul>

                        <div className='fixed top-24 right-12 group'>
                            <Button type="button" data-dial-toggle="speed-dial-menu-top-right" aria-controls="speed-dial-menu-top-right" aria-expanded="false" class="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800" onClick={() => propsPost.setOpenModalPost('initial-focus')}>
                                <svg class="w-5 h-5 transition-transform group-hover:rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
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
                                                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Adicionar Categoria</h3>
                                                            <div>
                                                                <div className="mb-2 block">
                                                                    <Label
                                                                        value="Nome"
                                                                    />
                                                                </div>
                                                                <TextInput
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
                                                                        value="Descrição"
                                                                    />
                                                                </div>
                                                                <TextInput
                                                                    id="descPost"
                                                                    placeholder='Descrição da Categoria'
                                                                    value={inputDesc} onChange={event => setInputDesc(event.target.value)}
                                                                />
                                                            </div>

                                                            <div className="w-full">
                                                                <button type="button" onClick={postData} class="w-full focus:outline-none text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-800">Salvar</button>
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
                                <thead class="text-xs text-orange-700 uppercase bg-orange-100 dark:bg-orange-700 dark:text-orange-400">
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
                                        <tr  key={item.idCat} className='idCat' value={item.idCat}>
                                            <td class='pl-6'>{item.nomeCat}</td>
                                            <td class='pl-6'>{item.descCat}</td>
                                            <td class="px-6 py-4 text-right">
                                                <a class="font-medium text-orange-600 dark:text-orange-500 hover:underline" data-dial-toggle="speed-dial-menu-top-right" aria-controls="speed-dial-menu-top-right" aria-expanded="false" onClick={() => props.setOpenModal('initial-focus')}>Edit</a>
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
                                                                    <Label
                                                                        value="Nome da Categoria"
                                                                    />
                                                                </div>
                                                                <TextInput
                                                                    addon="Nome"
                                                                    id="nomeEdit"
                                                                    placeholder={item.nomeCat}
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
                                                                    id="descEdit"
                                                                    placeholder={item.descCat}
                                                                    value={inputDesc} onChange={event => setInputDesc(event.target.value)}
                                                                />
                                                                <TextInput
                                                                    id="idEdit"
                                                                    value={item.idCat}
                                                                    type='hidden'
                                                                    disabled
                                                                />
                                                            </div>

                                                            <div className="w-full">
                                                                <button type="button" onClick={updateData} class="w-full focus:outline-none text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-800">Atualizar</button>
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