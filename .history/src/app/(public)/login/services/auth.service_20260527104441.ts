import { api } from "@/app/shared/services/api";
import { LoginType } from "../types/login.type";


export function loginService(data:LoginType){
    return api()
}