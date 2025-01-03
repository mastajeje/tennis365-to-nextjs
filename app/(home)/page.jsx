// import { ClientOnly } from "./client"

// export function generateStaticParams() {
//     return [{slug:['']}]
// }

// export default function Page() {
//     // return <div>Hello~</div>
//     return <ClientOnly/>
// }

// import { Metadata } from "next";

export const Metadata = {
    title: "Home"
  };

export default function Home() {

    return (
        <>
        <h1>Main Page</h1>
        </>
    )
}
