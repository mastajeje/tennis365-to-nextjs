import { ClientOnly } from "./client"

export function generateStaticParams() {
    return [{slug:['']}]
}

export default function Page() {
    // return <div>Hello~</div>
    return <ClientOnly/>
}