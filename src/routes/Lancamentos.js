
import React, { Component } from 'react'


const userLoggedIn = localStorage.getItem('userLoggedIn');
const userId = localStorage.getItem('userLoggedID');

console.log(userLoggedIn +' | '+ userId)
/*
if(userLoggedIn == false && userId != undefined){
    window.location.href='/login'
}
*/
export default function Lancamentos() {

    
    return (
        <><div class="p-4 sm:ml-64">
            <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                
            </div>
        </div></>
    )
}
