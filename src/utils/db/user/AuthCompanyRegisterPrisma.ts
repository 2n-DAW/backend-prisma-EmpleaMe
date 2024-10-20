import prisma from "../prisma";

export default async function authCompanyRegister(
    username: string,
    password: string,
    email: string,
) {
    const newUser = await prisma.authsCompany.create({
        data: {
            username,
            password,
            email,
            bio: "",
            image: "",
            favouriteJobs: [],
            followingUsers: [],
            company_name: "",
            createdAt: new Date(),
            updatedAt: new Date()
        },

    });
    return newUser;
}
