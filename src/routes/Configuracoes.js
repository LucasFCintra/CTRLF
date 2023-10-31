import React, { Component } from 'react'
import { DarkThemeToggle, Flowbite, Select } from 'flowbite-react';
import axios from "axios";

const api = 'http://localhost:8687/api/usuario/' + 1;
/*

const userLoggedIn = localStorage.getItem('userLoggedIn');
const userId = localStorage.getItem('userLoggedID');

console.log(userLoggedIn +' | '+ userId)
if(userLoggedIn == false && userId != undefined){
    window.location.href='/login'
}*/
export default class Configuracoes extends Component {


    async componentDidMount() {
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
        var genero = document.getElementById('genero').value = response.data[0].generoUser



    }

    async updateData() {

        try {
            const data = {
                idUser: 1,//document.getElementById('idEdit').value,
                nomeUser: document.getElementById('nome').value,
                emailUser: document.getElementById('email').value,
                senhaUser: document.getElementById('confirm_password').value,
                telefoneUser: document.getElementById('phone').value,
                cepUser: document.getElementById('cep').value,
                estadoUser: document.getElementById('estado').value,
                generoUser: document.getElementById('genero').value,
                cidadeUser: document.getElementById('cidade').value
            }
            const response = await axios.put(`http://localhost:8687/api/usuario`, data);
            console.log("Clicou: " + JSON.stringify(response))

            if(response.status == 200){
                alert('Dados atualizados com sucesso');
                }else{
                alert('Erro ao atualizar dados');        
            }
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    async deleteData(){
       
        const response = await axios.delete(`http://localhost:8687/api/usuario/`+1);
        console.log("Clicou: " + JSON.stringify(response))

        if(response.status == 200){
            alert('Usuario excluido com sucesso');
            window.location.href = "/Login"

            }else{
            alert('Erro ao atualizar dados');        
        }
        console.log(response.data);
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
                                <Select
                                    id="genero"
                                    required
                                >
                                    <option value='Homem'>
                                        Homem
                                    </option>
                                    <option value='Mulher'>
                                        Mulher
                                    </option>
                                    <option value='Outros'>
                                        Outros
                                    </option>

                                </Select>

                            </div>
                            <div class="mb-6">
                                <label for="senha" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                            </div>
                            <div class="mb-6">
                                <label for="confirmar_senha" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <input type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                            </div>
                            <div class="grid gap-6 mb-6 md:grid-cols-2">
                            <button type="submit" onClick={this.updateData} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Salvar</button>

                            <button type="delete" onClick={this.deleteData} class="text-white bg-red-600 hover:bg-grey-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
                           
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
