import prisma from "../prisma";
import { usersCompany } from "@prisma/client";

export default async function authCompanyLogin(
    email: string,
): Promise<usersCompany | null> {
    const user = await prisma.usersCompany.findFirst({
        where: {
            email: email,
        }
    });
    return user;
}
