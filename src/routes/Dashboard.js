import React, { useState, useEffect } from 'react';
import axios from 'axios';

const userLoggedIn = localStorage.getItem('userLoggedIn');
const userId = localStorage.getItem('userLoggedID');

console.log(userLoggedIn + ' | ' + userId);

export default function Dashboard() {
    const [infos, setInfos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const api = 'http://localhost:8687/api/dashboard/' + 1;

        axios.get(api)
            .then(response => {
                console.log(response.data);
                setInfos(response.data);
                setError(null);
            })
            .catch(error => {
                setError(error.message);
            });
    }, []); // O array vazio como segundo argumento do useEffect faz com que ele seja executado uma vez

    console.log(infos);

    return (
        <>
                <div class="p-4 sm:ml-64">
                    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                        <div class="grid grid-cols-3 gap-4 mb-4">
                            <div class="grid grid-rows-2 items-start h-24 rounded bg-blue-500 dark:bg-blue-500">
                                <div class='gird grid-rows-2 pt-2 ml-5'>
                                    <ul role="list" class="space-y-5">
                                        <li class="flex space-x-3 items-center">
                                            <p class="text-2xl text-white dark:text-white">
                                                <svg class="w-7 h-7 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.905 1.316 15.633 6M18 10h-5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h5m0-5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1m0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-3m-6.367-9L7.905 1.316 2.352 6h9.281Z" />
                                                </svg>
                                            </p>
                                            <h5 class="mb-1 pt-2 text-xl font-medium text-white dark:text-white">Saldo atual</h5>
                                        </li>
                                    </ul>
                                    <ul>

                                    </ul>

                                </div>
                                <div className='grid grid-rows-1 mt-2 ml-5'>
                                    <div className='grid grid-cols-2'>
                                        <span class="text-2xl font-bold leading-tight text-white dark:text-gray-400">R$ 00,00</span>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-rows-2 items-start h-24 rounded bg-green-500 dark:bg-green-500">
                                <div class='gird grid-rows-2 pt-2 ml-5'>
                                    <ul role="list" class="space-y-5">
                                        <li class="flex space-x-3 items-center">
                                            <p class="text-2xl text-white dark:text-white">
                                                <svg class="w-7 h-7 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.905 1.316 15.633 6M18 10h-5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h5m0-5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1m0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-3m-6.367-9L7.905 1.316 2.352 6h9.281Z" />
                                                </svg>
                                            </p>
                                            <h5 class="mb-1 pt-2 text-xl font-medium text-white dark:text-white">Receita total</h5>
                                        </li>
                                    </ul>
                                    <ul>

                                    </ul>

                                </div>
                                <div className='grid grid-rows-1 mt-2 ml-5'>
                                    <div className='grid grid-cols-2'>
                                        <span class="text-2xl font-bold leading-tight text-white dark:text-gray-400">R$ 00,00</span>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-rows-2 items-start h-24 rounded bg-red-500 dark:bg-red-500">
                                <div class='gird grid-rows-2 pt-2 ml-5'>
                                    <ul role="list" class="space-y-5">
                                        <li class="flex space-x-3 items-center">
                                            <p class="text-2xl text-white dark:text-white">
                                                <svg class="w-7 h-7 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.905 1.316 15.633 6M18 10h-5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h5m0-5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1m0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-3m-6.367-9L7.905 1.316 2.352 6h9.281Z" />
                                                </svg>
                                            </p>
                                            <h5 class="mb-1 pt-2 text-xl font-medium text-white dark:text-white">Despesa total</h5>
                                        </li>
                                    </ul>
                                    <ul>

                                    </ul>

                                </div>
                                <div className='grid grid-rows-1 mt-2 ml-5'>
                                    <div className='grid grid-cols-2'>
                                        <span class="text-2xl font-bold leading-tight text-white dark:text-gray-400">R$ 00,00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 gap-4 mb-4">
                            <div class="grid grid-rows-2 items-start rounded bg-gray-50 h-28 dark:bg-gray-900">
                                <div class='gird grid-rows-2 pt-2 ml-5'>
                                    <ul role="list" class="space-y-5">
                                        <li class="flex space-x-3 items-center">
                                            <p class="text-2xl text-gray-400 dark:text-white">
                                                <svg class="w-7 h-7 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.905 1.316 15.633 6M18 10h-5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h5m0-5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1m0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-3m-6.367-9L7.905 1.316 2.352 6h9.281Z" />
                                                </svg>
                                            </p>
                                            <h5 class="mb-1 pt-2 text-xl font-medium text-gray-400 dark:text-white">Receitas recentes</h5>
                                        </li>
                                    </ul>
                                    <ul>

                                    </ul>

                                </div>
                            </div>
                            <div class="grid grid-rows-2 items-start rounded bg-gray-50 h-28 dark:bg-gray-900">
                                <div class='gird grid-rows-2 pt-2 ml-5'>
                                    <ul role="list" class="space-y-5">
                                        <li class="flex space-x-3 items-center">
                                            <p class="text-2xl text-gray-400 dark:text-white">
                                                <svg class="w-7 h-7 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.905 1.316 15.633 6M18 10h-5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h5m0-5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1m0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-3m-6.367-9L7.905 1.316 2.352 6h9.281Z" />
                                                </svg>
                                            </p>
                                            <h5 class="mb-1 pt-2 text-xl font-medium text-gray-400 dark:text-white">Despesas recentes</h5>
                                        </li>
                                    </ul>
                                    <ul>
                                        
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-900">
                            <p class="text-2xl text-gray-400 dark:text-white">
                                <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </p>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-900">
                                <p class="text-2xl text-gray-400 dark:text-white">
                                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-900">
                                <p class="text-2xl text-gray-400 dark:text-white">
                                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-900">
                                <p class="text-2xl text-gray-400 dark:text-white">
                                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-900">
                                <p class="text-2xl text-gray-400 dark:text-white">
                                    <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }