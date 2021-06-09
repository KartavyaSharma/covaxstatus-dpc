import React from 'react'
import axios from 'axios'
import useSwr from 'swr'

import { FormStateFunction } from '../../types/FormStateTypes'
import { defaultParams } from '../../data/data'

export default function InputForm(): JSX.Element {

    const fetcher = (url: string) => axios.get(url).then((res) => res.data)

    const { data, error } = useSwr(
        `${defaultParams.baseUrl}${defaultParams.metadataBase}states`, 
        fetcher,
        { refreshInterval: 10000 }
    )

    return (
        <>

        </>
    )
}