'use client';

import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const userLoggedIn = localStorage.getItem('userLoggedIn');
const userId = localStorage.getItem('userLoggedID');


/*
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
    const [itemsCat, setItemsCat] = useState([]);
    const [errorCat, setErrorCat] = useState(null);
    const [itemsCon, setItemsCon] = useState([]);
    const [errorCon, setErrorCon] = useState(null);
    const [itemsUp2, setItemsUp2] = useState([]);
    const [errorUp2, setErrorUp2] = useState(null);
    const [inputId, setInputId] = useState(null);
    const [inputNome, setInputNome] = useState('');
    const [inputDesc, setInputDesc] = useState('');
    const [inputLanc, setInputLanc] = useState('');
    const [inputData, setInputData] = useState('');
    const [inputCat, setInputCat] = useState('');
    const [inputConta, setInputCon] = useState('');
    // const [inputDesc, setInputDesc] = useState('');
    const [postNome, setpostNome] = useState('');
    const [postDesc, setpostDesc] = useState('');
    const [postLanc, setpostLanc] = useState('');
    const [postDataVal, setpostData] = useState('');
    const [postCat, setpostCat] = useState('');
    const [postConta, setpostCon] = useState('');

    const resetModalPostFields = () => {
        setpostNome('');
        setpostDesc('');
        setpostLanc('');
        setpostData('');
        setpostCat('');
        setpostCon('');
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
        const api = 'http://localhost:8687/api/lancamento/' + userId

        axios.get(api)
            .then(response => {
                setItems(response.data);
                setError(null); 
            })
            .catch(error => {
                setError(error.message);
            });
    }, []);




    // console.log(items)

    // async function getCategorias(){
    var apiCat = 'http://localhost:8687/api/categoria/' + userId


    var apiCon = 'http://localhost:8687/api/conta/' + userId

    axios.get(apiCon)
        .then(response => {
            setItemsCon(response.data);
            setErrorCon(null); 
        })
        .catch(error => {
            setErrorCon(error.message);
        });


    axios.get(apiCat)
        .then(response => {
            setItemsCat(response.data);
            setErrorCat(null);
        })
        .catch(error => {
            setErrorCat(error.message);
        });
    // }

    // getCategorias()
    // console.log(itemsCat)

    async function deleteData(id){ 
    
        const response = await axios.delete(`http://localhost:8687/api/lancamento/`+id);
        console.log("Clicou: " + JSON.stringify(response))

        if(response.status == 200){
            alert('Conta excluida com sucesso');
            window.location.href = "/Lancamentos"

            }else{
            alert('Erro ao atualizar dados');        
        }
        console.log(response.data);
    }
    async function limparFormPost(id){
        // alert('exec')
        var nomeEdit = document.getElementById('nomePost').value = ''
        var descEdit = document.getElementById('descPost').value = ''
        var valorEdit = document.getElementById('valorPost').value = ''
        var dataEdit = document.getElementById('dataPost').value =''
        var catEdit = document.getElementById('catPost').value ='0'
        var conEdit = document.getElementById('conPost').value = '0'
    }      
      function updateInfos(id,nome,desc,valor,data,cat,con) {
        setInputId(id);
    
        try { 
            setInputNome(nome);
            setInputDesc(desc);
            setInputLanc(valor);
            setInputData(data);
            setInputCat(cat);
            setInputCon(con);
        } catch (error) {
            setErrorUp2(error.message);
        }
    }

    async function updateData() {
        // alert('Clicou') 
        try {
            const data = {
                idLanc: inputId,
                nomeLanc: inputNome,//document.getElementById('nomeEdit').value,
                descLanc: inputDesc, //document.getElementById('descEdit').value
                valorLanc: inputLanc,
                dataLanc: inputData,
                fkUserLanc: userId,
                fkCatLanc: inputCat,
                fkConLanc: inputConta
            } 

            const response = await axios.put(`http://localhost:8687/api/lancamento`, data);
            console.log("Clicou: " + JSON.stringify(response))
            
            if (response.status == 200) {
                window.location.href = "/Lancamentos"


            }

            // console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function postData() {

        try {
            const data = {
                nomeLanc: postNome,//document.getElementById('nomeEdit').value,
                descLanc: postDesc, //document.getElementById('descEdit').value
                valorLanc: postLanc,
                dataLanc: postDataVal,
                fkUserLanc: userId,
                fkCatLanc: postCat,
                fkConLanc: postConta,
                tipoLanc: 'receita'
            }
            console.log("Clicou: " + JSON.stringify(data))

            const response = await axios.post(`http://localhost:8687/api/lancamento`, data);
            // console.log('Teste' + JSON.stringify(response));

            if (response.status == 200) {
                window.location.href = "/Lancamentos"


            }

        } catch (error) {

            if (error == 'AxiosError: Request failed with status code 418') {
                alert('Erro ao inserir \n Categoria ja cadastrada ')

            }
            console.error('teste ' + error);
        }
    }
    return (
        <>
            <div class="p-4 sm:ml-64">
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">

                    <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                        <ul class="flex flex-wrap mb-6">
                            <li class="mr-2">
                                <Link to="/Lancamentos" class="inline-block p-4 text-green-600 border-b-2 border-green-600 rounded-t-lg active dark:text-green-500 dark:border-green-500">Receitas</Link>
                            </li>
                            <li class="mr-2">
                                <Link to="/Lancamentos/Despesas" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Despesas</Link>
                            </li>
                        </ul>

                        <div className='fixed top-24 right-12 group'>
                            <button value={1}type="button" data-dial-toggle="speed-dial-menu-top-right" aria-controls="speed-dial-menu-top-right" aria-expanded="false" class="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800" onClick={() => propsPost.setOpenModalPost('initial-focus') }>
                                <svg class="w-5 h-5 transition-transform group-hover:rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </button>
                            <Modal
                                show={propsPost.openModalPost === 'initial-focus'}
                                size="md"
                                popup
                                onClose={() => {
                                    propsPost.setOpenModalPost(undefined);
                                    resetModalPostFields(); // Reset the fields when the modal is closed
                                  }} initialFocus={propsPost.emailInputRefPost}
                            >
                                <Modal.Header />
                                <Modal.Body>
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Adicionar Lançamento</h3>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label
                                                    value="Nome do Lançamento"
                                                />
                                            </div>
                                            <TextInput
                                                id="nomePost"
                                                type='text'
                                                placeholder='Insira o nome'
                                                value={postNome} onChange={event => setpostNome(event.target.value)}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label
                                                    value="Descrição do Lançamento"
                                                />
                                            </div>
                                            <TextInput
                                                id="descPost"
                                                placeholder='Insira a Descrição'
                                                value={postDesc} onChange={event => setpostDesc(event.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label
                                                    value="Valor do Lançamento"
                                                />
                                            </div>
                                            <TextInput
                                                id="valorPost"
                                                type='float'
                                                placeholder='Insira o valor'
                                                value={postLanc} onChange={event => setpostLanc(event.target.value)}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label
                                                    value="Data do Lançamento"
                                                />
                                            </div>
                                            <TextInput
                                                id="dataPost"
                                                placeholder='dd/mm/aaaa'
                                                type='date'
                                                value={postDataVal} onChange={event => setpostData(event.target.value)}
                                                required
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
                                        <div>
                                            <div className="mb-2 block">
                                                <Label
                                                    value="Conta do Lançamento"
                                                />
                                            </div>
                                            <select id="conPost" value={postConta} onChange={event => setpostCon(event.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                            <option  selected value='0'> -- selecionar Conta -- </option>
                                                {itemsCon.map(item => (
                                                    <option value={item.idConta}>{item.descConta}</option>
                                                ))}
                                            </select>

                                        </div>


                                        <div className="w-full">
                                            <button type="button" onClick={postData} class="w-full focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">Inserir Dados</button>
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
                                            Valor
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Data
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Categoria
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Conta
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
                                        <tr key={item.idLanc}>
                                            <td class='pl-6'>{item.nomeLanc}</td>
                                            <td class='pl-6'>{item.descLanc}</td>
                                            <td class='pl-6'>{item.valorLanc}</td>
                                            <td class='pl-6'>{formatDate(item.dataLanc)}</td>
                                            <td class='pl-6'>{item.nomeCat}</td>
                                            <td class='pl-6'>{item.descConta}</td>

                                            <td class="px-6 py-4 text-right">
                                                 <button value={item.idLanc} id='idLancEdit' onClick={() => updateInfos(item.idLanc,item.nomeLanc,item.descLanc,item.valorLanc,item.dataLanc,item.nomeCat,item.descConta) & setOpenModal('initial-focus')} >
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
                                                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Editar Categoria</h3>
                                                            <div>
                                                                <div className="mb-2 block">
                                                                    <Label
                                                                        value="Nome do Lançamento"
                                                                    />
                                                                </div>
                                                                <TextInput
                                                                    id="nomeEdit"
                                                                    placeholder={item.nomeLanc}
                                                                    type='text'
                                                                    value={inputNome}
                                                                    onChange={event => setInputNome(event.target.value)
                                                                    }
                                                                    required
                                                                />
                                                            </div>
                                                            <div>
                                                                <div className="mb-2 block">
                                                                    <Label
                                                                        value="Descrição do Lançamento"
                                                                    />
                                                                </div>
                                                                <TextInput
                                                                    id="descEdit"
                                                                    placeholder={item.descLanc}
                                                                    value={inputDesc} onChange={event => setInputDesc(event.target.value)}
                                                                />
                                                                
                                                            </div>
                                                            <div>
                                                                <div className="mb-2 block">
                                                                    <Label
                                                                        value="Valor do Lançamento"
                                                                    />
                                                                </div>
                                                                <TextInput
                                                                    id="valorEdit"
                                                                    placeholder={item.valorLanc}
                                                                    type='text'
                                                                    value={inputLanc} onChange={event => setInputLanc(event.target.value)}
                                                                    required
                                                                />
                                                            </div>
                                                            <div>
                                                                <div className="mb-2 block">
                                                                    <Label
                                                                        value="Data do Lançamento"
                                                                    />
                                                                </div>
                                                                <TextInput
                                                                    id="dataEdit"
                                                                    placeholder={item.nomeLanc}
                                                                    type='date'
                                                                    value={inputData} onChange={event => setInputData(event.target.value)}
                                                                    required
                                                                />
                                                            </div>
                                                            <div>
                                                                <div className="mb-2 block">
                                                                    <Label
                                                                        value="Categoria do Lançamento"
                                                                    />
                                                                </div>
                                                                <select id="catEdit" value={inputCat} onChange={event => setInputCat(event.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                                                    {itemsCat.map(item => (
                                                                        <option value={item.idCat}>{item.nomeCat}</option>
                                                                    ))}
                                                                </select>

                                                            </div>
                                                            <div>
                                                                <div className="mb-2 block">
                                                                    <Label
                                                                        value="Conta do Lançamento"
                                                                    />
                                                                </div>
                                                                <select id="conEdit" value={inputConta} onChange={event => setInputCon(event.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                                                                    {itemsCon.map(item => (
                                                                        <option value={item.idConta}>{item.descConta}</option>
                                                                    ))}
                                                                </select>
                                                            </div>


                                                            <div className="w-full">
                                                                <button type="button" onClick={updateData} class="w-full focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800">Atualizar</button>
                                                            </div>

                                                        </div>
                                                    </Modal.Body>
                                                </Modal>
                                            </td>
                                            <td>
                                            <button value={item.idLanc} id='idLancEdit' onClick={() => deleteData(item.idLanc)} >
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