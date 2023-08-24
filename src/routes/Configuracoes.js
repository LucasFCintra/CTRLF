import React, { Component } from 'react'
import axios from "axios";

const api = 'http://localhost:8687/api/usuario/' + 1;


export default class Configuracoes extends Component {


    async getUser() {
        // GET request using axios with async/await
        const response = await axios.get(api);
        this.setState({ userInfo: response.data })

        console.log(response.data[0]);
        // console.log();
        var setEmail = document.getElementById('email').value = response.data[0].emailUser;
        var setNome = document.getElementById('nome').value = response.data[0].nomeUser;
        var setTelefone = document.getElementById('phone').value = response.data[0].telefoneUser;
        var setCep = document.getElementById('cep').value = response.data[0].cepUser;
        var setEstado = document.getElementById('estado').value = response.data[0].estadoUser;
        var setCidade = document.getElementById('cidade').value = response.data[0].cidadeUser;
        var genero = response.data[0].generoUser
        console.log(genero)

        switch (genero) {
            case 'Homem': 
                var setGenero = document.getElementById('genero').value = "true" ;

                break;
            case 'Mulher':
          

                var setGenero = document.getElementById('mulher').value =true ;

                break;
            case 'Não Binario':
      
                var setGenero = document.getElementById('nb').value = true ;

                break;
            case 'Outros':
               
                var setGenero = document.getElementById('outros').value = true ;

                break;
        }


    }
    render() {

    
        return (
            <>
                <div class="p-4 sm:ml-64">
                    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">

                        <form>
                            <div class="mb-6">
                                <div class="mb-6">
                                    <label for="nome" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome completo</label>
                                    <input type="text" id="nome" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nome completo" required />
                                </div>
                            </div>
                            <div class="mb-6">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="meu@email.com" required />
                            </div>
                            <div class="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label for="telefone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                    <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="(XX) 9 XXXX-XXXX" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                                </div>
                                <div>
                                    <label for="CEP" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CEP</label>
                                    <input type="text" id="cep" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="XXXXX-XXX" required />
                                </div>

                                <div>
                                    <label for="cidade" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cidade</label>
                                    <input type="text" id="cidade" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Cidade" readOnly />
                                </div>
                                <div>
                                    <label for="estado" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estado</label>
                                    <input type="text" id="estado" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="UF" readOnly />
                                </div>
                            </div>
                            <div class="mb-6">
                                <label for="genero" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gênero</label>
                                <ul id="genero" class="items-center w-full text-sm font-medium text-gray-900 bg-gray-50 border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                        <div class="flex items-center pl-3">
                                            <input id="homem" type="radio" value=" " name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-50 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label for="horizontal-list-radio-license" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Homem</label>
                                        </div>
                                    </li>
                                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                        <div class="flex items-center pl-3">
                                            <input id="mulher" type="radio" value = " " name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label for="horizontal-list-radio-id" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mulher</label>
                                        </div>
                                    </li>
                                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                        <div class="flex items-center pl-3">
                                            <input id="nb" type="radio" name="list-radio" value=" " class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label for="horizontal-list-radio-millitary" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Não binário</label>
                                        </div>
                                    </li>
                                    <li class="w-full dark:border-gray-600">
                                        <div class="flex items-center pl-3">
                                            <input id="outros" type="radio" name="list-radio" value=" "  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label for="horizontal-list-radio-passport" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Outros</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="mb-6">
                                <label for="senha" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                            </div>
                            <div class="mb-6">
                                <label for="confirmar_senha" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <input type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                            </div>
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Salvar</button>
                        </form>

                    </div>
                </div>
            </>
        )
    }
}
