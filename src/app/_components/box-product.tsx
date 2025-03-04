import Image from 'next/image'
import React from 'react'

import ship from "@/assets/images/ship.png"
import StarRating from '@/components/star-rating'
import Link from 'next/link'


function BoxProduct() {
    return (
        <div className='w-full border-2 border-gray-200 aspect-[8/12]  rounded-2xl overflow-hidden'>
            <Link href='/infomation'>
                <div className='w-full aspect-[16/12] relative'>
                    <Image src={ship} alt='ship' fill objectFit='cover' objectPosition='center' />
                </div>
                <div className='p-4'>
                    <div className='flex items-center justify-end gap-4'>
                        <div className='flex items-center gap-2'>
                            <StarRating size={16} value={9.8} readOnly />
                            <span>9.8</span>
                        </div>
                        <span className='text-sm'>9 Reviews</span>
                    </div>
                    {/* Divider Dotted */}
                    <div className='w-full h-[1px] bg-gray-200 my-4'></div>
                    <div className='space-y-2'>
                        <h6 className='text-xl font-normal'>Issara Liveaboard</h6>
                        <p className='text-sm text-gray-500'>If you have any questions or need assistance, please let us know &quot;Inquire about information&quot; &quot;Book a diving trip&quot;
                            &quot;Subscribe to promotion alerts&quot;</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BoxProduct