'use client'
import { AlignJustify, Bell, CircleHelp, CircleX, Compass, FileText, Globe, Lock, LogOut, Mail, Monitor, Smartphone, Ticket, User } from 'lucide-react'
import React, { useState } from 'react'
import { BottomSheet, BottomSheetTrigger } from './bottom-sheet'
import MenuBtn from './ui/menu-btn'
import TwoCricel from '@/assets/icons/two-cricel'
import CheckBox from '@/assets/icons/check-box'

function Navbar() {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <div className='flex justify-between items-center p-4 w-full'>
            <AlignJustify onClick={() => setOpen(true)} />
            <Bell />
            <BottomSheet open={open} setOpen={setOpen}>
                <BottomSheetTrigger>
                    <CircleX color='#a1a1a1' onClick={() => setOpen(false)} className='place-self-end' />
                </BottomSheetTrigger>
                <div className='my-4'>
                    {/* Login Btn */}
                    <div>
                        <button className='bg-[#0096CD] text-white px-4 py-4 rounded-xl w-full'>Login & Signup</button>
                    </div>
                    <div className='my-8 space-y-6'>
                        {/* เมนูต่างๆ */}
                        <div className='flex flex-col gap-6'>
                            <span>Menu</span>
                            <div className='bg-[#f5f5f5] rounded-2xl h-max w-full'>
                                <MenuBtn icon={<FileText />} title="Booking History" link="/" />
                                <MenuBtn icon={<Ticket />} title="Voucher" link="/" />
                                <MenuBtn icon={<TwoCricel />} title="Point" link="/" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <span>ACCOUNT</span>
                            <div className='bg-[#f5f5f5] rounded-2xl h-max w-full'>
                                <MenuBtn icon={<User />} title="Name" link="/" rightText='Firstname Lastname' readOnly={true} />
                                <MenuBtn icon={<Mail />} title="Email" link="/" rightText='example@gmail.com' readOnly={true} />
                                <MenuBtn icon={<Smartphone />} title="Mobile number" link="/" rightText='+66-81466-7776' readOnly={true} />
                                <MenuBtn icon={<Globe />} title="App Language" link="/" rightText='Thai' readOnly={true} />
                            </div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <span>ABOUT</span>
                            <div className='bg-[#f5f5f5] rounded-2xl h-max w-full'>
                                <MenuBtn icon={<CheckBox />} title="Knowledge Base" link="/" rightIcon />
                                <MenuBtn icon={<CircleHelp />} title="Help Center" link="/" rightIcon />
                                <MenuBtn icon={<Compass />} title="Terms of Use" link="/" rightIcon />
                                <MenuBtn icon={<Lock />} title="Privacy Policy" link="/" rightIcon />
                                <MenuBtn icon={<Monitor />} title="Version 1.000.001" link="/" rightIcon />
                                <MenuBtn icon={<LogOut />} title="Logout" link="/" readOnly={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </BottomSheet>
        </div>
    )
}

export default Navbar