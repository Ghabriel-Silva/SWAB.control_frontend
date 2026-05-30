import { JwtPayload } from "jsonwebtoken";


export interface MyJwtPayload extends JwtPayload {
    id: string;
    email: string;
    role: UserRole;
    isActive: boolean;
    companyId: string;
}