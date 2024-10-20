import prisma from "../prisma";

export default async function authCompanyLogin(
    email: string,
) {
    const user = await prisma.usersCompany.findFirst({
        where: {
            email: email,
        }
    });
    return user;
}
