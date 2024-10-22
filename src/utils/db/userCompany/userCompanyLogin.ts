import prisma from "../prisma";

export default async function authCompanyLogin(
    password: string,
    email: string,
) {
    const user = await prisma.usersCompany.findFirst({
        where: {
            email: email,
            password: password
        }
    });
    return user;
}
