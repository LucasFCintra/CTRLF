import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  nome: Yup.string().required('Informe seu nome'),
  email: Yup.string().required('Informe seu email'),
  phone: Yup.string().required('Informe seu número'),
  cep: Yup.string()
    .matches(/^\d{5}-\d{3}$/, 'Informe um CEP válido')
    .required('Informe seu CEP'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Informe uma senha que atenda aos requisitos'
    )
    .required('Informe sua senha'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password')], 'As duas senhas devem ser idênticas')
    .required('Informe sua senha novamente'),
});

export default class Cadastro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      responseData: null,
      error: null,
      inputCep: '',
      inputCidade: '',
      inputEstado: '',
    };
  }

  // Função para buscar dados dos Correios com base no CEP
  fetchCorreiosData = async (cep) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // Atualizar campos "cidade" e "estado" com dados dos Correios
  updateCidadeEstadoFields = async (cep) => {
    try {
      const correiosData = await this.fetchCorreiosData(cep);
      this.setState({
        inputCidade: correiosData.localidade || '',
        inputEstado: correiosData.uf || '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Handle CEP input change
  handleCepChange = (event) => {
    const { value } = event.target;
    this.setState({ inputCep: value });
    this.updateCidadeEstadoFields(value);
  };

  handlePostClick = () => {
    try {
      const data = {
        nomeUser: document.getElementById('nome').value,
        emailUser: document.getElementById('email').value,
        senhaUser: document.getElementById('confirm_password').value,
        telefoneUser: document.getElementById('phone').value,
        cepUser: document.getElementById('cep').value,
        estadoUser: this.state.inputEstado,
        generoUser: document.getElementById('genero').value,
        cidadeUser: this.state.inputCidade,
      };

      const url = 'http://localhost:8687/api/usuario/';

      axios
        .post(url, data)
        .then((response) => {
          this.setState({ responseData: response.data, error: null });

          window.location.href = '/';
        })
        .catch((error) => {
          this.setState({ responseData: null, error: error.message });
        });
    } catch (err) {
      alert(err);
    }
  }

  render() {
    const { responseData, error } = this.state;
    return (
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="p-6 m-auto bg-white rounded-md shadow-xl w-2/3">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
              Cadastre-se
            </h1>
          </div>

          <Formik
            validationSchema={schema}
            initialValues={{
              nome: '',
              email: '',
              phone: '',
              cep: '',
              password: '',
              confirm_password: '',
            }}
          >
            {({ errors }) => (
              <Form>
                {/* ... rest of your form */}

                <div class="grid gap-6 mb-6 md:grid-cols-3">
                                        <div class="mb-6">
                                            <label for="nome" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome completo</label>
                                            <Field type="text" id="nome" name='nome' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="Nome completo" required />
                                            {errors.nome && (
                                                <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.nome}</span></p>
                                            )}
                                        </div>
                                        <div class="mb-6">
                                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                            <Field type="email" id="email" name='email' validate={validateEmail} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="meu@email.com" required />
                                            {errors.email && (
                                                <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.email}</span></p>
                                            )}
                                        </div>
                                        <div>
                                            <label for="telefone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                            <Field type="number" id="phone" name='phone' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500" placeholder="(XX) 9 XXXX-XXXX" /*  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"*/ required />
                                            {errors.phone && (
                                                <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">{errors.phone}</span></p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="grid gap-6 mb-6 md:grid-cols-3">

                  <div className="mb-6">
                    <label
                      htmlFor="cep"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      CEP
                    </label>
                    <Field
                      type="text"
                      id="cep"
                      name="cep"
                      validate={validateCep}
                      onChange={this.handleCepChange}
                      value={this.state.inputCep}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                      placeholder="XXXXX-XXX"
                      required
                    />
                    {errors.cep && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                        <span className="font-medium">{errors.cep}</span>
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="cidade"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Cidade
                    </label>
                    <input
                      type="text"
                      id="cidade"
                      value={this.state.inputCidade}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Cidade"
                      readOnly
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="estado"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Estado
                    </label>
                    <input
                      type="text"
                      id="estado"
                      value={this.state.inputEstado}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      placeholder="UF"
                      readOnly
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="genero"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Gênero
                  </label>
                  <select
                    id="genero"
                    name="genero"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                  >
                    <option class='hover:bg-purple-700' value="Homem">Homem</option>
                    <option class='hover:bg-purple-700' value="Mulher">Mulher</option>
                    <option class='hover:bg-purple-700' value="Outros">Outros</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="senha"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    validate={validatePassword}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                    placeholder="•••••••••"
                    required
                  />
                  {errors.password && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      <span className="font-medium">{errors.password}</span>
                    </p>
                  )}
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="confirmar_senha"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <Field
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                    placeholder="•••••••••"
                    required
                  />
                  {errors.confirm_password && (
                    <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                      <span className="font-medium">{errors.confirm_password}</span>
                    </p>
                  )}
                </div>
                <div className="mt-6">
                  <button
                    id="btnCadastrar"
                    onClick={this.handlePostClick}
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                  >
                    Cadastrar
                  </button>
                </div>
              </Form>
            )}
          </Formik>
          <form></form>
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            Já possui conta?{' '}
            <Link
              to="/Login"
              className="font-medium text-purple-600 hover:underline"
            >
              Entrar
            </Link>
          </p>
        </div>
      </div>
    );
  }
}
function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Informe seu email';
    } else if (!/^\S+@\S+\.\S+$/.test(value)) {
      error = 'Informe um email válido';
    }
    return error;
  }

function validateCep(value) {
  let error;
  if (!value) {
    error = 'Informe seu CEP';
  } else if (!/^\d{5}-\d{3}$/.test(value)) {
    error = 'Informe um CEP válido';
  }
  return error;
}

function validatePassword(value) {
  let error;
  if (!value) {
    error = 'Informe sua senha';
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)
  ) {
    error = (
      <div>
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">
            Informe uma senha que atenda aos requisitos
          </span>
        </p>
        <br />
        <p className="text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">- No mínimo 8 caracteres</span>
        </p>
        <br />
        <p className="text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">- Pelo menos uma letra maiúscula</span>
        </p>
        <br />
        <p className="text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">- Pelo menos um número</span>
        </p>
        <br />
        <p className="text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">- Pelo menos um caractere especial</span>
        </p>
        <br />
      </div>
    );
  }
  return error;
}
