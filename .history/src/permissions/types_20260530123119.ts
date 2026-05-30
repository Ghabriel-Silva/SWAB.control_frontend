import { JWTPayload } from "jose";
import { Role } from "./roles";

export interface MyJwtPayload extends JWTPayload{
    id: string;
    email: string;
    user
    role: Role;
    isActive: boolean;
    companyId: string;
}