import { api } from "@/app/shared/services/api";
import { LoginType } from "../types/login.type";
import { dataListSlotRecipe } from "@chakra-ui/react/theme";


export function loginService(data: LoginType) {
    return api("auth/login", {
        method: "POST",
        body: dataListSlotRecipe
    })
}