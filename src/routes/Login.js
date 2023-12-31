import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';



const schema = Yup.object().shape({
    email: Yup.string().required("Informe seu email"),
    password: Yup.string().required("Informe sua senha")
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

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            responseData: null,
            error: null
        };
    }
    async  checkUserExists() {

        const data = {
            emailUser: document.getElementById('email').value ,
            senhaUser:document.getElementById('password').value 
        }

        try {

            const response = await axios.post('http://localhost:8687/api/usuario/login', data);
            
          console.log('Res: '+JSON.stringify(response.data[0].idUser))
            return JSON.stringify(response.data[0].idUser);
        } catch (error) {
          console.log(error)
        }
      }
      
       handleLoginClick = () => {
        this.checkUserExists().then(exists => {
           console.log('2 '+ JSON.stringify(exists)) 
          if (exists != undefined) {
            
            localStorage.setItem('userLoggedIn', 'true');
            localStorage.setItem('userLoggedID',Number(exists) );

            window.location.href  ='/Dashboard' 
         } else {
            // display error message
            alert('Email ou senha incorretos')
 
        }
        });
      }

    render() {
        return (
            <>


                <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                    <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                            Entrar
                        </h1>

                        <Formik
                            validationSchema={schema}
                            initialValues={{
                                email: "",
                                password: ""
                            }}>
                            {({ errors }) => (
                                <Form>
                                    <div class="mb-6">
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                        <Field type="email" id="email" name='email' validate={validateEmail} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="meu@email.com" required />
                                        {errors.email && (
                                            <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.email}</span></p>
                                        )}
                                    </div>
                                    <div class="mb-6">
                                        <label for="senha" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <Field type="password" id="password" name='password' validate={validatePassword} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="•••••••••" required />
                                        {errors.password && (
                                            <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.password}</span></p>
                                        )}
                                    </div>
                                    <a
                                        href="#"
                                        className="text-xs text-purple-600 hover:underline"
                                    >
                                        Esqueceu sua senha?
                                    </a>
                                    <div className="mt-6">
                                        {/* <Link to="/"> */}
                                            <button  onClick={this.handleLoginClick} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                                Entrar
                                            </button>
                                        {/* </Link> */}
                                    </div>
                                </Form>
                            )}
                        </Formik>

                        <p className="mt-8 text-xs font-light text-center text-gray-700">
                            {" "}
                            Ainda não possui uma conta?{" "}
                            <Link
                                to="/Cadastro"
                                className="font-medium text-purple-600 hover:underline"
                            >
                                Cadastre-se
                            </Link>
                        </p>
                    </div>
                </div>



            </>
        )
    }
}
