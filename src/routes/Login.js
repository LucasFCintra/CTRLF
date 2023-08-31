import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
    render() {
        return (
            <>


                <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                    <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                        <h1 className="text-3xl font-semibold text-center text-blue-700 uppercase">
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
                                        <Field type="email" id="email" name='email' validate={validateEmail} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="meu@email.com" required />
                                        {errors.email && (
                                            <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.email}</span></p>
                                        )}
                                    </div>
                                    <div class="mb-6">
                                        <label for="senha" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <Field type="password" id="password" name='password' validate={validatePassword} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                                        {errors.password && (
                                            <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.password}</span></p>
                                        )}
                                    </div>
                                    <a
                                        href="#"
                                        className="text-xs text-blue-600 hover:underline"
                                    >
                                        Esqueceu sua senha?
                                    </a>
                                    <div className="mt-6">
                                        <Link to="/">
                                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                                Entrar
                                            </button>
                                        </Link>
                                    </div>
                                </Form>
                            )}
                        </Formik>

                        <p className="mt-8 text-xs font-light text-center text-gray-700">
                            {" "}
                            Ainda não possui uma conta?{" "}
                            <Link
                                to="/Cadastro"
                                className="font-medium text-blue-600 hover:underline"
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
