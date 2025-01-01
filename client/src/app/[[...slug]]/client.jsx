'use client'

import dynamic from 'next/dynamic'

const App = dynamic(()=>  import('../../App'),{ssr:false})

export function ClientOnly(){
    // return <div>Hello~</div>
    return <App/>
}