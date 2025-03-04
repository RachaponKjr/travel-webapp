import React from 'react'

function CheckBox({ size = 22 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.89981 20.6H4.0998C2.77432 20.6 1.69981 19.5254 1.69981 18.2L1.69991 3.80001C1.69992 2.47453 2.77443 1.40002 4.09991 1.40002H14.9002C16.2257 1.40002 17.3002 2.47454 17.3002 3.80002V10.4M12.5002 17.2L14.7002 19.4L20.3002 13.4" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export default CheckBox