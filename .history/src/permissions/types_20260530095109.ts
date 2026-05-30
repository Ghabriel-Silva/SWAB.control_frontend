import { Role } from "./roles";

export interface MyJwtPayload extends JwtPayload{
    id: string;
    email: string;
    role: Role;
    isActive: boolean;
    companyId: string;
}