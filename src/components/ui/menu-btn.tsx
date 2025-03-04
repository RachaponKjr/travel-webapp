'use client'
import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

interface MenuBtnProps {
    icon: React.ReactNode
    title: string
    description?: string
    link?: string
    readOnly?: boolean
    rightIcon?: boolean
    rightText?: string
}
function MenuBtn({ icon, title, description, link, readOnly, rightIcon, rightText }: MenuBtnProps) {
    const router = useRouter()
    return (
        <button className='py-4 px-6 flex items-center justify-between w-full gap-2'
            {...readOnly ? { onClick: () => link ? router.push(link) : undefined } : {}}
        >
            <div className='flex items-center gap-4'>
                {icon}
                <div className='space-y-1 flex flex-col leading-none'>
                    <span>{title}</span>
                    <span className='text-sm'>{description}</span>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                {rightText && <span className='text-[#a1a1a1]'>{rightText}</span>}
                {rightIcon && <ChevronRight />}
            </div>
        </button>
    )
}

export default MenuBtn