'use client';

import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const userLoggedIn = localStorage.getItem('userLoggedIn');
const userId = localStorage.getItem('userLoggedID');

export default function FormElements() {
    const [openModal, setOpenModal] = useState();
    const [openModalPost, setOpenModalPost] = useState();
    const emailInputRefPost = useRef(null)
    const emailInputRef = useRef(null)
    const props = { openModal, setOpenModal, emailInputRef };
    const propsPost = { openModalPost, setOpenModalPost, emailInputRefPost };
    const [items, setItems] = useState([]);
    const [itemsUp2, setItemsUp2] = useState([]);
    const [error, setError] = useState(null);
    const [error2, setErrorUp2] = useState(null);


    const [inputTipo, setInputTipo] = useState('');
    const [inputDesc, setInputDesc] = useState('');
    const [inputValor, setInputValor] = useState('');
    const [inputValorAtual, setInputValorAtual] = useState('');
    const [inputId, setInputId] = useState('');

    const resetModalPostFields = () => {
        setInputDesc('');
        setInputTipo('');
        setInputValor('');
        setInputValorAtual('');
      };

    useEffect(() => {
        // Fazendo a requisição GET usando o Axios quando o componente é montado
        const api = 'http://localhost:8687/api/conta/' + userId

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

    async function updateInfos(id,desc,tipo,valor,valorAtual) {
        setInputId(id)  
       
       setInputDesc(desc)
       setInputValor(valor)
       setInputTipo(tipo)
       setInputValorAtual(valorAtual)

    }
    async function deleteData(id){
       

        
        const response = await axios.delete(`http://localhost:8687/api/conta/`+id);
        console.log("Clicou: " + JSON.stringify(response))

        if(response.status == 200){
            alert('Conta excluida com sucesso');
            window.location.href = "/Contas"

            }else{
            alert('Erro ao atualizar dados');        
        }
        console.log(response.data);
    }
    async function updateData() {

        try {
            const data = {
                idConta: inputId, 
                descConta: inputDesc,
                valorConta:inputValor,
                tipoConta:inputTipo,
                valorAtualConta:inputValorAtual ,
                fkContaUser:userId
            }
            console.log(data)
            const response = await axios.put(`http://localhost:8687/api/conta`, data);
            console.log("Clicou: " + JSON.stringify(response))

            if (response.status == 200) {
                window.location.href = "/Contas"


            }

            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function postData() {

        try {
            const data = {
                descConta: inputDesc,
                tipoConta: inputTipo,
                valorConta:inputValor,
                valorAtualConta:inputValorAtual,
                fkContaUser:userId,  
                
            }
            console.log("Clicou: " + JSON.stringify(data))

            const response = await axios.post(`http://localhost:8687/api/conta`, data);
            console.log('Teste' + JSON.stringify(response));

            if (response.status == 200) {
                 window.location.href = "/Contas"


            }

        } catch (error) {

            if (error == 'AxiosError: Request failed with status code 418') {
                alert('Erro ao inserir \n Conta ja cadastrada ')

            }
            console.error('testeS ' + error);
        }
    }
    
    return (
        <>
            <div class="p-4 sm:ml-64">
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">

                    <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                        <ul class="flex flex-wrap mb-6">
                            <li class="mr-2">
                                <Link to="/Contas" class="inline-block p-4 text-purple-600 border-b-2 border-purple-600 rounded-t-lg active dark:text-purple-500 dark:border-purple-500">Contas</Link>
                            </li>
                        </ul>

                        <div className='fixed top-24 right-12 group'>
                            <Button type="button" id="postButton"data-dial-toggle="speed-dial-menu-top-right" aria-controls="speed-dial-menu-top-right" aria-expanded="false" class="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800" onClick={() => propsPost.setOpenModalPost('initial-focus')}>
                                <svg class="w-5 h-5 transition-transform group-hover:rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </Button>
                            <Modal
                                show={propsPost.openModalPost === 'initial-focus'}
                                size="md"
                                popup
                                onClose={() => {
                                    propsPost.setOpenModalPost(undefined);
                                    resetModalPostFields(); // Reset the fields when the modal is closed
                                  }}
                                initialFocus={propsPost.emailInputRefPost}
                            >
                                <Modal.Header />
                                <Modal.Body>
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Adicionar Conta</h3>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label
                                                    value="Descição"
                                                />
                                            </div>
                                            <TextInput
                                                id="DescPost"
                                                placeholder='Descrição'
                                                type='text'
                                                value={inputDesc} onChange={event => setInputDesc(event.target.value)}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label
                                                    value="Tipo"
                                                />
                                            </div>
                                            <TextInput
                                                id="descPost"
                                                placeholder='Tipo da Conta'
                                                type='text'
                                                value={inputTipo} onChange={event => setInputTipo(event.target.value)}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label
                                                    value="Valor da conta"
                                                />
                                            </div>
                                            <TextInput
                                                id="DescPost"
                                                placeholder='Valor da conta'
                                                type='float'
                                                value={inputValor} onChange={event => setInputValor(event.target.value)}
                                                required
                                            />
                                        </div>
                                        <div>    
                                            <div className="mb-2 block">
                                            <Label
                                                value="Valor atual da conta"
                                            />
                                        </div>
                                            <TextInput
                                                id="DescPost"
                                                placeholder='Valor atual da conta'
                                                type='text'
                                                value={inputValorAtual} onChange={event => setInputValorAtual(event.target.value)}
                                                required
                                            />
                                        </div>

                                        <div className="w-full">
                                            <button type="button" onClick={postData} class="w-full focus:outline-none text-white bg-purple-500 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-500 dark:hover:bg-purple-600 dark:focus:ring-purple-800">Salvar</button>
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
                                <thead class="text-xs text-purple-700 uppercase bg-purple-100 dark:bg-purple-700 dark:text-purple-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Descição
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Tipo
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Valor da conta
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Valor atual da conta
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            <span class="sr-only">Edit</span>
                                        </th>
                                         <th scope="col" class="px-6 py-3">
                                            <span class="sr-only">Delete</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map(item => (
                                        <tr key={item.idConta}>
                                            <td class='pl-6'>{item.descConta}</td>
                                            <td class='pl-6'>{item.tipoConta}</td>
                                            <td class='pl-6'>{item.valorConta}</td>
                                            <td class='pl-6'>{item.valorAtualConta}</td>
                                            <td class="px-6 py-4 text-right">
                                            <button value={item.idConta} id='idLancEdit' onClick={() => updateInfos(item.idConta,item.descConta,item.tipoConta,item.valorConta,item.valorAtualConta) & props.setOpenModal('initial-focus')} >
                                                    <a class="font-medium text-green-600 dark:text-green-500 hover:underline" data-dial-toggle="speed-dial-menu-top-right" aria-controls="speed-dial-menu-top-right" aria-expanded="false"  >Edit</a>
                                                </button> 
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
                                                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Editar Conta</h3>
                                                            <div>
                                                                <div className="mb-2 block">
                                                                    <Label
                                                                        value="Descrição da Conta"
                                                                    />
                                                                </div>
                                                                <TextInput
                                                                    //addon="Nome"
                                                                    id="DescEdit"
                                                                    placeholder={item.descConta}
                                                                    type='text'
                                                                    value={inputDesc} onChange={event => setInputDesc(event.target.value)}
                                                                    required
                                                                />
                                                            </div>
                                                            <div>
                                                                <div className="mb-2 block">
                                                                    <Label
                                                                        value="Tipo da Conta"
                                                                    />
                                                                </div>
                                                                <TextInput
                                                                    //addon="Descrição"
                                                                    id="tipoEdit"
                                                                    placeholder={item.tipoConta}
                                                                    value={inputTipo} onChange={event => setInputTipo(event.target.value)}
                                                                />
                                                            </div>
                                                            <div>
                                                                <div className="mb-2 block">
                                                                    <Label
                                                                        value="Valor da Conta"
                                                                    />
                                                                </div>
                                                                <TextInput
                                                                    //addon="Nome"
                                                                    id="valorEdit"
                                                                    placeholder={item.valorConta}
                                                                    type='text'
                                                                    value={inputValor} onChange={event => setInputValor(event.target.value)}
                                                                    required
                                                                />
                                                            </div>
                                                            <div>
                                                                <div className="mb-2 block">
                                                                    <Label
                                                                        value="Valor atual da Conta"
                                                                    />
                                                                </div>
                                                                <TextInput
                                                                    //addon="Nome"
                                                                    id="valorAtualEdit"
                                                                    placeholder={item.valorAtualConta}
                                                                    type='text'
                                                                    value={inputValorAtual} onChange={event => setInputValorAtual(event.target.value)}
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="w-full">
                                                                <button type="button" onClick={updateData} class="w-full focus:outline-none text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-500 dark:hover:bg-purple-600 dark:focus:ring-purple-800">Atualizar</button>
                                                            </div>

                                                        </div>
                                                    </Modal.Body>
                                                </Modal>
                                            </td>
                                            <td>
                                                
                                            <button value={item.idConta} id='idLancEdit' onClick={() => deleteData(item.idConta)} >
                                                    <a class="font-medium text-green-600 dark:text-green-500 hover:underline" data-dial-toggle="speed-dial-menu-top-right" aria-controls="speed-dial-menu-top-right" aria-expanded="false"  >Delete
                                                    </a>
                                                </button> 
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