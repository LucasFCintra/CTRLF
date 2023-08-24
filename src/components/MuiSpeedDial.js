import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material"
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import PaymentIcon from '@mui/icons-material/Payment';
import CachedIcon from '@mui/icons-material/Cached';
import { useState, useRef } from 'react';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';

export const MuiSpeedDial = () => {
    const [openModal, setOpenModal] = useState();
    const emailInputRef = useRef(null)
    const props = { openModal, setOpenModal, emailInputRef };
    return (
        <>
            <SpeedDial
                ariaLabel='Navigation speed dial'
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >

                <SpeedDialAction icon={<TrendingUpIcon />} tooltipTitle="Receita" onClick={() => props.setOpenModal('initial-focus')} />
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
                <SpeedDialAction icon={<TrendingDownIcon />} tooltipTitle="Despesa" onClick={() => props.setOpenModal('initial-focus')} />
                <SpeedDialAction icon={<PaymentIcon />} tooltipTitle="Despesa Cartão" onClick={() => props.setOpenModal('initial-focus')} />
                <SpeedDialAction icon={<CachedIcon />} tooltipTitle="Transferência" onClick={() => props.setOpenModal('initial-focus')} />

            </SpeedDial>
        </>
    )
}