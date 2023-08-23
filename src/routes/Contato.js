import React, { Component } from 'react'

export default class Contato extends Component {
    render() {
        return (
            <>

                <div class="grid ml-80 mr-20 mt-20 mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
                    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
                            <div class="mt-4 flex flex-col items-center pb-10">
                                <img class="w-48 h-48 mb-3 rounded-full shadow-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="" />
                                <div class="flex flex-col justify-between p-4 leading-normal">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lucas Cintra</h5>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">UI/UX Designer | Pega Certified System Architect (PCSA)</p>

                                    <a href="#" class="mb-4 inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-100 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-800 dark:hover:text-white">
                                        <svg aria-hidden="true" class="w-5 h-5 mr-3" viewBox="0 0 22 31" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4151_63004)"><path d="M5.50085 30.1242C8.53625 30.1242 10.9998 27.8749 10.9998 25.1035V20.0828H5.50085C2.46546 20.0828 0.00195312 22.332 0.00195312 25.1035C0.00195312 27.8749 2.46546 30.1242 5.50085 30.1242Z" fill="#0ACF83" /><path d="M0.00195312 15.062C0.00195312 12.2905 2.46546 10.0413 5.50085 10.0413H10.9998V20.0827H5.50085C2.46546 20.0827 0.00195312 17.8334 0.00195312 15.062Z" fill="#A259FF" /><path d="M0.00195312 5.02048C0.00195312 2.24904 2.46546 -0.000244141 5.50085 -0.000244141H10.9998V10.0412H5.50085C2.46546 10.0412 0.00195312 7.79193 0.00195312 5.02048Z" fill="#F24E1E" /><path d="M11 -0.000244141H16.4989C19.5343 -0.000244141 21.9978 2.24904 21.9978 5.02048C21.9978 7.79193 19.5343 10.0412 16.4989 10.0412H11V-0.000244141Z" fill="#FF7262" /><path d="M21.9978 15.062C21.9978 17.8334 19.5343 20.0827 16.4989 20.0827C13.4635 20.0827 11 17.8334 11 15.062C11 12.2905 13.4635 10.0413 16.4989 10.0413C19.5343 10.0413 21.9978 12.2905 21.9978 15.062Z" fill="#1ABCFE" /></g><defs><clipPath id="clip0_4151_63004"><rect width="22" height="30.1244" fill="white" transform="translate(0 -0.000244141)" /></clipPath></defs></svg>
                                        <span class="w-full">Entre em contato pelo Linkedin</span>
                                        <svg class="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                    <a href="#" class="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-100 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-800 dark:hover:text-white">
                                        <svg aria-hidden="true" class="w-5 h-5 mr-3" viewBox="0 0 22 31" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4151_63004)"><path d="M5.50085 30.1242C8.53625 30.1242 10.9998 27.8749 10.9998 25.1035V20.0828H5.50085C2.46546 20.0828 0.00195312 22.332 0.00195312 25.1035C0.00195312 27.8749 2.46546 30.1242 5.50085 30.1242Z" fill="#0ACF83" /><path d="M0.00195312 15.062C0.00195312 12.2905 2.46546 10.0413 5.50085 10.0413H10.9998V20.0827H5.50085C2.46546 20.0827 0.00195312 17.8334 0.00195312 15.062Z" fill="#A259FF" /><path d="M0.00195312 5.02048C0.00195312 2.24904 2.46546 -0.000244141 5.50085 -0.000244141H10.9998V10.0412H5.50085C2.46546 10.0412 0.00195312 7.79193 0.00195312 5.02048Z" fill="#F24E1E" /><path d="M11 -0.000244141H16.4989C19.5343 -0.000244141 21.9978 2.24904 21.9978 5.02048C21.9978 7.79193 19.5343 10.0412 16.4989 10.0412H11V-0.000244141Z" fill="#FF7262" /><path d="M21.9978 15.062C21.9978 17.8334 19.5343 20.0827 16.4989 20.0827C13.4635 20.0827 11 17.8334 11 15.062C11 12.2905 13.4635 10.0413 16.4989 10.0413C19.5343 10.0413 21.9978 12.2905 21.9978 15.062Z" fill="#1ABCFE" /></g><defs><clipPath id="clip0_4151_63004"><rect width="22" height="30.1244" fill="white" transform="translate(0 -0.000244141)" /></clipPath></defs></svg>
                                        <span class="w-full">Entre em contato pelo Linkedin</span>
                                        <svg class="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>


                                </div>
                            </div>
                        </div>
                    </figure>
                    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
                            <div class="mt-4 flex flex-col items-center pb-10">
                                <img class="w-48 h-48 mb-3 rounded-full shadow-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="" />
                                <div class="flex flex-col justify-between p-4 leading-normal">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Gabriel Lopes</h5>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">ServiceNow developer | Certified System Administrator (CSA)</p>

                                    <a href="#" class="mb-4 inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-100 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-800 dark:hover:text-white">
                                        <svg aria-hidden="true" class="w-5 h-5 mr-3" viewBox="0 0 22 31" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4151_63004)"><path d="M5.50085 30.1242C8.53625 30.1242 10.9998 27.8749 10.9998 25.1035V20.0828H5.50085C2.46546 20.0828 0.00195312 22.332 0.00195312 25.1035C0.00195312 27.8749 2.46546 30.1242 5.50085 30.1242Z" fill="#0ACF83" /><path d="M0.00195312 15.062C0.00195312 12.2905 2.46546 10.0413 5.50085 10.0413H10.9998V20.0827H5.50085C2.46546 20.0827 0.00195312 17.8334 0.00195312 15.062Z" fill="#A259FF" /><path d="M0.00195312 5.02048C0.00195312 2.24904 2.46546 -0.000244141 5.50085 -0.000244141H10.9998V10.0412H5.50085C2.46546 10.0412 0.00195312 7.79193 0.00195312 5.02048Z" fill="#F24E1E" /><path d="M11 -0.000244141H16.4989C19.5343 -0.000244141 21.9978 2.24904 21.9978 5.02048C21.9978 7.79193 19.5343 10.0412 16.4989 10.0412H11V-0.000244141Z" fill="#FF7262" /><path d="M21.9978 15.062C21.9978 17.8334 19.5343 20.0827 16.4989 20.0827C13.4635 20.0827 11 17.8334 11 15.062C11 12.2905 13.4635 10.0413 16.4989 10.0413C19.5343 10.0413 21.9978 12.2905 21.9978 15.062Z" fill="#1ABCFE" /></g><defs><clipPath id="clip0_4151_63004"><rect width="22" height="30.1244" fill="white" transform="translate(0 -0.000244141)" /></clipPath></defs></svg>
                                        <span class="w-full">Entre em contato pelo Linkedin</span>
                                        <svg class="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                    <a href="#" class="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-100 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-800 dark:hover:text-white">
                                        <svg aria-hidden="true" class="w-5 h-5 mr-3" viewBox="0 0 22 31" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_4151_63004)"><path d="M5.50085 30.1242C8.53625 30.1242 10.9998 27.8749 10.9998 25.1035V20.0828H5.50085C2.46546 20.0828 0.00195312 22.332 0.00195312 25.1035C0.00195312 27.8749 2.46546 30.1242 5.50085 30.1242Z" fill="#0ACF83" /><path d="M0.00195312 15.062C0.00195312 12.2905 2.46546 10.0413 5.50085 10.0413H10.9998V20.0827H5.50085C2.46546 20.0827 0.00195312 17.8334 0.00195312 15.062Z" fill="#A259FF" /><path d="M0.00195312 5.02048C0.00195312 2.24904 2.46546 -0.000244141 5.50085 -0.000244141H10.9998V10.0412H5.50085C2.46546 10.0412 0.00195312 7.79193 0.00195312 5.02048Z" fill="#F24E1E" /><path d="M11 -0.000244141H16.4989C19.5343 -0.000244141 21.9978 2.24904 21.9978 5.02048C21.9978 7.79193 19.5343 10.0412 16.4989 10.0412H11V-0.000244141Z" fill="#FF7262" /><path d="M21.9978 15.062C21.9978 17.8334 19.5343 20.0827 16.4989 20.0827C13.4635 20.0827 11 17.8334 11 15.062C11 12.2905 13.4635 10.0413 16.4989 10.0413C19.5343 10.0413 21.9978 12.2905 21.9978 15.062Z" fill="#1ABCFE" /></g><defs><clipPath id="clip0_4151_63004"><rect width="22" height="30.1244" fill="white" transform="translate(0 -0.000244141)" /></clipPath></defs></svg>
                                        <span class="w-full">Entre em contato pelo Linkedin</span>
                                        <svg class="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </figure>
                </div>

            </>
        )
    }
}
