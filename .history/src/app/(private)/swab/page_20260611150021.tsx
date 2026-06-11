import { useSearchParams } from "next/navigation";
import SwabClient from "./components/SwabClient";


export default function PageSwab() {
    const [searchParams] = useSearchParams()
    return <SwabClient />
}