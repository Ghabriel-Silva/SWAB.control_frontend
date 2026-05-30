import { getSession } from "@/permissions/get.sessions";


export default async function PrivateLayout({ children }: { children: React.ReactNode }){
    const session = getSession
}