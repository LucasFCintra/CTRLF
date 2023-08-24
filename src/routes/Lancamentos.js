
import React, { Component } from 'react'
import { MuiSpeedDial } from '../components/MuiSpeedDial'
import { useState, useRef } from 'react';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';

export default function Lancamentos() {

    const [openModal, setOpenModal] = useState();
    const emailInputRef = useRef(null)
    const props = { openModal, setOpenModal, emailInputRef };
    return (
        <><div class="p-4 sm:ml-64">
            <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <MuiSpeedDial />
                <Modal
                                show={props.openModal === 'initial-focus'}
                                size="md"
                                popup
                                onClose={() => props.setOpenModal(undefined)}
                                initialFocus={props.emailInputRef}
                            >
                                <Modal.Header />
                                <Modal.Body>
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="email" value="Your email" />
                                            </div>
                                            <TextInput id="email" ref={props.emailInputRef} placeholder="name@company.com" required />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="password" value="Your password" />
                                            </div>
                                            <TextInput id="password" type="password" required />
                                        </div>
                                        
                                        <div className="w-full">
                                        <button type="button" class="w-full focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800">Red</button>
                                        </div>

                                    </div>
                                </Modal.Body>
                            </Modal>
            </div>
        </div></>
    )
}
