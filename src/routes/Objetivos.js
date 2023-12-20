'use client';

import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const userLoggedIn = localStorage.getItem('userLoggedIn');
const userId = localStorage.getItem('userLoggedID');
 
console.log(userLoggedIn +' | '+ userId)
if(userLoggedIn == false && userId != undefined){
    window.location.href='/login'
}  

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

    const [itemsCat, setItemsCat] = useState([]);
    const [errorCat, setErrorCat] = useState(null);


    
    const [inputId, setInputId] = useState(null);
    const [inputNome, setInputNome] = useState('');
    const [inputDesc, setInputDesc] = useState('');
    const [inputValor, setInputValor] = useState('');
    const [inputMeta, setInputMeta] = useState('');
    const [inputData, setInputData] = useState('');
    const [postCat, setpostCat] = useState('');
    const [inputCat, setInputCat] = useState('');
    
    const resetModalPostFields = () => {
        setInputDesc('');
        setInputNome('');
        setInputValor('');
        setInputMeta('');
        setInputData('');
        setpostCat('');
        setInputCat('');
      };

      function formatDate(dateStr) {
        const date = new Date(dateStr);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      }

    useEffect(() => {
        // Fazendo a requisição GET usando o Axios quando o componente é montado
        const api = 'http://localhost:8687/api/objetivo/' + userId
        const apiCat = 'http://localhost:8687/api/categoria/' + userId

        axios.get(api)
            .then(response => {
                console.log(response.data)
                setItems(response.data);
                setError(null);
            })
            .catch(error => {
                setError(error.message);
            });

            axios.get(apiCat)
            .then(response => {
                setItemsCat(response.data);
                setErrorCat(null);
            })
            .catch(error => {
                setErrorCat(error.message);
            });
    }, []);


    async function updateInfos(id,nome,desc,cat,valor,meta,data) {
        setInputId(id)  
        setInputNome(nome) 
       setInputDesc(desc)
       setInputValor(valor)
       setInputMeta(meta)
       setInputData(data)
       setInputCat(cat)
         }
         async function deleteData(id){ 
            const response = await axios.delete(`http://localhost:8687/api/objetivo/`+id);
            console.log("Clicou: " + JSON.stringify(response))
    
            if(response.status == 200){
                alert('Conta excluida com sucesso');
                window.location.href = "/Objetivos"
    
                }else{
                alert('Erro ao atualizar dados');        
            }
            console.log(response.data);
        }
    async function updateData() { 
        try {
            console.log(inputId )
            const data = {
                idObj: inputId,
                nomeObj: inputNome,//document.getElementById('nomeEdit').value,
                descObj: inputDesc, //document.getElementById('descEdit').value
                valorObj: inputValor,
                metaObj: inputMeta,
                dataObj: inputData,
                fkCatObj:inputCat
            }
            if(postCat != ''){
            data.fkCatObj=postCat
        }
            console.log(data)
            const response = await axios.put(`http://localhost:8687/api/objetivo`, data);
            console.log("Clicou: " + JSON.stringify(response))

            if (response.status == 200) {
                window.location.href = "/Objetivos"


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
                nomeObj: inputNome,//document.getElementById('nomeEdit').value,
                descObj: inputDesc, //document.getElementById('descEdit').value
                valorObj: inputValor,
                metaObj: inputMeta,
                dataObj: inputData,
                fkCatObj:postCat,
                fkUserObj:userId
            }
            // console.log("Clicou: " + JSON.stringify(data))

            const response = await axios.post(`http://localhost:8687/api/objetivo`, data);
            console.log('Teste' + JSON.stringify(response));

            if (response.status == 200) {
                window.location.href = "/Objetivos"


            }

        } catch (error) {

            if (error == 'AxiosError: Request failed with status code 418') {
                alert('Erro ao inserir \n Categoria ja cadastrada ')

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
                                <Link to="/Objetivos" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:blue-blue-500 dark:border-blue-500">Objetivos</Link>
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
                                onClose={() => {
                                    propsPost.setOpenModalPost(undefined);
                                    resetModalPostFields(); // Reset the fields when the modal is closed
                                  }}initialFocus={propsPost.emailInputRefPost}
                            >
                                <Modal.Header />
                                <Modal.Body>
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Adicionar Objetivo</h3>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label
                                                    value="Nome"
                                                />
                                            </div>
                                            <TextInput
                                                id="nomePost"
                                                placeholder='Nome'
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
                                                placeholder='Descrição'
                                                value={inputDesc} onChange={event => setInputDesc(event.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label
                                                    value="Categoria do Lançamento"
                                                />
                                            </div>
                                            <select id="catPost" value={postCat} onChange={event => setpostCat(event.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                            <option  selected value = '0' > -- selecionar Categoria -- </option>
                                                {itemsCat.map(item => (
                                                    <option value={item.idCat}>{item.nomeCat}</option>
                                                ))}
                                            </select>

                                        </div>
                                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label
                                                        value="Valor"
                                                    />
                                                </div>
                                                <TextInput
                                                    id="valorPost"
                                                    placeholder='Valor'
                                                    type='text'
                                                    value={inputValor} onChange={event => setInputValor(event.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label
                                                        value="Meta"
                                                    />
                                                </div>
                                                <TextInput
                                                    id="metaPost"
                                                    placeholder='Meta'
                                                    type='text'
                                                    value={inputMeta} onChange={event => setInputMeta(event.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label
                                                        value="Data"
                                                    />
                                                </div>
                                                <TextInput
                                                    id="dataPost"
                                                    placeholder='Data'
                                                    type='date'
                                                    value={inputData} onChange={event => setInputData(event.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="w-full">
                                            <button type="button" onClick={postData} class="w-full focus:outline-none text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">Salvar</button>
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
                                <thead class="text-xs text-blue-700 uppercase bg-blue-100 dark:bg-blue-700 dark:text-blue-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Nome
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Descrição
                                        </th>  <th scope="col" class="px-6 py-3">
                                            Categoria
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Valor
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Metas
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Data
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
                                        <tr key={item.idObj}>
                                            <td class='pl-6'>{item.nomeObj}</td>
                                            <td class='pl-6'>{item.descObj}</td>
                                            <td class='pl-6'>{item.nomeCat}</td>
                                            <td class='pl-6'>{item.valorObj}</td>
                                            <td class='pl-6'>{item.metaObj}</td>
                                            <td class='pl-6'>{formatDate(item.dataObj)}</td>
                                            {/* <td class='pl-6'>{item.idObj}</td> */}
                                            <td class="px-6 py-4 text-right">
                                                <button value={item.idLanc} id='idLancEdit' onClick={() => updateInfos(item.idObj,item.nomeObj,item.descObj,item.idCat,item.valorObj,item.metaObj,item.dataObj) & props.setOpenModal('initial-focus')} >
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
                                                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Editar Objetivo</h3>
                                                            <div>
                                                                <div className="mb-2 block">
                                                                    <Label
                                                                        value="Nome"
                                                                    />
                                                                </div>
                                                                <TextInput
                                                                    id="nomePost"
                                                                    type='text'
                                                                    placeholder={item.nomeObj}
                                                                    value={inputNome} onChange={event => setInputNome(event.target.value)}
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
                                                                    placeholder={item.descObj}
                                                                    value={inputDesc} onChange={event => setInputDesc(event.target.value)}
                                                                />
                                                            </div>  <div>
                                            <div className="mb-2 block">
                                                <Label
                                                    value="Categoria do Lançamento"
                                                />
                                            </div>
                                            <select id="catPost" value={postCat} onChange={event => setpostCat(event.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                            <option  selected value = '0' > -- selecionar Categoria -- </option>
                                                {itemsCat.map(item => (
                                                    <option value={item.idCat}>{item.nomeCat}</option>
                                                ))}
                                            </select>

                                        </div>
                                                            <div class="grid gap-6 mb-6 md:grid-cols-2">
                                                                <div>
                                                                    <div className="mb-2 block">
                                                                        <Label
                                                                            value="Valor"
                                                                        />
                                                                    </div>
                                                                    <TextInput
                                                                        id="valorPost"
                                                                        placeholder={item.valorObj}
                                                                        type='text'
                                                                        value={inputValor} onChange={event => setInputValor(event.target.value)}
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <div className="mb-2 block">
                                                                        <Label
                                                                            value="Meta"
                                                                        />
                                                                    </div>
                                                                    <TextInput
                                                                        id="metaPost"
                                                                        placeholder={item.valorObj}
                                                                        type='text'
                                                                        value={inputMeta} onChange={event => setInputMeta(event.target.value)}
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <div className="mb-2 block">
                                                                        <Label
                                                                            value="Data"
                                                                        />
                                                                    </div>
                                                                    <TextInput
                                                                        id="dataPost"
                                                                        placeholder={item.dataObj}
                                                                        type='date'
                                                                        value={inputData} onChange={event => setInputData(event.target.value)}
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="w-full">
                                                                <button type="button" onClick={updateData} class="w-full focus:outline-none text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">Salvar</button>
                                                            </div>

                                                        </div>
                                                    </Modal.Body>
                                                </Modal>
                                            </td>
                                            <td>
                                            <button value={item.idObj} id='idLancEdit' onClick={() => deleteData(item.idObj)} >
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