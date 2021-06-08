import React from 'react'

import Layout from '../components/layout'

export default function Home(): JSX.Element {
    return (
        <div className='bg-violet-50 min-h-screen h-full'>
            <Layout>
                <div className='font-heads flex flex-row items-center'>
                    <div className='text-4xl w-1/2'>
                        <span className='font-bold' >COVax</span><span className='italic'>Status</span>
                    </div>
                    <div className='flex flex-row justify-end w-full h-full items-center'>
                        <div className='font-head opacity-80 text-lg'>About</div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}