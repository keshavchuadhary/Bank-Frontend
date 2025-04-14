import React from 'react'

const Spinner = () => {
  return (
    <section className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center'>
        <svg className='animate-spin -ml-1 mr-3 h-12 w-12 text-blue-900'
        xmlns="http://www.w3.org/2000/svg"
        fill='none'
        viewBox='0 0 24 24'
        >
            <circle className='opacity-25'
            cx="12"
            cy="12"
            r="10"
            stroke='currentColor'
            strokeWidth="4">

            </circle>
            <path className='opacity-75'
            fill='currentColor'
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm8-8a8 8 0 018 8h4a12 12 0 00-12-12v4z">
            </path>
        </svg>
    </section>
   )
}

export default Spinner