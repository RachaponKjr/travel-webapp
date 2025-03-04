import React from 'react'

function TwoCricel({ size = 22 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.19918 2.97685C10.4029 1.99134 11.9419 1.40002 13.619 1.40002C17.475 1.40002 20.6008 4.52589 20.6008 8.38184C20.6008 10.0582 20.01 11.5965 19.0253 12.8M15.3628 13.6182C15.3628 17.4742 12.237 20.6 8.381 20.6C4.52505 20.6 1.39919 17.4742 1.39919 13.6182C1.39919 9.76225 4.52505 6.63639 8.381 6.63639C12.237 6.63639 15.3628 9.76225 15.3628 13.6182Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default TwoCricel