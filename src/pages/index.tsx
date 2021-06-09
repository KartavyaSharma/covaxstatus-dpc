import React from 'react'

import Layout from '../components/layout'

export default function Home(): JSX.Element {
    return (
        <div className='bg-violet-50 min-h-screen h-full'>
            <Layout>
                <>
                    <div className='font-head flex flex-row items-center'>
                        <div className='text-4xl w-1/2'>
                            <span className='font-bold' >COVax</span><span className='italic'>Status</span>
                        </div>
                        <div className='flex flex-row justify-end w-full h-full items-center'>
                            <div className='font-head opacity-80 text-lg'>About</div>
                        </div>
                    </div>
                    <div className='mt-10 lg:mt-15 2xl:mt-20 font-heads text-black text-4xl font-bold w-full lg:w-2/3'>
                        Get the latest <span className='text-green-400'>appointment</span> data for <span className='text-violet-400'>vaccination</span> centers near you.
                    </div>
                </>
            </Layout>
        </div>
    )
}