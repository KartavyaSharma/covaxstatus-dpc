import React, { FunctionComponent } from 'react'

type LayoutProps = {
    children: JSX.Element;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <div className='pt-8 md:pt-12 xl:pt-16 lg:pb-15 px-6 md:px-8 lg:px-12 xl:px-36 2xl:px-56 max-w-screen-2xl w-full h-full mx-auto'>
            {children}
        </div>
    )
}