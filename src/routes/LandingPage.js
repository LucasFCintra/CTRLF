import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Accordion } from 'flowbite-react'
import hero from '../images/hero.png'
import landImg1 from '../images/feature-1.png'
import landImg2 from '../images/feature-2.png'
import rockefelle from '../images/rockefelle.png'

export default class SobreNos extends Component {
    render() {
        return (
            <>
                <header class="fixed w-full">
                    <nav class="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
                        <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                            <a href="#" class="flex items-center">
                                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="FlowBite Logo" />
                                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CTRL F</span>
                            </a>
                            <div class="flex items-center lg:order-2">

                                <Link to="/Cadastro" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Cadastre-se</Link>
                                <button>
                                    <Link to="/Login" class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Entrar</Link>
                                </button>

                            </div>

                        </div>
                    </nav>
                </header>
                <div class="bg-white dark:bg-gray-900">
                    <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                        <div class="mr-auto place-self-center lg:col-span-7">
                            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Ctrl F O Controle Financeiro Simplificado!</h1>
                            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">é a ferramenta que vai ajudar as pessoas a assumirem o controle de suas finanças pessoais de maneira mais eficiente, economizando tempo e esforço. <a href="https://flowbite.com/blocks/" class="hover:underline">Blocks System</a>.</p>
                            <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                                <a href="https://github.com/themesberg/landwind" class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                    <svg class="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg> View on GitHub
                                </a>
                                <a href="https://www.figma.com/community/file/1125744163617429490" class="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                    <svg class="w-4 h-4 mr-2" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" width="1667" height="2500"><title>Figma.logo</title><desc>Created using Figma</desc><path id="path0_fill" class="st0" d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z" /><path id="path1_fill" class="st1" d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z" /><path id="path1_fill_1_" class="st2" d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z" /><path id="path2_fill" class="st3" d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z" /><path id="path3_fill" class="st4" d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z" /></svg> Get Figma file
                                </a>
                            </div>
                        </div>
                        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <img src={hero} alt="hero image"></img>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 dark:bg-gray-800">
                    <div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
                        <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                            <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                                <h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Trabalhe com ferramentas simples e intuitivas</h2>
                                <p class="mb-8 font-light lg:text-xl"></p>
                                <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                    <li class="flex space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Graficos eficientes</span>
                                    </li>
                                    <li class="flex space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Saiba de onde e para onde seu dinheiro vai</span>
                                    </li>
                                    <li class="flex space-x-3">
                                        <svg class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                        <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Crie seus objetivos financeiros</span>
                                    </li>
                                </ul>
                                <p class="mb-8 font-light lg:text-xl">O Ctrl F é a busca pela simplicidade. Trabalhe de forma inteligente com ferramentas simples e intuitivas.</p>
                            </div>
                            <img class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={landImg1} alt="dashboard feature image"></img>
                        </div>
                    </div>
                </div>
                <div class="bg-white dark:bg-gray-900">
                    <div class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
                        <div class="col-span-2 mb-8">
                            <h2 class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">somente no ano de 2023, mais de 71,45 milhões de pessoas enfrentaram restrições de crédito devido a problemas de inadimplência. </h2>
                            <div class="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
                                <div>
                                    <a href="#" class="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
                                    </a>
                                </div>
                                <div>
                                    <a href="#" class="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                            <div>
                                <svg class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"></path></svg>
                                <h3 class="mb-2 text-2xl font-bold dark:text-white">100 % GRATIS</h3>
                                <p class="font-light text-gray-500 dark:text-gray-400">Desenvolvido como tema para trabalho de Graduação dos criadores</p>
                            </div>
                            <div>
                                <svg class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
                                <h3 class="mb-2 text-2xl font-bold dark:text-white">+2 Usuarios</h3>
                                <p class="font-light text-gray-500 dark:text-gray-400">Atualmente, so os desenvolvedores e a mãe de um deles utilizam o software</p>
                            </div>
                            <div>
                                <svg class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"></path></svg>
                                <h3 class="mb-2 text-2xl font-bold dark:text-white">Totalmente novo</h3>
                                <p class="font-light text-gray-500 dark:text-gray-400">Seguindos as mais novas e utilizadas tecnologias do mercado</p>
                            </div>
                            <div>
                                <svg class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                                <h3 class="mb-2 text-2xl font-bold dark:text-white">Em desenvolvimento</h3>
                                <p class="font-light text-gray-500 dark:text-gray-400">Novas funções estão chegando por aqui</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 dark:bg-gray-500">
                    <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
                        <figure class="max-w-screen-md mx-auto">
                            <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                            </svg>
                            <blockquote>
                                <p class="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">"O segredo para o sucesso é ter a disciplina de administrar bem o dinheiro."</p>
                            </blockquote>
                            <figcaption class="flex items-center justify-center mt-6 space-x-3">
                                <img class="w-6 h-6 rounded-full" src={rockefelle} alt="profile picture"></img>
                                <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                    <div class="pr-3 font-medium text-gray-900 dark:text-white">John D. Rockefeller</div>
                                    <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">O primeiro bilionario da historia.</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div class="flex justify-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-3 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
                    <div class="flex flex-col items-center pb-10">
                        <img class="w-48 h-48 mb-3 rounded-full shadow-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="" />
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                        <div class="flex mt-4 space-x-3 md:mt-6">
                            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
                            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
                        </div>
                    </div>
                    <div class="flex justify-center pt-4">
                        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                            <span class="sr-only">Open dropdown</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                            </svg>
                        </button>
                        <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                            <ul class="py-2" aria-labelledby="dropdownButton">
                                <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="flex flex-col items-center pb-10">
                        <img class="w-48 h-48 mb-3 rounded-full shadow-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="" />
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                        <div class="flex mt-4 space-x-3 md:mt-6">
                            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
                            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
                        </div>
                    </div>
                </div>
                <div class="bg-white dark:bg-gray-900">
                    <div class="max-w-screen-xl px-4 pt-8 pb-8 mx-auto lg:pb-24 lg:px-6 ">
                        <h2 class="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">Frequently asked questions</h2>
                        <div class="max-w-screen-md mx-auto">
                            <Accordion collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title>Titulo 1</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            Conteudo 1
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title>Titulo 2</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            Conteudo 2
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title>Titulo 3</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                                            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                                            components, whereas Tailwind UI offers sections of pages.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            Conteudo 3
                                        </p>
                                        <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                                            <li>
                                                <a href="" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                                    Link 1
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href=""
                                                    rel="nofollow"
                                                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                                                >
                                                    Link 2
                                                </a>
                                            </li>
                                        </ul>
                                    </Accordion.Content>
                                </Accordion.Panel>
                            </Accordion>
                            
                        </div>
                    </div>
                </div>
                <div class="bg-white dark:bg-gray-900">
                    <div class="mt-6 py-6 border-gray-200 dark:border-gray-700 ">
                        <div class="text-center">
                            <a href="" class="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="FlowBite Logo" />
                                Ctrl F
                            </a>
                            <span class="block text-sm text-center text-gray-500 dark:text-gray-400">© 2023 CTRLF™. All Rights Reserved. Built with <a href="https://flowbite.com" class="text-purple-600 hover:underline dark:text-purple-500">Flowbite</a> and <a href="https://tailwindcss.com" class="text-purple-600 hover:underline dark:text-purple-500">Tailwind CSS</a>.
                            </span>
                            
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
