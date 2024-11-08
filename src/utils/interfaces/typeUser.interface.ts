import { usersCompany } from "@prisma/client";


export interface typeUser  {
    user: Partial<usersCompany>;
    type: string;
}