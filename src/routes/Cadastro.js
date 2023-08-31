import React, { Component, useState } from 'react'
import { DarkThemeToggle, Flowbite, Select } from 'flowbite-react';
import { Link, redirect } from 'react-router-dom'
import axios from 'axios';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Alert } from 'flowbite-react';

const userLoggedIn = localStorage.getItem('userLoggedIn');
const userId = localStorage.getItem('userLoggedID');

console.log(userLoggedIn +' | '+ userId)
if(userLoggedIn == false && userId != undefined){
    window.location.href='/login'
}

const schema = Yup.object().shape({
    nome: Yup.string().required("Informe seu nome"),
    email: Yup.string().required("Informe seu email"),
    phone: Yup.number().required("Informe seu número"),
    cep: Yup.number(8).required("Informse seu CEP"),
    password: Yup.string().required("Informe sua senha"),
    confirm_password: Yup.string().required("Informe sua senha novamente").oneOf([Yup.ref('password')], 'As duas senhas devem ser idênticas')
})

function validateEmail(value) {
    let error;
    if (!value) {
        error = 'Informe seu email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Informe um email válido';
    }
    return error;
}

function validateCep(value) {
    let error;
    if (!value) {
        error = 'Informe seu CEP';
    } else if (!/^\d{2}\d{3}[-]\d{3}$/i.test(value)) {
        error = 'Informe um CEP válido';
    }
    return error;
}

function validatePassword(value) {
    let error;
    if (!value) {
        error = 'Informe sua senha';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(value)) {
        error = (<>
            <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Informe uma senha que atenda aos requisitos</span></p><br/>
            <p class="text-sm text-red-600 dark:text-red-500"><span class="font-medium">- No mínimo 8 caracteres</span></p><br/>
            <p class="text-sm text-red-600 dark:text-red-500"><span class="font-medium">- Pelo menos uma letra maiúscula</span></p><br/>
            <p class="text-sm text-red-600 dark:text-red-500"><span class="font-medium">- Pelo menos um número</span></p><br/>
            <p class="text-sm text-red-600 dark:text-red-500"><span class="font-medium">- Pelo menos um caractere especial</span></p><br/>
            </>);
    }
    return error;
}

export default class Cadastro extends Component {

    constructor(props) {
        super(props);

        this.state = {
            responseData: null,
            error: null
        };
    }

    handlePostClick = () => {
        try {

            const data = {
                nomeUser: document.getElementById('nome').value,
                emailUser: document.getElementById('email').value,
                senhaUser: document.getElementById('confirm_password').value,
                telefoneUser: document.getElementById('phone').value,
                cepUser: document.getElementById('cep').value,
                estadoUser: document.getElementById('estado').value,
                generoUser: document.getElementById('genero').value,
                cidadeUser: document.getElementById('cidade').value
            };


            const url = 'http://localhost:8687/api/usuario/';


            axios.post(url, data)
                .then(response => {
                    this.setState({ responseData: response.data, error: null });

                    window.location.href = "/"
                })
                .catch(error => {
                    this.setState({ responseData: null, error: error.message });
                });
        }
        catch (err) {
            alert(err)
        }
    }

    render() {
        const { responseData, error } = this.state;
        return (
            <>
                <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                    <div className="p-6 m-auto bg-white rounded-md shadow-xl w-2/3">
                        <div class="mb-8">
                            <h1 className="text-3xl font-semibold text-center text-blue-700 uppercase">
                                Cadastre-se
                            </h1>
                        </div>


                        <Formik
                            validationSchema={schema}
                            initialValues={{
                                nome: "",
                                email: "",
                                phone: "",
                                cep: "",
                                password: "",
                                confirm_password: ""
                            }}
                        >
                            {({ errors }) => (
                                <Form>
                                    <div class="grid gap-6 mb-6 md:grid-cols-3">
                                        <div class="mb-6">
                                            <label for="nome" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome completo</label>
                                            <Field type="text" id="nome" name='nome' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nome completo" required />
                                            {errors.nome && (
                                                <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.nome}</span></p>
                                            )}
                                        </div>
                                        <div class="mb-6">
                                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                            <Field type="email" id="email" name='email' validate={validateEmail} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="meu@email.com" required />
                                            {errors.email && (
                                                <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.email}</span></p>
                                            )}
                                        </div>
                                        <div>
                                            <label for="telefone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                            <Field type="number" id="phone" name='phone' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="(XX) 9 XXXX-XXXX" /*  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"*/ required />
                                            {errors.phone && (
                                                <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.phone}</span></p>
                                            )}
                                        </div>
                                    </div>

                                    <div class="grid gap-6 mb-6 md:grid-cols-3">

                                        <div>
                                            <label for="CEP" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CEP</label>
                                            <Field type="number" id="cep" name='cep' validate={validateCep} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="XXXXX-XXX" required />
                                            {errors.cep && (
                                                <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.cep}</span></p>
                                            )}
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
                                        <Field type="password" id="password" validate={validatePassword} name='password' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                                        {errors.password && (
                                            <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.password}</span></p>
                                        )}
                                    </div>
                                    <div class="mb-6">
                                        <label for="confirmar_senha" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                        <Field type="password" id="confirm_password" name='confirm_password' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                                        {errors.confirm_password && (
                                            <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.confirm_password}</span></p>
                                        )}
                                    </div>
                                    <div className="mt-6">
                                        {/* <Link to="/"> */}
                                        <button id='btnCadastrar' onClick={this.handlePostClick} class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                            Cadastrar
                                        </button>
                                        {/* </Link> */}
                                    </div>
                                </Form>
                            )}
                        </Formik>
                        <form>

                        </form>

                        <p className="mt-8 text-xs font-light text-center text-gray-700">
                            {" "}
                            Já possui conta?{" "}
                            <Link
                                to="/Login"
                                className="font-medium text-blue-600 hover:underline"
                            >
                                Entrar
                            </Link>
                        </p>
                    </div>
                </div>
            </>
        )
    }
}

