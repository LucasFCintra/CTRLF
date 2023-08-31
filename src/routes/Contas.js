
import React, { Component } from 'react'

export default function Contas() {


    return (
        <><div class="p-4 sm:ml-64">
            <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <div class="grid grid-cols-4 gap-4 mb-4">
                    <div class="flex flex-col items-center justify-center h-48 rounded-3xl bg-white dark:bg-gray-900">
                        <p class="text-2xl text-blue-500 dark:text-white">
                            <svg class="w-10 h-10 text-blue-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 9h2m3 0h5M1 5h18M2 1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z" />
                            </svg>
                        </p>
                        <p class="text-2xl text-blue-500 dark:text-white">Nova conta</p>
                    </div>
                    <div class="flex flex-col h-48 rounded-3xl bg-white dark:bg-gray-900">
                        <div class="grid grid-rows-2 gap-4 mb-4 ml-4">
                            <ul role="list" class="space-y-5 my-7">
                                <li class="flex space-x-3 items-center">
                                    <p class="text-2xl text-gray-800 dark:text-white">
                                        <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.905 1.316 15.633 6M18 10h-5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h5m0-5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1m0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-3m-6.367-9L7.905 1.316 2.352 6h9.281Z" />
                                        </svg>
                                    </p>
                                    <span class="text-xl font-bold leading-tight text-gray-500 dark:text-gray-400">Carteira</span>
                                </li>
                            </ul>
                            

                        </div>

                    </div>
                    <div></div>
                    <div class="grid grid-rows-2 gap-4 mb-4">
                        <div class="flex items-center justify-center h-20 rounded-3xl bg-red-500 dark:bg-red-500">
                            <p class="text-2xl text-white dark:text-white">
                                <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </p>
                        </div>
                        <div class="flex items-center justify-center h-20 rounded-3xl bg-red-500 dark:bg-red-500">
                            <p class="text-2xl text-white dark:text-white">
                                <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div></>
    )
}
